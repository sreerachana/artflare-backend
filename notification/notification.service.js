const notification = require('./notification.model');

exports.getAllNotifications = async () => {
    try {
        const notifications = await notification.find({});
        return notifications;
    } catch (error) {
        return { message: 'Error retrieving notifications', error };
    }
}
exports.getNotificationById = async (notification_id) => {
    try {
        const result = await notification.findOne({ id: notification_id });
        if (!result) {
            return { message: 'Notification not found' };
        }
        return result;
    } catch (error) {
        return { message: 'Error retrieving notification', error };
    }
}
exports.createNotification = async ({ user_id, message, type, created_at }) => {
    try {
        const newNotification = new notification({
            user_id,
            message,
            type,
            created_at
        });
        await newNotification.save();
        return newNotification;
    } catch (error) {
        return { message: 'Error creating notification', error };
    }
}
exports.updateNotification = async (id, { user_id, message, type, created_at }) => {
    try {
        const updatedNotification = await notification.findOneAndUpdate(
            { id },
            { user_id, message, type, created_at },
            { new: true }
        );
        if (!updatedNotification) {
            return { message: 'Notification not found' };
        }
        return updatedNotification;
    } catch (error) {
        return { message: 'Error updating notification', error };
    }
}
exports.deleteNotification = async (id) => {
    try {
        const deletedNotification = await notification.findOneAndDelete({ id });
        if (!deletedNotification) {
            return { message: 'Notification not found' };
        }
        return deletedNotification;
    }
    catch (error) {
        return { message: 'Error deleting notification', error };
    }
}
exports.getNotificationsByUser = async (userId) => {
    try {
        const notifications = await notification.find({ user_id: userId });
        if (!notifications.length) {
            return { message: 'No notifications found for this user' };
        }
        return notifications;
    } catch (error) {
        return { message: 'Error retrieving notifications by user', error };
    }
}
exports.getUnreadNotificationsByUser = async (userId) => {
    try {
        const notifications = await notification.find({ user_id: userId, read: false });
        if (!notifications.length) {
            return { message: 'No unread notifications found for this user' };
        }
        return notifications;
    } catch (error) {
        return { message: 'Error retrieving unread notifications by user', error };
    }
}
exports.markNotificationAsRead = async (id) => {
    try {
        const updatedNotification = await notification.findOneAndUpdate(
            { id },
            { read: true },
            { new: true }
        );
        if (!updatedNotification) {
            return { message: 'Notification not found' };
        }
        return updatedNotification;
    } catch (error) {
        return { message: 'Error marking notification as read', error };
    }
}