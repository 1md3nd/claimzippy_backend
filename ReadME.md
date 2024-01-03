# Tasks API

The Tasks API provides endpoints for managing tasks. It allows users to create new tasks, retrieve a list of tasks, update task details, and delete tasks.

#### You can access the APIs at: http://34.125.229.16:3000/tasks

## Endpoints

### 1. Get All Tasks

#### Endpoint:

    GET /tasks

#### Description:

This endpoint retrieves a list of all tasks.

#### Responses:

- #### 200 OK:

          [
             { "id": 1, "title": "Task 1", "description": "Description for Task 1" },
              { "id": 2, "title": "Task 2", "description": "Description for Task 2" }
          ]

- #### 500 Internal Server Error:

  An error occurred on the server.

### 2. Get Task by ID

#### Endpoint:

    GET /tasks/:id

#### Description:

This endpoint retrieves details for a specific task based on its ID.

#### Parameters:

    id: Task ID

#### Responses:

- #### 200 OK:

        { "id": 1, "title": "Task 1", "description": "Description for Task 1" }

- #### 404 Not Found:

        The task with the given ID was not found.

- #### 500 Internal Server Error:
        An error occurred on the server.

### 3. Create New Task

#### Endpoint:

    POST /tasks

#### Description:

This endpoint allows users to create a new task.

#### Request Body:

    {
    "title": "New Task",
    "description": "Description for the new task."
    }

#### Responses:

- #### 201 Created:

        { "id": 3, "title": "New Task", "description": "Description for the new task." }

- #### 400 Bad Request:
        Invalid request body.
- #### 500 Internal Server Error:
        An error occurred on the server.

### 4. Update Task

#### Endpoint:

    PUT /tasks/:id

#### Description:

This endpoint allows users to update the title and description of an existing task.

#### Parameters:

    id: Task ID

#### Request Body:

    {
    "title": "Updated Task Title",
    "description": "Updated description for the task."
    }

#### Responses:

- #### 200 OK:

        { "id": 3, "title": "Updated Task Title", "description": "Updated description for the task." }

- #### 404 Not Found:
        The task with the given ID was not found.
- #### 400 Bad Request:
        Invalid request body.
- #### 500 Internal Server Error:
        An error occurred on the server.

### 5. Delete Task

#### Endpoint:

    DELETE /tasks/:id

#### Description:

This endpoint allows users to delete a task based on its ID.

#### Parameters:

    id: Task ID

#### Responses:

- #### 204 No Content:
        Task successfully deleted.
- #### 404 Not Found:
        The task with the given ID was not found.
- #### 500 Internal Server Error:
        An error occurred on the server.

---

### How to Run Locally

#### Clone the repository:

    git clone https://github.com/1md3nd/claimzippy_backend

#### Install dependencies:

    cd claimzippy_backend
    npm install

#### Run the server:

    npm run dev
    or
    npm run prod

##### The application will be accessible at http://localhost:3000.

---

### Running with Docker

#### Build the Docker image:

    docker build -t tasks-api .

#### Run the Docker container:

    docker run -p 3000:3000 tasks-api

##### The application will be accessible at http://localhost:8080.

---

##### Feel free to reach out at anurag.botmaster@outlook.com for any inquiries or assistance.
