import React, { useState, useEffect } from "react";

interface SmartSuggestionsProps {
  content: string;
  onSuggestionSelect: (suggestion: string) => void;
}

export function SmartSuggestions({
  content,
  onSuggestionSelect,
}: SmartSuggestionsProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (content.length > 10) {
      // Simulate AI suggestions based on content
      const mockSuggestions = [
        "Consider adding an emoji to make it more engaging 🎉",
        "This could benefit from a question to encourage responses",
        "Try using a shorter version for better readability",
        "Add a call-to-action to increase engagement",
      ];
      setSuggestions(mockSuggestions.slice(0, 2));
    } else {
      setSuggestions([]);
    }
  }, [content]);

  if (suggestions.length === 0) return null;

  return (
    <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
      <h4 className="text-sm font-medium text-blue-800 mb-2">
        💡 Smart Suggestions:
      </h4>
      <div className="space-y-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionSelect(suggestion)}
            className="block w-full text-left text-sm text-blue-700 hover:text-blue-900 hover:bg-blue-100 p-2 rounded transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
