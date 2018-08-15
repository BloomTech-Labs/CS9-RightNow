package main

import (
	"net/http"
	"encoding/json"
	"strings"
	"log"
	"fmt"

	"github.com/gorilla/mux"
	"github.com/gorilla/context"
	"github.com/dgrijalva/jwt-go"
	"github.com/mitchellh/mapstructure"
)


// Create user data first
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
	// can add other parameter later
}

// this holds all the token data
type JwtToken struct {
	Token string `json:"token"`
}

// holds any error message that we want to return to user (specific to the error)
type Exception struct {
	Message string `json:"message"`
}

var usersDB []User

// create token
func CreateTokenEndpoint(w http.ResponseWriter, req *http.Request) {
	var user User
    _ = json.NewDecoder(req.Body).Decode(&user)
    token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"username": user.Username,
        "password": user.Password,
    })
    tokenString, error := token.SignedString([]byte("secret"))
    if error != nil {
        fmt.Println(error)
    }
    json.NewEncoder(w).Encode(JwtToken{Token: tokenString})
}

// protect endpoint
// look for token parameter
func ProtectedEndpoint(w http.ResponseWriter, req *http.Request) {
	params := req.URL.Query()
    token, _ := jwt.Parse(params["token"][0], func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
            return nil, fmt.Errorf("There was an error")
        }
        return []byte("secret"), nil
    })
    if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
        var user User
        mapstructure.Decode(claims, &user)
        json.NewEncoder(w).Encode(user)
    } else {
        json.NewEncoder(w).Encode(Exception{Message: "Invalid authorization token"})
    }
} 

// middleware for user validation for every endpoint
func ValidateMiddleware(next http.HandlerFunc) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
			authorizationHeader := req.Header.Get("authorization")
			if authorizationHeader != "" {
					bearerToken := strings.Split(authorizationHeader, " ")
					if len(bearerToken) == 2 {
							token, error := jwt.Parse(bearerToken[1], func(token *jwt.Token) (interface{}, error) {
									if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
											return nil, fmt.Errorf("There was an error")
									}
									return []byte("secret"), nil
							})
							if error != nil {
									json.NewEncoder(w).Encode(Exception{Message: error.Error()})
									return
							}
							if token.Valid {
									context.Set(req, "decoded", token.Claims)
									next(w, req)
							} else {
									json.NewEncoder(w).Encode(Exception{Message: "Invalid authorization token"})
							}
					}
			} else {
					json.NewEncoder(w).Encode(Exception{Message: "An authorization header is required"})
			}
	})
}

func TestEndpoint(w http.ResponseWriter, req *http.Request) {
	decoded := context.Get(req, "decoded")
	var user User
	mapstructure.Decode(decoded.(jwt.MapClaims), &user)
	json.NewEncoder(w).Encode(user)
}

// // user appointments by id
// type Appointment struct {
// 	App_Id int
// 	Location string
// 	Company string
// 	Time string // string for now
// 	Booking bool
// 	User_id int // filling space for now, not used currently.
// }

// // creating list of Appointments
// var appointments = []Appointment{
// 	Appointment{App_Id: 1, Location: "Some location 1", Company: "James May", Time: "some time 1", Booking: true, User_id: 1},
// 	Appointment{App_Id: 2, Location: "Some location 2", Company: "Richard Hammond", Time: "some time 2", Booking: true, User_id: 1},
// 	Appointment{App_Id: 3, Location: "Some location 3", Company: "Jeremy Clarkson", Time: "some time 3", Booking: true, User_id: 1},
// 	Appointment{App_Id: 4, Location: "Some location 4", Company: "Top Gear Team", Time: "some time 4", Booking: true, User_id: 1},
// }

// invoked when user calls /status route; confirms API running
var StatusHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("API is up and running")) // confirm API running for now.
})

func main() {

	// instantiating gorilla/mux router
	r := mux.NewRouter()
	fmt.Println("Starting the application...")

	// On the default page we will simply serve our static index page.
	r.Handle("/", http.FileServer(http.Dir("./views/")))

	/* 
	/status - checks if the API is up and running
	*/

	r.Handle("/status", StatusHandler).Methods("GET")

	r.HandleFunc("/authenticate", CreateTokenEndpoint).Methods("POST")
	r.HandleFunc("/protected", ProtectedEndpoint).Methods("GET")
	r.HandleFunc("/test", ValidateMiddleware(TestEndpoint)).Methods("GET")
	log.Fatal(http.ListenAndServe(":5000", r))
	
	// logging handler is wrapped around in our router; logger is now called first on each route request.
	// http.ListenAndServe(":5000", handlers.LoggingHandler(os.Stdout, r))
}
