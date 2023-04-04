import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <h1 class="f-t">Victors</h1>
      <hr class="hr" />
      <div class="footer-items">
        <a href="/">Contact Us</a>
        <a href="/">Terms of services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Privacy Settings</a>
        <a href="/">Mobile App</a>
        <a href="/">About</a>
      </div>
      <div class="social-media">
        <a
          class="f-icon"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          class="f-icon"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          class="f-icon"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube/>
        </a>
      </div>
    </footer>
  );
}
