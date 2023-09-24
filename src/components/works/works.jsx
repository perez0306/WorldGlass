import React from "react";
import Image from "next/image";
import { WorksImages } from "./works.utils";
import "./works.css";

const Works = () => {
  return (
    <div className="header-works">
      <div>
        <h1>Trabajos Realizados</h1>
        <p className="text-works">
          Te invitamos a explorar una selección de nuestros proyectos
          anteriores. A través de esta galería, podrás sumergirte en nuestro
          portafolio de trabajos realizados con dedicación y creatividad. Cada
          proyecto representa un desafío único que abordamos con pasión y
          compromiso, buscando superar las expectativas de nuestros clientes.
        </p>
      </div>
      <ul className='list'>
        {WorksImages.map((image, index) => (
          <li>
            <Image
              quality={75}
              priority
              src={image}
              width={200}
              height={200}
              alt={`polarizado-${index} `}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Works;
