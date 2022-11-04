import { Grid } from '@mantine/core';
import { useContext, useState } from 'react';
// import useForm from '../../hooks/form';
import { Box, Text, Switch, NumberInput, TextInput, Button } from '@mantine/core';
import { SettingsContext } from '../Context/Settings';
import { When } from 'react-if';

function Settings() {

  const { showCompleted, 
          setShowCompleted, 
          maxItems, 
          setMaxItems, 
          sort, 
          setSort,
          checked,
          setChecked } = useContext(SettingsContext);

  const [perPage, setPerPage] = useState(maxItems);
  const [sortKeyword, setSortKeyword] = useState(sort);
  const [show, setShow] = useState(false);

  const handleSwitch = () => {
    setChecked(!checked);
    setShowCompleted(!showCompleted);
  };

  const handlePageChange = (event) => {
    setPerPage(event);
  };

  const handleKeywordChange = (event) => {
    setSortKeyword(event.currentTarget.value);
  };

  const handleSave = () => {
    setShow(!show);
    setChecked(checked);
    setMaxItems(perPage);
    setSort(sortKeyword);
    setShowCompleted(showCompleted);
    let settings = {
      showCompleted,
      perPage,
      sortKeyword,
      checked,
    }
    localStorage.setItem('settings', JSON.stringify(settings));
  };

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <Box>
            <Text weight={700}>Update Settings</Text>
            <Switch label="Show Completed ToDos" size="sm" checked={checked} onChange={handleSwitch} />
            <NumberInput
              size="sm"
              label="Items Per Page"
              defaultValue={perPage}
              min={1}
              max={10}
              onChange={handlePageChange}
            />
            <TextInput
              placeholder="difficulty"
              defaultValue={sortKeyword}
              label="Sort Keyword"
              onChange={handleKeywordChange}
            />
            <Button type="button" onClick={handleSave}>
              Save Settings
            </Button>
          </Box>
        </Grid.Col>
        <When condition={show}>
          <Grid.Col span={6}>
            <Box>
              <Text weight={700}>Updated Settings</Text>
              <Text>{checked ? 'Show' : 'Hide'} Completed ToDos</Text>
              <Text>Items Per Page: {perPage}</Text>
              <Text>Sort Keyword: {sortKeyword}</Text>
            </Box>
          </Grid.Col>
        </When>
      </Grid>
    </>
  )
}

export default Settings;