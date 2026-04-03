# 🎵 Resona Backend

A powerful and scalable Node.js/Express backend API for the Resona music tracking application. Built with TypeScript, featuring comprehensive API documentation with Swagger, JWT authentication, and modern development practices.

## 🚀 Features

- **RESTful API** built with Express.js and TypeScript
- **JWT Authentication** with bcryptjs for secure password hashing
- **API Documentation** with Swagger/OpenAPI 3.0
- **CORS Support** for cross-origin requests
- **Input Validation** with express-validator
- **Environment Configuration** with dotenv
- **Hot Reload** development with nodemon and ts-node
- **Type Safety** with full TypeScript support

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/makwana-chirag/resona-backend.git
   cd resona-backend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure your `.env` file with the necessary variables:
   ```
   PORT=4000
   JWT_SECRET=your_jwt_secret_key
   # Add other environment variables as needed
   ```

## 🚦 Running the Application

### Development Mode

Start the server with hot reload:

```bash
npm run dev
```

### Production Mode

Build and run the production version:

```bash
npm run build
npm start
```

The server will start on `http://localhost:4000` by default.

## 📚 API Documentation

Once the server is running, you can access the interactive API documentation at:

- **Swagger UI**: `http://localhost:4000/api-docs`

The documentation provides detailed information about all available endpoints, request/response formats, and authentication requirements.

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests (currently not implemented)

## 📁 Project Structure

```
resona-backend/
├── src/
│   ├── app.ts              # Express app configuration
│   ├── index.ts            # Server entry point
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── routers/           # API routes
│   └── validators/        # Input validation schemas
├── dist/                  # Compiled JavaScript output
├── node_modules/          # Dependencies
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## 🔐 Authentication

The application uses JSON Web Tokens (JWT) for authentication. Protected endpoints require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## 🛡️ Security Features

- **Password Hashing**: Uses bcryptjs for secure password storage
- **JWT Authentication**: Token-based authentication with configurable expiration
- **Input Validation**: Request validation using express-validator
- **CORS Configuration**: Configurable cross-origin resource sharing

## 🌐 API Endpoints

### Health Check

- `GET /` - Basic health check endpoint

### Authentication

_(Endpoints will be added as the application grows)_

### Music Tracking

_(Endpoints will be added as the application grows)_

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🐛 Issues

If you encounter any issues or have suggestions, please file them on the [GitHub Issues](https://github.com/makwana-chirag/resona-backend/issues) page.

## 🔗 Links

- **Repository**: https://github.com/makwana-chirag/resona-backend
- **Issues**: https://github.com/makwana-chirag/resona-backend/issues
- **API Documentation**: http://localhost:4000/api-docs (when running)

## 📊 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Authentication**: JWT + bcryptjs
- **Documentation**: Swagger/OpenAPI 3.0
- **Development**: nodemon, ts-node
- **Validation**: express-validator

---

Built with ❤️ for the Resona music tracking application
