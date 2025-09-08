"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, Square } from "lucide-react";

interface ReadAloudProps {
    text: string;
    className?: string;
}

export function ReadAloud({ text, className }: ReadAloudProps) {
    const [speaking, setSpeaking] = useState(false);
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if ("speechSynthesis" in window) {
            utteranceRef.current = new SpeechSynthesisUtterance(text);
            if (utteranceRef.current) {
                utteranceRef.current.onend = () => setSpeaking(false);
                utteranceRef.current.onerror = () => setSpeaking(false);
            }
        }

        return () => {
            if (utteranceRef.current && speaking) {
                speechSynthesis.cancel();
            }
        };
    }, [text]);

    const startSpeaking = () => {
        if (utteranceRef.current) {
            window.speechSynthesis.speak(utteranceRef.current);
            setSpeaking(true);
        }
    };

    const stopSpeaking = () => {
        window.speechSynthesis.cancel();
        setSpeaking(false);
    };

    return (
        <button
            onClick={speaking ? stopSpeaking : startSpeaking}
            className={`bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors ${className || ""}`}
            aria-label={speaking ? "Stop reading" : "Read aloud"}
        >
            {speaking ? <Square size={16} data-testid="stop-icon" /> : <Volume2 size={16} data-testid="volume-icon" />}
        </button>
    );
}
