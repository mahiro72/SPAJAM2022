package repository

import (
	"context"
	"database/sql"

	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type feedbackRepository struct {
	db *sql.DB
}

func NewFeedbackRepository(db *sql.DB) repository.IFeedbackRepository {
	return &feedbackRepository{db: db}
}

func (fr *feedbackRepository) Store(ctx context.Context, drinkID int, coldTime int, evaluate int) error {
	const store = `INSERT INTO feedback (drink_id, cold_time, evaluate) VALUES ($1, $2, $3)`

	stmt, err := fr.db.PrepareContext(ctx, store)
	if err != nil {
		return err
	}
	defer stmt.Close()

	if _, err := stmt.ExecContext(ctx, drinkID, coldTime, evaluate); err != nil {
		return err
	}

	return nil
}
