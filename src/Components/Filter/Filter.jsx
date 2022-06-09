import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Slider } from "@mui/material";
import { useState } from "react";
import { Container } from "@mui/system";
import "./Filter.css";

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
    <>
      {" "}
      <div className="container-filter">
        {" "}
        <FormControl>
          <RadioGroup
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "40px",
            }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Рестораны"
                control={<Radio />}
                label="Рестораны"
              />
            </button>
            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Ведущие"
                control={<Radio />}
                label="Ведущие"
              />
            </button>

            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Музыкальные исполнители"
                control={<Radio />}
                label="Музыкальные исполнители"
              />
            </button>

            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Фотографы"
                control={<Radio />}
                label="Фотографы"
              />
            </button>

            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Танцевальные группы"
                control={<Radio />}
                label="Танцевальные группы"
              />
            </button>

            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Видеографы"
                control={<Radio />}
                label="Видеографы"
              />
            </button>

            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Диджеи"
                control={<Radio />}
                label="Диджеи"
              />
            </button>
            <button className="filter-item" style={{ marginTop: "20px" }}>
              <FormControlLabel
                style={{ width: "300px" }}
                value="Декораторы"
                control={<Radio />}
                label="Декораторы"
              />
            </button>
          </RadioGroup>
        </FormControl>
      </div>
      <div className="container-slider">
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
    </>
  );
};

export default Filter;
