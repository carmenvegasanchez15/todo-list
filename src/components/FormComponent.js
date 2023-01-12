import { Box, Button, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import * as React from 'react'
import { CheckBoxComponent } from './CheckBoxComponent'

export default function FormComponent() {
  const [value, setValue] = React.useState('')
  const [element, setElement] = React.useState([])

  const addItem = () => {
    setElement([
      ...element,
      { checked: false, id: (+new Date()).toString(), value },
    ])
    setValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem()
    }
  }

  return (
    <Box className="container">
      <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} style={{ marginBottom: '20px' }}>
          <Typography className="title" variant="h3">
            ToDo List
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Grid
            item
            xs={12}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <TextField
              placeholder="New element"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
              onKeyDown={handleKeyDown}
            />
            <Button
              disabled={!value && true}
              onClick={addItem}
              variant="contained"
              style={{
                margin: '10px',
                background: '#ce9ee6',
              }}
            >
              Add
            </Button>
          </Grid>
          <Grid
            item
            md={8}
            xs={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <CheckBoxComponent list={element} setList={setElement} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
