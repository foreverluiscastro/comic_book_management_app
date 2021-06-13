# My Comic Book Management App
My name is Luis Castro and this is my Comic Book Management App.

## Repository Information
This project is made up of two repositories. [One](https://github.com/foreverluiscastro/comic_book_management_app) runs a React frontend and the [other](https://github.com/foreverluiscastro/phase-3-ruby-group-project-rack-react) runs a Rack backend. Fork and clone both repositories in order to run this app on your local machine.

## How does it work?

## Frontend
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Backend
### `shotgun --port=9292`
Launches the rack backend allowing you to fetch from an SQLite3 database.

## Application
This application allows for a user to build a clientele while also keeping track of orders and information about each order. This is made possible by a one to many relationship betweeen a client and their orders using Active Record. Thanks to the response flow of my Rack backend and React frontend, a user is able to utilize 3 of the 4 CRUD abilities to GET, POST, and DELETE information from the database.
