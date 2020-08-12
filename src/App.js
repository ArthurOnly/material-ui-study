import React, { useState } from "react"
import { useForm, Controller } from "react-hook-form"

import "./styles.css"

import {
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
} from "@material-ui/core"

function App() {
  const { register, handleSubmit, control, errors } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div id="app">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="app-content"
        id="app-content"
      >
        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="filled"
          label="label"
          inputRef={register}
          name="name"
        ></TextField>
        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="standard"
          label="label"
          inputRef={register}
          name="name1"
        ></TextField>
        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="outlined"
          label="label"
          inputRef={register}
          name="name2"
        ></TextField>

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Controller
            as={
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                defaultValue=""
                name="select"
                inputProps={{
                  register,
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            }
            name="firstName"
            control={control}
            defaultValue=""
          />

          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>

        <button type="submit">testsets</button>
      </form>
    </div>
  )
}

export default App
