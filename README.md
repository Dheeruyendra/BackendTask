
# Microservice-Social-Media

## Installation
1. Step-by-step guide on how to install the project.
2. Clone the repository: git clone <repository-url>
3. Install dependencies: npm install
4. Set up the database connection by creating a .env file with appropriate credentials.
5. Start the server: npm start

## Overview
### EndPoints
#### POST /api/v1/posts
- Create a new post.
- Request
- Method: POST
- URL: /api/v1/posts
#### Body:
``````
{
  "id": "unique_post_id",
  "content": "post_content"
}
``````

Status: 201 Created
#### Body:

```````
{
  "message": "Post created successfully"
}
```````
#### GET /api/v1/posts/:id/analysis
- Get analysis of a post.
- Request
- Method: GET
- URL: /api/v1/posts/:id/analysis
  
 Status: 200 OK
#### Body:
`````
{
  "wordCount": "",
  "averageWordLength": ""
}
`````

Status: 404 Not Found
#### Body:
`````
{
  "message": "Post not found"
}
`````
### Rate-Limiting
- Implemented rate limiter for the endpoints to control the number of GET and POST requests.
- Current limit 150 requests per 15 minutes for each unique IP address.

### Caching Mechanism
- Employed Redis to cache frequently accessed data, thereby decreasing response times and alleviating database load.
- Devised caching strategies to efficiently store and retrieve data, consequently boosting the system's overall performance.

## Dependencies
- Express
- Mongoose
- Redis
- Express Rate Limit
