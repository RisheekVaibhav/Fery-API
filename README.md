Base URL: http://localhost:3001/api

TO RUN THE API:

BASH:

node app.js


1. Register User

Endpoint: POST /users/register

Request Body:
json

{

    "username": "name",
    "password": "userpass"
    
}

Responses:

Success (201):
json
{
    "message": "User registered successfully."
}

Error (400):
json
{
    "message": "Username and password are required."
}

2. List Rides

Endpoint: GET /rides

Response:

Success (200):
json
[

    { "id": 1, "distance in km": "5", "fare in Rs": "10" },
    { "id": 2, "distance in km": "10", "fare in Rs": "20" },
    { "id": 3, "distance in km ": "15 ", "fare in Rs": "30" }
    
]
3. Ride Details

Endpoint: GET /rides/:id

Example Request: GET /rides/1

Response:
Success (200):

json
{

    "rideId": "1",
    "distance in kms": 60,
    "fare in Rs": 760,
    "pickupLocation": "Shimla",
    "dropLocation": "Chandigarh"
    
}
Error (404):
json
{

    "message": "Ride not found."
    
}
