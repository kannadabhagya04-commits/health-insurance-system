# HealthCare+ — Health Insurance Management System

A full-stack web application that helps users explore health insurance plans, manage their profiles, and track purchased policies.

## 🚀 Features

- **User Registration & Login** — User authentication using JWT.
- **Insurance Plans** — View available health insurance plans and their premiums.
- **Policy Purchase** — Save selected insurance policies to the database.
- **Duplicate Purchase Prevention** — Prevent users from purchasing the same plan more than once.
- **User Profile** — View and manage user profile information.
- **Contact Form** — Submit contact messages.
- **REST API Documentation** — Explore and test backend APIs using Swagger UI.

## 🛠️ Technologies Used

### Frontend
- React
- Vite
- JavaScript
- HTML5
- CSS3
- Axios
- React Router

### Backend
- Java
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- REST APIs
- Swagger UI / OpenAPI

### Database
- MySQL

## 🏗️ Project Architecture

React Frontend → Spring Boot REST APIs → MySQL Database

## ⚙️ Prerequisites

Install the following before running the project:

- Node.js and npm
- Java JDK compatible with the backend configuration
- Spring Tool Suite (STS) or another Java IDE
- MySQL Server

## ▶️ How to Run

### 1. Start the Backend

1. Open the `healthcare-backend1` project in STS.
2. Configure your MySQL connection in `application.properties`.
3. Start `HealthcareBackend1Application.java`.
4. Confirm that the backend runs on `http://localhost:8080`.

### 2. Start the Frontend

1. Open a terminal in the `health-insurance-system` folder.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 📚 API Documentation

After starting the backend, open Swagger UI:

http://localhost:8080/swagger-ui/index.html

Use Swagger to explore and test the available REST API endpoints.

## 🔐 Security

- JWT-based authentication for protected endpoints.
- Spring Security for endpoint access control.
- User-specific purchased policy retrieval.
- Duplicate policy purchase validation.

## 👩‍💻 Project Purpose

This project demonstrates full-stack development using React, Java, Spring Boot, REST APIs, MySQL, and JWT authentication.

## 🔮 Future Enhancements

- Docker containerization
- Cloud deployment
- Automated unit and integration tests
- Payment gateway integration
- Admin dashboard and policy management

## 👩‍🎓 Author

**Bhagyasree**

GitHub: https://github.com/kannadabhagya04-commits
