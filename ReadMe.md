# Node CRUD API

This project is a simple Node.js CRUD (Create, Read, Update, Delete) API built using Express and MongoDB (with Mongoose). The API allows basic operations on user data, including creating, retrieving, updating, and deleting user records.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)

## Features

- Create a new user
- Get all users
- Get a single user by ID
- Update user information
- Delete a user by ID

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend
- **Express.js**: Framework for handling HTTP requests
- **MongoDB**: NoSQL database to store user data
- **Mongoose**: ODM for MongoDB to interact with the database
- **Dotenv**: To manage environment variables
- **Nodemon**: Tool for automatically restarting the server during development

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/MThilina/node-crud.git
    ```

2. Navigate to the project directory:
    ```bash
    cd node-crud
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=your_desired_port_number
    ```

5. Start the server:
    ```bash
    npm start
    ```

The API will run at `http://{host}:{port}`.

## API Endpoints

### 1. **Create a User**

- **Endpoint**: `POST /api/users`
- **Description**: Creates a new user in the system.
- **Request Body**:
    ```json
    {
      "id": "12345",
      "firstname": "John",
      "lastname": "Doe",
      "passportno": "NPM-00001"
    }
    ```
- **Response**:
    - Success (201):
    ```json
    {
      "message": "User Created",
      "data": {
        "id": "12345",
        "firstname": "John",
        "lastname": "Doe",
        "passportno": "NPM-00001"
      }
    }
    ```

### 2. **Get All Users**

- **Endpoint**: `GET /api/users`
- **Description**: Retrieves a list of all users.
- **Response**:
    - Success (200):
    ```json
    {
      "message": "Users Found",
      "data": [
        {
          "id": "12345",
          "firstname": "John",
          "lastname": "Doe",
          "passportno": "NPM-00001"
        },
        ...
      ]
    }
    ```

### 3. **Get a User by ID**

- **Endpoint**: `GET /api/users/:id`
- **Description**: Retrieves a user by their ID.
- **Response**:
    - Success (200):
    ```json
    {
      "message": "User Found",
      "data": {
        "id": "12345",
        "firstname": "John",
        "lastname": "Doe",
        "passportno": "NPM-00001"
      }
    }
    ```
    - Error (404): User not found
    ```json
    {
      "message": "User not found"
    }
    ```

### 4. **Update a User by ID**

- **Endpoint**: `PUT /api/users/:id`
- **Description**: Updates a user’s information by their ID.
- **Request Body** (example):
    ```json
    {
      "firstname": "Jane",
      "lastname": "Doe"
    }
    ```
- **Response**:
    - Success (200):
    ```json
    {
      "message": "User Updated",
      "data": {
        "id": "12345",
        "firstname": "Jane",
        "lastname": "Doe",
        "passportno": "NPM-00001"
      }
    }
    ```

### 5. **Delete a User by ID**

- **Endpoint**: `DELETE /api/users/:id`
- **Description**: Deletes a user by their ID.
- **Response**:
    - Success (200):
    ```json
    {
      "message": "User Deleted"
    }
    ```

## Usage

1. Make sure MongoDB is running (or connected to MongoDB Atlas if you're using a cloud instance).
2. Use Postman or any HTTP client to test the API endpoints mentioned above.

### Example CRUD Operations in Postman:

- To **create** a user, send a POST request to `http://{host}:{port}/api/users` with the required JSON payload.
- To **fetch** all users, send a GET request to `http://{host}:{port}/api/users`.
- To **update** a user, send a PUT request to `http://{host}:{port}/api/users/:id`.
- To **delete** a user, send a DELETE request to `http://{host}:{port}/api/users/:id`.
