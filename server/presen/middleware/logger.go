package middleware

import (
	"net/http"
	"time"

	"github.com/mahiro72/SPAJAM2022/server/core/logger"
)

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(rw, r)
		end := time.Now()
		sub := end.Sub(start)
		latency := int64(sub / time.Millisecond)
		logger.HttpLogging("incoming request", r, start, latency)
	})
}
