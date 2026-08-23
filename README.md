# GlobeChat

GlobeChat is a full-stack, real-time messaging application designed for seamless instant communication. Built with the MERN stack and Socket.IO, it delivers fast, responsive messaging with user presence tracking and media sharing capabilities.

##  Key Features

- **Real-Time Messaging**: Instant live chat powered by Socket.IO.
- **Online Status**: Real-time user online/offline status indicators.
- **Media Sharing**: Image upload and management via Cloudinary.
- **Authentication & Security**: Secure JWT-based authentication and password hashing with bcrypt.
- **Modern UI**: Responsive, beautiful interface styled with TailwindCSS & DaisyUI.
- **State Management**: Global state handling with Zustand.

##  Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: TailwindCSS, DaisyUI
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Real-time**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **Media Storage**: Cloudinary

##  Prerequisites

Before you begin, ensure you have met the following requirements:
* Node.js (v18 or higher recommended)
* MongoDB (Local or Atlas)
* A Cloudinary account for image hosting

##  Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd GlobeChat
   ```

2. **Install dependencies for backend**
   ```bash
   cd backend
   npm install
   ```

3. **Install dependencies for frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up Environment Variables**
   
   Create a `.env` file in the `backend` directory and add the following variables:
   ```env
   PORT=5001
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   
   # Cloudinary Credentials
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
   *(Create a similar `.env` file in the frontend if needed for Vite environment variables, usually starting with `VITE_`)*

##  Running the Application

### Option 1: Run individually (Development Mode)

**Start the backend server:**
```bash
cd backend
npm run dev
```

**Start the frontend development server:**
```bash
cd frontend
npm run dev
```

### Option 2: Run from Root

The root `package.json` includes scripts for production readiness:
- `npm run build`: Installs all dependencies and builds the frontend.
- `npm start`: Starts the backend server (which can be configured to serve the built frontend static files).

##  Author
**Rajdeep Chowdhury** 

Computer Science Engineering Undergraduate at Techno India University

