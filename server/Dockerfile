FROM golang:latest

RUN mkdir /app
WORKDIR /app

COPY ./server/go.mod ./server/go.sum ./
RUN go mod download
