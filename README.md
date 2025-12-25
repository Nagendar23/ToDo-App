# ToDo App - Full Stack Application

A modern, full-stack ToDo application with user authentication, built with React (Vite) frontend and Node.js/Express backend, with MongoDB database.

## 🌐Live Demo
**Frontend :**https://nagendar-todo.vercel.app/
**Backend :**https://todo-app-mgkg.onrender.com/

## 🎯 Features

### Authentication
- ✅ **Sign Up** - Create new user account with username, email, and password
- ✅ **Sign In** - Secure login with email and password
- ✅ **Logout** - Clear session and secure logout
- ✅ **Session Persistence** - Stay logged in after page refresh

### Todo Management
- ✅ **Create** - Add new todos with text
- ✅ **Read** - View all user-specific todos
- ✅ **Update** - Edit existing todos
- ✅ **Delete** - Remove completed or unwanted todos
- ✅ **User Isolation** - Each user sees only their own todos

### UI/UX
- 🎨 Modern, responsive design with gradient backgrounds
- 💫 Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🎯 Intuitive user experience

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite 6** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **CSS3** - Modern styling with gradients and animations

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-reload

---

## 📋 Project Structure

```
ToDo-App/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── ToDo.jsx
│   │   │   ├── Login.css
│   │   │   ├── Signup.css
│   │   │   └── ToDo.css
│   │   ├── utils/           # Utility functions
│   │   │   ├── HandleApi.js    # Todo API calls
│   │   │   └── HandleAuth.js   # Auth API calls
│   │   ├── App.jsx          # Main app component
│   │   ├── App.css          # App styling
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── backend/                  # Node.js + Express backend
│   ├── app.js               # Main application file
│   ├── package.json
│   ├── .env                 # Environment variables
│   ├── controller/
│   │   ├── TodoController.js    # Todo business logic
│   │   └── AuthController.js    # Auth business logic
│   ├── models/
│   │   ├── TodoModel.js     # Todo schema
│   │   └── UserModel.js     # User schema
│   └── routes/
│       ├── Todo.js          # Todo routes
│       └── Auth.js          # Auth routes
│
├── DEPLOYMENT_GUIDE.md      # Detailed deployment guide
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14 or higher
- **npm** v6 or higher
- **MongoDB** (local or MongoDB Atlas cloud)
- **Git**

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ToDo-App.git
cd ToDo-App
```

#### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
echo "MONGODB_URL=mongodb://localhost:27017/todoapp" > .env
echo "port=8000" >> .env

# Start backend server
npm start
```

Backend will run on `http://localhost:8000`

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173` (or next available port)

### First Time Setup
```bash
# Terminal 1 - Start Backend
cd backend
npm install
npm start

# Terminal 2 - Start Frontend
cd frontend
npm install
npm run dev

# Visit http://localhost:5173 in browser
```

---

## 📦 Frontend Commands

### Install Dependencies
```bash
cd frontend
npm install
```

### Development Server
```bash
npm run dev
```
Starts Vite dev server with hot reload at `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized build in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Preview the built application locally

### Lint Code
```bash
npm run lint
```
Check code quality with ESLint

---

## 📦 Backend Commands

### Install Dependencies
```bash
cd backend
npm install
```

### Start Development Server
```bash
npm start
```
Runs backend with nodemon (auto-reload) on `http://localhost:8000`

### Start Production Server
```bash
node app.js
```
Runs backend without auto-reload (lighter for production)

---

## 🗄️ Database Setup

### Option 1: Local MongoDB
```bash
# Install MongoDB Community Edition
# https://docs.mongodb.com/manual/installation/

# Start MongoDB
mongod

# Update .env
MONGODB_URL=mongodb://localhost:27017/todoapp
```

### Option 2: MongoDB Atlas (Cloud)
```bash
# 1. Create account: https://www.mongodb.com/cloud/atlas
# 2. Create free cluster
# 3. Get connection string
# 4. Update .env
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/todoapp
```

---

## 🔑 Environment Variables

### Backend (.env)
```env
# MongoDB connection string
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/todoapp

# Server port
port=8000

# Node environment
NODE_ENV=development
```

### Frontend (if needed)
Create `frontend/.env` or update `frontend/src/utils/HandleApi.js`:
```javascript
const baseUrl = 'http://localhost:8000';
```

---

## 📡 API Endpoints

### Authentication Routes

| Method | Endpoint | Purpose | Body |
|--------|----------|---------|------|
| POST | `/auth/signup` | Register new user | `{username, email, password}` |
| POST | `/auth/signin` | Login user | `{email, password}` |
| POST | `/auth/logout` | Logout user | - |

### Todo Routes

| Method | Endpoint | Purpose | Body/Query |
|--------|----------|---------|-----------|
| GET | `/?userId=` | Get all todos | Query: `userId` |
| POST | `/save` | Create todo | `{text, userId}` |
| PUT | `/update` | Update todo | `{id, text, userId}` |
| DELETE | `/delete` | Delete todo | `{id, userId}` |

---

## 🔐 Authentication Flow

```
User → Sign Up → Create Account → Auto Login → Todo List
User → Sign In → Authenticate → Todo List
User → Logout → Clear Storage → Sign In Page
```

### Session Management
- User credentials stored in MongoDB
- Session info (userId) stored in browser localStorage
- Auto-logout on window close (or manual logout)

---

## 🎨 UI Components

### Login Page (`Login.jsx`)
- Email and password input
- Error message display
- Switch to signup option
- Modern gradient background

### Signup Page (`Signup.jsx`)
- Username, email, password fields
- Password confirmation
- Validation feedback
- Switch to login option

### Todo List (`App.jsx`)
- User greeting and logout button
- Input box to add todos
- List of all user's todos
- Edit and delete buttons for each todo

### Todo Item (`ToDo.jsx`)
- Todo text display
- Edit button (teal color)
- Delete button (red color)
- Hover animations

---

## 🚀 Deployment

### Deploy Frontend to Vercel
```bash
cd frontend
npm install -g vercel
vercel --prod
```

### Deploy Backend to Render
```bash
cd backend
# Ensure .env is set up
# Push to GitHub
git add .
git commit -m "Deploy backend"
git push origin main

# Go to https://dashboard.render.com/
# Create new Web Service
# Connect GitHub
# Set build command: npm install
# Set start command: npm start
```

**See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions**

---

## 📱 Usage Guide

### Sign Up
1. Open application
2. Click "Sign up here"
3. Enter username, email, password (min 6 characters)
4. Confirm password
5. Click "Sign Up"
6. Auto-logged in, redirected to todo list

### Add Todo
1. Enter todo text in input box
2. Click "Add" button
3. Todo appears in list
4. List updates automatically

### Edit Todo
1. Click edit icon (teal) on todo item
2. Text appears in input box
3. Edit the text
4. Click "Update" button
5. Todo updates in database

### Delete Todo
1. Click delete icon (red) on todo item
2. Todo removed from list
3. List updates automatically

### Logout
1. Click "Logout" button in top right
2. Taken to login page
3. Session cleared

---

## 🐛 Troubleshooting

### Frontend Won't Start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend Connection Error
```bash
# Check MongoDB is running
# Verify .env has correct MONGODB_URL
# Check backend is running on port 8000
curl http://localhost:8000
```

### CORS Error
- Ensure backend has CORS enabled
- Check API endpoint in frontend matches backend URL
- Look at browser console for exact error

### Build Fails
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
npm run build
```

---

## 📊 Performance Optimization

### Frontend
- Lazy loading with code splitting
- Minified production build
- Optimized images
- CSS optimization

### Backend
- Database indexing
- Request validation
- Error handling
- Connection pooling

---

## 🔒 Security Features

- ✅ Password validation (min 6 characters)
- ✅ User isolation (each user sees only their todos)
- ✅ Input validation
- ✅ CORS protection
- ✅ Environment variables for sensitive data

**Note**: For production, implement:
- Password hashing (bcrypt)
- JWT tokens
- Rate limiting
- HTTPS

---

## 📝 Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Feature description"

# Push to remote
git push origin main

# Pull latest
git pull origin main
```

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open Pull Request

---

## 📞 Support

For issues or questions:
- Check [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for deployment help
- Review console logs for error details
- Verify all environment variables are set

---

## 📄 License

This project is licensed under the ISC License.

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Express.js](https://expressjs.com)
- [MongoDB](https://www.mongodb.com)
- [Axios](https://axios-http.com)

---

## 🎉 Happy Coding!

Built with ❤️ for modern web development

**Version**: 1.0.0  
**Last Updated**: December 26, 2025
