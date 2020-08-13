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
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

function App() {
  const { register, handleSubmit, control, errors } = useForm()
  const onSubmit = data => console.log(data)

  //acordion
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Container maxWidth="lg">
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

        <FormControl error={errors.select}>
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Controller
            as={
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                defaultValue=""
                name="select"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            }
            name="select"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />

          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>

        <button type="submit">testsets</button>
      </form>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p>General settings</p>
          <p>I am an accordion</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p>General settings</p>
          <p>I am an accordion</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </p>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default App
