# Smartbrain API

API for [smartbrain app](https://smart-brain-johndev86.herokuapp.com/). Provides RESTful API for user authentication, user registration, get user profile, update user profile, and call to Clarifai for image face detection.

### Technologies used

* Node/express
* Clarifai
* Heroku (production host, ** No Docker)
* Docker compose (for development)
* Postgres
* Knex for Postgres queries
* JWT authentication - use signed token in request header for restricted API endpoints.
* Redis for storing JWT tokens
* morgan for request logging


