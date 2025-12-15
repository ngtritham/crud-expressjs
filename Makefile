.PHONY: build up down

build:
	docker build -t crud-expressjs .

up:
	docker-compose up -d

watch:
	docker compose up --watch

down:
	docker-compose down -v
