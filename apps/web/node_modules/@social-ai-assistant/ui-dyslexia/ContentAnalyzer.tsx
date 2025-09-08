import React from "react";

interface ContentAnalyzerProps {
  content: string;
}

export function ContentAnalyzer({ content }: ContentAnalyzerProps) {
  const analyzeContent = (text: string) => {
    const words = text.split(" ").length;
    const sentences = text.split(/[.!?]+/).length - 1;
    const avgWordsPerSentence =
      sentences > 0 ? Math.round(words / sentences) : 0;

    return {
      wordCount: words,
      sentenceCount: sentences,
      avgWordsPerSentence,
      readability:
        avgWordsPerSentence > 20
          ? "Complex"
          : avgWordsPerSentence > 15
            ? "Moderate"
            : "Simple",
    };
  };

  const analysis = analyzeContent(content);

  if (!content) return null;

  return (
    <div className="mt-2 p-2 bg-gray-50 rounded text-xs text-gray-600">
      <div className="flex justify-between items-center">
        <span>Words: {analysis.wordCount}</span>
        <span>Sentences: {analysis.sentenceCount}</span>
        <span
          className={`px-2 py-1 rounded ${
            analysis.readability === "Simple"
              ? "bg-green-100 text-green-800"
              : analysis.readability === "Moderate"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {analysis.readability}
        </span>
      </div>
    </div>
  );
}
