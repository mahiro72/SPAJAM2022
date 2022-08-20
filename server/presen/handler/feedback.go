package handler

import (
	"encoding/json"
	"net/http"

	myError "github.com/mahiro72/SPAJAM2022/server/core/error"
	"github.com/mahiro72/SPAJAM2022/server/presen/request"
	"github.com/mahiro72/SPAJAM2022/server/usecase"
	"go.uber.org/zap"
)

type FeedbackHandler interface {
	Store(http.ResponseWriter, *http.Request)
}

type feedbackHandler struct {
	feedbackUsecase usecase.FeedbackUsecase
}

func NewFeedbackHandler(fu usecase.FeedbackUsecase) FeedbackHandler {
	return &feedbackHandler{feedbackUsecase: fu}
}

func (fh *feedbackHandler) Store(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		zap.Error(myError.ErrMethodNotFound)
		return
	}

	var req request.FeedbackStoreRequest
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&req)

	if err != nil {
		zap.Error(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNoContent)

	if err = fh.feedbackUsecase.Store(r.Context(), req.DrinkID, req.ColdTime, req.Evaluate); err != nil {
		zap.Error(err)
	}
}
