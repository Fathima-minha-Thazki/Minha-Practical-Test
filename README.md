# Appointment Booking System

This project is an **Appointment Booking System** consisting of a **backend** and **frontend**.

## Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (latest version)
- **MySQL** (for the database)
- **Git** (to clone the repository)
- **VS Code** (or any other text editor)

## Installation

### 1. Clone the Repository
Clone this repository to your local machine by running the following command in your terminal:

```bash
git clone https://github.com/Fathima-minha-Thazki/Minha-Practical-Test.git 
```

### 2. Navigate to the Project Folder
Once the repo is cloned, navigate into the project folder:

```bash
cd Minha-Practical-Test
```

Open the project in VS Code:

```bash
code .
```

### 3. Set Up Backend
1. Open a new terminal and navigate to the backend directory:

```bash
cd backend
```
2. Install Dependencies:
Run the following command to install the necessary packages:

```bash
npm install
```

3. Configure .env File:
Open the .env file in the backend directory.
Change the MySQL password in the DB_PASSWORD variable to match your local MySQL database password.
Example:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=appointments
```

4. Create Database:
Make sure you have MySQL installed and running. Open MySQL Workbench or use the command line to create a database:

```bash
CREATE DATABASE appointments;
```

You don’t need to create the tables manually, as they will be automatically created by Sequelize (if you have set up your models correctly).

5. Run the Backend:
In the terminal, run the following command to start the backend server:

```bash
node server.js
```
The backend should now be running on http://localhost:5000.

### 4. Set Up Frontend
1. Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

2. Install Dependencies:
Run the following command to install the necessary packages for the frontend:

```bash
npm install
```

3. Run the Frontend:
To start the frontend server, run:

```bash
npm start
```

This will start the React app on http://localhost:3000.

### Troubleshooting
If the backend server doesn’t start:

Make sure you have MySQL running and the database is created.
Double-check the .env file for correct MySQL credentials.
If you encounter issues with the frontend:

Ensure that you have installed all dependencies by running npm install in the frontend directory.

### Conclusion
You should now have both the backend and frontend running locally.
Backend is accessible at http://localhost:5000, and Frontend at http://localhost:3000.