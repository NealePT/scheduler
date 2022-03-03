# Interview Scheduler

## Project Description

Interview Scheduler is a Single Page Application built for creating and tracking student interviews. The app uses React's built-in and custom hooks that allow users to create, edit, and delete appointments. Data persists on an API server, using a PostgreSQL database to store the information. This project follows the best practices of test-driven development, using jest and cypress so components can be tested in isolation or using end-to-end testing. 


## Project Features

* Navbar items at the side are color coded depending on availability of appointments on that day. 
* Each day displays the number of interview spots available, and updates in real time when appointments are creted or deleted.
* After clicking a day, the user can see the appointments that are scheduled for that day.
  * From there, the user can create an appointment in an available time slot.
    * The user will be asked to provide a name and select an interviewer from a list. If a name is not entered or an interviewer is not selected, an error message will display informing the user of their mistake.
  * The user can also edit or delete already created appointments. 
* Data will persists through refreshes of the page as it is stored on the API server.


### Main View

!["Main view of the homepage"](https://github.com/NealePT/scheduler/blob/master/docs/mainPage.png)
*User can select a day on the left side, which will display the appointments for that day.*


!["Hover view of item"](https://github.com/NealePT/scheduler/blob/master/docs/hoverItem.png)
*View of list item when hovered. In the bottom right there are icons that can be clicked to edit or delete the appointment.*


!["Create/Edit Item"](https://github.com/NealePT/scheduler/blob/master/docs/editItem.png)
*View of list item when being created/edited. The user clicks on an interviewers picture to select them.*


!["Delete confirmation"](https://github.com/NealePT/scheduler/blob/master/docs/deleteItem.png)
*View of the main page after a user has clicked delete on an item. If the user clicks confirm the item is deleted and the time slot becomes available.*


## Setup
* Install all dependencies (using the `npm install` command).
* Clone and install the [server](https://github.com/lighthouse-labs/scheduler-api).
* Run both the server and client at the same time.


## Dependencies 

* "axios": "^0.26.0",
* "classnames": "^2.2.6",
* "normalize.css": "^8.0.1",
* "prop-types": "^15.8.1",
* "react": "^16.9.0",
* "react-dom": "^16.9.0",
* "react-scripts": "3.0.0"

## Dev Dependencies 

* "@babel/core": "^7.4.3",
* "@storybook/addon-actions": "^5.0.10",
* "@storybook/addon-backgrounds": "^5.0.10",
* "@storybook/addon-links": "^5.0.10",
* "@storybook/addons": "^5.0.10",
* "@storybook/react": "^5.0.10",
* "@testing-library/jest-dom": "^4.0.0",
* "@testing-library/react": "^8.0.7",
* "@testing-library/react-hooks": "^7.0.2",
* "babel-loader": "^8.0.5",
* "node-sass": "^4.14.0",
* "react-test-renderer": "^16.9.0"



## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
