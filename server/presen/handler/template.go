package handler

import (
	"github.com/mahiro72/SPAJAM2022/server/usecase"
)

type TemplateHandler interface{}

type templateHandler struct {
	templateUsecase usecase.TemplateUsecase
}

func NewTemplateHandler(ut usecase.TemplateUsecase) TemplateHandler {
	return &templateHandler{templateUsecase: ut}
}
