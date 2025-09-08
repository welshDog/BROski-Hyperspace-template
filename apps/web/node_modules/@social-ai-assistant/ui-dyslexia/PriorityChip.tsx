interface PriorityChipProps {
  priority: string;
}

export function PriorityChip({ priority }: PriorityChipProps) {
  const colors = {
    Today: "bg-red-500",
    Week: "bg-yellow-500",
    FYI: "bg-green-500",
    Waiting: "bg-blue-500",
    Hold: "bg-gray-500",
  };
  return (
    <span
      className={`text-white px-2 py-1 rounded text-sm ${colors[priority as keyof typeof colors] || "bg-gray-500"}`}
    >
      {priority}
    </span>
  );
}
