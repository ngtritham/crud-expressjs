.PHONY: build up down watch

build:
	docker build -t crud-expressjs .

up:
	docker-compose up -d

watch:
	DOCKER_TARGET=development NODE_ENV=development docker compose up --build --watch

down:
	docker-compose down -v
