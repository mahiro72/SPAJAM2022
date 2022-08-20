package handler

import (
	"net/http"

	"github.com/mahiro72/SPAJAM2022/server/presen/middleware"
)

func InitRouting(drinkHandler DrinkHandler) {
	drinkBest := http.HandlerFunc(drinkHandler.Best)
	http.Handle("/drink/best", middleware.Layers(drinkBest))
}
