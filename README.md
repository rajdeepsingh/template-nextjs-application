# Example Next.js with TypeScript

## Getting Started

This is a Next.js project bootstrapped with `create-next-app` and TypeScript. The project is a simple example of how to use Next.js with TypeScript. It follows a standard project structure and uses ESLint and Prettier to enforce code style.

### Prerequisites

- [Node.js >= 20.11.0](https://nodejs.org/en/download/)
- [Pnpm](https://pnpm.io/installation)
- [NVM](https://nvm.sh) (optional)

### Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Directory Structure

- `src/`: This is the main directory where all the source code of the application resides.
  - `app/`: Contains the main application routing logic.
  - `common/`: Contains common and shared components used across the application.
  - `constants/`: Holds constant values that are used throughout the application.
  - `dataSources/`: Contains files related to data sources of the application.
  - `features/`: Contains code related to different features of the application. Each of the features can contain its own components, hooks, constants and logic.
  - `hooks/`: Contains custom React hooks.
  - `lib/`: Contains wrapper functions for third-party libraries.
  - `services/`: Contains services used in the application, like API clients. Services are usually tied to a specific feature and uses data sources to fetch data.
  - `utils/`: Contains utility functions that are used across the application.
- `public/`: Contains static files that are served by the application.

### Styling

The project uses Tailwind CSS for styling. Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. It is used to style the components and pages of the application.

To learn more about Tailwind CSS, take a look at the following resources:

- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS features and API.
- [Tailwind CSS Play](https://play.tailwindcss.com) - an interactive Tailwind CSS playground.

### Testing the Application

To run the tests, run the following command:

```bash
pnpm test
```

This will run the tests using Jest.

### Formatting and Linting

The project uses Prettier and ESLint to enforce code style. It also uses Husky to run the linters and formatters before committing code. So, you don't need to worry about running these commands manually but you can run them manually if you want.

Note that the project enforces absolute imports. This means that you should import files using the absolute path from the `src` directory. For example, to import a file from the `features` directory, you should use the following import statement:

```typescript
import { useFeature } from '@features/feature/hooks';
```

For all the available aliases and to add new ones, check the `tsconfig.json` file.

To format the code, run the following command:

```bash
pnpm format
```

To lint the code, run the following command:

```bash
pnpm lint
```

To fix linting issues, run the following command:

```bash
pnpm lint:fix
```

## Deployment

### Building the Application

To build the application, run the following command:

```bash
pnpm build:dev
```

This will compile the TypeScript code and build the Next.js application. The output will be in the .next directory.

### Running the Application

To run the application in production mode, run the following command:

```bash
pnpm start:dev
```

This will start the application in production mode.

### Deploying the Application

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
