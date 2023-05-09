// .env variables
if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}

// SETUP
import App from "express";
const app = App()
const PORT = process.env.PORT || 3000


// MIDDLEWARE


// ENDPOINTS


// START SERVER
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
})