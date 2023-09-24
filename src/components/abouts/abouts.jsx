import React from "react";
import './abouts.css'

const Abouts = () => {
  return (
    <div className="container-about">
      <section className="container-items">
        <div className="item-mision">
          <h3>Nuestra Misión</h3>
          <p>
            Nuestra misión es proporcionar a nuestros clientes soluciones
            automotrices excepcionales y de alta calidad que mejoren la
            seguridad, comodidad y belleza de sus vehículos. Nos comprometemos a
            brindar películas de seguridad y polarizados premium, vidrios para
            autos confiables y servicios de reparación y pulido, respaldados por
            un equipo experto y un servicio al cliente excepcional. En World
            Glass, trabajamos incansablemente para proteger y embellecer tu
            inversión en automóviles, garantizando una experiencia de conducción
            segura y satisfactoria.
          </p>
        </div>
        <div className="item-vision">
          <h3>Nuestra Visión</h3>
          <p>
            Nuestra visión es ser líderes reconocidos en la industria
            automotriz, conocidos por nuestra excelencia en servicios de
            seguridad y comodidad para vehículos. Nos esforzamos por ser la
            primera elección de nuestros clientes al brindar soluciones
            innovadoras y de alta calidad que protejan y embellezcan sus
            vehículos. Buscamos expandir nuestro alcance global, manteniendo al
            mismo tiempo nuestro compromiso con la satisfacción del cliente y la
            integridad en cada paso de nuestro negocio. En World Glass,
            visualizamos un futuro donde cada conductor pueda disfrutar de un
            viaje seguro, cómodo y elegante en su vehículo gracias a nuestros
            servicios y productos líderes en la industria.
          </p>
        </div>
        <div className="item-valores">
          <h3>Principios y Valores</h3>
          <p>
            Calidad, Integridad, Innovación, Profesionalismo y Servicio al
            Cliente.
          </p>
        </div>
      </section>
      <section className="container-maps">
        <h3>Ubicación</h3>
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6353481671927!2d-74.07808872495241!3d4.658942942017986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b7f2eac05f9%3A0xe785dbb478483f55!2sWorld%20Glass!5e0!3m2!1ses!2sco!4v1695528717385!5m2!1ses!2sco"
          width="600"
          height="450"
        ></iframe>
      </section>
    </div>
  );
};

export default Abouts;
