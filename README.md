# 📜 Quote Generator with History

A Full Stack web application that fetches random quotes from an external API and stores every generated quote in a MongoDB database as quote history.

## 🚀 Features

- Fetch random quotes from an external API
- Display quote and author
- Save every generated quote to MongoDB
- View complete quote history
- Responsive and user-friendly interface

## 🛠️ Tech Stack

- Frontend
  - HTML5
  - CSS3
  - JavaScript

- Backend
  - Node.js
  - Express.js

- Database
  - MongoDB
  - Mongoose

- API
  - Quotable API

## 📁 Project Structure

```
Quote-Generator/
│── models/
│   └── Quote.js
│── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│── routes/
│   └── quoteRoutes.js
│── .env
│── package.json
│── server.js
```

## ⚙️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/quote-generator-with-history.git
```

2. Navigate to the project

```bash
cd quote-generator-with-history
```

3. Install dependencies

```bash
npm install
```

4. Configure the environment

Create a `.env` file and add:

```env
MONGO_URI=mongodb://127.0.0.1:27017/quotesDB
```

5. Start MongoDB

Make sure MongoDB is running on your local machine.

6. Run the application

```bash
node server.js
```

7. Open in your browser

```
http://localhost:5000
```

## 📸 Output

- Generate a random inspirational quote
- View the author's name
- Automatically save quotes to the database
- Display previously generated quotes as history

## 📌 Future Enhancements

- Search quote history
- Delete quotes
- Favorite quotes
- Dark mode
- Copy quote to clipboard
- Export quote history

## 👩‍💻 Author

**Madhulika K**

---

⭐ If you like this project, consider giving it a star on GitHub!
