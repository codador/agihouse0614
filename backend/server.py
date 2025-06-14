from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock API endpoint
MOCK_API_ENDPOINT = "https://test.com/api/search"

@app.route('/api/search', methods=['POST'])
def search():
    """
    Endpoint to forward search queries to the mock API
    """
    try:
        # Get search query from request
        data = request.get_json()
        query = data.get('query', '')
        
        if not query:
            return jsonify({"error": "No search query provided"}), 400
        
        # In a real scenario, we would forward this to the actual API
        # Here we're mocking the API call
        print(f"Forwarding search query to {MOCK_API_ENDPOINT}: {query}")
        
        # Mock response - in a real scenario, this would be:
        # response = requests.post(MOCK_API_ENDPOINT, json={"query": query})
        # return jsonify(response.json()), response.status_code
        
        # For demo purposes, return a mock response
        mock_response = {
            "results": [
                {"id": 1, "title": f"Result for {query} - Item 1", "description": "This is a sample result"},
                {"id": 2, "title": f"Result for {query} - Item 2", "description": "Another sample result"},
                {"id": 3, "title": f"Result for {query} - Item 3", "description": "Yet another sample result"}
            ],
            "total": 3,
            "query": query
        }
        
        return jsonify(mock_response), 200
        
    except Exception as e:
        print(f"Error processing search request: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5001")
    print("Debug mode is enabled - server will auto-reload when code changes")
    app.run(host='0.0.0.0', port=5001, debug=True, use_reloader=True)
