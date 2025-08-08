###Project Structure Overview

moviesdashboard/
├── movies-frontend/      → Client/React app
├── movies-backend/      → Server/Node.js + Express API
└── README.md   

Frontend is on http://localhost:3000
Backend is on http://localhost:5050

###Run App
npm start


--For Github Pages Build

From the frontend directory run the below command 
npm run build

Then run the below command from root
./deploy-to-docs.sh
