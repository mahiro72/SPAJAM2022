package config

import (
	"fmt"
	"os"
)

var (
	dbUser = os.Getenv("DB_USER")
	dbPwd  = os.Getenv("DB_PASS")
	dbHost = os.Getenv("DB_Host")
	dbName = os.Getenv("DB_NAME")
)

func GetDbUri() string {
	if Environment == "dev" {
		return fmt.Sprintf("host=%s user=%s password=%s dbname=%s sslmode=disable", dbHost, dbUser, dbPwd, dbName)
	} else {
		return fmt.Sprintf(
			"%s:%s@unix(/cloudsql/%s)/%s", dbUser, dbPwd, dbHost, dbName,
		)
	}
}
