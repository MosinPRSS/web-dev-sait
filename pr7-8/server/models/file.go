package models

import "gorm.io/gorm"

// используется для хранения изображений

// родительская структура (или супер-структура)
type Image struct {
	*gorm.Model
	Filename string
	Filepath string
	Width    uint16
	Height   uint16
}

type UserImage struct {
	Image
	BelongsTo User
	UserID    uint
} // аватары пользователей

type ProductImage struct {
	Image
	BelongsTo Product
	ProductID uint
} // изображения товаров
