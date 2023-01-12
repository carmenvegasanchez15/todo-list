import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from '@mui/material'

export function CheckBoxComponent(props) {
  const { list, setList } = props

  const onChangeStatus = (event) => {
    const { name, checked } = event.target

    const updateList = list.map((item) => ({
      ...item,
      checked: item.id === name ? checked : item.checked,
    }))
    setList(updateList)
  }

  const onClickDeleteTask = () => {
    const updateList = list.filter((item) => !item.checked)
    setList(updateList)
  }

  const item = list.map((e) => {
    return (
      <FormControlLabel
        key={e.id}
        control={<Checkbox onChange={onChangeStatus} />}
        label={e.value}
        value={e.value}
        checked={e.checked}
        name={e.id}
        className={e.checked ? 'checked' : ''}
      />
    )
  })

  return (
    <Box>
      <FormControl>
        {list?.length ? (
          item
        ) : (
          <Typography
            style={{ margin: '20px', fontWeight: 'bold' }}
            variant="h6"
          >
            'No element list'
          </Typography>
        )}
        {list?.length ? (
          <Button
            onClick={onClickDeleteTask}
            variant="contained"
            style={{
              margin: '10px',
              background: '#f54753',
            }}
          >
            Delete task complete
          </Button>
        ) : null}
      </FormControl>
    </Box>
  )
}
