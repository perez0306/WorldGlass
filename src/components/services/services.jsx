import React from "react";
import { servicesData } from "./services.utils";
// Libs
import Image from "next/image";
import './services.css';

const Services = () => {
  return (
    <div className='container-services'>
      <div>
        <h1>Nuestros Servicios</h1>
        <p className='text-services'>Ofrecemos una variedad de servicios para su vehículo</p>
      </div>
      {servicesData.map((item) => (
        <section class="servicio">
          <Image src={item.src} alt={`${item.title} - Crédito: Shutterstock`} />
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </section>
      ))}
    </div>
  );
};

export default Services;
