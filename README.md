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

## Demo Video

Watch the demo video to see the application in action:

[db explore demo.webm](https://github.com/user-attachments/assets/2773629c-aed9-4925-86b3-962d1b1604a9)
