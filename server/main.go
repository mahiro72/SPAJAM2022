package main

import (
	"log"
	"net/http"
	"os"

	_ "github.com/lib/pq"

	"github.com/mahiro72/SPAJAM2022/server/infra/sql"
	"github.com/mahiro72/SPAJAM2022/server/presen/handler"
	"github.com/mahiro72/SPAJAM2022/server/wire"
)

func main() {
	db := sql.NewDriver()
	drinkHandler := wire.InitDrinkHandler(db)
	feedbackHandler := wire.InitFeedbackHandler(db)

	handler.InitRouting(drinkHandler, feedbackHandler)
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	srv := &http.Server{
		Addr: ":" + port,
	}
	if err := srv.ListenAndServe(); err != http.ErrServerClosed {
		log.Fatalln("Server closed with error:", err)
	}
}
