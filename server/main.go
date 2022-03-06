package main

import (
	"apirest/sql"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	mux := mux.NewRouter()

	mux.HandleFunc("/api/products/", sql.GetProducts).Methods("GET")
	mux.HandleFunc("/api/categorys/", sql.GetCategorys).Methods("GET")

	mux.HandleFunc("/api/productsFiltered/{filter}", sql.GetProductsFiltered).Methods("GET")

	log.Fatal(http.ListenAndServe("localhost:3000", mux))
}
