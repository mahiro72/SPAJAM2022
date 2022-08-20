package usecase

import (
	"context"

	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type FeedbackUsecase interface {
	Store(ctx context.Context, drinkId int, coldTime int, evaluate int) error
}

type feedbackUsecase struct {
	feedbackRepository repository.IFeedbackRepository
}

func NewFeedbackUsecase(fr repository.IFeedbackRepository) FeedbackUsecase {
	feedbackUsecase := feedbackUsecase{feedbackRepository: fr}
	return &feedbackUsecase
}

func (fu *feedbackUsecase) Store(ctx context.Context, drinkId int, coldTime int, evaluate int) error {
	return fu.feedbackRepository.Store(ctx, drinkId, coldTime, evaluate)
}
