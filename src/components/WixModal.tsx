import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink } from "lucide-react";

interface WixModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export function WixModal({ isOpen, onClose, url }: WixModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-bg/80 backdrop-blur-sm z-[200] cursor-zoom-out"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            className="fixed inset-4 md:inset-10 lg:inset-12 bg-[#fff] z-[201] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.5)] flex flex-col rounded-lg border border-brand-paper/10"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-[#f8f8f8] border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 truncate max-w-[200px]">
                  {url.replace('https://', '')}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-1.5 hover:bg-gray-200 rounded transition-colors text-gray-500"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button 
                  onClick={onClose}
                  className="p-1.5 hover:bg-gray-200 rounded transition-colors text-gray-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Iframe Content */}
            <div className="flex-1 w-full bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-2 border-brand-bg/10 border-t-brand-bg rounded-full animate-spin" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Loading Wix Site...</span>
                </div>
              </div>
              <iframe 
                src={url} 
                className="w-full h-full border-none relative z-10"
                title="Wix Content"
                allow="autoplay; encrypted-media"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
