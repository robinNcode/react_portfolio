## Fork This

You can fork this repo to modify and make changes of your own. Please give me proper credit by linking back to [robinNcode](https://github.com/robinncode/react_portfolio). Thanks!

## Built With

My personal portfolio <a href="http://robin.adovasoft.com" target="_blank">robin.adovasoft.com</a> which features some of my github projects as well as my resume and technical skills.<br/>

This project was built using these technologies.

- React.js
- Node.js
- Express.js
- CSS3
- VsCode

## Change
You can change all the codes as per your need..

## How to deploy on github pages
- First you need to install gh-pages package in your react app. To install run this command:
```
npm install gh-pages --save-dev
```
- Then you need to add homepage in your package.json file as below:
```
"homepage": "http://yourusername.github.io/repository-name",
```
- Then you need to add some scripts in your package.json file as below:
```
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```
- Then you need to build your portfoilo by running:
```
npm run build
```
- To deploy your portfolio on github pages you need to run:
```
npm run deploy
```
- Then you need to go to your github repository settings and change source to gh-pages branch