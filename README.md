# Distributed Systems
(Kyle Mezger, Jay Imort)
A simple To-Do List Application with Front- and Backend

## Overview

This repository contains the code for the laboratory assignments of the course Distributed Systems at the Hochschule Esslingen. We used a NestJS Backend, ReactJS Frontend, a PostgreSQL Database and OpenTelemetry with Jaeger for tracing.

## Installation
Git Clone this repository and run `docker compose up` in the root directory. This will start the Backend, Frontend, Database and Jaeger. The Frontend will be available at `localhost:3000`. 

## Endpoints
- `GET /todos` - Get all Todos
- `POST /todos` - Create a new Todo
- `GET /todos/:id` - Get a Todo by ID
- `PUT /todos` - Update a Todo
- `DELETE /todos` - Delete a Todo by ID

## Ports
- `3000` - Frontend
- `3001` - Backend
- `5432` - Database
- `16686` - Jaeger

