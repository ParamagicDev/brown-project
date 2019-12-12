# Purpose

To call a public API ([https://randomuser.me](https://randomuser.me) and
return 20 random user from the US & Canada.

## Getting started

```bash
git clone
cd brown-project
yarn install
yarn test # run the test suite
yarn run dev # open up in the browser @ localhost:8080
```

### Using Docker

```bash
docker build . --tag=brown-project
# Runs yarn dev
docker run -p 8080:8080 -v $(pwd):/myapp brown-project
# Running the test suite
docker exec brown-project yarn run test
# To watch the test suite
docker run --rm brown-project yarn run test:watch
```

Now you can open up localhost:8080 in the browser and view the project

## Assignment

Write a small application using JavaScript which parses and displays data from a public API.
The application should run in and display its output in a web browser and should generate no
errors. Feel free to utilize various JS libraries and utilities to complete the task.
Public API: https://randomuser.me

### Requirements:

[x] Making a single call to the randomuser.me API, get 20 random users.
[x] Do not make additional calls to the API.
[x] Users in the result set should be from the United States or Canada.

#### Display the following fields for each user:

[x] Gender
[x] First name
[x] Last name
[x] Country
[x] Date of birth
[x] Create and display an additional “Birthday” field whose value is dynamically
calculated.

- The value should identify if the user’s birthday: a) already happened, b) is
  today(!), or c) has yet to occur, based on today’s date for the current year.

Optional (Bonus Feature)

[ ] Implement sorting functionality on a column or columns of your choice e.g., ascending /
descending order

## Additional features

[x] Using Docker to create a consistent testing environment and allow people to
use a nodejs runtime if they don't have it installed (and cross platform)
[x] Use Webpack for code bundling
[x] Use babel for transpiling to ES5
[x] Use Jest for unit / integration testing

## Point of interest

Uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) due to Fetch having a cleaner API, returns a Promise,
and is the latest way to aynschronously retrieve data.

Uses vanilla JS. Does not use jQuery, React, Vue, etc. All felt a little too heavy
handed for the project.

I used Webpack / Jest / Babel due to having written multiple sites with the
libraries. I even wrote a blog post on it. <br>
[https://paramagicdev.github.io/my-blog/javascript/usingJestWithImportAndExport/](https://paramagicdev.github.io/my-blog/javascript/usingJestWithImportAndExport/)

Everything can be run through Docker.

Originally, I planned to have an end to end testing suite with Cypress. However, testing
external APIs is clearly stated in their documentation as being fragile. It is more
so meant to test internal APIs. As such, I cut it from the project.

## Other possibilities

- Using [date-fns](https://date-fns.org/) for comparing dates.
- Using [lodash](https://lodash.com/) for sorting algorithms.
