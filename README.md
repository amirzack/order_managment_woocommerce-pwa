
# Order Management System with WooCommerce Integration 🚀

This project is a **PWA** (Progressive Web App) for managing WooCommerce orders. It integrates with the WooCommerce site using **SSE** (Server-Sent Events) and utilizes a **Service Worker** for background tasks. The project consists of two main parts: **Backend** and **Frontend**.

## Prerequisites 🛠️

Before you get started, ensure you have the following installed:

- **Node.js**
- **npm** or **yarn**
- A **WooCommerce** site with the necessary API keys

## Setup Instructions ⚙️

### 1. Environment Configuration

#### Backend

To set up the environment in the **Backend** project, follow these steps:

1. **Change `.env` file** in the root directory of the backend project.
2. Update the `.env` file with the following values:
   - `WOOCOMMERCE_API_KEY`: Your WooCommerce API key (generated in the WooCommerce admin panel).
   - `WOOCOMMERCE_API_SECRET`: Your WooCommerce API secret (generated alongside the API key).
   - `SSE_ENDPOINT`: The endpoint URL for the SSE connection.

#### Frontend

For the **Frontend** project:

1. Change the **`utils` file** in the root directory.
2. Configure the following environment variables:
   - `REACT_APP_SSE_URL`: The URL for your SSE endpoint.

### 2. Create API Key in WooCommerce

To connect your project to WooCommerce, follow these steps to create an API key:

1. Go to your **WooCommerce admin panel**.
2. Navigate to **WooCommerce > Settings > Advanced > REST API**.
3. Click on **Add Key**.
4. Give your key a description and select the permissions (usually `Read/Write`).
5. Click on **Generate API Key**.
6. Note down the **API Key** and **API Secret** generated for your project.

### 3. Create a Webhook in WooCommerce

In addition to the API key, you need to create a webhook in WooCommerce to notify your system when a new product is created. Follow these steps:

1. Go to your **WooCommerce admin panel**.
2. Navigate to **WooCommerce > Settings > Advanced > Webhooks**.
3. Click on **Add Webhook**.
4. Set the **Webhook Name** (e.g., "New Product Created").
5. For **Topic**, select **Product created**.
6. Set the **Delivery URL** to the endpoint where your backend listens for the webhook (e.g., `http://your-backend-url/products/create`).
7. Click **Save Webhook**.

### 4. Modify the API Key in Backend

Once you've created your API key and webhook in WooCommerce, open the `.env` file in the **Backend** folder and update the necessary environment variables with the generated API key and secret.

### 5. Running the Application

#### Backend

1. Install dependencies:

```bash
cd woo_backend
npm install
```

2. Start the server:

```bash
npm run server
```

#### Frontend

1. Install dependencies:

```bash
cd woo_frontend
npm install
```

2. Start the frontend:

```bash
npm start
```

### 6. Service Worker & SSE

The project uses **Server-Sent Events (SSE)** for real-time communication. Ensure the backend is correctly emitting events to the SSE endpoint specified in the `.env` file. The **Service Worker** handles caching and background tasks for the PWA functionality.

### 7. Backend Controller - API Key Check

**Note:** The code that verifies the WooCommerce API key in the backend controller is currently commented out. If you need to enable this check, simply uncomment the relevant code in the backend controller file.

---

## Folder Structure

- **/woo_backend**: The Node.js server that handles communication with WooCommerce and serves the API.
- **/woo_frontend**: The React-based frontend that displays order data and interacts with the backend.

---

This should provide all the necessary details to configure and run your project. Feel free to reach out if you need further assistance!

