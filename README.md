# 📦 ITI-Task-ServerByExpress - Express MVC

🛠️ Simple CRUD Operations for Products (with Error Handling)

## Project Structure (MVC Pattern)
- `app.js` - Main application entry point
- `routes/` - Contains all route definitions
- `models/` - Responsible for importing data and managing data operations, simulating Mongoose-like behavior
- `controllers/` - Contains business logic
- `middlewares/` - Contains middleware functions
- `util/` - Contains constants

## API Endpoints
### Products
- `GET /api/products` - Retrieve all products
- `GET /api/products/:id` - Retrieve a product by ID
- `POST /api/products/add` - Add a new product
- `PUT /api/products/update/:id` - Update an existing product
- `DELETE /api/products/delete/:id` - Delete a product by ID

## Error Handling
- Validates product data before creating/updating (400 Bad Request for invalid data)
- Checks if product exists before updating/deleting (404 Not Found if product doesn't exist)
- Validates ID format before processing (400 Bad Request for invalid ID format)
- Responds with appropriate status codes and error messages
- Handles invalid routes (404 Not Found for undefined routes)

## How to Run
1. Install dependencies:
```bash
npm install
```
2. Start the server:
```bash
npm start
```
3. Server will run on port 3000 by default

## Error Messages
### Client Errors (4xx)
- ❌ 400 Bad Request: Invalid Request! (Missing required fields or invalid data)
- ❌ 400 Bad Request: Invalid ID! (Invalid ID format)
- ❌ 404 Not Found: Product Is Not Found! (Product doesn't exist)
- ❌ 404 Not Found: Page Not Found (Invalid route)

### Success Messages (2xx)
- ✅ 200 OK: Product Added Successfully
- ✅ 200 OK: Product Updated Successfully
- ✅ 200 OK: Product Deleted Successfully