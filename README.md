# 📞 Contacts REST API

This is a simple REST API for managing a contact list, built with Node.js and Express.js. The API allows you to view, add, delete, and update contacts stored in a JSON file.

## 🔧 Technologies Used

- Node.js
- Express.js
- Joi – for request validation
- Morgan – HTTP request logger
- CORS – Cross-Origin Resource Sharing support
- Postman – API testing tool

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/goit-node-rest-api.git
cd goit-node-rest-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node app.js
```

Server will run at: [http://localhost:3000](http://localhost:3000)

## 📌 Available API Endpoints

### GET `/api/contacts`

Returns an array of all contacts.

### GET `/api/contacts/:id`

Returns a single contact by ID.  
If not found:

```json
{ "message": "Not found" }
```

### POST `/api/contacts`

Creates a new contact.  
Example request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890"
}
```

### PUT `/api/contacts/:id`

Updates an existing contact.  
You can pass any of the fields: `name`, `email`, `phone`.

Example:

```json
{
  "email": "newemail@example.com"
}
```

If no fields are provided:

```json
{ "message": "Body must have at least one field" }
```

### DELETE `/api/contacts/:id`

Deletes a contact by ID.  
If not found:

```json
{ "message": "Not found" }
```

## ✅ Validation Rules

- All fields are required when creating a contact.
- At least one field is required when updating a contact.
- Errors return status `400` with a descriptive message.
