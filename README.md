This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before Run this project, Make sure you install the NodeJs and type this command

### `npm install` or `npm i`
This command will install Current version of React and other required components. I cannot upload it on repo because it will cost more time for download and would not up-to-date with next version of node_modules in the future. On this folder, it will install LoopbackJS.

### Go to client_src folder (where react project located) and type
`npm install` 
that command will install Your current React project with the current react version available on NodeJS

After installed all of the required package, try to set our backend first.

## Make sure you install MySQL first in your local system.
Create User then make a database called (blacknwhite_db). this step is very important. Dont forget to check config.json, datasource.json and another setting to connect with database. After setting all the config. go to `server` folder then type this.

## This command will make MySQL Scheme for this project `node create-sample-tables.js`
it will generate our models inside the LoopbackJS and make Schema for MySQL. 

## If you want to update several tables `node update-sample-tables.js`
The different is, With create-sample-tables.js it will AutoMigrate all of th tables but, it will erase all data inside the tables (Reset). But with update-sample-tables.js it will Update several tables and keep the data inside the tables. Be Careful with these 2 command. and make sure choose the best for you.

### `ng serve`
This command will serve the project on your locals and integrate it with node_modules your install before.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
