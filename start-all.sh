#!/bin/zsh

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Kill any existing processes on these ports
echo "Cleaning up any existing processes..."
lsof -ti:5000 | xargs kill -9 2>/dev/null || true
lsof -ti:3000 | xargs kill -9 2>/dev/null || true
sleep 1

# Start API server in background
echo "Starting API server on localhost:5000..."
cd "$SCRIPT_DIR/api"
dotnet run > /tmp/api.log 2>&1 &
API_PID=$!

# Start Client server in background
echo "Starting Client server on localhost:3000..."
cd "$SCRIPT_DIR/client"
npm run dev > /tmp/client.log 2>&1 &
CLIENT_PID=$!

# Wait for servers to start
echo "Waiting for servers to boot..."
sleep 4

# Open both URLs
echo "Opening browsers..."
open http://localhost:3000
sleep 1
open http://localhost:5000/swagger

echo ""
echo "✓ Servers running:"
echo "  - Client: http://localhost:3000"
echo "  - API Swagger: http://localhost:5000/swagger"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Keep script running and handle cleanup
trap "echo 'Stopping servers...'; kill $API_PID $CLIENT_PID 2>/dev/null; exit 0" INT

wait $API_PID $CLIENT_PID 2>/dev/null
