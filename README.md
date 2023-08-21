# GetStarted

Constructed using Angular 15, this web application showcases a selection of Angular's capabilities. To access the application, users can provide the username 'something@gmail.com' and the password '123456' during the login process. Once logged in, several components come into play, including Profile, User, Expenses, and Signout.

In the User component, the implementation incorporates ngx-datatable for enhanced functionality. The Expenses component employs parent-child communication for transferring conceptual data between components.

## Concepts

- Authentication is possible using the email 'something@gmail.com' and the password '123456' for login.
- Input validation and form submission within the login form are managed through Reactive Forms.
- The application employs lazy loading, enabling activation exclusively for the dashboard module when necessary.
- Data communication within expenses components is facilitated by utilizing the Input and Output decorators.
- The Auth Interceptor is responsible for appending a JWT token to every API call once a user is logged in.

### Prerequisites

- Node.js and npm must be installed on your machine.
- Angular CLI must be installed globally.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
