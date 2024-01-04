# Angular Post App

This Angular application utilizes the [jsonplaceholder](https://jsonplaceholder.typicode.com/) API to fetch 100 posts and renders them in a grid layout of 10 rows by 10 columns. 
Each post is displayed in a separate component, appearing as squares on the page.

## Features

- **Default View:**
  - Initially, the application displays the title of each post.

- **Interactive Squares:**
  - Clicking on a square toggles the display content.
  - Sequence: UserId -> Id -> Body (looping back to UserId).
  - Only one square at a time shows detailed information.

- **Top Page Indicator:**
  - The top of the page displays the ID of the currently active post.

## Demo

Application was hosted on Netlify. Please check it using this [link](https://scintillating-croquembouche-384691.netlify.app/).

## State Management

New NgRx signal store has been used for handling data fetching and state for selected post.

## Bonus: Test Coverage

To ensure the reliability and stability of the application, partial test coverage has been implemented. This includes unit tests for some components. This extra effort enhances the robustness of the codebase, providing a solid foundation for future development and maintenance.

## Getting Started

1. Clone the repository: `git clone https://github.com/pachesnyi/post-app.git`
2. Navigate to the project directory: `cd post-app`
3. Install dependencies: `npm install`
4. Run the application: `ng serve`
5. Open your browser and go to `http://localhost:4200/` to view the app.
