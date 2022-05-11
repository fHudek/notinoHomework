# Notino homework

This is project a project developed based on assignment of notino homework.
For quick setup, create-react-app was used to initialize the project, instead of custom configuration of babel, webpack, eslint...

To start the app, please first run `yarn` to install dependencies.

After that use create-react-app default scripts as fallows:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Assumptions

Based on the assignment app is conected to only one API which is returning list of TODOs.
This list is then provided by context and accessed by hooks where needed.
Detail pages are calling the same api and then getting required todo from the list. In most cases detail page would be connected to a different api and get just one entity as a response(quite often with more detailed structure than on listing pages).
Design of the app was should be very minimalistic. Due to the fact that it's so simple, there was no need for breakpoints or some other features of responsive design.
Testing of the app, that is really important in normal project, was not required by the assignment.

# Bugs and issues of the original code

Most of the original code was rewritten, but these are thee issue that were found:

-   there was an infinite loop for setting todos
-   missing key for Todo component in todos render
-   props for Todo typed as any
-   div with onClick used instead of a link
-   navigation in Todo was realoding page
-   shouldComponent update not working
-   type defined on multiple spots, instead of type definition

# Original homework assignment

Here is sample code that is not by far ideal.

1. Refactor code to production-grade quality.
2. Find and describe bugs and issues.
3. Add styling by your choice. (You can add styling library)
4. Demonstrate connection to backend API.
5. Add Todo detail page (add routing to app, use context api for state managment from fetch todos to render todos and detail)
6. Todo component has defined shouldComponentUpdate lifecycle, but it can be done better, adjust it
7. Optional: rewrite Todo component to FC (choose if you want, prepare explanation)
