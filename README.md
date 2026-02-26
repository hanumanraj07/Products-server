# Products-server

A simple Express.js server for managing e-commerce products. This server provides a RESTful API to perform CRUD operations on a product catalog, search by category, and update product details like stock and price.

## Features

- **Get all products**: Retrieve the full list of products.
- **Get product by ID**: Fetch details for a specific product.
- **Get products by category**: Filter products based on their category.
- **Add new products**: Endpoint to add new items to the catalog.
- **Update product details**: Fully update a product or specific fields like stock and price.

## Tech Stack

- **Node.js**
- **Express.js**
- **CORS** (Cross-Origin Resource Sharing)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm (Node Package Manager)

### Installation

1. Clone or download the repository.
2. Navigate to the project directory:
   ```bash
   cd ecommerce/Products-server
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Server

Start the server using `node`:
```bash
node index.js
```
The server will run on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/products` | Get all products |
| **GET** | `/products/:id` | Get a specific product by ID |
| **GET** | `/products/category/:categoryName` | Get products by category name |
| **POST** | `/products` | Add a new product |
| **PUT** | `/products/:id` | Update an existing product |
| **PUT** | `/products/:id/stock` | Update the stock of a product |
| **PUT** | `/products/:id/price` | Update the price of a product |

### Sample Product Object

```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

## Authors

- Hanuman Singh