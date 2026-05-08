TEAM TASK MANAGER - FULL STACK WEB APPLICATION

Project Overview:
Team Task Manager is a full-stack web application where users can create projects, assign tasks, and track task progress. It supports role-based access for Admin and Member users.

Key Features:
1. User Authentication
- Signup and Login
- Secure user access
- Role-based access control

2. Project Management
- Create and manage projects
- Add team members
- View project details

3. Task Management
- Create tasks
- Assign tasks to team members
- Update task status
- Track pending, completed, and overdue tasks

4. Dashboard
- View total tasks
- View completed and pending tasks
- Track overdue tasks
- Monitor project progress

Tech Stack:
Frontend:
React.js
HTML
CSS
JavaScript

Backend:
Node.js
Express.js

Database:
MongoDB

Other Tools:
GitHub
Railway
Postman

Installation Steps:
1. Clone the repository:
git clone <your-github-repo-link>

2. Install backend dependencies:
cd backend
npm install

3. Install frontend dependencies:
cd frontend
npm install

4. Create environment variables:
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000

5. Run backend:
npm start

6. Run frontend:
npm start

Deployment:
The project is deployed on Railway and can be accessed using the live application URL.

Live Application URL:
<your-live-url>

GitHub Repository:
<your-github-repo-link>

Roles:
Admin:
- Can create projects
- Can add members
- Can assign tasks
- Can manage task status

Member:
- Can view assigned tasks
- Can update task progress/status

API Overview:
Authentication APIs:
POST /api/auth/signup
POST /api/auth/login

Project APIs:
GET /api/projects
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id

Task APIs:
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

Conclusion:
This project helps teams manage their work efficiently by organizing projects, assigning tasks, and tracking progress through a simple dashboard.
