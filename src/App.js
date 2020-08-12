import React, { useState } from "react"
import { useForm } from "react-hook-form"

import "./styles.css"

import { TextField, MenuItem, Stepper } from "@material-ui/core"

function App() {
  const { register, handleSubmit, watch, errors } = useForm()
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
          ref={register}
          name="name"
        ></TextField>
        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="standard"
          label="label"
          ref={register}
          name="name1"
        ></TextField>
        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="outlined"
          label="label"
          ref={register}
          name="name2"
        ></TextField>

        <TextField
          type="name"
          helperText="type any"
          size="small"
          variant="filled"
          label="label"
          select
          ref={register}
          name="name3"
        >
          <MenuItem value={1}>Teste teste</MenuItem>
          <MenuItem value={2}>Teste teste2</MenuItem>
        </TextField>
      </form>
    </div>
  )
}

export default App
