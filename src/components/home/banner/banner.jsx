import React from "react";
import Image from "next/image";
// Style
import "./banner.css";
// Utils
import MainLogo from "../../../static/img/home/main.webp";

const Banner = () => {
  return (
    <>
      <Image
        className="image"
        src={MainLogo}
        alt="polarizados"
        title="polarizados"
      />
      <h1 className="title">Servicios Profesionales para Vidrios de Autos en WorldGlass</h1>
      <p className='subtitle'>Transforma tu auto con nuestros servicios de polarizado de primera calidad.</p>
    </>
  );
};

export default Banner;
