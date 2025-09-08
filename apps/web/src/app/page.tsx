"use client";

import React, { useState } from "react";
import {
  ReadAloud,
  PriorityChip,
  SocialPost,
  ComposeBox,
  DashboardStats,
  SmartSuggestions,
  ContentAnalyzer,
  VoiceCommands,
} from "@social-ai-assistant/ui-dyslexia";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isVoiceListening, setIsVoiceListening] = useState(false);
  const [composeContent, setComposeContent] = useState("");
  // Sample data for demonstration
  const stats = {
    totalPosts: 47,
    unreadPosts: 12,
    highPriority: 5,
    platforms: {
      twitter: 15,
      linkedin: 8,
      facebook: 12,
      instagram: 7,
      discord: 5,
    },
  };

  const samplePosts = [
    {
      id: "1",
      platform: "twitter",
      author: "TechNews",
      content:
        "Exciting developments in AI accessibility! New tools are making technology more inclusive for everyone, including those with dyslexia. #Accessibility #AI",
      timestamp: "2 hours ago",
      priority: "Today",
    },
    {
      id: "2",
      platform: "linkedin",
      author: "Sarah Johnson",
      content:
        "Just finished an amazing workshop on inclusive design. The focus on dyslexia-friendly interfaces really opened my eyes to how we can make digital experiences better for everyone.",
      timestamp: "4 hours ago",
      priority: "Week",
    },
    {
      id: "3",
      platform: "facebook",
      author: "Community Support",
      content:
        "Looking for recommendations on text-to-speech tools that work well with social media platforms. Any suggestions from the community?",
      timestamp: "6 hours ago",
      priority: "FYI",
    },
  ];

  const handleReadAloud = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    }
  };

  const handlePostAction = (action: string, postId: string) => {
    console.log(`Action: ${action} on post ${postId}`);
    // Here you would implement the actual action logic
  };

  const handleVoiceCommand = (command: string) => {
    console.log("Voice command:", command);
    if (command.includes("dashboard")) setActiveTab("dashboard");
    if (command.includes("compose")) setActiveTab("compose");
    if (command.includes("read")) {
      // Find first post and read it
      const firstPost = samplePosts[0];
      if (firstPost) handleReadAloud(firstPost.content);
    }
    setIsVoiceListening(false);
  };

  const handleSuggestionSelect = (suggestion: string) => {
    setComposeContent((prev: string) => prev + " " + suggestion);
  };

  const handleSendMessage = (content: string, platform?: string) => {
    console.log(`Sending to ${platform}: ${content}`);
    setComposeContent("");
    // Here you would implement the actual sending logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Social AI Assistant
              </h1>
              <PriorityChip priority="Today" />
            </div>
            <div className="flex items-center space-x-4">
              <ReadAloud text="Welcome to your dyslexia-friendly social media assistant. Here you can manage all your social interactions with ease." />
              <span className="text-sm text-gray-600">
                Dyslexia-First Design
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Dashboard Stats */}
        <DashboardStats stats={stats} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Posts Feed */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Recent Posts
            </h2>
            <div className="space-y-4">
              {samplePosts.map((post) => (
                <SocialPost
                  key={post.id}
                  {...post}
                  onReadAloud={handleReadAloud}
                  onAction={handlePostAction}
                />
              ))}
            </div>
          </div>

          {/* Compose Box */}
          <div className="lg:col-span-1">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Compose Message
            </h2>
            <ComposeBox
              onSend={handleSendMessage}
              placeholder="Share your thoughts, ask questions, or start a conversation..."
              platforms={["twitter", "linkedin", "facebook"]}
            />

            {/* Quick Actions */}
            <div className="p-4 mt-6 bg-white border rounded-lg shadow-sm">
              <h3 className="mb-3 text-lg font-medium text-gray-800">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-blue-50 hover:bg-blue-100">
                  📝 Draft Response
                </button>
                <button className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-green-50 hover:bg-green-100">
                  📊 View Analytics
                </button>
                <button className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-yellow-50 hover:bg-yellow-100">
                  ⏰ Schedule Post
                </button>
                <button className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-purple-50 hover:bg-purple-100">
                  🎯 Set Priorities
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
