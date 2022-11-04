import { useContext, useState } from 'react';
import { Pagination, createStyles } from '@mantine/core';
import ToDo from '../ToDo'
import { SettingsContext } from '../Context/Settings';
import { When } from 'react-if';

const useStyles = createStyles((theme) => ({
  list: {
  },
}));

function List(props) {

  const { list, toggleComplete, deleteItem } = props;
  const { maxItems, showCompleted } = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);

  const activeItems = showCompleted ? list : list.filter(item => !item.complete);

  const lastItemIdx = currentPage * maxItems;
  const firstItemIdx = lastItemIdx - maxItems;

  const numPages = Math.ceil(activeItems.length / maxItems);

  const currentItems = activeItems.slice(firstItemIdx, lastItemIdx);

  const {classes} = useStyles();

  return (
    <>
      <div className={classes.list}>
        {currentItems.map((item, idx) => (
          <ToDo key={`todo-${idx}`} item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        ))}
        <When condition={activeItems.length > 0}>
          <Pagination total={numPages} siblings={1} onChange={setCurrentPage} initialPage={currentPage} />
        </When>
      </div>
    </>
  )
}

export default List;
