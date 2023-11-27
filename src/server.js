import app from "./app.js";
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';

dotenv.config();
const server = http.createServer(app)

//mongo db connection with the mongoose driver
mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
})
.then(() => {
      console.log('mongo db connection is sucessful')
      server.listen(process.env.PORT, () => {
            console.info(`server is now running on port http://localhost:${process.env.PORT}`)
      })
})
.catch((error) => {
      console.error("MONGO DB CONNECTION ERROR", error)
})