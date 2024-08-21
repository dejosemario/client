# Eventful - Ticketing Platform Frontend

Eventful's frontend is a user-friendly interface for interacting with the ticketing platform. It provides a seamless experience for browsing events, purchasing tickets, and managing user accounts.

## Features

- **Event Browsing**: Explore and search for upcoming events.
- **Ticket Purchase**: Securely purchase tickets using Stripe.
- **User Management**: Register, login, and manage user profiles.
- **Firebase Integration**: Utilize Firebase for authentication and storage.

## Technologies Used

- **Frontend**: React, Vite, TypeScript
- **Deployment**: Vercel

## Usage

- Visit the deployed frontend application at [https://de-eventful.vercel.app](https://de-eventful.vercel.app)

## Installation

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/eventful.git
    ```

2. Navigate into the frontend directory:
    ```bash
    cd eventful/client
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the **frontend** directory and add your environment variables:
    ```
    VITE_BACKEND_URL=http://localhost:8000/api/v1
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_firebase_app_id
    VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
    VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
    ```

5. Start the development server:
    ```bash
    npm run dev
    ```
