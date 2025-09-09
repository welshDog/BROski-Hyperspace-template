import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ReadAloud } from '@dyslexia-first/ui-components'

describe('ReadAloud', () => {
    const mockText = 'Hello, this is a test text to read aloud.'

    beforeEach(() => {
        // Mock speechSynthesis
        Object.defineProperty(window, 'speechSynthesis', {
            value: {
                speak: jest.fn(),
                cancel: jest.fn(),
            },
            writable: true,
        })

        // Mock SpeechSynthesisUtterance
        global.SpeechSynthesisUtterance = jest.fn().mockImplementation((text) => ({
            text,
            onend: null,
            onerror: null,
        }))
    })

    it('renders the read aloud button', () => {
        render(<ReadAloud text={mockText} />)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })

    it('shows volume icon when not speaking', () => {
        render(<ReadAloud text={mockText} />)
        const button = screen.getByRole('button')
        expect(button).toContainElement(screen.getByTestId('volume-icon'))
    })

    it('calls speechSynthesis.speak when button is clicked', () => {
        render(<ReadAloud text={mockText} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(window.speechSynthesis.speak).toHaveBeenCalled()
    })

    it('applies custom className', () => {
        const customClass = 'custom-class'
        render(<ReadAloud text={mockText} className={customClass} />)
        const button = screen.getByRole('button')
        expect(button).toHaveClass(customClass)
    })
})
