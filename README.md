
## First React project created for learning purpose. 
This is a simple approach of building a calculator with ReactJS.
### Basic Workflow:
1. In the src folder, there is a directory called components, that’s where all the code for our component goes.

2. The calculator application is divided into two main components. App.js is the parent component which renders the child components which are: our result component where the output is displayed and the other is a button panel. 

3. The button panel is further divided into different buttons and the onclick functions they trigger. The onclick function simply reads the argument, which is the name of the button clicked, and changes the state appropriately depending on the input that is being passed.

4. Code for all the mathematical manipulations involved in calculations is written in the src/logic directory.

### Available Scripts
The project was created using the command:
##### `npx create-react-app my-app`
Create React App creates a frontend build pipeline, it can be used with any backend. Under the hood, it uses Babel and webpack, but you don’t need to know anything about them.

##### `cd my-app`
Switch to the app.

In the project directory, you can run:
##### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if any edits are made.<br />

##### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

#### Calculator: 
<p align="center">
  <img src="https://github.com/aishanya11/react-demo-project/blob/master/public/calculator.png">
</p>

