package structs

type Product struct {
	Id        int     `json:"id"`
	Name      string  `json:"name"`
	Url_image string  `json:"url_image"`
	Price     float64 `json:"price"`
	Discount  int     `json:"discount"`
	Category  int     `json:"category"`
}

type Products []Product

type Category struct {
	Id   int    `json:"id"`
	Name string `json:"name"`
}

type Categorys []Category
