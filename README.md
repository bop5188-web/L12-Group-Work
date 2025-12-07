# L11 Storefront Project

Node.js MongoDB Storefront with Express.js backend and AngularJS frontend.

## Setup Instructions

1. **Install Dependencies**
 
   npm install
  

2. **Start MongoDB**
   Make sure MongoDB is running on local machine

3. **Start the Server**
  
   node server.js
  

4. **Access the Application**
   Open  browser and navigate to `http://localhost:3000`

## Project Structure

```
L11/
├── server.js              # Express server with MongoDB connection
├── models/                # MongoDB Mongoose models
│   ├── Product.js
│   ├── Cart.js
│   ├── Shipping.js
│   ├── Billing.js
│   └── Return.js
└── public/                # Frontend files
    ├── home.html          # Home page
    ├── signin.html        # Sign in page
    ├── index.html         # Products page
    ├── cart.html          # Shopping cart
    ├── checkout.html      # Shipping and billing
    ├── returns.html       # Returns page
    ├── app.js             # AngularJS controllers with fetch() API calls
    └── styles.css         # CSS styling
```

## Database Collections

- **Products**: Store product information
- **Cart**: Shopping cart items
- **Shipping**: Shipping address information
- **Billing**: Billing/payment information
- **Returns**: Return request information

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a product
- `GET /api/cart` - Get all cart items
- `POST /api/cart` - Add item to cart
- `DELETE /api/cart/:id` - Remove item from cart
- `GET /api/shipping` - Get all shipping records
- `POST /api/shipping` - Create shipping record
- `GET /api/billing` - Get all billing records
- `POST /api/billing` - Create billing record
- `GET /api/returns` - Get all return requests
- `POST /api/returns` - Create return request

## Group Member Contributions

**Brielle Picard** – Node.js server setup and MongoDB connection, Products model and CRUD operations, products frontend page, initial integration testing, test plan development (T001, T002, T016, T020, T024).

**Evan Sabile** – Cart model and CRUD operations, cart frontend page, fetch API integration for cart functionality, cart testing (T003, T004, T005, T006, T017, T021).

**Dean Shuron** – Shipping and Billing models and CRUD operations, checkout page forms, form validation, shipping/billing testing (T007, T008, T009, T010, T011, T018, T022).

**Kevin Glen** – Returns model and CRUD operations, returns frontend page, returns testing, final integration testing (T012, T013, T014, T019, T023).
