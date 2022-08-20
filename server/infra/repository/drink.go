package repository

import (
	"context"
	"database/sql"

	"github.com/mahiro72/SPAJAM2022/server/domain/entity"
	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type drinkRepository struct {
	db *sql.DB
}

func NewDrinkRepository(db *sql.DB) repository.IDrinkRepository {
	return &drinkRepository{db: db}
}

func (dr *drinkRepository) Get(ctx context.Context, id int) (*entity.Drink, error) {
	const read = `SELECT * FROM drink WHERE id = $1`

	stmt, err := dr.db.PrepareContext(ctx, read)
	if err != nil {
		return nil, err
	}

	defer stmt.Close()

	row := stmt.QueryRowContext(ctx, id)
	if err = row.Err(); err != nil {
		return nil, err
	}

	de := &entity.Drink{}
	err = row.Scan(&de.ID, &de.Name, &de.BestTime)
	if err != nil {
		return nil, err
	}

	return de, nil
}

func (dr *drinkRepository) Update(ctx context.Context, drinkID int, bestTime int) error {
	const update = `UPDATE drink Set best_time = $1 WHERE id = $2`

	stmt, err := dr.db.PrepareContext(ctx, update)
	if err != nil {
		return err
	}

	defer stmt.Close()

	_, err = stmt.ExecContext(ctx, bestTime, drinkID)
	if err != nil {
		return err
	}
	return nil
}
