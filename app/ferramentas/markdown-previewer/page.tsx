'use client';

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';
import Header from '../Header';

// Default markdown content to show on page load
const defaultMarkdown = `
# Welcome to the Markdown Previewer!

This is a real-time Markdown editor. Whatever you type in the left panel will be rendered here on the right.

## Features
- **Live Preview:** Updates as you type.
- **GitHub Flavored Markdown:** Supports tables, task lists, and more.
- **Responsive Design:** Works on all screen sizes.

### Code Blocks

You can write inline code, like \`const greeting = "Hello, World!";\`, or multi-line code blocks:

\`\`\`javascript
import React from 'react';

function App() {
  return <h1>Hello from React!</h1>;
}
\`\`\`

### Task Lists
- [x] Create a cool Markdown Previewer
- [ ] Add even more features
- [ ] Deploy to production

### Tables

| Feature         | Status      | Priority |
|-----------------|-------------|----------|
| Live Rendering  | Complete    | High     |
| GFM Support     | Complete    | High     |
| Syntax Highlighting| Coming Soon | Medium   |

> This is a blockquote. It's great for highlighting important information.

Start typing in the editor to see the magic happen!
`;

export default function MarkdownPreviewerPage() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [isClient, setIsClient] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check for user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  if (!isClient) {
    return null;
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header with dark mode toggle */}
      <Header tool="Markdown Previewer" />

      {/* Main Content: Editor and Preview Panes */}
      <main className={`flex-grow grid grid-cols-1 md:grid-cols-2 gap-0.5 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
        {/* Editor Pane */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
            <h2 className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Editor</h2>
          </div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className={`w-full h-full flex-grow p-6 resize-none focus:outline-none font-mono text-sm leading-6 ${isDarkMode ? 'bg-gray-800 text-gray-200 placeholder-gray-500' : 'bg-white text-gray-800 placeholder-gray-400'}`}
            aria-label="Markdown Input"
            placeholder="Type your Markdown here..."
            style={{ tabSize: 2 }}
          />
        </motion.div>

        {/* Preview Pane */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
            <h2 className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Preview</h2>
          </div>
          <div className={`p-6 overflow-y-auto flex-grow ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <article className={`prose max-w-none ${isDarkMode ? 'prose-invert' : 'prose-gray'}`}>
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  code: (props: React.ComponentProps<'code'> & {inline?: boolean, className?: string, children?: React.ReactNode}) => {
                    const {inline, className, children, ...rest} = props;
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline ? (
                      <div className={`rounded-md overflow-hidden my-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                        <pre className={`p-4 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          <code className={className} {...rest}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    ) : (
                      <code className={`px-1 py-0.5 rounded ${isDarkMode ? 'bg-gray-700 text-indigo-300' : 'bg-gray-100 text-indigo-600'}`} {...rest}>
                        {children}
                      </code>
                    );
                  },
                  table({node, children, ...props}) {
                    return (
                      <div className="overflow-x-auto">
                        <table className={`w-full my-4 border-collapse ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} {...props}>
                          {children}
                        </table>
                      </div>
                    );
                  },
                  th({node, children, ...props}) {
                    return (
                      <th className={`p-3 text-left border ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`} {...props}>
                        {children}
                      </th>
                    );
                  },
                  td({node, children, ...props}) {
                    return (
                      <td className={`p-3 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} {...props}>
                        {children}
                      </td>
                    );
                  },
                  blockquote({node, children, ...props}) {
                    return (
                      <blockquote className={`border-l-4 pl-4 my-4 ${isDarkMode ? 'border-indigo-400 bg-gray-800' : 'border-indigo-300 bg-gray-50'}`} {...props}>
                        {children}
                      </blockquote>
                    );
                  }
                }}
              >
                {markdown}
              </ReactMarkdown>
            </article>
          </div>
        </motion.div>
      </main>
    </div>
  );
}