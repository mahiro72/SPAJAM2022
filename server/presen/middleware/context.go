package middleware

import (
	"net/http"

	"github.com/mahiro72/SPAJAM2022/server/core/context"
)

func Context(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		ctx := context.NewContext(r)
		h.ServeHTTP(w, r.WithContext(ctx))
	}
	return http.HandlerFunc(fn)
}
