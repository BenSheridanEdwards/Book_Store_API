const express = require('express');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const OrdersController = require('../controllers/orders');

/**
 * @swagger
 * paths:
 *   /orders/:
 *     get:
 *       tags: ['Orders']
 *       summary: Get all orders
 *       description: Get all orders in the database - For authorization, your need a bearer token from logging in. Insert bearer followed by your token into the authorization input box below. It should look like this "bearer yourTokenHere".
 *       parameters:
 *         - in: header
 *           name: Authorization
 *           type: string
 *       responses:
 *         200:
 *           description: Receive back all orders with the productId and quantity for each order with the respective order ID.
 */

router.get('/', checkAuth, OrdersController.get_all);

/**
 * @swagger
 * paths:
 *   /orders/{orderId}:
 *     get:
 *       tags: ['Orders']
 *       summary: Get an order by ID
 *       description: Get an order by ID - For authorization, your need a bearer token from logging in. Insert bearer followed by your token into the authorization input box below. It should look like this "bearer yourTokenHere".
 *       parameters:
 *         - in: path
 *           name: orderId
 *           schema:
 *             type: string
 *           required: true
 *         - in: header
 *           name: Authorization
 *           type: string
 *       responses:
 *         200:
 *           description: Receive back all orders with the productId and quantity for each order with the respective order ID.
 */

router.get('/:orderId', checkAuth, OrdersController.get_order);

/**
 * @swagger
 * paths:
 *   /orders:
 *     post:
 *       tags: ['Orders']
 *       summary: Create a new order
 *       description: Create an order - For authorization, your need a bearer token from logging in. Enter your token into the input box below.
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: body
 *           name: order
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *             example:
 *               productId: 5eecccaf6d1cec3f61544a3f
 *               quantity: 1
 *         - in: header
 *           name: Authorization
 *           type: string
 *       responses:
 *         201:
 *           description: Order successfully created
 */

router.post('/', checkAuth, OrdersController.create_order);

router.delete('/:orderId', checkAuth, OrdersController.delete_order);

module.exports = router;
