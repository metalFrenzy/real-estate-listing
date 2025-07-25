# Nawy Apartment Listing App

This project is a full-stack application for listing apartments, built with:

- **Backend:** NestJS (TypeScript) with PostgreSQL
- **Frontend:** Next.js
- **Database:** PostgreSQL
- **Containerization:** Docker + Docker Compose

---

## 🚀 Getting Started

---

## ⚡ Local Setup (Without Docker)

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/yourusername/nawy-apartment-listing.git](https://github.com/metalFrenzy/nawy.git
```

### 3️⃣ Install Dependencies

Run the following in both the **backend** (`nawy-web`) and **frontend** (`nawy-nextjs`) directories:

```sh
npm install
```

### 4️⃣ Run the Database (PostgreSQL)

Ensure PostgreSQL is running on port **5432** with the credentials:

- **User:** `postgres`
- **Password:** `1517`
- **Database Name:** `apartment_db`

### 6️⃣ Start Backend

```sh
npm run start:dev
```

### 7️⃣ Start Frontend

In a new terminal window, navigate to the **frontend** (`nawy-nextjs`) and run:

```sh
npm run dev
```

The app should be running at [http://localhost:3000](http://localhost:3000).

---

## 🐳 Running with Docker

### 1️⃣ Build and Start the Containers

Run the following command from the project root:

```sh
docker-compose up --build
```

This will:

- Start the **backend** on port **4000**
- Start the **frontend** on port **3000**
- Start **PostgreSQL** on port **5432**

### 2️⃣ Check Running Containers

To verify everything is running, use:

```sh
docker ps
```

### 3️⃣ Access the App

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:4000](http://localhost:4000)

---

## 🛠️ Stopping the Application

To stop the local development servers, press `CTRL + C` in each terminal.

To stop Docker containers, run:

```sh
docker-compose down
```


