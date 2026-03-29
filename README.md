# Task Master API

This is a RESTful API built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage projects and tasks. Each user can create their own projects, and each project can contain multiple tasks. The API uses JSON Web Tokens (JWT) for authentication and ensures that users can only access and modify their own data.


## Features
- User authentication (register & login)
- Password hashing using bcrypt
- JWT-based authorization
- Full CRUD for projects
- Full CRUD for tasks
- Nested routes for tasks under projects
- Ownership-based access control
- Data persistence with MongoDB
- Populated references for better API responses


## Tech Stack
- Node.js
- Express
- MongoDB & Mongoose
- bcrypt
- jsonwebtoken
- dotenv
