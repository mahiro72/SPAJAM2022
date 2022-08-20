package handler

import (
	"net/http"

	"github.com/mahiro72/SPAJAM2022/server/presen/middleware"
)

func InitRouting(drinkHandler DrinkHandler, feedbackHandler FeedbackHandler) {
	drinkBest := http.HandlerFunc(drinkHandler.Best)
	http.Handle("/drink/best", middleware.Layers(drinkBest))

	drinkUpdate := http.HandlerFunc(drinkHandler.Update)
	http.Handle("/drink/update", middleware.Layers(drinkUpdate))

	feedbackStore := http.HandlerFunc(feedbackHandler.Store)
	http.Handle("/feedback/store", middleware.Layers(feedbackStore))
}
