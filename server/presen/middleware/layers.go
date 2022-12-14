package middleware

import (
	"net/http"
)

func Layers(handler http.Handler) http.Handler {
	return Recovery(
		CORS(
			Context(
				Logger(
					handler,
				),
			),
		),
	)
}
