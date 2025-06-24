import React, { useState, FC } from 'react';
import { render, Box, Text, useInput, Static } from 'ink';

const App: FC = () => {
  const [dynamicLines, setDynamicLines] = useState<string[]>([]);
  const [staticLines, setStaticLines] = useState<string[]>([]);

  useInput((input) => {
    if (input === 'x') {
      const randomNumber = Math.floor(Math.random() * 100);
      const newLine = `HELLO ${randomNumber}`;
      setDynamicLines([...dynamicLines, newLine]);
    }

    if (input === 'c') {
      const randomNumber = Math.floor(Math.random() * 100);
      const newLine = `HELLO ${randomNumber}`;
      setDynamicLines([]);
    }


    if (input === 'y') {
      setStaticLines([...staticLines, ...dynamicLines]);
      setDynamicLines([]);
    }

    if (input === 'p') {
      setStaticLines([...staticLines, ...dynamicLines]);
    }
  });

  return (
    <Box flexDirection="column">
      <Box borderStyle="single" paddingX={2}>
        <Text>Dynamic Area</Text>
      </Box>
      <Box flexDirection="column" paddingY={1}>
        {dynamicLines.map((line, index) => (
          <Text key={index}>{line}</Text>
        ))}
      </Box>
      <Static items={staticLines}>
        {(line, index) => (
          <Box key={index} paddingX={6}>
            <Text>{line}</Text>
          </Box>
        )}
      </Static>
    </Box>
  );
};

render(<App />);
