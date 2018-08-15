package main

import (
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
	"encoding/json"
	// "fmt"
	"os"
	"github.com/dgrijalva/jwt-go"
	// "log"
  // "strings"
  // "github.com/rs/cors"
)

// Basic user by id
// type User struct {
// 		Id int
// 		Name string
// 		Password string
// 		PhoneNumber string
// 		Appointment_Id = []
// 		Slug string //would be username used for url; just like linkedIn
// 		Description string
// }

// var users = []User{
// 	User{Id: 1, Name: "James May", Password slug: "captain-slow", }
// }

// user appointments by id
type Appointment struct {
	App_Id int
	Location string
	Company string
	Time string // string for now
	Booking bool
	User_id int // filling space for now, not used currently.
}

// creating list of Appointments
var appointments = []Appointment{
	Appointment{App_Id: 1, Location: "Some location 1", Company: "James May", Time: "some time 1", Booking: true, User_id: 1},
	Appointment{App_Id: 2, Location: "Some location 2", Company: "Richard Hammond", Time: "some time 2", Booking: true, User_id: 1},
	Appointment{App_Id: 3, Location: "Some location 3", Company: "Jeremy Clarkson", Time: "some time 3", Booking: true, User_id: 1},
	Appointment{App_Id: 4, Location: "Some location 4", Company: "Top Gear Team", Time: "some time 4", Booking: true, User_id: 1},
}

// invoked when user calls /status route; confirms API running
var StatusHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("API is up and running")) // confirm API running for now.
})

var AppointmentHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	// convert the slice to JSON format
	payload, _ := json.Marshal(appointments)

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(payload))
})

// Feedback request; for now we will just look for request OK status, when appointment is matched.
var AddFeedbackHandler = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	var appointment Appointment
	vars := mux.Vars(r)
	slug := vars["slug"] // looks through the slug part of url
	println(slug)

	for _, p := range appointments {
		if p.App_Id == slug {
			appointment = p
		}
	}

	w. Header().Set("Content-Type", "application/json")
	if appointment.App_Id != 0 {
	payload, _ := json.Marshal(appointment)
	w.Write([]byte(payload))
	} else {
		w.Write([]byte("Appointment Not Found"))
	}
})


//Get all companies
// func GetCompanies(w http.ResponseWriter, r *http.Request) {
//     json.NewEncoder(w).Encode(companies)
// }

// Get company by Id
// func GetCompany(w http.ResponseWriter, r *http.Request) {

//     parmas := mux.Vars(r)

//     for _, company := range companies {
//         if company.ID == parmas["id"] {
//             json.NewEncoder(w).Encode(company)
//         }
//     }
// }

// This will solve the problem of trailing slashes on route
// func loggingMiddleware(next http.Handler) http.Handler {
//     return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
//         r.URL.Path = strings.TrimSuffix(r.URL.Path, "/")

//         log.Println(r.RequestURI)

//         next.ServeHTTP(w, r)
//     })
// }

func main() {

    // companies = append(companies, Company{"1", "Lambda School", "5"})
    // companies = append(companies, Company{"2", "Google", "4"})
    // companies = append(companies, Company{"3", "FaceBook", "3"})

		// instantiating gorilla/mux router
		r := mux.NewRouter()
		
 		// On the default page we will simply serve our static index page.
		 r.Handle("/", http.FileServer(http.Dir("./views/")))

		/* 
		/status - checks if the API is up and running
		/products - retrieve list of products
		/products/{slug}/feedback - capture feedback ** for purpose of practicing Golang
		/get-token - simply generates token
		*/
		 r.Handle("/status", StatusHandler).Methods("GET")
		 r.Handle("/products", AppointmentHandler).Methods("GET")
		 r.Handle("/products/{slug}/feedback", AddFeedbackHandler).Methods("POST")

		 r.Handle("/get-token", GetTokenHanlder).Methods("GET")
		 
		 r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

    // router.HandleFunc("/company", GetCompanies).Methods("GET")
    // router.HandleFunc("/company/{id}", GetCompany).Methods("GET")

    // c := cors.New(cors.Options{
    // AllowedOrigins: []string{"http://localhost:3001"},
    // AllowCredentials: true,
    // })
    
		// handler := c.Handler(router)
		
		// logging handler is wrapped around in our router; logger is now called first on each route request.
    http.ListenAndServe(":5000", handlers.LoggingHandler(os.Stdout, r))
}

// global string for my secret
var mySigningKey = []byte("secret")

// Handlers
var GetTokenHanlder = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
	// create token
	token := jwt.New(jwt.SigningMethodHS256)

	// Create a map to store our claims
	claims := token.Claims.(jwt.MapClaims)
	
	// set token claims: avoid this hard-coded stuff.
	claims["name"] = "Captain Slow"
	claims["exp"] = time.Now().Add(time.Hour * 24).Unix()

	// sign token with my secret
	tokenString, _ := token.SignedString(mySigningKey)

	// write token to browser window; for now
	w.Write([]byte(tokenString))
})

// Simply displays "Not Implemented" whenever endpoint with this function is hit.
var NotImplemented = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Not Implemented"))
})