package main

import (
	"context"
	"log"
	"os/signal"
	"syscall"
	"time"
	"web_dev/db"

	"github.com/gofiber/fiber/v3"
)

const (
	shutdownPeriod = 10 * time.Second
)

func main() {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	app := fiber.New(fiber.Config{
		ServerHeader: "MATERIAL_EXPRESS",
		AppName:      "MATERIAL_EXPRESS_APP",
	})

	// add routes
	defer app.Shutdown()

	db.ConnectAndMigrate()
	go func(msg string) {
		log.Fatal(app.Listen(":8000"))
	}("App started at ':8000' port")

	<-ctx.Done()
	stop()

	log.Printf("RECEIVED CTRL+C SIGNAL!")
	if err := app.ShutdownWithTimeout(shutdownPeriod); err != nil {
		log.Fatalln("SHUTDOWN ERROR: ", err)
	}

}
