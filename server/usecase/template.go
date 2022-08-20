package usecase

import (
	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type TemplateUsecase interface{}

type templateUsecase struct {
	templateRepository repository.ITemplateRepository
}

func NewTemplateUsecase(tr repository.ITemplateRepository) TemplateUsecase {
	tu := templateUsecase{templateRepository: tr}
	return &tu
}
