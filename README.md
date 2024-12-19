
# EcoCommute Backend

EcoCommute is a web application that calculates health risks associated with daily commuting, factoring in air pollution, noise pollution, and physical activity. This backend application is built using Node.js and Express.js, providing APIs to handle commute data and calculate risk scores.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features
- **Add Commute:** Users can log their commutes with details like route, mode, and duration.
- **View Commutes:** Fetch all logged commutes or view recent commutes (last 30 days).
- **Risk Calculation:** Calculate a health risk score based on commute duration.
- **Authentication:** Token-based authentication for secure API access.

---

## Technologies Used
- **Node.js**: Runtime environment for building server-side applications.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing commute data.
- **JWT**: Token-based authentication for securing routes.

---

## Setup and Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/EcoCommute.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd EcoCommute/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the `backend` directory and configure it (see [Environment Variables](#environment-variables)).
5. Start the server:
   ```bash
   npm run start
   ```

---

## Environment Variables

| Variable        | Description                        | Example                |
|------------------|------------------------------------|------------------------|
| `PORT`          | Port for the backend server       | `5000`                |
| `MONGO_URI`     | MongoDB connection string         | `mongodb://localhost` |
| `JWT_SECRET`    | Secret key for JWT authentication | `your_jwt_secret`     |

---

## API Endpoints

### Commute Routes
| Method | Endpoint       | Description                   | Auth Required |
|--------|----------------|-------------------------------|---------------|
| POST   | `/commute`     | Add a new commute             | Yes           |
| GET    | `/commute`     | Get all commutes for a user   | Yes           |
| GET    | `/commute/recent` | Get recent commutes (30 days) | Yes           |

### Authentication
Token-based authentication is required for all routes. Use the `Authorization` header with a valid JWT token:
```
Authorization: Bearer <your-token>
```

---

## Folder Structure
```
backend/
├── controllers/
│   └── CommuteController.js  # Commute-related logic
├── middleware/
│   └── authMiddleware.js     # JWT authentication
├── models/
│   └── Commute.js            # Commute schema
├── routes/
│   └── commute.js            # Commute routes
├── index.js                  # Entry point
├── .env                      # Environment variables
├── package.json              # Project metadata
└── README.md                 # Project documentation
```

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---



Save this file as `README.md` in the root of your project. It provides a structured overview of the project and is ready for sharing!
