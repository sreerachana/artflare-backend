const notificationService = require('./notification.service');

exports.getAllNotifications = async (req, res) => {
    try {
        const notifications = await notificationService.getAllNotifications();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notifications', error });
    }
};
exports.getNotificationById = async (req, res) => {
    const { notification_id } = req.params;
    try {
        const notification = await notificationService.getNotificationById(notification_id);
        if (notification.message) {
            return res.status(404).json(notification);
        }
        res.status(200).json(notification);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notification', error });
    }
};
exports.createNotification = async (req, res) => {
    const { user_id, message, type, created_at } = req.body;
    try {
        const newNotification = await notificationService.createNotification({ user_id, message, type, created_at });
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ message: 'Error creating notification', error });
    }
};
exports.updateNotification = async (req, res) => {
    const { id } = req.params;
    const { user_id, message, type, created_at } = req.body;
    try {
        const updatedNotification = await notificationService.updateNotification(id, { user_id, message, type, created_at });
        if (updatedNotification.message) {
            return res.status(404).json(updatedNotification);
        }
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ message: 'Error updating notification', error });
    }
};
exports.deleteNotification = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedNotification = await notificationService.deleteNotification(id);
        if (deletedNotification.message) {
            return res.status(404).json(deletedNotification);
        }
        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting notification', error });
    }
};
exports.getNotificationsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await notificationService.getNotificationsByUser(userId);
        if (notifications.message) {
            return res.status(404).json(notifications);
        }
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving notifications for user', error });
    }
};
exports.markNotificationAsRead = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedNotification = await notificationService.markNotificationAsRead(id);
        if (updatedNotification.message) {
            return res.status(404).json(updatedNotification);
        }
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500).json({ message: 'Error marking notification as read', error });
    }
};
exports.getUnreadNotificationsCount = async (req, res) => {
    const { userId } = req.params;
    try {
        const count = await notificationService.getUnreadNotificationsCount(userId);
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving unread notifications count', error });
    }
};