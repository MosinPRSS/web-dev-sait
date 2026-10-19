package models

import "gorm.io/gorm"

// Атрибуты (характеристики) товара
//
// связь с ними - One(Product)-To-Many(Attr)
type Attr struct {
	*gorm.Model
	Name  string
	Value string

	BelongsTo Product
	ProductID uint
}
