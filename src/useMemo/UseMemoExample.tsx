import { useState, useMemo, useEffect } from 'react';

function heavyComputation(num: number): number {
  for (let i = 0; i <= 1999999999; i++) {}
  return num * 2;
}

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => heavyComputation(number), [number]);
  // const doubleNumber = heavyComputation(number);

  const themeStyles = useMemo(
    () => ({
      backgroundColor: dark ? '#000' : '#fff',
      color: dark ? '#fff' : '#000',
    }),
    [dark],
  );
  // const themeStyles = {
  //   backgroundColor: dark ? '#000' : '#fff',
  //   color: dark ? '#fff' : '#000',
  // };

  useEffect(() => {
    console.log('смена темы');
  }, [themeStyles]);

  return (
    <>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      <div style={{ fontSize: '24px', marginTop: '7px', ...themeStyles }}>{doubleNumber}</div>
    </>
  );
};

export default UseMemoExample;
