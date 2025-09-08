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
    ThemeToggle,
    BarChart,
    Form,
    useNotifications,
} from "@social-ai-assistant/ui-dyslexia";

export default function Home() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const [isVoiceListening, setIsVoiceListening] = useState(false);
    const [composeContent, setComposeContent] = useState("");
    const { addNotification, NotificationContainer } = useNotifications();

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

    const chartData = [
        { label: 'Twitter', value: 15, color: '#1DA1F2' },
        { label: 'LinkedIn', value: 8, color: '#0077B5' },
        { label: 'Facebook', value: 12, color: '#1877F2' },
        { label: 'Instagram', value: 7, color: '#E4405F' },
        { label: 'Discord', value: 5, color: '#5865F2' },
    ];

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

    const formFields = [
        {
            name: 'name',
            label: 'Full Name',
            type: 'text' as const,
            required: true,
            placeholder: 'Enter your full name',
        },
        {
            name: 'email',
            label: 'Email Address',
            type: 'email' as const,
            required: true,
            placeholder: 'Enter your email',
            validation: (value: string) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value) ? null : 'Please enter a valid email address';
            },
        },
        {
            name: 'platform',
            label: 'Preferred Platform',
            type: 'select' as const,
            required: true,
            options: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'Discord'],
        },
        {
            name: 'message',
            label: 'Message',
            type: 'textarea' as const,
            placeholder: 'Tell us how we can help you...',
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
        addNotification({
            type: 'success',
            title: 'Action Completed',
            message: `Successfully performed ${action} on post`,
        });
    };

    const handleVoiceCommand = (command: string) => {
        console.log("Voice command:", command);
        if (command.includes("dashboard")) setActiveTab("dashboard");
        if (command.includes("compose")) setActiveTab("compose");
        if (command.includes("read")) {
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
        addNotification({
            type: 'success',
            title: 'Message Sent',
            message: `Your message has been posted to ${platform || 'all platforms'}`,
        });
    };

    const handleFormSubmit = async (data: Record<string, string>) => {
        console.log('Form submitted:', data);
        addNotification({
            type: 'success',
            title: 'Form Submitted',
            message: 'Thank you for your feedback! We\'ll get back to you soon.',
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <NotificationContainer />

            {/* Header */}
            <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                                Social AI Assistant
                            </h1>
                            <PriorityChip priority="Today" />
                        </div>
                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <ReadAloud text="Welcome to your dyslexia-friendly social media assistant. Here you can manage all your social interactions with ease." />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
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
                        <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
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

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Analytics Chart */}
                        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-200">
                                Platform Distribution
                            </h3>
                            <BarChart data={chartData} width={300} height={200} />
                        </div>

                        {/* Compose Box */}
                        <div>
                            <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                                Compose Message
                            </h2>
                            <ComposeBox
                                onSend={handleSendMessage}
                                placeholder="Share your thoughts, ask questions, or start a conversation..."
                                platforms={["twitter", "linkedin", "facebook"]}
                            />
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-200">
                                Get in Touch
                            </h3>
                            <Form
                                fields={formFields}
                                onSubmit={handleFormSubmit}
                                submitLabel="Send Message"
                            />
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-gray-200">
                                Quick Actions
                            </h3>
                            <div className="space-y-2">
                                <button
                                    onClick={() => addNotification({ type: 'info', title: 'Draft Response', message: 'Draft feature coming soon!' })}
                                    className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300"
                                >
                                    📝 Draft Response
                                </button>
                                <button
                                    onClick={() => addNotification({ type: 'success', title: 'Analytics', message: 'Viewing analytics dashboard...' })}
                                    className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 text-green-700 dark:text-green-300"
                                >
                                    📊 View Analytics
                                </button>
                                <button
                                    onClick={() => addNotification({ type: 'warning', title: 'Schedule Post', message: 'Scheduling feature in development' })}
                                    className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-yellow-50 dark:bg-yellow-900 hover:bg-yellow-100 dark:hover:bg-yellow-800 text-yellow-700 dark:text-yellow-300"
                                >
                                    ⏰ Schedule Post
                                </button>
                                <button
                                    onClick={() => addNotification({ type: 'info', title: 'Set Priorities', message: 'Priority management activated' })}
                                    className="w-full px-3 py-2 text-sm text-left transition-colors rounded bg-purple-50 dark:bg-purple-900 hover:bg-purple-100 dark:hover:bg-purple-800 text-purple-700 dark:text-purple-300"
                                >
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
