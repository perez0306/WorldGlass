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
      <div className="footer-content">
        <div className="footer-logo">
          <Image
            width={100}
            height={24}
            src={Logo}
            alt="Logo de tu empresa"
            title="Logo de tu empresa"
          />
        </div>
        <div className="footer-links">
          <ul>
            {options?.map((item) => (
              <li key={`${item.text}-${item.href}`}>
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}{" "}
          </ul>
        </div>
        <div className="footer-contact">
          <p>Contacto: sierrawilly69@gmail.com</p>
          <p>Teléfono: +57 321 4822797</p>
          <p>Dirección: Cra. 28a #64A-19, Bogotá</p>
        </div>
        <div className="footer-social">
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
