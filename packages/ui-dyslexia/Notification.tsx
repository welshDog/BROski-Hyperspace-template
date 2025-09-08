"use client";

import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationProps {
    type: NotificationType;
    title: string;
    message?: string;
    duration?: number;
    onClose?: () => void;
    className?: string;
}

export function Notification({
    type,
    title,
    message,
    duration = 5000,
    onClose,
    className
}: NotificationProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (duration > 0) {
            const timer = setTimeout(() => {
                handleClose();
            }, duration);

            return () => clearTimeout(timer);
        }
    }, [duration]);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            setIsVisible(false);
            onClose?.();
        }, 300);
    };

    if (!isVisible) return null;

    const icons = {
        success: CheckCircle,
        error: XCircle,
        warning: AlertCircle,
        info: Info,
    };

    const colors = {
        success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900 dark:border-green-700 dark:text-green-200',
        error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900 dark:border-red-700 dark:text-red-200',
        warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900 dark:border-yellow-700 dark:text-yellow-200',
        info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-200',
    };

    const Icon = icons[type];

    return (
        <div
            className={`fixed top-4 right-4 z-50 max-w-sm animate-slide-in ${isExiting ? 'animate-fade-out' : ''
                } ${className || ''}`}
        >
            <div className={`p-4 rounded-lg border shadow-lg ${colors[type]}`}>
                <div className="flex items-start">
                    <Icon size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                        <h4 className="font-semibold text-sm">{title}</h4>
                        {message && (
                            <p className="text-sm mt-1 opacity-90">{message}</p>
                        )}
                    </div>
                    <button
                        onClick={handleClose}
                        className="ml-3 flex-shrink-0 hover:opacity-70 transition-opacity focus-ring rounded"
                        aria-label="Close notification"
                    >
                        <X size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

interface NotificationContainerProps {
    notifications: Array<NotificationProps & { id: string }>;
    onRemove: (id: string) => void;
}

export function NotificationContainer({ notifications, onRemove }: NotificationContainerProps) {
    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {notifications.map((notification, index) => (
                <div
                    key={notification.id}
                    style={{ transform: `translateY(${index * 10}px)` }}
                    className="relative"
                >
                    <Notification
                        {...notification}
                        onClose={() => onRemove(notification.id)}
                    />
                </div>
            ))}
        </div>
    );
}

// Hook for managing notifications
export function useNotifications() {
    const [notifications, setNotifications] = useState<Array<NotificationProps & { id: string }>>([]);

    const addNotification = (notification: Omit<NotificationProps, 'onClose'>) => {
        const id = Date.now().toString();
        setNotifications(prev => [...prev, { ...notification, id }]);
    };

    const removeNotification = (id: string) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return {
        notifications,
        addNotification,
        removeNotification,
        NotificationContainer: () => (
            <NotificationContainer
                notifications={notifications}
                onRemove={removeNotification}
            />
        ),
    };
}
