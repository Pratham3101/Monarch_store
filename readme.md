This is a full-stack web application built for Mounarch Tech Solutions & Systems Pvt. Ltd. as part of a technical assessment. It includes:

🖥️ Frontend: React.js (with responsive UI, product grid, cart, and product detail page)

🛠️ Backend: Express.js + MongoDB (cart operations via REST API)

📂 Project Structure:  
   
  project-root/
│
├── client/          # React frontend
├── server/          # Node.js + Express backend
└── README.md        # This file

 


🚀 Features
🔹 Frontend (client/)
Product Listing (fetched from FakeStoreAPI)

Product Detail Page

Add to Cart with Quantity Stepper

Responsive Navbar with Mobile Offcanvas Menu

Total Cart Calculation & UI Enhancements

🔹 Backend (server/)
Built with Express.js + MongoDB

/api/cart POST ➝ Add item to cart

/api/cart GET ➝ Get all cart items

/api/cart/:id DELETE ➝ Remove item from cart



🧰 Technologies Used :


| Area     | Tech Stack                        |
| -------- | --------------------------------- |
| Frontend | React.js, Axios, React Router DOM |
| Backend  | Node.js, Express.js, Mongoose     |
| Database | MongoDB                           |
| API      | FakeStoreAPI                      |
| Styling  | CSS3 (responsive, mobile-first)   |
| VCS      | Git & GitHub                      |


🖥️ Setup Instructions:

⚙️ Backend Setup (Node.js + MongoDB)

cd server
npm install
npm start

Runs at: http://localhost:5000\
Make sure MongoDB is running locally.


🧩 Frontend Setup (React.js):

cd client
npm install
npm start


