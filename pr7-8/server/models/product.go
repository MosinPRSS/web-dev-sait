package models

import (
	"database/sql"

	"gorm.io/gorm"
)

// сам товар
type Product struct {
	*gorm.Model
	Name        string
	Description sql.NullString
}
