import { Button, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { serviceContext } from "../../Context/ServiceContext";
import "./EditService.css";

const EditService = () => {
  const { serviceDetails, getServiceDetails, editService } =
    useContext(serviceContext);

  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getServiceDetails(id);
  }, []);
  const [inpValues, setInpValues] = useState(serviceDetails);

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editService(id, inpValues);
    navigate("/list");
  };

  return (
    <form onSubmit={(e) => handleSave(e)}>
      <div className="fields">
        <TextField
          id="outlined-basic"
          label="Название"
          variant="outlined"
          value={inpValues.title}
          name="title"
          onChange={(e) => handleChange(e)}
          className="field1"
        />
        <TextField
          id="outlined-basic"
          label="Тип"
          variant="outlined"
          value={inpValues.type}
          name="type"
          onChange={(e) => handleChange(e)}
          className="field2"
        />
        <TextField
          id="outlined-basic"
          label="Описание"
          variant="outlined"
          value={inpValues.description}
          name="description"
          onChange={(e) => handleChange(e)}
          className="field3"
        />
        <TextField
          id="outlined-basic"
          label="Цена"
          variant="outlined"
          value={inpValues.price}
          name="price"
          onChange={(e) => handleChange(e)}
          className="field4"
        />
        <TextField
          id="outlined-basic"
          label="Изображение"
          variant="outlined"
          value={inpValues.img}
          name="img"
          onChange={(e) => handleChange(e)}
          className="field5"
        />

        <Button type="submit" variant="contained" className="btnSave">
          Редактировать
        </Button>
      </div>
    </form>
  );
};

export default EditService;
