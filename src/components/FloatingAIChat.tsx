import { useState } from "react";
import AIChat from "./AIChat";
import { BotMessageSquare } from "lucide-react"; // rename import

const FloatingAIChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="AI Assistant"
      >
        <BotMessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="mt-2 w-80 max-w-sm">
          <AIChat />
        </div>
      )}
    </div>
  );
};

export default FloatingAIChat;
