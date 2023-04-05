import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
export default function Footer() {
  return (
    <footer>
      <h1 className="f-t text-lg">Victors</h1>
      <hr className="hr" />
      <div className="px-10 md:grid md:grid-cols-3 ">
        <div className="md:flex justify-center my-10">
          <div>
            <h1 className="font-bold text-xl">About</h1>
            <br />
            <p>বিভিন্ন বিষয়ে দক্ষ শিক্ষক দ্বারা শিক্ষাদান করা হয়</p>
          </div>
        </div>
        <div className="md:flex justify-center my-10">
          <div>
            <h1 className="font-bold text-xl">Contact</h1>
            <div>
              <div className="flex my-5">
                <IoMdMail className="pt-1 text-xl mr-2"/>
                <p>hello@victorsbd.com</p>
              </div>
              <div className="flex my-5">
                <FaPhoneAlt className="pt-1 text-xl mr-2"/>
                <p>(+880) 123 3456 7890</p>
              </div>
              <div className="flex my-5">
                <MdLocationOn className="pt-1 text-xl mr-2"/>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center my-10">
          <div>
            <h1 className="font-bold text-xl">Recent Posts</h1>
            <p className="my-5">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="footer-items">
        <a href="/">Contact Us</a>
        <a href="/">Terms of services</a>
        <a href="/">Privacy Policy</a>
        <a href="/">Privacy Settings</a>
        <a href="/">Mobile App</a>
        <a href="/">About</a>
      </div>

      <div className="social-media">
        <a
          className="f-icon"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          className="f-icon"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="f-icon"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
      <p className="text-center mt-10">Copyright © 2023</p>
    </footer>
  );
}
