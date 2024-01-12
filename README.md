
# Microservice-Social-Media

## Installation
Step-by-step guide on how to install the project.
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Set up the database connection by creating a .env file with appropriate credentials.
Start the server: npm start

## Endpoints
POST /api/v1/posts
Create a new post.
Request
Method: POST
URL: /api/v1/posts
Body:
{
  "id": "unique_post_id",
  "content": "post_content"
}
Response
Status: 201 Created
Body:
{
  "message": "Post created successfully"
}

GET /api/v1/posts/:id/analysis
Get analysis of a post.
Request
Method: GET
URL: /api/v1/posts/:id/analysis
Response
Status: 200 OK
Body:
{
  "wordCount": "",
  "averageWordLength": ""
}

Status: 404 Not Found
Body:
{
  "message": "Post not found"
}

## Dependencies
Express
Mongoose
Redis
Express Rate Limit
