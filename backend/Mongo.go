package main

import (
	"net/http"
	"encoding/json"
	// "testing"
	// "strings"
	// "os"
	"log"
	"fmt"
	"context"

	// mongodb
	"github.com/mongodb/mongo-go-driver/mongo"
	// "github.com/mongodb/mongo-go-driver/bson"
	// "github.com/stretchr/testify/require"
)

/* mongo */

func MongoDataBase(w http.ResponseWriter, req *http.Request) {
	// connect to mongo
	client, err := mongo.Connect(context.Background(), "mongodb://localhost:27017", nil)
	if err != nil { log.Fatal("Cannot connect to mongo", err) }

	fmt.Println(client)
}


func MongoCreate(w http.ResponseWriter, req *http.Request) {
	client, err := mongo.Connect(context.Background(), "mongodb://localhost:27017", nil)
	if err != nil { log.Fatal(err) }

	collection := client.Database("app_right_now").Collection("users")

	res, err := collection.InsertOne(context.Background(), map[string]string{"username": "????"})
	if err != nil { log.Fatal(err) }
	id := res.InsertedID
	json.NewEncoder(w).Encode(id)
	
}

