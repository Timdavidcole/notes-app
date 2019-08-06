# notes-app
-as a user
so that I can note things down
I want to be able to create a note

-as a user
so that I can see my notes
I want to be able to see a list of the notes I've made

-as a user
so that I can see the full text of a note
I want to be able to click on a note

## Instructions for setting up the node server:

### Installing Node:
Go to your terminal and run:
```
$ brew install node
```
npm will automatically be installed when you install node.

### Setting up server
cd to the root of the project directory and run:
```
$ npm install http-server --save
$ node node_modules/http-server/bin/http-server
```

## Setting up feature testing
In this project, since we are avoiding using pre-built APIs (excluding Selenium and Node JS) we wanted to automate feature testing without using an API such as Capybara.

Therefore the following steps are necessary in order to run automated feature tests of the website:

```
npm add chromedriver selenium-webdriver

npm add mocha -D
```

Setting up a server on node will create a unique IP Address and so the feature
test needs to be changed
