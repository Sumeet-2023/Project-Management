# Full-Stack Project Management Application

This is a full-stack project management application built with **Next.js** on the client and **Express.js** with **Prisma ORM** on the server. It allows users to manage projects, tasks, teams, and timelines.

---

## Features

### Client (Frontend)

- **Task Management**: Kanban-style boards, Gantt charts, and task lists.
- **Project Dashboard**: Visualize project statuses and task distributions.
- **Dark Mode**: Supports light and dark themes.
- **Responsive Design**: Mobile and desktop-friendly layouts.

### Server (Backend)

- **RESTful APIs**: Built with Express.js to handle data operations.
- **Prisma ORM**: Seamlessly integrates with PostgreSQL for database management.
- **Modular Architecture**: Organized controllers and routes for scalability.
- **Seed Script**: Preloads the database with test data.

---

## Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **UI Components**: [MUI](https://mui.com/), [TailwindCSS](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/), [Gantt-Task-React](https://www.npmjs.com/package/gantt-task-react)

### Backend

- **Framework**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (Configured with a valid connection string)

### Environment Variables

Create `.env` files in the root directories of both the **client** and **server** with the following:

#### Client `.env`

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/
```

### Server `.env`

```
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
PORT=8000
```

---

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name/project-management-app.git
   cd project-management-app
   ```

2. Install dependencies for the **client**:

   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the **server**:

   ```bash
   cd server
   npm install
   ```

4. Set up the database:
   - Apply Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```
   - Seed the database (optional):
     ```bash
     npm run seed
     ```

---

## Running the Application

### Development Mode

Run the client and server simultaneously:

```bash
npm run start:dev
```

Alternatively, run them separately:

1. Start the **server**:

   ```bash
   cd server
   npm run dev
   ```

2. Start the **client**:
   ```bash
   cd client
   npm run dev
   ```

Access the app at [http://localhost:3000](http://localhost:3000).

### Production Mode

1. Build the **client**:

   ```bash
   cd client
   npm run build
   npm run start
   ```

2. Build and start the **server**:
   ```bash
   cd server
   npm start
   ```

---

## Project Structure

### Client

```
client/
├── src/
│   ├── app/             # Next.js pages and layouts
│   ├── components/      # Reusable UI components
│   ├── state/           # Redux store and slices
│   └── lib/
├── public/              # Static assets
└── package.json         # Client dependencies and scripts
```

### Server

```
server/
├── prisma/
│   ├── schema.prisma    # Database schema
│   ├── seed.ts          # Seed script for database
├── src/
│   ├── controllers/     # API logic for each resource
│   ├── routes/          # Express.js route definitions
│   └── index.ts         # Server entry point
└── package.json         # Server dependencies and scripts
```

---

## Scripts

### Client

- `npm run dev`: Start the client in development mode.
- `npm run build`: Build the production-ready client.
- `npm run start`: Start the production build.

### Server

- `npm run dev`: Start the server in development mode.
- `npm run build`: Compile TypeScript into JavaScript.
- `npm run start`: Start the compiled server in production.
- `npm run seed`: Populate the database with sample data.

---

## Running with Docker

### Build and Start Containers:

- From the root of the project, run:

```
docker-compose up --build
```

### Access the Application:

- Frontend: http://localhost:8080
- Backend: http://localhost:8000

### Stopping the Containers:

- To stop the containers, press Ctrl+C in the terminal or run:

```
docker-compose down
```

### Troubleshooting

- **Database Connection**: Ensure the PostgreSQL container is running and that the DATABASE_URL in your backend configuration is correct.
- **Port Conflicts**: Verify that ports 5432, 8000, and 8080 are not in use by other applications.
- **Rebuild Images**: If you update Dockerfiles or configuration settings, rebuild the containers with:

```
docker-compose up --build
```
