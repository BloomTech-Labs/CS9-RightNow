package main

import (
	"net/http"
	"encoding/json"
	// "testing"
	// "strings"
	// "os"
	"log"
	"fmt"
	// "context"

	// mongodb
	"github.com/globalsign/mgo"
	// "github.com/globalsign/mgo/bson"
	// "github.com/stretchr/testify/require"
)

/* mongo */

func sanityCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Println("this route is working")
	json.NewEncoder(w).Encode("this route is working")
}


func MongoAllUser(w http.ResponseWriter, req *http.Request) {
	var results []User
	session, err := mgo.Dial("mongodb://localhost:27017")
	if err != nil { log.Fatal(err)}

	c := session.DB("app_right_now").C("users")
	error := c.Find(nil).All(&results) // or use Find(nil)
	if error != nil {
		panic(error)
	}
	fmt.Println("Results All: ", results)
	json.NewEncoder(w).Encode(results)

}

func CreateNewUser(w http.ResponseWriter, req *http.Request) {
	// client, err := mongo.Connect(context.Background(), "mongodb://localhost:27017", nil)
	// if err != nil { log.Fatal(err) }

	// collection := client.Database("app_right_now").Collection("users")

	// res, err := collection.InsertOne(context.Background(), map[string]string{"username": "someRandom"})
	// if err != nil { log.Fatal(err) }
	// id := res.InsertedID
	// json.NewEncoder(w).Encode(id)
}

