package main

import (
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, _ *http.Request) {
	ts, err := template.ParseFiles("./ui/html/base.gohtml")
	if err != nil {
		return
	}

	_ = ts.ExecuteTemplate(w, "base", nil)
}

func main() {
	fs := http.FileServer(http.Dir("./ui/static/"))
	http.Handle("/static/", http.StripPrefix("/static", fs))

	http.HandleFunc("/", index)

	err := http.ListenAndServe("127.0.0.1:8080", nil)
	panic(err)
}
