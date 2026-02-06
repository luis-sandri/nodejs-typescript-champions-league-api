# Champions League API

## Description
This is a RESTful API for accessing information about the UEFA Champions League, built with Node.js, Express, and TypeScript.

## Technologies
- **Node.js**
- **Express.js**
- **TypeScript**
- **PostgreSQL** (or any preferred database)
- **Jest** (for testing)
- **Docker** (for containerization)
- **TypeORM** (for database interaction)

## Prerequisites
- Node.js (>= 14.x)
- npm (Node Package Manager)
- PostgreSQL (or any database of your choice)
- TypeScript

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/luis-sandri/nodejs-typescript-champions-league-api.git
   cd nodejs-typescript-champions-league-api
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables. You can create a `.env` file in the root directory based on the `.env.example` provided.
4. Run database migrations (if applicable):
   ```bash
   npm run migration:run
   ```

## How to Run
To start the development server, use:
```bash
npm run dev
```

## API Endpoints Documentation
- **GET /teams** - Retrieve all teams participating in the Champions League.
- **GET /teams/{id}** - Retrieve information about a specific team by ID.
- **GET /matches** - Retrieve all matches.
- **GET /matches/{id}** - Retrieve information about a specific match by ID.
- **POST /matches** - Create a new match (admin only).
- **PUT /matches/{id}** - Update an existing match (admin only).
- **DELETE /matches/{id}** - Delete a match (admin only).

## Project Structure
```
├── src
│   ├── controllers   # Controllers to handle the API logic
│   ├── entities       # Database entities/models
│   ├── routes         # API route definitions
│   ├── middlewares     # Custom middleware functions
│   ├── services       # Business logic
│   └── index.ts     # Entry point for the application
├── tests               # Holds test files
├── .env                # Environment configuration
├── .gitignore          # Git ignore file
├── package.json        # npm dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to UEFA for the Champions League data.
- Special thanks to the community and all contributors!