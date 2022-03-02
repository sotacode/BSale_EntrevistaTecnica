package db

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

const url = "bsale_test:bsale_test@tcp(mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com)/bsale_test"

var db *sql.DB

func Connect() {
	connection, err := sql.Open("mysql", url)
	if err != nil {
		panic(err)
	} else {
		fmt.Println("La base de datos se conecto correctamente")
		db = connection
	}

}

func Close() {
	db.Close()
}

//Polimorfismo para manejo de errores
func Query(query string, args ...interface{}) (*sql.Rows, error) {
	Connect()
	rows, err := db.Query(query, args...)
	Close()
	if err != nil {
		fmt.Println(err)
	}
	return rows, err
}
