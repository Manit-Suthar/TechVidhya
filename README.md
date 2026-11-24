# TechVidhya 🚀

TechVidhya is an AI-powered digital literacy and tech-learning assistant designed to empower users with essential digital and technical skills through interactive chat.

---

## 🌟 Key Features

- **Interactive AI Assistant**: Powered by Google Gemini (`gemini-2.0-flash`) with structured prompts tailored for digital literacy.
- **Curated Learning Topics**: Guidance on digital payments, navigation, ticketing, email etiquette, career readiness, and basic computing.
- **Modern Web Interface**: Responsive UI built with React, React Bootstrap, and Lucide Icons.
- **Node.js / Express Backend**: Fast REST API interfacing with Google Generative AI.

---

## 📂 Project Structure

```text
code/
├── backend/
│   ├── KnowledgeBase.json      # Structured topic knowledge base
│   ├── StrictPrompt.js         # Context framing and guardrails for Gemini
│   ├── server.js               # Express API server
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/                 # Static assets & HTML template
│   ├── src/
│   │   ├── components/         # ChatWindow, InputBar, Message, TopicsPanel
│   │   ├── App.js              # Main application container
│   │   └── index.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## 🛠️ Tech Stack

- **Frontend**: React 19, React-Bootstrap, Bootstrap 5, Axios, Lucide React
- **Backend**: Node.js, Express 5, `@google/generative-ai`, CORS, Body-Parser
- **AI Model**: Google Gemini (`gemini-2.0-flash`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Configure your environment variables:
```bash
cp .env.example .env
```
Add your Gemini API key in `.env`:
```env
GEMINI_API_KEY=your_actual_gemini_api_key
PORT=5000
```

Start the backend server:
```bash
npm start
```
The backend server runs on `http://localhost:5000`.

---

### 2. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
npm start
```
The frontend application will launch at `http://localhost:3000`.

---

## 🔒 Environment & Configuration

| Variable | Description | Default |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API Key | Required |
| `PORT` | Backend server port | `5000` |

---

## 📄 License

ISC License.
