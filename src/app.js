import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors'
import helmet from 'helmet';
import morgan from 'morgan';
import { StatusCodes } from 'http-status-codes'
import productRoutes from './api/routers/products.js'
import orderRoutes from "./api/routers/orders.js"

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('combined'));

app.use("/products", productRoutes);
app.use("/orders", orderRoutes)

app.use((req, res, next) => {
      const error = new Error('not found!');
      error.status = StatusCodes.NOT_FOUND
      next(error)
})

app.use((error, req, res, next) => {
      res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
      res.json({
            message: error.message
      })
})

export default app;
