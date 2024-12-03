# Role-Based Access Control System

This project demonstrates a role-based access control (RBAC) system with authentication and authorization using **Node.js**, **Express**, **React**, **Recoil**, **JWT**, and **MongoDB**.

---

## Features
- User registration and login
- Role-based access for `Admin`, `Moderator`, and `User`
- Protected routes with JWT authentication
- Redirects users to dashboards based on roles

---

## Tech Stack
- **Backend**: Node.js, Express, MongoDB, JWT
- **Frontend**: React, Recoil, Axios
- **Styling**: Tailwind CSS

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (>= 14.x)
- MongoDB (running locally or using a cloud service like MongoDB Atlas)

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/role-based-access-control.git
cd role-based-access-control

###Setup Backend
Navigate to the backend directory:


cd backend
Install dependencies:

npm install
Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the backend server:

npm start

Setup Frontend
Navigate to the frontend directory:


cd ../frontend
Install dependencies:


npm install
Start the React development server:


npm start

Login page
![image](https://github.com/user-attachments/assets/4c917258-3956-4030-806d-136bb2b24fba)

sign-up page
![image](https://github.com/user-attachments/assets/573e9118-33f4-448f-8f5c-ea1d407cab30)

Dashboard according to role
![image](https://github.com/user-attachments/assets/b0579c20-7f95-4324-a39d-b4c78117dcad)

profile
![image](https://github.com/user-attachments/assets/471533de-e908-4f04-9e37-000f4aec96fd)



