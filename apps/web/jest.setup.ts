import '@testing-library/jest-dom'

// Mock React 19 compatibility
// jest is available globally in Jest environment

// Ensure we're using the same React version
process.env.REACT_VERSION = '19.1.1'

// Mock browser APIs for testing
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
})

// Configure React Testing Library for React 19
import { configure } from '@testing-library/react'

configure({
    reactStrictMode: true,
})

// Handle React 19 AggregateError issues
const originalError = console.error
beforeAll(() => {
    console.error = (...args: any[]) => {
        if (
            typeof args[0] === 'string' &&
            args[0].includes('Warning: ReactDOMTestUtils has been moved to react-dom/test-utils')
        ) {
            return
        }
        originalError.call(console, ...args)
    }
})

afterAll(() => {
    console.error = originalError
})
