# RoommateAI – Polite Roommate Contract Generator

RoommateAI is a TypeScript-based full-stack web app that helps roommates generate personalized, polite living agreements using AI.

## 🧠 Features

- AI-generated roommate contracts using OpenAI's ChatGPT API.
- Clean and polite rewording of user-submitted preferences.
- SQL-backed storage of contract templates and roommate preferences.
- PDF export of finalized agreements.

## 🚀 Tech Stack

- **Frontend:** TypeScript, React
- **Backend:** Node.js, Express
- **Database:** SQLite or PostgreSQL
- **AI:** OpenAI GPT API
- **PDF Export:** `html-pdf`, `pdf-lib`, or similar

## 📁 Folder Structure

- `src/` — React frontend components
- `backend/` — Express API, OpenAI integration, SQL queries
- `public/` — Static assets
- `.env` — Store your OpenAI API key and DB connection string

## 🛠️ Setup

```bash
git clone https://github.com/yourusername/roommateai.git
cd roommateai
npm install
```

## 📄 Usage

1. Set up your environment variables in the `.env` file.
2. Run the backend server using `node backend/server.ts`.
3. Start the frontend application with `npm start` in the `src` directory.
4. Navigate to `http://localhost:3000` to access the application.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.