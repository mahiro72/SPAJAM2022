//go:build wireinject
// +build wireinject

package wire

import (
	"database/sql"

	"github.com/google/wire"

	"github.com/mahiro72/SPAJAM2022/server/infra/repository"
	"github.com/mahiro72/SPAJAM2022/server/presen/handler"
	"github.com/mahiro72/SPAJAM2022/server/usecase"
)

func InitDrinkHandler(driver *sql.DB) handler.DrinkHandler {
	wire.Build(
		repository.NewDrinkRepository,
		usecase.NewDrinkUsecase,
		handler.NewDrinkHandler,
	)
	return nil
}
