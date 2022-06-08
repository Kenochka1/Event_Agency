import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Slider } from "@mui/material";
import { useState } from "react";

const Filter = ({
  type,
  setType,
  min,
  max,
  price1,
  setPrice1,
  price2,
  setPrice2,
}) => {
  const [totalPrice, setTotalPrice] = useState([price1, price2]);
  const handleChange = (e) => {
    setPrice1(e.target.value[0]);
    setPrice2(e.target.value[1]);
    setTotalPrice(e.target.value);
    console.log(totalPrice);
  };

  function valuetext(value) {
    return value;
  }
  return (
    <div>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel
            value="Рестораны"
            control={<Radio />}
            label="Рестораны"
          />
          <FormControlLabel
            value="Ведущие"
            control={<Radio />}
            label="Ведущие"
          />
          <FormControlLabel
            value="Музыкальные исполнители"
            control={<Radio />}
            label="Музыкальные исполнители"
          />
          <FormControlLabel value="all" control={<Radio />} label="Фотографы" />
          <FormControlLabel
            value="Танцевальные группы"
            control={<Radio />}
            label="Танцевальные группы"
          />
          <FormControlLabel
            value="Видеографы"
            control={<Radio />}
            label="Видеографы"
          />
          <FormControlLabel value="Диджеи" control={<Radio />} label="Диджеи" />
          <FormControlLabel
            value="Декораторы"
            control={<Radio />}
            label="Декораторы"
          />
        </RadioGroup>
      </FormControl>
      <div>
        <Box width={250}>
          <Slider
            sx={{
              marginLeft: "17px",
              width: "200px",
              marginTop: "50px",
              alignItems: "center",
            }}
            getAriaLabel={() => "Minimum distance"}
            value={totalPrice}
            onChange={handleChange}
            max={100000}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
          />
        </Box>
      </div>
    </div>
  );
};

export default Filter;
