package main

import (
    // "encoding/json"
    "github.com/gorilla/mux"
    // "log"
    "net/http"
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
	Id int
	Location string
	Company string
	Time string // string for now
	Booking bool
	User_id int // filling space for now, not used currently.
}

// creating list of Appointments
var appointments = []Appointment{
	Appointment(Id: 1, Location: "Some location 1", Company: "James May", Time: "some time 1", Booking: true, User_id: 1),
	Appointment(Id: 2, Location: "Some location 2", Company: "Richard Hammond", Time: "some time 2", Booking: true, User_id: 1),
	Appointment(Id: 1, Location: "Some location 3", Company: "Jeremy Clarkson", Time: "some time 3", Booking: true, User_id: 1),
	Appointment(Id: 1, Location: "Some location 4", Company: "Top Gear Team", Time: "some time 4", Booking: true, User_id: 1),
}

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
		*/
		 r.Handle("/status", NotImplemented).Methods("GET")
		 r.Handle("/products", NotImplemented).Methods("GET")
		 r.Handle("/products/{slug}/feedback", NotImplemented).Methods("POST")
		 
		 r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

    // router.HandleFunc("/company", GetCompanies).Methods("GET")
    // router.HandleFunc("/company/{id}", GetCompany).Methods("GET")

    // c := cors.New(cors.Options{
    // AllowedOrigins: []string{"http://localhost:3001"},
    // AllowCredentials: true,
    // })
    
		// handler := c.Handler(router)
		
		http.ListenAndServe(":5000", r)
    // log.Fatal(http.ListenAndServe(":5000", loggingMiddleware(handler)))
}

// Simply displays "Not Implemented" whenever endpoint with this function is hit.
var NotImplemented = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){
	w.Write([]byte("Not Implemented"))
})