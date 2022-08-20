package usecase

import (
	"context"

	"github.com/mahiro72/SPAJAM2022/server/domain/entity"
	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type DrinkUsecase interface {
	Get(ctx context.Context, id int) (*entity.Drink, error)
	Update(ctx context.Context, drinkID int, bestTime int) error
}

type drinkUsecase struct {
	drinkRepository repository.IDrinkRepository
}

func NewDrinkUsecase(dr repository.IDrinkRepository) DrinkUsecase {
	drinkUsecase := drinkUsecase{drinkRepository: dr}
	return &drinkUsecase
}

func (du *drinkUsecase) Get(ctx context.Context, id int) (drink *entity.Drink, err error) {
	drink, err = du.drinkRepository.Get(ctx, id)
	return
}

func (du *drinkUsecase) Update(ctx context.Context, drinkID int, delta int) error {
	de, err := du.drinkRepository.Get(ctx, drinkID)
	if err != nil {
		return err
	}
	newBestTime := de.BestTime + delta
	return du.drinkRepository.Update(ctx, drinkID, newBestTime)
}
