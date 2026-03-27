# Task Master API

## Models
- User: username, email, password
- Project: name, description, user
- Task: title, description, status, project

## Routes
### Users
- POST /api/users/register
- POST /api/users/login

### Projects
- POST /api/projects
- GET /api/projects
- GET /api/projects/:id
- PUT /api/projects/:id
- DELETE /api/projects/:id

### Tasks
- POST /api/projects/:projectId/tasks
- GET /api/projects/:projectId/tasks
- PUT /api/tasks/:taskId
- DELETE /api/tasks/:taskId