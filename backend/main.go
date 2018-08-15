package main

import (
    // "encoding/json"
    "github.com/gorilla/mux"
    // "log"
    "net/http"
    // "strings"
    // "github.com/rs/cors"
)

// Basic company by id
type Company struct {
    ID    string `json:"id,omitempty"`
    Name  string `json:"name,omitempty"`
    Stars string `json:"stars,omitempty"`
}



var companies []Company

//Get all companies
func GetCompanies(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(companies)
}

// Get company by Id
func GetCompany(w http.ResponseWriter, r *http.Request) {

    parmas := mux.Vars(r)

    for _, company := range companies {
        if company.ID == parmas["id"] {
            json.NewEncoder(w).Encode(company)
        }
    }

}

// This will solve the problem of trailing slashes on route
func loggingMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        r.URL.Path = strings.TrimSuffix(r.URL.Path, "/")

        log.Println(r.RequestURI)

        next.ServeHTTP(w, r)
    })
}

func main() {

    companies = append(companies, Company{"1", "Lambda School", "5"})
    companies = append(companies, Company{"2", "Google", "4"})
    companies = append(companies, Company{"3", "FaceBook", "3"})

		// instantiating gorilla/mux router
		router := mux.NewRouter()
		
 		// On the default page we will simply serve our static index page.
 		r.Handle("/", http.FileServer(http.Dir("./views/")))
    router.HandleFunc("/company", GetCompanies).Methods("GET")
    router.HandleFunc("/company/{id}", GetCompany).Methods("GET")

    c := cors.New(cors.Options{
    AllowedOrigins: []string{"http://localhost:3001"},
    AllowCredentials: true,
    })
    
    handler := c.Handler(router)

    log.Fatal(http.ListenAndServe(":8888", loggingMiddleware(handler)))
}