# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

## 1st Step: 
Clone the repository to your local machine. Github will have a `CODE` drop down menu. Choose either options You are comfortable with and download it on your system.

## 2nd Step: 
Download docker on your local machine. In your terminal, type `docker -v` & `docker-compose -v` to check the version you are running.

## 3rd Step:
Open the root project file in your favourite IDE or Code Editor *(I used VS Code)*. CD into your root file and run the command `docker-compose up`. Trouble shoot any errors you face, and you should be running the project.