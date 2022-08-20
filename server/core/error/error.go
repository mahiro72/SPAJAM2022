package error

import "errors"

var (
	ErrMethodNotFound = errors.New("method not found")
	ErrIdNotFound     = errors.New("id not found")
)
