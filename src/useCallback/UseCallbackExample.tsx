import { useState, useCallback, useMemo } from 'react';
import List from './List';

const UseCallbackExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const getItems = useCallback(() => [number, number + 1, number + 2], [number]);
  const getItems = useMemo(() => () => [number, number + 1, number + 2], [number]);
  // const getItems = () => [number, number + 1, number + 2];

  const themeStyles = {
    backgroundColor: dark ? '#000' : '#fff',
    color: dark ? '#fff' : '#000',
  };

  return (
    <div style={themeStyles}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallbackExample;
