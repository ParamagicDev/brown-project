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
docker run yarn run test
```

## Assignment

Write a small application using JavaScript which parses and displays data from a public API.
The application should run in and display its output in a web browser and should generate no
errors. Feel free to utilize various JS libraries and utilities to complete the task.
Public API: https://randomuser.me

### Requirements:

[ ] Making a single call to the randomuser.me API, get 20 random users.
[ ] Do not make additional calls to the API.
[ ] Users in the result set should be from the United States or Canada.
[ ] Display the following fields for each user:
[ ] Gender
[ ] First name
[ ] Last name
[ ] Country
[ ] Date of birth
[ ] Create and display an additional “Birthday” field whose value is dynamically
calculated.
[ ] The value should identify if the user’s birthday: a) already happened, b) is
today(!), or c) has yet to occur, based on today’s date for the current year.

Optional (Bonus Feature)

[ ] Implement sorting functionality on a column or columns of your choice e.g., ascending /
descending order

## Additional features

[ ] Using Docker to create a consistent testing environment and allow people to
use a nodejs runtime if they don't have it installed (and cross platform)
[ ] Use Webpack for code bundling
[ ] Use babel for transpiling to ES5
[ ] Use Jest for unit / integration testing
[ ] Use Cypress for End to End testing

## Point of interest

Uses [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) due to Fetch having a cleaner API, returns a Promise,
and is the latest way to aynschronously retrieve data.

Uses vanilla JS. Does not use jQuery, React, Vue, etc. All felt a little too heavy
handed for the project.

Webpack / Jest / Babel / Cypress used due to having written multiple sites with the
libraries. Even wrote a blog post on it. <br>
[https://paramagicdev.github.io/my-blog/javascript/usingJestWithImportAndExport/](https://paramagicdev.github.io/my-blog/javascript/usingJestWithImportAndExport/)
