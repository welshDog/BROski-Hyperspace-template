export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <main className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
                        Welcome to Your Dyslexia-First App
                    </h1>
                    <p className="mt-4 text-lg" style={{ color: 'var(--muted-text)' }}>
                        Start building your accessible application here
                    </p>
                </div>
            </main>
        </div>
    );
}
