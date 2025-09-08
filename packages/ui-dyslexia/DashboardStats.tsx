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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-2xl font-bold text-blue-600">
          {stats.totalPosts}
        </div>
        <div className="text-sm text-gray-600">Total Posts</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-2xl font-bold text-orange-600">
          {stats.unreadPosts}
        </div>
        <div className="text-sm text-gray-600">Unread</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-2xl font-bold text-red-600">
          {stats.highPriority}
        </div>
        <div className="text-sm text-gray-600">High Priority</div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-2xl font-bold text-green-600">
          {Object.keys(stats.platforms).length}
        </div>
        <div className="text-sm text-gray-600">Active Platforms</div>
      </div>
    </div>
  );
}
