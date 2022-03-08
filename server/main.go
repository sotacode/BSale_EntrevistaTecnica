package main

import (
	"apirest/sql"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	port := os.Getenv("PORT")
	mux := mux.NewRouter()

	mux.HandleFunc("/api/products/", sql.GetProducts).Methods("GET")
	mux.HandleFunc("/api/productsFiltered/{filter}", sql.GetProductsFiltered).Methods("GET")
	mux.HandleFunc("/api/categorys/", sql.GetCategorys)
	log.Fatal(http.ListenAndServe(":"+port, mux))
	/* log.Fatal(http.ListenAndServe("localhost:3000", mux)) */
}
