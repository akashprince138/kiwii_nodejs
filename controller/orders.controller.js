const addOrdersValidation = require("../validation/add_orders-validation.js");
const updateOrdersValidation = require("../validation/update_orders-validation.js");
const Orders = require("../model/orders.model.js");
const OrderItems = require("../model/order_items.model.js");

exports.create = (req, res) => {
  const error = addOrdersValidation(req.body);
  if (error.error) {
    return res.status(400).send({
      status:false,
      message: error.error.details[0].message,
    });
  }

  const {
    business_id,
    order_no,
    customer_name,
    customer_mobile,
    payment_method,
    order_status,
    items
  } = req.body;
  
  let subtotal = 0;
  items.forEach(i => subtotal += i.price * i.quantity);

  const orderData = new Orders({
    business_id,
    menu_id: items[0].menu_id,
    order_no,
    customer_name,
    customer_mobile,
    subtotal,
    tax: 0,
    discount: 0,
    grand_total: subtotal,
    order_status,
    payment_method
  });

  Orders.create(orderData, (err, orderRes) => {
    if (err) {
      return res.status(500).send({ status: false, message: "Order failed" });
    }

    const orderId = orderRes.data.insertId;
    const now = new Date();

    const orderItems = items.map(i => ([
      orderId,
      i.menu_id,
      i.menu_name,
      i.price,
      i.quantity,
      i.price * i.quantity,
      now
    ]));

    OrderItems.createBulk(orderItems, (err2) => {
      if (err2) {
        return res.status(500).send({ status: false, message: "Items failed" });
      }

      res.send({
        status: true,
        message: "Order created",
        order_id: orderId,
        grand_total: subtotal
      });
    });
  });
};

exports.getAll = (req, res) => {
  Orders.getAll((err, data) => {
    if (err) {
      return res.status(500).send({ status: false });
    }
    res.send(data);
  });
};
exports.getById = (req, res) => {
  const id = req.params.id;

  Orders.getById(id, (err, orderData) => {
    if (err || !orderData.data) {
      return res.status(404).send({ status: false, message: "Order not found" });
    }

    OrderItems.getByOrderId(id, (err2, itemsData) => {
      if (err2) {
        return res.status(500).send({ status: false });
      }

      res.send({
        status: true,
        order: orderData.data,
        items: itemsData.data
      });
    });
  });
};
exports.update = (req, res) => {
  const { id, order_status, payment_method } = req.body;

  Orders.update({ id, order_status, payment_method }, (err, data) => {
    if (err) {
      return res.status(500).send({ status: false });
    }
    res.send({ status: true, message: "Order updated" });
  });
};
