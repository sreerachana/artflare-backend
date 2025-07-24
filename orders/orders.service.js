const Order = require('./orders.model');
const Artwork = require('../artwork/artwork.model');

exports.getAllOrders = async () => {
  return await Order.find().populate('user_id', 'name').populate('artwork_id', 'title');
};

exports.getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate('user_id').populate('artwork_id');
  if (!order) return { message: 'Order not found' };
  return order;
};

exports.createOrder = async ({ user_id, artwork_id, total_amt, status_id }) => {
  const newOrder = new Order({
    user_id,
    artwork_id,
    total_amt,
    status_id
  });
  await newOrder.save();
  return newOrder;
};

exports.updateOrder = async (id, updateData) => {
  const updated = await Order.findByIdAndUpdate(id, updateData, { new: true });
  if (!updated) return { message: 'Order not found' };
  return updated;
};

exports.deleteOrder = async (id) => {
  const deleted = await Order.findByIdAndDelete(id);
  if (!deleted) return { message: 'Order not found' };
  return deleted;
};

exports.getOrdersByArtist = async (artistId) => {
  const orders = await Order.find()
    .populate({
      path: 'artwork_id',
      match: { artist: artistId },
      select: 'title'
    })
    .populate('user_id', 'name');

  const filtered = orders
    .filter(order => order.artwork_id) // artwork matched artist
    .map(order => ({
      artworkTitle: order.artwork_id.title,
      buyerName: order.user_id?.name || 'Unknown',
      orderDate: order.order_date,
      totalAmount: order.total_amt
    }));

  return filtered;
};
