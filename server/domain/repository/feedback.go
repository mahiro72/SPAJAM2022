package repository

import (
	"context"
)

type IFeedbackRepository interface {
	Store(ctx context.Context, drinkID int, coldTime int, evaluate int) error
}
