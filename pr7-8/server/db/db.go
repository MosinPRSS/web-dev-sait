package db

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// import (
// 	"os"
//  "gorm..."
// )

var DBConn *gorm.DB

// connect to PSQL server
func ConnectAndMigrate() {
	// connection tries
	var (
		db  *gorm.DB
		err error
	)
	for i := 0; i < 5; i++ {
		db, err = gorm.Open(postgres.Open(dsn()), &gorm.Config{
			Logger: logger.Default.LogMode(logger.Info),
		})
		if err == nil {
			break
		}
		log.Printf("CONNECTION NOT ESTABLISHED, RETRY... (%d/5)\n", i+1)
		time.Sleep(2 * time.Second)
	}
	if err != nil {
		log.Panicf("DATABASE CONNECTION ERROR, EXITING")
		log.Panicf("STACK AT THIS TIME:\n%s", err)
	}
	db.Migrator().AutoMigrate()
	DBConn = db
	// default user part
	// his settings must be specified in [../docker-compose.yaml]
	log.Printf("CREATING NEW DEFAULT USER...")
}

func dsn() string {
	// vars from env
	dbUser := os.Getenv("PSQL_USER")
	dbPass := os.Getenv("PSQL_PASSWORD")
	dbName := os.Getenv("PSQL_DATABASE")
	dbPort := os.Getenv("PSQL_PORT")

	return fmt.Sprintf(
		"host=localhost user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Europe/Moscow",
		dbUser, dbPass, dbName, dbPort,
	)
}
