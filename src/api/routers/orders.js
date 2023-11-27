import express from 'express';
import { StatusCodes } from 'http-status-codes';

const router = express.Router();

router.get("/", (req, res, next) => {
      res.status(StatusCodes.OK).json({
            message: "Handling get request to /orders"
      })
})

router.post("/", (req, res, next) => {
      const order = {
            productId: req.body.productId,
            quantity: req.body.quantity
      }
      res.status(StatusCodes.CREATED).json({
            message: "Handling post request to /orders",
            order: order
      })
})

router.get("/:orderId", (req, res) => {
      const id = req.params.orderId
      if (id === 'special') {
            res.status(StatusCodes.OK).json({
                  message: 'Handling the get request of the order with the special as id',
                  orderId: id
            })
      } else {
            res.status(StatusCodes.OK).json({
                  message: 'incorrect id'
            })
      }
})


router.patch("/:orderId", (req, res) => {
      res.status(StatusCodes.OK).json({
            message: "Upadated order"
      })
})


router.delete("/:orderId", (req, res) => {
      res.status(StatusCodes.OK).json({
            message: "Delete order"
      })
})

export default router