const ordersService = require('./orders.service');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving orders', error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await ordersService.getOrderById(req.params.order_id);
    if (order.message) return res.status(404).json(order);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order', error });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { user_id, artwork_id, total_amt, status_id } = req.body;
    const order = await ordersService.createOrder({ user_id, artwork_id, total_amt, status_id });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const updated = await ordersService.updateOrder(req.params.id, req.body);
    if (updated.message) return res.status(404).json(updated);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const deleted = await ordersService.deleteOrder(req.params.id);
    if (deleted.message) return res.status(404).json(deleted);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};

exports.getOrdersByArtist = async (req, res) => {
  try {
    const orders = await ordersService.getOrdersByArtist(req.params.artistId);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving artist orders', error });
  }
};
