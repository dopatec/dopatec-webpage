import React, { useState } from 'react';
import { useCMS } from './CMSContext';
import { CMSContent } from './content';

interface EditorProps {
  isOpen: boolean;
  onClose: () => void;
}

const getNestedValue = (obj: CMSContent, path: string[]): string => {
  let current: Record<string, unknown> = obj;
  for (const key of path) {
    if (current === undefined) return '';
    current = current[key] as Record<string, unknown>;
  }
  return typeof current === 'string' ? current : '';
};

export const CMSEditor: React.FC<EditorProps> = ({ isOpen, onClose }) => {
  const { content, updateContent } = useCMS();
  const [selectedPath, setSelectedPath] = useState<string[]>([]);
  const [editValue, setEditValue] = useState('');

  const handleSelect = (path: string[]) => {
    setSelectedPath(path);
    const value = getNestedValue(content, path);
    setEditValue(value);
  };

  const handleUpdate = () => {
    updateContent(selectedPath, editValue);
  };

  const renderContentEditor = (obj: Record<string, unknown>, path: string[] = []) => {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = [...path, key];
      const pathString = currentPath.join('.');

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={pathString} className="ml-4">
            <h3 className="font-bold text-primary">{key}</h3>
            {renderContentEditor(value as Record<string, unknown>, currentPath)}
          </div>
        );
      }

      return (
        <div key={pathString} className="mb-2 ml-4">
          <button
            onClick={() => handleSelect(currentPath)}
            className={`p-2 rounded hover:bg-primary/10 ${
              currentPath.join('.') === selectedPath.join('.') ? 'bg-primary/20' : ''
            }`}
          >
            <span className="font-mono text-sm text-gray-400">{pathString}</span>
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">{key}:</span>
              <span className="text-gray-300">{String(value)}</span>
            </div>
          </button>
        </div>
      );
    });
  };

  // Only show in development mode
  if (process.env.NODE_ENV !== 'development' || !isOpen) return null;

  return (
    <div className="flex fixed inset-0 z-50 justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="overflow-hidden relative w-full max-w-2xl h-full shadow-xl bg-black/95">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white">Content Management System</h2>
            <p className="text-sm text-gray-400">Development Mode Only</p>
          </div>

          {/* Content */}
          <div className="overflow-auto flex-1">
            <div className="grid grid-cols-2 h-full">
              {/* Content Tree */}
              <div className="overflow-auto p-4 border-r border-gray-800">
                {renderContentEditor(content)}
              </div>

              {/* Editor */}
              <div className="p-4">
                {selectedPath.length > 0 && (
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 text-sm font-medium text-gray-400">Editing</h3>
                      <p className="font-mono text-primary">{selectedPath.join('.')}</p>
                    </div>
                    <textarea
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      className="p-2 w-full h-32 text-white rounded-lg border border-gray-700 bg-black/50"
                    />
                    <button
                      onClick={handleUpdate}
                      className="px-4 py-2 text-black rounded bg-primary hover:bg-primary-light"
                    >
                      Update Content
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
