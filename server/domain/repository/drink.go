package repository

import (
	"context"

	"github.com/mahiro72/SPAJAM2022/server/domain/entity"
)

type IDrinkRepository interface {
	Get(ctx context.Context, id int) (*entity.Drink, error)
	Update(ctx context.Context, drinkID int, bestTime int) error
}
