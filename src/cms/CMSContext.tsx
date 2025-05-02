import React, { createContext, useContext, useState } from 'react';
import { content as initialContent, CMSContent } from './content';

// Context för CMS-funktionalitet
interface CMSContextType {
  content: CMSContent;
  updateContent: (path: string[], value: string | Record<string, unknown>) => void;
}

const CMSContext = createContext<CMSContextType | null>(null);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(initialContent);

  const updateContent = (path: string[], value: string | Record<string, unknown>) => {
    setContent(prevContent => {
      const newContent = JSON.parse(JSON.stringify(prevContent));
      let current = newContent;

      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }

      current[path[path.length - 1]] = value;
      return newContent;
    });
  };

  return <CMSContext.Provider value={{ content, updateContent }}>{children}</CMSContext.Provider>;
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
