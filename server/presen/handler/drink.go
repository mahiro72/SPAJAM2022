package handler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"go.uber.org/zap"

	myError "github.com/mahiro72/SPAJAM2022/server/core/error"
	"github.com/mahiro72/SPAJAM2022/server/presen/request"
	"github.com/mahiro72/SPAJAM2022/server/presen/response"
	"github.com/mahiro72/SPAJAM2022/server/usecase"
)

type DrinkHandler interface {
	Best(http.ResponseWriter, *http.Request)
	Update(http.ResponseWriter, *http.Request)
}

type drinkHandler struct {
	drinkUsecase usecase.DrinkUsecase
}

func NewDrinkHandler(du usecase.DrinkUsecase) DrinkHandler {
	return &drinkHandler{drinkUsecase: du}
}

func (dh *drinkHandler) Best(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		zap.Error(myError.ErrMethodNotFound)
		return
	}

	id, err := strconv.Atoi(r.FormValue("id"))
	if err != nil {
		zap.Error(err)
	}
	if id == 0 {
		zap.Error(myError.ErrIdNotFound)
	}

	targetDrink, err := dh.drinkUsecase.Get(r.Context(), id)

	if err != nil {
		zap.Error(err)
	}

	res := response.DrinkBestResponse{
		BestTime: targetDrink.BestTime,
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	je := json.NewEncoder(w)
	if err := je.Encode(res); err != nil {
		zap.Error(err)
	}
}

func (dh *drinkHandler) Update(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPut {
		w.WriteHeader(http.StatusMethodNotAllowed)
		zap.Error(myError.ErrMethodNotFound)
		return
	}

	var req request.DrinkUpdateRequest
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&req)

	if err != nil {
		zap.Error(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNoContent)

	if err = dh.drinkUsecase.Update(r.Context(), req.ID, req.BestTime); err != nil {
		zap.Error(err)
	}
}

// func (dh *drinkHandler) Update(w http.ResponseWriter, r *http.Request) {
// 	if r.Method != http.MethodPut {
// 		w.WriteHeader(http.StatusMethodNotAllowed)
// 		zap.Error(myError.ErrMethodNotFound)
// 		return
// 	}

// 	var req request.DrinkUpdateRequest
// 	decoder := json.NewDecoder(r.Body)
// 	err := decoder.Decode(&req)

// 	if err != nil {
// 		zap.Error(err)
// 	}

// 	w.Header().Set("Content-Type", "application/json")
// 	w.WriteHeader(http.StatusNoContent)

// 	if err = dh.drinkUsecase.Update(r.Context(), req.ID, req.BestTime); err != nil {
// 		zap.Error(err)
// 	}
// }
