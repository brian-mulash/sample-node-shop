import express from 'express';
import { StatusCodes } from 'http-status-codes'
import Product from '../models/product.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/", (req, res, next) => {
      res.status(StatusCodes.OK).json({
            message: "Handling get request to /products"
      })
})

router.post("/", (req, res, next) => {
      const product = new Product({
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            price: req.body.price
      });
      product.save()
            .then(results => console.log(results))
            .catch(error => console.error(error))
            
      res.status(StatusCodes.CREATED).json({
            message: "Handling post request to /products",
            createdProduct: product
      })
})

router.get("/:productId", (req, res) => {
      const id = req.params.productId
      if (id === 'special') {
            res.status(StatusCodes.OK).json({
                  message: 'Handling the get request of the product with the special as id',
                  productId: id
            })
      } else {
            res.status(StatusCodes.OK).json({
                  message: 'incorrect id'
            })
      }
})


router.patch("/:productId", (req, res) => {
      res.status(StatusCodes.OK).json({
            message: "Upadated product"
      })
})


router.delete("/:productId", (req, res) => {
      res.status(StatusCodes.OK).json({
            message: "Delete product"
      })
})

export default router