# Angular Clean Architecture

<p align="center">
<img src="./assets/images/angular-clean-architecture-banner.png?raw=true" style="max-width: 100%; width: 600px;" />
</p>
<p align="center" style="margin-top: 10px;">An <b>Angular scaffold</b> with a clean architecture that is easy to understand.</p>

## Features

- 📁 Clean architecture. Layered file structure
- 🛡️ TypeScript bulletproof typing
- 🎨 Design System and UI: [Tailwind CSS](https://tailwindcss.com/)
- 🖌️ Code format: [angular-eslint](https://github.com/angular-eslint/angular-eslint?tab=readme-ov-file#quick-start)
- 🧰 State Manager: [NgRx](https://ngrx.io/)
- 🐩 Git hooks: [Husky](https://www.npmjs.com/package/husky)

<hr>

## 📁 Project File Structure

> ⚠️ What makes the implementation of the clean architecture concept more difficult in my opinion is that since it is defined theoretically, each person implements it using different terminology or omitting/adding some layers or pieces to simplify it or continue to make it more complex.

For this reason, I think it is important to emphasize the documentation that accompanies the architecture to avoid obstacles with the rest of the people who are going to work with this system.

I briefly explain each of the four layers that make up clean architecture within the /src folder:

```
└── /src
    └── /app
        ├── /core                      # Core bounded context
        │   └── /presentation
        └── /post                      # Post bounded context
            ├── /domain
            ├── /application
            ├── /infrastructure
            └── /presentation
```

### Domain

This layer contains all the enterprise business rules: entities, specifications...

### Application

This layer contains the use cases of the bounded context.

### Infrastructure

This layer contains the technical details (implementation) of the domain layer and third parties integrations.

### Presentation

This layer contains the React source code: views and controllers (Mobx controllers).

### Referencesw

- https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

<hr>

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
