import React from "react";

interface DashboardStatsProps {
  stats: {
    totalPosts: number;
    unreadPosts: number;
    highPriority: number;
    platforms: { [key: string]: number };
  };
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-4">
      <div className="p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
          {stats.totalPosts}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Total Posts</div>
      </div>
      <div className="p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>
          {stats.unreadPosts}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Unread</div>
      </div>
      <div className="p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="text-2xl font-bold" style={{ color: 'var(--error-color)' }}>
          {stats.highPriority}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">High Priority</div>
      </div>
      <div className="p-4 bg-white border rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="text-2xl font-bold" style={{ color: 'var(--success-color)' }}>
          {Object.keys(stats.platforms).length}
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Active Platforms</div>
      </div>
    </div>
  );
}
