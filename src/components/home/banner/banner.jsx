'use client';
import React, {useEffect} from "react";
import Image from "next/image";
// Style
import "./banner.css";
// Utils
import MainLogo from "../../../static/img/home/main.webp";

const Banner = () => {
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      const image = document.getElementById("img-banner");
      image.style.opacity = 0.5;
    }
  }, []);
  return (
    <>
      <Image
        className="image"
        src={MainLogo}
        alt="polarizados"
        title="polarizados"
        id='img-banner'
      />
      <h1 className="title">Servicios Profesionales para Vidrios de Autos en WorldGlass</h1>
      <p className='subtitle'>Transforma tu auto con nuestros servicios de polarizado de primera calidad.</p>
    </>
  );
};

export default Banner;
