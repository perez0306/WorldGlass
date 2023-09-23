import React from "react";
// Style
import "./footer.css";
// Libs
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// Utils
import { options } from "./footer.utils";
import Logo from "@/static/img/footer/logo.webp";

const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <div class="footer-logo">
          <Image
            width={100}
            height={24}
            src={Logo}
            alt="Logo de tu empresa"
            title="Logo de tu empresa"
          />
        </div>
        <div class="footer-links">
          <ul>
            {options?.map((item) => (
              <li key={`${item.text}-${item.href}`}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}{" "}
          </ul>
        </div>
        <div class="footer-contact">
          <p>Contacto: ejemplo@dominio.com</p>
          <p>Teléfono: +123-456-7890</p>
          <p>Dirección: Calle Ficticia, Ciudad Imaginaria</p>
        </div>
        <div class="footer-social">
          <p>Síguenos en:</p>
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
