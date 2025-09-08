"use client";

import React, { useState } from "react";

interface ComposeBoxProps {
    onSend: (content: string, platform?: string) => void;
    placeholder?: string;
    platforms?: string[];
}

export function ComposeBox({
    onSend,
    placeholder = "Compose your message...",
    platforms,
}: ComposeBoxProps) {
    const [content, setContent] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState(
        platforms?.[0] || "",
    );

    const handleSend = () => {
        if (content.trim()) {
            onSend(content, selectedPlatform);
            setContent("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
            handleSend();
        }
    };

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
            {/* Platform Selector */}
            {platforms && platforms.length > 1 && (
                <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Post to:
                    </label>
                    <select
                        value={selectedPlatform}
                        onChange={(e) => setSelectedPlatform(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {platforms.map((platform) => (
                            <option key={platform} value={platform}>
                                {platform.charAt(0).toUpperCase() + platform.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Text Area */}
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={placeholder}
                className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={4}
            />

            {/* Footer */}
            <div className="flex items-center justify-between mt-3">
                <div className="text-sm text-gray-500">Press Ctrl+Enter to send</div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setContent("")}
                        className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        Clear
                    </button>
                    <button
                        onClick={handleSend}
                        disabled={!content.trim()}
                        className="px-4 py-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
