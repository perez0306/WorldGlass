'use client';
import React, { useEffect } from "react";
// Libs
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import IconButton from "@mui/material/IconButton";
// Style
import "./whatsapp.css";

const Whatsapp = () => {
  const redirect = () => {
    const win = window.open(
      "https://api.whatsapp.com/send?phone=+573214822797&text=Hola!%20Estoy%20interesad@%20en%20lo%20que%20ofrecen%20en%20WorldGlass,%20pueden%20darme%20m%C3%A1s%20informaci%C3%B3n?",
      "_blank"
    );
    win.focus();
  };

  useEffect(() => {
  }, []);

  return (
    <div className='container-wsp'>
      <IconButton onClick={redirect}>
        <WhatsAppIcon />
      </IconButton>
    </div>
  );
};

export default Whatsapp;
