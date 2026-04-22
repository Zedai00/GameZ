# 🎮 GameZ – Inventory Management Application

GameZ is a full-stack inventory management application built as part of *The Odin Project (Node.js course)*. The application simulates a game store where users can manage game categories and inventory items with full CRUD functionality.

---

## 🚀 Features

- 📂 View game categories (e.g., Action, RPG, Strategy)
- 🎮 Browse games within each category  
- ➕ Add new games and categories  
- ✏️ Update existing items and categories  
- ❌ Delete items and categories with proper constraints  
- 🔍 Structured navigation between categories and items  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL  
- **Templating:** EJS (or similar view engine)  
- **ORM / Queries:** SQL (raw queries / pg)  

---

## 🗄️ Database Design

The application uses a relational database structured around two main entities:

### **Categories**
- `id` (Primary Key)  
- `name`  
- `description`  

### **Items (Games)**
- `id` (Primary Key)  
- `name`  
- `price`  
- `category_id` (Foreign Key → Categories)  
- `description`  

### Relationships:
- One **category → many items**
- Enforced using **foreign key constraints**

---

## ⚙️ Core Functionality

- Implemented full **CRUD operations** for both categories and items  
- Used SQL queries to:
  - Insert new records (CREATE)  
  - Retrieve items by category (READ with JOIN)  
  - Update game/category details (UPDATE)  
  - Delete records with constraint handling (DELETE)  

- Handled edge cases such as:
  - Preventing deletion of categories with existing items  
  - Maintaining referential integrity  

---

## 🔐 Additional Features

- Basic protection for destructive actions (admin confirmation logic)  
- Server-side validation for form inputs  

---

## 📚 Learning Outcomes

Through this project, I gained hands-on experience in:

- Designing relational databases using PostgreSQL  
- Writing SQL queries (CRUD, joins, constraints)  
- Building RESTful routes and controllers using Express.js  
- Connecting backend logic with database operations  
- Handling real-world data relationships and edge cases  

---

## 🔗 Project Repository

👉 https://github.com/Zedai00/GameZ

---

## 📌 Future Improvements

- Add authentication and role-based access control  
- Implement REST APIs for frontend integration  
- Improve UI/UX with modern frameworks (React)  
- Add search, pagination, and filtering  
