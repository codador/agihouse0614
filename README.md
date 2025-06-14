# Search Application

A simple web application with a Python Flask backend and React frontend. The application features a search bar that forwards search queries to a mock API endpoint.

## Project Structure

```
/agihouse0614
  /backend           # Python Flask server
    server.py        # Backend API server
    requirements.txt # Python dependencies
  /frontend          # React frontend application
    /src
      /components    # React components
      App.js         # Main React application
      index.js       # React entry point
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```
   python server.py
   ```
   The server will run on http://localhost:5000

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

1. Enter a search query in the search bar and click "Search"
2. The React frontend sends the query to the Flask backend
3. The backend would normally forward this to test.com API (mocked in this implementation)
4. Search results are displayed on the page

## Technologies Used

- Backend: Python, Flask
- Frontend: JavaScript, React
- Communication: RESTful API
