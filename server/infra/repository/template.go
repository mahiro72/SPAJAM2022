package repository

import (
	"database/sql"

	"github.com/mahiro72/SPAJAM2022/server/domain/repository"
)

type templateRepository struct {
	db *sql.DB
}

func NewTemplateRepository(db *sql.DB) repository.ITemplateRepository {
	return &templateRepository{db: db}
}
