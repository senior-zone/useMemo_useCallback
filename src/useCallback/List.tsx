import { useState, useEffect } from 'react';

const List = ({ getItems }: { getItems: () => number[] }) => {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems());
    console.log('обновлено');
  }, [getItems]);

  return (
    <>
      {items.map((item: number, i) => (
        <div key={`${item}_${i}`}>{item}</div>
      ))}
    </>
  );
};

export default List;
