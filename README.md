Order Management System with WooCommerce Integration
This project is a PWA (Progressive Web App) for managing WooCommerce orders. It integrates with the WooCommerce site using SSE (Server-Sent Events) and utilizes a Service Worker for background tasks. The project consists of two main parts: Backend and Frontend.

Prerequisites
Before you get started, ensure you have the following installed:

Node.js
npm or yarn
A WooCommerce site with the necessary API keys
Setup Instructions
1. Environment Configuration
To set up the environment, follow these steps:

Backend
Change .env file in the root directory of the backend project.
Update the .env file with the following values:
WOOCOMMERCE_API_KEY: Your WooCommerce API key (generated in the WooCommerce admin panel).
WOOCOMMERCE_API_SECRET: Your WooCommerce API secret (generated alongside the API key).
SSE_ENDPOINT: The endpoint URL for the SSE connection.
Frontend
Change a utils file in the root directory of the frontend project.
Configure the following environment variables:
REACT_APP_SSE_URL: The URL for your SSE endpoint.
2. Create API Key in WooCommerce
To connect your project to WooCommerce, follow these steps to create an API key:

Go to your WooCommerce admin panel.
Navigate to WooCommerce > Settings > Advanced > REST API.
Click on Add Key.
Give your key a description and select the permissions (usually Read/Write).
Click on Generate API Key.
Note down the API Key and API Secret generated for your project.
3. Modify the API Key in Backend
Once you've created your API key in WooCommerce, open the .env file in the Backend folder and update the necessary environment variables with the generated API key and secret.

4. Running the Application
cd woo_backend
npm install
Start the server:
npm run server
cd woo_frontend
npm install
Start the frontend:
npm start

5. Service Worker & SSE
The project uses Server-Sent Events (SSE) for real-time communication. Ensure the backend is correctly emitting events to the SSE endpoint specified in the .env file. The Service Worker handles caching and background tasks for the PWA functionality.

Backend Controller - API Key Check
Note: The code that verifies the WooCommerce API key in the backend controller is currently commented out. If you need to enable this check, simply uncomment the relevant code in the backend controller file.

