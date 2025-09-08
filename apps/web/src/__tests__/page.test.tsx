import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../app/page'
import { ThemeProvider } from '@social-ai-assistant/ui-dyslexia'

// Error boundary for React 19 compatibility
class TestErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean }
> {
    constructor(props: { children: React.ReactNode }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('Test error boundary caught:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div>Error occurred</div>
        }
        return this.props.children
    }
}

describe('Home Page', () => {
    const renderWithProviders = (component: React.ReactElement) => {
        return render(
            <TestErrorBoundary>
                <ThemeProvider>
                    {component}
                </ThemeProvider>
            </TestErrorBoundary>
        )
    }

    it('renders the main dashboard', () => {
        renderWithProviders(<Home />)
        expect(screen.getByText('Social AI Assistant')).toBeInTheDocument()
    })

    it('displays dashboard stats', () => {
        renderWithProviders(<Home />)
        expect(screen.getByText('Total Posts')).toBeInTheDocument()
        expect(screen.getByText('47')).toBeInTheDocument()
    })

    it('shows compose box', () => {
        renderWithProviders(<Home />)
        expect(screen.getByPlaceholderText(/share your thoughts/i)).toBeInTheDocument()
    })

    it('displays sample posts', () => {
        renderWithProviders(<Home />)
        expect(screen.getByText('TechNews')).toBeInTheDocument()
        expect(screen.getByText(/Exciting developments in AI accessibility/)).toBeInTheDocument()
    })

    it('has quick actions', () => {
        renderWithProviders(<Home />)
        expect(screen.getByText('Quick Actions')).toBeInTheDocument()
        expect(screen.getByText('📝 Draft Response')).toBeInTheDocument()
        expect(screen.getByText('📊 View Analytics')).toBeInTheDocument()
        expect(screen.getByText('⏰ Schedule Post')).toBeInTheDocument()
    })
})
