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
	"github.com/globalsign/mgo"
	// "github.com/stretchr/testify/require"
)

/* mongo */

func sanityCheck(w http.ResponseWriter, req *http.Request) {
	fmt.Println("this route is working")
	json.NewEncoder(w).Encode("this route is working")
}


func MongoAllUser(w http.ResponseWriter, req *http.Request) {

}

func CreateNewUser(w http.ResponseWriter, req *http.Request) {

}

