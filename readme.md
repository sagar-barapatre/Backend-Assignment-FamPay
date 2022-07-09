# FamPay Backend Assignment By Sagar Barapatre

## Tech Stack

- Node JS
- Express JS
- MongoDB Atlas

## Project Goal

To make an API to fetch latest videos sorted in reverse chronological order of their publishing date-time from YouTube for a given tag/search query in a paginated response.

## Basic Requirements:

-   Server should call the YouTube API continuously in background (async) with some interval (say 10 seconds) for fetching the latest videos for a predefined search query and should store the data of videos (specifically these fields - Video title, description, publishing datetime, thumbnails URLs and any other fields you require) in a database with proper indexes.

-   A GET API which returns the stored video data in a paginated response sorted in descending order of published datetime.
-   A basic search API to search the stored videos using their title and description.
-   Dockerize the project.
-   It should be scalable and optimised.
## Bonus Points:

-   Add support for supplying multiple API keys so that if quota is exhausted on one, it automatically uses the next available key.
-   Make a dashboard to view the stored videos with filters and sorting options (optional)
-   Optimise search api, so that it's able to search videos containing partial match for the search query in either video title or description.
    -   Ex 1: A video with title _`How to make tea?`_ should match for the search query `tea how`

## QUICK START - ON YOUR LOCAL MACHINE

### Requirements

- Node 16+ LTS
- Npm 8+ (using workspaces)
- For Windows, **integrate bash shell to cmd shell** (when installing git), or use git-bash
- Docker

### Getting Started

- ### `master` branch contains APIs
- ### `master-dashboard` branch contains dashboard build using React

- Clone the repository

```
git clone https://github.com/sagar-barapatre/Backend-Assignment-FamPay.git
```

- Go to the directory:

  ```
  cd Backend-Assignment-FamPay
  ```

### Option 1 - Run on your machine

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:8000/:

```
npm start
```

### Option 2 - Run on Docker

Docker Compose is an awesome tool for creating isolated development environments with Docker by using simple configurations with YAML.
The repo includes the Dockerfile and docker-compose.yml necessary to set up the app.

- Install [docker](https://docs.docker.com/installation/) and [docker compose](https://docs.docker.com/compose/install/)

- Build the images:

  ```
  docker-compose build
  ```

- Run the app, this starts this application at http://localhost:8000/:
  ```
  docker-compose up -d
  ```

## REST API

### FETCH VIDEOS

```
GET http://localhost:8000/videos/getvideos?p=1
```

- Here, Query params "p" indicates the page, and "p=1" represents page one.
- In one page there will be 10 responses.

### SEARCH VIDEOS

```
POST http://localhost:8000/videos/searchvideos
```

- It accepts a "query" which we need to pass in the body, in JSON format
- Eg
  ```
  {
      "query" : "cricket"
  }
  ```

### POSTMAN COLLECTION

- Import this Postman collection into your Postman
- POSTMAN [JSON Link](https://www.getpostman.com/collections/9ad76c13e244c4055a3f)

## Dashboard

- Created a dashboard using React, which displays all the videos present in the database in the sorted order.

- Added search filter, so that client can search the videos on providing a specific query.

- Clone the repository of dashboard

```
  git clone --single-branch --branch master-dashboard https://github.com/sagar-barapatre/Backend-Assignment-FamPay.git

```

- Go to the directory:

```
  cd Fampay_Assignment
```

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:3000/:

```
 npm start
```
