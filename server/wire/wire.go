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

func InitTemplateHandler(driver *sql.DB) handler.TemplateHandler {
	wire.Build(
		repository.NewTemplateRepository,
		usecase.NewTemplateUsecase,
		handler.NewTemplateHandler,
	)
	return nil
}

func InitDrinkHandler(driver *sql.DB) handler.DrinkHandler {
	wire.Build(
		repository.NewDrinkRepository,
		usecase.NewDrinkUsecase,
		handler.NewDrinkHandler,
	)
	return nil
}
