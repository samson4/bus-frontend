# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### Environment Variables

Create a `.env` file in the root of the project and provide the following variable:

```properties
NUXT_BACKEND_URL="http://localhost:8000"
```

This variable specifies the backend URL for the application.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Creating a New Project

To create a new project:

1. Open the "Create New Project" modal.
2. Enter the **Project Name**.
3. Choose the **Database Type** from the dropdown (e.g., PostgreSQL, MySQL).
4. Provide the **Database Connection String** in the input field.
5. Click the **Create Project** button.

Once the project is created, click on the **Open Project** button to be redirected to the Studio. In the Studio, you can explore your database schemas, tables, and data.

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
