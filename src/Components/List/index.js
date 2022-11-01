import { useContext, useState } from 'react';
import { Pagination } from '@mantine/core';
import ToDo from '../ToDo'
import { SettingsContext } from '../Context/Settings';

function List(props) {

  const {list, toggleComplete} = props;
  const {maxItems} = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIdx = currentPage * maxItems;
  const firstItemIdx = lastItemIdx - maxItems;

  const numPages = Math.ceil(list.length / maxItems);

  const currentItems = list.slice(firstItemIdx, lastItemIdx);

  return (
    <>
      {currentItems.map((item, idx) => (
        <ToDo key={`todo-${idx}`} item={item} toggleComplete={toggleComplete}/>
      ))}
      <Pagination total={numPages} siblings={1} onChange={setCurrentPage} initialPage={currentPage} />
    </>
  )
}

export default List;
