package request

type DrinkBestRequest struct {
	ID int `json:"id"`
}

type DrinkUpdateRequest struct {
	ID       int `json:"id"`
	BestTime int `json:"best_time"`
}
