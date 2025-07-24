const notificationController = require('./notification.controller');
const express = require('express');
const router = express.Router();

router.get('/', notificationController.getAllNotifications); // GET all notifications
router.get('/:notification_id', notificationController.getNotificationById); // GET notification by ID
router.post('/', notificationController.createNotification); // POST create new notification
router.put('/:id', notificationController.updateNotification); // PUT update notification by ID
router.delete('/:id', notificationController.deleteNotification); // DELETE notification by ID
router.get('/byUser/:userId', notificationController.getNotificationsByUser); // GET notifications by user ID
// router.get('/unread/:userId', notificationController.getUnreadNotificationsByUser); // GET unread notifications by user ID
router.put('/markAsRead/:id', notificationController.markNotificationAsRead); // PUT mark notification as read by ID

module.exports = router;