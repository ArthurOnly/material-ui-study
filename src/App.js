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
  Button,
  Fade,
  Chip,
  Badge,
  Styled,
} from "@material-ui/core"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import DialogBox from "./dialog"

function App() {
  const { register, handleSubmit, control, errors } = useForm()
  const onSubmit = data => console.log(data)

  //acordion
  const [expanded, setExpanded] = useState(false)
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  //end

  const [dialog, setDialog] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")

  const handleClose = value => {
    setDialog(false)
    setSelectedValue(value)
    console.log(value)
  }

  return (
    <Container maxWidth="lg">
      <Chip label="Basic" color="primary" />
      {dialog && <DialogBox open={dialog} onClose={handleClose} />}
      <Button onClick={() => setDialog(true)}>button</Button>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="app-content"
        id="app-content"
      >
        <Fade in>
          <TextField
            type="name"
            helperText="type any"
            size="small"
            variant="filled"
            label="label"
            inputRef={register}
            name="name"
          ></TextField>
        </Fade>
        <Badge badgeContent={4} color="primary">
          <TextField
            type="name"
            helperText="type any"
            size="small"
            variant="standard"
            label="label"
            inputRef={register}
            name="name1"
          ></TextField>
        </Badge>
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
