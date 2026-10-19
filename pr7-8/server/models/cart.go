package models

import "gorm.io/gorm"

// Корзина пользователя (One-to-One)
//
// Связана с товарами One(Cart)-To-Many(Product)

type Cart struct {
	*gorm.Model

	// связь с пользователем
	BelongsTo User
	UserID    uint

	// есть товары?
	Products []Product
}

// На будущее на бизнес логику про количество:
//
// В случае схожих товаров, их нужно суммировать
// пила(запись) и пила(запись) = 2 пилы в корзине
