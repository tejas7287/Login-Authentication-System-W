# Login Authentication System

A full-stack authentication system built with Node.js, MongoDB, React, and modern cybersecurity practices.

## Features

- **Secure Authentication**: JWT-based session management with encrypted password storage using bcrypt
- **Input Sanitization**: Protection against XSS and injection attacks
- **HTTP Security**: Helmet.js for security headers and OWASP compliance
- **Rate Limiting**: Protection against brute force attacks
- **Role-based Access Control**: Scalable permission system
- **Modern Frontend**: React-based user interface
- **RESTful API**: Modular backend architecture

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing
- Helmet.js for security headers
- express-rate-limit for rate limiting
- express-validator for input validation

### Frontend
- React 18
- React Router for navigation
- Axios for API calls
- Modern CSS styling

## Project Structure

```
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── index.js       # React entry point
│   │   └── components/    # React components (to be added)
│   ├── public/
│   │   └── index.html     # HTML template
│   └── package.json       # Frontend dependencies
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

4. Set up environment variables:
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. Start MongoDB (if running locally)

2. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

3. Start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

## Security Features

- **Password Encryption**: bcrypt with salt rounds
- **JWT Tokens**: Secure session management
- **Input Validation**: Server-side validation and sanitization
- **Rate Limiting**: Protection against brute force attacks
- **CORS Configuration**: Controlled cross-origin requests
- **Security Headers**: Helmet.js implementation
- **Environment Variables**: Sensitive data protection

## API Endpoints (To be implemented)

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `PUT /api/users/profile` - Update user profile

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.