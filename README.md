# Our Shelves 

**Team Members:**
- Alston
- Daniel

---

## Project Description

Our Shelves is a reading tracker web application that allows users to search for books using the Open Library API, add them to a personal shelf stored in a MySQL database, view theier saved books, and manage their collection.

**Current MVP Features (Sprint 2):**
- Search for books by title (Open Library API)
- Add books to personal library
- View saved books
- Delete books from library
- Connected frontend (React) and backend (Express) with a shared database (MySQL)

**Future Features (Planned):**
- Add personal notes to books
- Track bookmarkes (reading progress)
- Organize books into shelves
- Add friends and share notes privately
- Theme customization

---

## Tech Stack

  Layer               Technology
- Frontned            React (Vite), React Router
- Backend             Node.js, Express.js
- Database            MySQL (using `mysql2/promise`)
- External API        Open Library API
- Deployment PM2      Ubuntu VM + PM2

---

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js (v18+)]
- [npm]
- [MySQL]
- [PM2]

---

## Environment Variables

### Backend `.env` file
```
DB_HOST = localhost
DB_PORT = 3306
DB_PASSWORD=StrongPassword123!
DB_NAME=ourshelves
PORT=3000
```

### Frontend `.env` file
```
VITE_API_URL=http://localhost:3000
```

When deploying, replace `localhost` with your server's IP or domain name.

---

## Local Development Setup

### 1. Clone the Respository
```bash
git clone http://github.com/your-username/our-shelves.git
cd our-shelves
```

### 2. Install Dependencies
```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Create `.env` files
Create `.env` in both `backend/` and `frontend/` as shown in the Environment Variables section above

### 4. Set up MySQL Database
Login to your MySQL Server:
```base
mysql -u root -p
```

Run:
```sql
CREATE DATABASE ourshelves;
USE ourshelves;
```

### 6. Start the Frontend
```bash
cd backend
npm run dev
```

### 7. Start the Backend
```
cd frontend
npm run dev
```

---

## API Endpoints

- GET     `/books`                    Fetch all saved books
- POST    `/books`                    Add a new book
- DELETE  `/books:/id`                Delete a book by ID
- GET     `/books/search/:bookName    Search books through Open Library API

---








## Quick Overview 
### What is it?  
Reading tracking app with light social features.   
### Who would use it? What value would it provide?**

* Audience: Readers who write in the margins and leave sticky notes, but want to do it digitally with their friends.  
* Easy to share

### What’s the MVP?

- User login  
- Users can add books to their shelf  
- Users can add notes to their books  
- User can update bookmark  
- Users can filter view of notes:  
  - By person (just them/friends)  
  - By page number

![][image1]  
## Project Overview 

Our Shelves is a low-stress space to visually track books you are reading and leave “sticky notes” in each book with page numbers, tracking page numbers with a bookmark. Friends can view your shelf. If you are reading the same book, you can share notes.

Example: John Doe is on page 57 of The Great Gatsby and writes “I can’t believe he said that\!”, Jane Doe is on page 130 and writes “Oh no\!” John can see that Jane left a note on page 130 and can choose to read it or wait until he’s also on/past page 130.)

Problem Statement:   
Readers like to track what they are reading and have social features without using an app that’s entirely social-oriented. Our app captures the experience of reading a book with a friend.

Target Users:   
People who like to track their reading and want to share some of their reading with some people (not just public).

## Feature Breakdown  
MVP Features: Core CRUD functionality that could be built in the first sprint or two

* User login  
* Users can add books to their shelf  
* Users can add notes to their books  
* User can update bookmark  
* Users can filter view of notes:  
  * By person (just them/friends)  
  * By page number

Extended Features: Additional functionality for later development phases

* Users can add friends, who have to accept invite  
* Users can remove friends  
* User can add shelves and organize books so they display based on shelf   
* Highly customizeable interface\! Modify color scheme / add plants, etc.

## Data Model Planning  
Core Entities: 

* Users  
* Shelves (example: Sci-Fi shelf)  
* Books (example: Frankenstein by Mary Shelley)  
* Bookmark (example: p. 33\)  
* Notes (example: p 142 “”)

Key Relationships: How do these entities connect?

- Each user has a shelf  
- Each user has other users as “friends”  
- Each shelf has books  
- Each book has a bookmark  
- Each book has notes

CRUD Operations: Specify what users can Create, Read, Update, and Delete  
Create books  
Create \+ Update bookmarks  
CRUD Notes

## User Experience   
User Flows: How do users accomplish key tasks?  
Wireframes/Sketches: Basic layout ideas for main screens
