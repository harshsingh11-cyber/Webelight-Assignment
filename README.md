# Webelight-Assignment
# FMCG Commercial App Server

Welcome to the FMCG Commercial App Server! This server application provides basic functionalities such as authentication, role management, CRUD operations, filtering, pagination, and API documentation using Swagger.



## Introduction

This server application is a small-scale implementation of an FMCG (Fast-Moving Consumer Goods) commercial app. It provides essential functionalities to manage user data, such as customers, with a focus on security and role-based access control. The app is built on Node.js and uses Bearer token authentication for secure communication.

## Features

The server application provides the following features:

- User authentication using Bearer tokens
- Role management to restrict access to specific routes
- CRUD operations for managing customer data
- Filtering customers based on category, price band, name, etc.
- Pagination support for large datasets
- Swagger documentation for clear API endpoints reference

## Getting Started

### Prerequisites

Before running the server application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm:

```bash
npm install
```

```Start
node index
```
## API Endpoints

The server exposes the following API endpoints:

- `GET /`: Fetch all users (Requires authentication)
- `GET /:_Id`: Fetch a specific user by ID (Requires authentication)
- `GET /search/:key`: Search users based on a keyword (Requires authentication)
- `POST /`: Create a new user (Requires authentication and admin role)
- `PUT /:_Id`: Update a user by ID (Requires authentication and admin role)
- `DELETE /:_Id`: Delete a user by ID (Requires authentication and admin role)

Please ensure that you include the required Bearer token in the authorization header to access the authenticated routes.

## Authentication

The server uses Bearer token authentication. To access authenticated routes, you must include an authorization header in your request with the Bearer token.

Example:

```Token
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Role Management

The server enforces role-based access control to restrict certain routes to specific roles. Currently, the admin role is required to access the following routes:

- `POST /`: Create a new user
- `PUT /:_Id`: Update a user by ID
- `DELETE /:_Id`: Delete a user by ID

Other routes are accessible to all authenticated users.

## Swagger Documentation

The server provides Swagger documentation for its API endpoints. You can access it by visiting `/api-docs` once the server is running.

Example:


