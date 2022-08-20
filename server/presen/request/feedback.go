package request

type FeedbackStoreRequest struct {
	DrinkID  int `json:"drink_id"`
	ColdTime int `json:"cold_time"`
	Evaluate int `json:"evaluate"`
}
