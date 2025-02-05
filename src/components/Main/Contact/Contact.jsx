import React, { useState } from 'react';
import FormContact from "./FormContact";
import CardContact from "./CardContact";

const Contact = () => {
  
  // estado a compartir {message,date}
  const [data, setData] = useState({}); 

  const clearData = () => {
    setData({});
  }

  const addData = (message) => {
    const date = new Date().toDateString();
    const data = {message,date};
    setData(data);
  }

  return <div className="contactContainer">
    <h3>Formulario de registro</h3>
    <FormContact add={addData}/> {/* Sibling 1 */}
    <CardContact data={data} clear={clearData}/> {/* Sibling 2 */}
    </div>;
};

export default Contact;
