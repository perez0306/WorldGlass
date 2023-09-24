import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container-contact">
      <section className='contain'>
        <h2 className="title-contact">Información de Contacto</h2>
        <p className="text-contact">
          Estamos disponibles para responder tus preguntas y atender tus
          necesidades. Puedes ponerte en contacto con nosotros de las siguientes
          maneras:
        </p>
        <ul>
          <li className="text-contact">Teléfono: +57 3214822797</li>
          <li className="text-contact">
            Correo Electrónico:{" "}
            <a href="mailto:sierrawilly69@gmail.com">correo@tudominio.com</a>
          </li>
          <li className="text-contact">Dirección: Cra. 28a #64A-19, Bogotá</li>
        </ul>
      </section>
      <section className='contain'>
        <h2 className="title-contact">Horario de Atención</h2>
        <p className="text-contact">
          Nuestro horario de atención es el siguiente:
        </p>
        <ul>
          <li className="text-contact">Lunes a Sabado: 7:00 am - 5:00pm</li>
          <li className="text-contact">Domingos: 8:00 am - 12:00pm</li>
        </ul>
      </section>
    </div>
  );
};

export default Contact;
