Lessons

1. Introduction
2. Install Tools
3. Create React App
4. Create Git Repository

5. List Products
   5.1. create products array
   5.2. add product images
   5.3. render products
   5.4. style products

6. react-router-dom

7. create Node.JS Server
   7.1. run npm init in root folder
   7.2. update package.json set type: module
   7.3. Add .js to imports
   7.4. npm install express
   7.5. create server.js
   7.6. add start command as node backend/server.js
   7.7. require express
   7.8. create route for / return backend is ready.
   7.9. move products.js from frontend to backend
   7.10. create route for /api/products
   7.11. return products
   7.12. run npm start

8. Fetch Products From Backend
   8.1. set proxy in package.json
   8.2. npm install axios
   8.3. use state hook
   8.4. use effect hook
   8.5. use reducer hook

9. Manage State By Reducer Hook
   9.1. define reducer
   9.2. update fetch data
   9.3. get state from useReducer

10. Add bootstrap UI Framework
    10.1. npm install react-bootstrap bootstrap@5.1.3
    10.2. update App.js

11. Create Product and Rating Component
    11.1. create rating component
    11.2. create product component
    11.3. use rating component in product component

12. Create Product Details Screen
    12.1. Fetch product from backend
    12.2. Create 3 column for image, info and action

13. Create Loading and Message Component
    13.1. create loading component
    13.2. use spinner component
    13.3. create message component
    13.4. create utils.js to define getError function

14. Implement Add To Cart
    14.1. create React Contexxt
    14.2. Define reducer
    14.3. create store provider
    14.4. implement add to cart button click handler

15. Complete Add To Cart
    15.1. check exist item in the cart
    15.2. check count in stock in backend

16. Create Cart Screen
    16.1. create 2 columns
    16.2. display items list
    16.3. create action column

17. Complete Cart Screen
    17.1. click handler for inc/dec item
    17.2. click handler for remove item
    17.3. click handler for checkout

18. Create Signin Screen
    18.1. Create sign in form
    18.2. add email and password
    18.3. add signin button

19. Connect To MongoDB Database
    19.1. create atlas mongodb database
    19.2. install local mongodb database
    19.3. npm install mongoose
    19.4. connect to mongodb database

mongodb+srv://quyen:quyen123456@cluster0.taps1ld.mongodb.net/amazona?retryWrites=true&w=majority

20. Seed Sample Data
    20.1. create Product model
    20.2. create User model
    20.3. create seed route
    20.4. use route in server.js
    20.5. seed sample product

21. Seed Sample Users
    21.1. create user model
    21.2. seed sample users
    21.3. create user routes

22. Create Signin Backend API
    22.1. create signin api
    22.2. npm install jsonwebtoken
    22.3. define generateToken

23. Complete Signin Screen
    23.1. handle submit action
    23.2. save token in store and local storage
    23.3. show user name in header

24. Create Shipping Screen
    24.1. create form inputs
    24.2. handle save shipping address
    24.3. add checkout wizard bar

25. Create Signin Up Screen
    25.1. create input forms
    25.2. handle submit
    25.3. create backend api

26. Implement Select Payment Method Screen
    26.1. Create input forms
    26.2. handle submit

27. Create Place Order Screen
    27.1. show cart items, payment and address
    27.2. handle place order action
    27.3. create order create api

28. Implement Place Order Action
    28.1. handle place order action
    28.2. create order create api

29. Create Order Screen
    29.1. Create backend api for order/:id
    29.2. fetch order api in frontend
    29.3. show order information in 2 cloumns

30. Pay Order By PayPal
    30.1. generate paypal client id
    30.2. create api to return client id
    30.3. install react-paypal-js
    30.4. use PayPalScriptProvider in index.js
    30.5. use usePayPalScriptReducer in Order Screen
    30.6. implement loadPaypalScript function
    30.7. render paypal button
    30.8. implement onApprove payment function
    30.9. create pay order api in backend
