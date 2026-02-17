Loom Video Link - https://www.loom.com/share/3725c78f5d3e4f84af9dce824e0b947e

🏈 NFL Draft Simulator
A full-stack NFL Draft Simulation Platform that replicates the real NFL Draft experience using a custom draft engine, AI-controlled team logic powered by Groq AI, and a modern Material UI interface.

Designed with modular architecture, production deployment, and future scalability in mind.

🌐 Live Deployment

Frontend: Deployed on Vercel

Backend API: Deployed on Render (Free Tier)

⚠️ Note:
The backend is hosted on Render’s free plan.
Render services automatically sleep after 15 minutes of inactivity.
The first request after inactivity may take a few seconds to wake up the server.

📌 Overview

The NFL Draft Simulator allows users to:

Select their favorite NFL team

Simulate a structured multi-round draft

Make picks for their selected team

Compete against AI-controlled teams

Track draft history in real-time

Reset or fully restart the draft

The system replicates real-world draft mechanics, including pick order, round progression, and player availability tracking.

🚀 Core Features
🎯 Draft Simulation

Multi-round draft engine

Sequential pick management

Automatic round transitions

Player pool management

👤 User Interaction

Team selection interface

User-controlled picks

Live draft history tracking

🤖 AI-Powered Team Logic

/api/ai-pick endpoint

Decision model powered by Groq AI

Basic best-available-player strategy

Fallback logic for reliability

AI logic abstraction inside aiService.js

🎨 Modern UI

Built using Material UI (MUI) component library

Reusable UI components

Card-based structured layout

Responsive design principles

🔁 System Controls

Draft reset

Full state reset

In-memory state management

🖥️ Tech Stack
Frontend

React (Vite)

JavaScript (ES6+)

Material UI (MUI Components & Styling System)

Modular Component Architecture

Backend

Node.js

Express.js

RESTful API design

Custom Draft Engine (draftEngine.js)

AI Service Layer (aiService.js)

Groq AI integration for decision modeling

Deployment

Frontend hosted on Vercel

Backend API hosted on Render (Free Tier)

🏗️ System Architecture
User (Browser)
      ↓
Vercel (React Frontend)
      ↓
Render (Express Backend API)
      ↓
Draft Engine
      ↓
AI Service (Groq Decision Model)
      ↓
JSON Data Store

Architectural Decisions

Clear separation of frontend and backend

AI logic isolated in aiService.js

Draft state centralized in draft engine

API-driven state updates

Modular, scalable component structure

📂 Project Structure
nfl-draft-simulator/
│
├── client/                         # React + Vite Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── data/
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── server/                         # Express Backend
│   ├── data/
│   │   ├── players.js
│   │   └── teams.js
│   ├── draftEngine.js
│   ├── aiService.js
│   ├── index.js
│   └── package.json
│
└── README.md

⚙️ Local Development Setup
Clone Repository
git clone https://github.com/Anshuman2341/nfl-mock-draft-simulator.git
cd nfl-draft-simulator

Install Dependencies

Backend:

cd server
npm install


Frontend:

cd client
npm install

Run Locally

Start Backend:

cd server
node index.js


Start Frontend:

cd client
npm run dev

🔁 API Endpoints
Method	Endpoint	Description
GET	/api/state	Retrieve current draft state
POST	/api/pick	Submit user pick
POST	/api/ai-pick	Execute AI-controlled team pick
POST	/api/reset-draft	Reset current draft
POST	/api/full-reset	Full reset of entire draft system
🧠 AI Decision Model

The AI pick system:

Evaluates available players

Uses Groq AI for basic decision modeling

Updates draft history and state server-side

This ensures controlled simulation behavior while allowing future expansion into more advanced analytics.

📈 Future Roadmap
UI / UX Improvements

Enhancing UI/UX using additional modern React libraries

Advanced animations and interactive transitions

Improved draft board visualization

Data & Forms

Add a form interface to create new players

Add a form to add new teams dynamically

Admin panel for managing draft data

Database Integration

Integrate MongoDB for persistent storage

Store draft history permanently

Store user sessions and team selections

Enable long-term draft analytics

AI Expansion

Implement an AI assistant chat

Real-time pick recommendations

Player comparison insights

Data-driven suggestions based on collected draft history

Future predictive analytics system

⚠️ Current Limitations

In-memory draft state (no persistent DB yet)

Render free-tier backend sleeps after 15 minutes of inactivity

AI model is basic decision logic (not predictive ML yet)

No authentication system

🤝 Contributing

Contributions are welcome.

Fork the repository

Create a feature branch

Commit changes

Open a Pull Request

Please maintain:

Clean code structure

Modular components

No breaking API changes

👨‍💻 Author

Anshuman Singh Sisodia
Full Stack Developer
