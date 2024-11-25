import React, { createContext, useContext, useState } from 'react';
import { content as initialContent } from './content';

interface CMSContextType {
  content: typeof initialContent;
  updateContent: (path: string[], value: any) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState(initialContent);

  const updateContent = (path: string[], value: any) => {
    setContent(prevContent => {
      const newContent = JSON.parse(JSON.stringify(prevContent));
      let current = newContent;
      
      // Navigate to the nested property
      for (let i = 0; i < path.length - 1; i++) {
        current = current[path[i]];
      }
      
      // Update the value
      current[path[path.length - 1]] = value;
      
      return newContent;
    });
  };

  return (
    <CMSContext.Provider value={{ content, updateContent }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
