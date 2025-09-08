import React from "react";

interface SocialPostProps {
  id: string;
  platform: string;
  author: string;
  content: string;
  timestamp: string;
  priority?: string;
  onReadAloud?: (text: string) => void;
  onAction?: (action: string, postId: string) => void;
}

export function SocialPost({
  id,
  platform,
  author,
  content,
  timestamp,
  priority,
  onReadAloud,
  onAction,
}: SocialPostProps) {
  const getPlatformColor = (platform: string) => {
    const colors = {
      twitter: "bg-blue-500",
      linkedin: "bg-blue-700",
      facebook: "bg-blue-600",
      instagram: "bg-pink-500",
      discord: "bg-indigo-600",
    };
    return (
      colors[platform.toLowerCase() as keyof typeof colors] || "bg-gray-500"
    );
  };

  return (
    <div className="border rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div
            className={`w-3 h-3 rounded-full ${getPlatformColor(platform)}`}
          ></div>
          <span className="font-semibold text-gray-800">{author}</span>
          <span className="text-sm text-gray-500">{platform}</span>
        </div>
        <div className="flex items-center space-x-2">
          {priority && (
            <span
              className={`px-2 py-1 rounded text-xs text-white ${
                priority === "Today"
                  ? "bg-red-500"
                  : priority === "Week"
                    ? "bg-yellow-500"
                    : priority === "FYI"
                      ? "bg-green-500"
                      : "bg-gray-500"
              }`}
            >
              {priority}
            </span>
          )}
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
      </div>

      {/* Content */}
      <div className="mb-3">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => onReadAloud?.(content)}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            aria-label="Read content aloud"
          >
            🔊 Read
          </button>
          <button
            onClick={() => onAction?.("reply", id)}
            className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Reply
          </button>
          <button
            onClick={() => onAction?.("like", id)}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Like
          </button>
        </div>
        <div className="flex space-x-1">
          <button
            onClick={() => onAction?.("archive", id)}
            className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
          >
            Archive
          </button>
          <button
            onClick={() => onAction?.("snooze", id)}
            className="px-2 py-1 text-xs text-gray-500 hover:text-gray-700"
          >
            Snooze
          </button>
        </div>
      </div>
    </div>
  );
}
