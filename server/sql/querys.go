package sql

import (
	"apirest/db"
	"apirest/structs"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func GetProducts(rw http.ResponseWriter, r *http.Request) {
	query := "SELECT * FROM product"
	rows, _ := db.Query(query) //manejo de error en funcion Query
	products := structs.Products{}

	for rows.Next() {
		product := structs.Product{}
		rows.Scan(&product.Id, &product.Name, &product.Url_image, &product.Price, &product.Discount, &product.Category)
		products = append(products, product)
	}

	output, _ := json.Marshal(products)

	rw.Header().Set("Content-Type", "application/json")
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintln(rw, string(output))
}

func GetProductsFiltered(rw http.ResponseWriter, r *http.Request) {
	data := mux.Vars(r)["filter"]
	query := `SELECT * FROM product WHERE LOWER(name) LIKE LOWER('%%` + data + `%%')`

	rows, _ := db.Query(query) //manejo de error en funcion Query

	products := structs.Products{}

	for rows.Next() {
		product := structs.Product{}
		rows.Scan(&product.Id, &product.Name, &product.Url_image, &product.Price, &product.Discount, &product.Category)
		products = append(products, product)
	}

	output, _ := json.Marshal(products)

	rw.Header().Set("Content-Type", "application/json")
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintln(rw, string(output))
}

func GetCategorys(rw http.ResponseWriter, r *http.Request) {
	query := `SELECT * FROM category`

	rows, _ := db.Query(query) //manejo de error en funcion Query

	categorys := structs.Categorys{}

	for rows.Next() {
		category := structs.Category{}
		rows.Scan(&category.Id, &category.Name)
		categorys = append(categorys, category)
	}

	output, _ := json.Marshal(categorys)

	rw.Header().Set("Content-Type", "application/json")
	rw.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprintln(rw, string(output))
}
