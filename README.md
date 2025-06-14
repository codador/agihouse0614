# Chat Application

A simple web application with a React frontend featuring a chat interface that forwards messages to a mock API endpoint through a service layer.

## Project Structure

```
/agihouse0614
  /frontend          # React frontend application
    /src
      /components    # React components
      /services      # API service layer
        api.service.js # Service for handling chat API calls
      App.js         # Main React application
      index.js       # React entry point
```

## Setup Instructions

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The React app will run on http://localhost:3000

## How It Works

1. Enter a message in the input field and click "Send"
2. The React frontend passes the message to the API service layer
3. The service layer mocks an API call to test.com (simulated in this implementation)
4. Chat responses are displayed on the page

## Technologies Used

- Frontend: JavaScript, React
- Architecture: Service-oriented frontend with mock API integration
