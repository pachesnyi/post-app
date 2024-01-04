# Angular Post App

This Angular application utilizes the [jsonplaceholder](https://jsonplaceholder.typicode.com/) API to fetch 100 posts and renders them in a grid layout of 10 rows by 10 columns. 
Each post is displayed in a separate component, appearing as squares on the page.

## Features

- **Default View:**
  - Initially, the application displays the title of each post.

- **Interactive Squares:**
  - Clicking on a square toggles the display content.
  - Sequence: Title -> UserId -> Id (looping back to Title).
  - Only one square at a time shows detailed information.

- **Top Page Indicator:**
  - The top of the page displays the ID of the currently active post.

## State Management

The application incorporates state management to handle the dynamic display of post details. NgRx has been used for this purpose, ensuring a structured and efficient state management approach. However, feel free to use any other state management solution that aligns with your preferences.

## Bonus: Test Coverage

To ensure the reliability and stability of the application, comprehensive test coverage has been implemented. This includes unit tests, integration tests, and end-to-end tests. This extra effort enhances the robustness of the codebase, providing a solid foundation for future development and maintenance.

## Getting Started

1. Clone the repository: `git clone https://github.com/pachesnyi/post-app.git`
2. Navigate to the project directory: `cd post-app`
3. Install dependencies: `npm install`
4. Run the application: `ng serve`
5. Open your browser and go to `http://localhost:4200/` to view the app.

## Contributions

We welcome contributions and feedback. If you have any suggestions, issues, or enhancements, please open an issue or submit a pull request.
