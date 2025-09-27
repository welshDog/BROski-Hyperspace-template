
'use client';
import React, { useState } from 'react';
import { ReadAloud, ThemeToggle, SocialPost, ComposeBox, DashboardStats, Navigation } from '@dyslexia-first/ui-dyslexia';

export default function Home() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const mockPosts = [
        {
            author: 'John Doe',
            content: 'This is a test post. I am excited to share my thoughts with the world!',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        },
        {
            author: 'Jane Smith',
            content: 'Just tried out the new ReadAloud feature, and it is amazing! #accessibility',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        },
    ];

    const mockStats = [
        { title: 'Posts', value: '1,234' },
        { title: 'Followers', value: '5,678' },
        { title: 'Likes', value: '9,101' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
            <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
                        My Social COMs Buddy
                    </h1>
                    <ThemeToggle />
                </div>
                <DashboardStats stats={mockStats} />
                <div className="mt-8">
                    <ComposeBox />
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
                        Recent Posts
                    </h2>
                    <div className="mt-4 space-y-4">
                        {mockPosts.map((post, index) => (
                            <SocialPost key={index} author={post.author} content={post.content} avatar={post.avatar}>
                                <ReadAloud text={post.content} />
                            </SocialPost>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
