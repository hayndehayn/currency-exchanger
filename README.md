# Exchange Rate App

A simple web application to compare currency exchange rates using the [API-Ninjas Exchange Rate API](https://api-ninjas.com/api/exchangerate). Built with Node.js, Express, and a modern HTML/CSS/JS frontend.

## Features

- Select two currencies and get the latest exchange rate.
- UI with [Tailwind CSS](https://tailwindcss.com/).
- API documentation  via Swagger UI.
    - http://localhost:4000/api-docs for interactive API documentation.
- Server-side proxy to securely call the API-Ninjas service.

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/exchange-rate-app.git
   cd exchange-rate-app
2. **Install dependencies:**
    ```sh
    npm install
3. **Configure environment variables:**
    ```
    API_NINJAS_KEY=your_api_ninjas_key_here
    PORT=4000
4. **Start the server:**
    ```
    npm start
**Security**:
The API key is never exposed to the frontend; all requests are proxied through the backend.