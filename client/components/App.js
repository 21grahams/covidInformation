import React, { useState, useEffect } from "react";
import axios from "axios";
import Map from "./Map";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./SignIn";
import Button from 'react-bootstrap/Button';

const App = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const getAllData = () => {
    axios
      .get("/getStats")
      .then((res) => setData(res.data))
      .catch((err) => console.log("Error with Get Request: ", err));
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <>
        <Button className='signUp' variant="primary" onClick={() => setModalShow(true)}>
          Sign Up
        </Button>

        <SignIn
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
      <Map data={data.Countries} setData={setData} global={data.Global} />
    </div>
  );
};

export default App;
