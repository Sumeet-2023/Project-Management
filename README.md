
# Full-Stack Project Management Application

This is a full-stack project management application built with **Next.js** on the client and **Express.js** with **Prisma ORM** on the server. It allows users to manage projects, tasks, teams, and timelines.

---

## Features

### Client (Frontend)
- **Task Management**: Kanban-style boards, Gantt charts, and task lists.
- **Project Dashboard**: Visualize project statuses and task distributions.
- **User Authentication**: AWS Cognito-based secure authentication.
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
- **Authentication**: AWS Cognito

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (Configured with a valid connection string)
- AWS Cognito User Pool (for authentication)

### Environment Variables
Create `.env` files in the root directories of both the **client** and **server** with the following:

#### Client `.env`
```env
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-cognito-user-pool-id
NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID=your-cognito-app-client-id
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001/api/v1
```

#### Server `.env`
```env
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
PORT=3001
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

## API Endpoints

### Projects
- `GET /projects`: Fetch all projects.
- `POST /projects`: Create a new project.

### Tasks
- `GET /tasks?projectId=1`: Fetch tasks for a specific project.
- `POST /tasks`: Create a new task.
- `PATCH /tasks/:taskId/status`: Update task status.

### Teams
- `GET /teams`: Fetch all teams.

### Users
- `GET /users`: Fetch all users.
- `POST /users`: Create a new user.

### Search
- `GET /search?query=keyword`: Search tasks, projects, and users.

---
