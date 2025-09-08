import React, { useState } from "react";

interface VoiceCommandsProps {
  onCommand: (command: string) => void;
  isListening: boolean;
  onToggleListening: () => void;
}

export function VoiceCommands({
  onCommand,
  isListening,
  onToggleListening,
}: VoiceCommandsProps) {
  const [transcript, setTranscript] = useState("");

  const commands = [
    { phrase: "read this", action: "read" },
    { phrase: "reply to this", action: "reply" },
    { phrase: "like this", action: "like" },
    { phrase: "compose new", action: "compose" },
    { phrase: "show dashboard", action: "dashboard" },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={onToggleListening}
        className={`w-12 h-12 rounded-full shadow-lg transition-colors ${
          isListening
            ? "bg-red-500 animate-pulse"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white flex items-center justify-center`}
        aria-label={
          isListening ? "Stop voice commands" : "Start voice commands"
        }
      >
        🎤
      </button>

      {isListening && (
        <div className="absolute bottom-16 right-0 bg-white p-3 rounded-lg shadow-lg border w-64">
          <div className="text-sm text-gray-600 mb-2">
            Listening for commands:
          </div>
          <div className="space-y-1 text-xs">
            {commands.map((cmd, index) => (
              <div key={index} className="text-gray-500">
                "{cmd.phrase}"
              </div>
            ))}
          </div>
          {transcript && (
            <div className="mt-2 p-2 bg-gray-100 rounded text-xs">
              Heard: "{transcript}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
