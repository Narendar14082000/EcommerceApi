**Ecommerce API**

### Project Overview:

This project implements a simple Ecommerce API for managing product inventory using Node.js and MongoDB. The API provides endpoints for adding products, listing products, deleting products, and updating product quantities.

### Tech Stack:

- Node.js
- MongoDB

### Prerequisites:

1. Install Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Install MongoDB: [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

### Getting Started:


1. Install dependencies:

```bash
npm install
```

2. Set up MongoDB:

   - Make sure MongoDB is running.
   - Configure the MongoDB connection in `config.js` if needed.

### API Endpoints:

#### 1. Add Product:

- **URL:** `POST /products/create`
  
  **Request:**

  ```json
  {
    "product": {
      "name": "laptop",
      "quantity": 10
    }
  }
  ```

  **Response:**

  ```json
  {
    "data": {
      "product": {
        "name": "laptop",
        "quantity": 10
      }
    }
  }
  ```

#### 2. List Products:

- **URL:** `GET /products`

  **Response:**

  ```json
  {
    "data": {
      "products": [
        {
          "id": 1,
          "name": "laptop",
          "quantity": 10
        },
        {
          "id": 2,
          "name": "camera",
          "quantity": 5
        },
        {
          "id": 3,
          "name": "smartwatch",
          "quantity": 8
        }
      ]
    }
  }
  ```

#### 3. Delete Product:

- **URL:** `DELETE /products/:id`

  **Response:**

  ```json
  {
    "data": {
      "message": "product deleted"
    }
  }
  ```

#### 4. Update Product Quantity:

- **URL:** `POST /products/:id/update_quantity/?number=10`

  **Response:**

  ```json
  {
    "data": {
      "product": {
        "id": 1,
        "name": "laptop",
        "quantity": 20
      },
      "message": "updated successfully"
    }
  }
  ```

### Testing:

- Use Postman or any API testing tool to test the API endpoints.

## Deployment

The EcommerceAPI app is deployed and accessible at [Deployment Link](https://ecommerce-api-tzup.onrender.com). Please visit the deployment link to explore the application.

## Support

For any issues, contact me throough mail:

- [Narendar](mailto:narendarreddypaindla@gmail.com)