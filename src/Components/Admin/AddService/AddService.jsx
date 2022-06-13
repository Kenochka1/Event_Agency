import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
// import { toast, ToastContainer } from "react-toastify";
import { serviceContext } from "../../Context/ServiceContext";
// import "react-toastify/dist/ReactToastify.css";
import "./AddService.css";
import MainNavbar from "../../MainNavbar/MainNavbar";
import { authContext } from "../../Context/AuthContext";

const initObj = {
  title: "",
  type: "",
  description: "",
  price: "",
  img: "",
};
const AddService = () => {
  const { addService1 } = useContext(serviceContext);
  const [inpValues, setInpValues] = useState(initObj);
  const { user } = useContext(authContext);

  // const alertToastify = () => {
  //   toast.error("Заполните все поля!", {
  //     position: "top-center",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: false,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // };
  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
    console.log(obj);
  };
  const clearInput = () => {
    setInpValues(initObj);
  };
  const handleSave = (e) => {
    if (
      inpValues.title.trim() === "" ||
      inpValues.type.trim() === "" ||
      inpValues.description.trim() === "" ||
      inpValues.price.toString().trim() === "" ||
      inpValues.img.trim() === ""
    ) {
      // alertToastify();
      alert("Заполните все поля");
      return;
    }
    e.preventDefault();
    addService1(inpValues);
    clearInput();
  };
  return (
    <>
      <MainNavbar />
      {user.email === "adminuser@gmail.com" ? (
        <form className="inp" onSubmit={(e) => handleSave(e)}>
          <div className="inputs">
            <div>
              <TextField
                id="outlined-basic"
                label="Название"
                variant="outlined"
                value={inpValues.title}
                name="title"
                onChange={(e) => handleChange(e)}
                className="inp1"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Группа"
                variant="outlined"
                value={inpValues.type}
                name="type"
                onChange={(e) => handleChange(e)}
                className="inp2"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Описание"
                variant="outlined"
                value={inpValues.description}
                name="description"
                onChange={(e) => handleChange(e)}
                className="inp3"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                type="number"
                label="Цена"
                variant="outlined"
                value={inpValues.price}
                name="price"
                onChange={(e) => handleChange(e)}
                className="inp4"
              />
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Изображение"
                variant="outlined"
                value={inpValues.img}
                name="img"
                onChange={(e) => handleChange(e)}
                className="inp5"
              />
            </div>

            <div>
              <Button
                onClick={handleSave}
                type="button"
                variant="contained"
                className="btnSave"
              >
                Добавить
              </Button>
              {/* <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              /> */}
            </div>
          </div>
        </form>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "150px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {" "}
          <h1>
            У вас нет доступа на эту страницу! <br />
            🤡
          </h1>{" "}
        </div>
      )}
    </>
  );
};

export default AddService;
