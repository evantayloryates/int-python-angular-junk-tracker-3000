
# Development Environment 

There are a few different ways to set up your environment:

1. Using Docker Compose via command line
2. Running Rails directly via command line

Notes if using Docker (option 1): 

- You will need to have Docker already installed on your local machine. If you don't already have it installed, please use option 2 - it isn't necessary to learn a new tool (although it's very handy) for this exercise.

### Using Docker Compose via command line

To run the main application container (`app`) in the background use:

    docker-compose up -d 

Then, to start a bash session inside the running app container run:

    docker-compose exec app /bin/bash

Here you should have access to `python`, `pip`, `pipenv`, `node` and `npm`.

You can start multiple session inside the container using the same `docker-compose exec` command in multiple terminals. This may make it easier to run both the backend Flask app and frontend Angular devleopment server.

### Running Flask and Angular CLI directly via command line

Ensure you have Python 3.9 installed. (Other versions may work, however this has only been tested on 3.9.4), [pipenv](https://pipenv.pypa.io/en/latest/install/), [Node.js](https://nodejs.dev/learn/how-to-install-nodejs) and [Angular CLI](https://angular.io/cli).

## Finishing Up

#### Flask Backend

Initialize a virtual Python 3 environment via `pipenv`:

    cd backend
    pipenv --three

Then run `bootstrap.sh`:

    ./bootstrap.sh

You should now be able to access the Flask API at `http://localhost:5000/vehicles`.

#### Angular Frontend

Use [Angular CLI](https://angular.io/cli) to start the Angular development server in the `frontend` directory:

    cd frontend
    ng serve

You should now be able to access the Flask API at `http://localhost:4200`.

## Notes 

- The Angular frontend was created by running `ng new frontend` with `projects.architect.serve.options.host` in `angular.json` set to `0.0.0.0`.
- This is meant to (hopefully) keep the amount of set up and configuration needed to start on the assignment to a minimum. Feel free to add any python packages, npm packages or other tools that will be helpful!
- We are always improving our projects, so please share any feedback or suggestions on your experience.
