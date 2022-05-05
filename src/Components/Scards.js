import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import diamond from "../Resources/diamond.png"
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Scards.css";

// import required modules
import { EffectCoverflow,  Pagination } from "swiper";



export default function Scards() {

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="serv">
          <h3>BRANDING</h3>
          <img src={diamond} style={{width:100} }></img>
          <p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time. </p>
          <Link
           style={{textDecoration: "none" ,
  color: "black",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontFamily: '29LT Bukra Regular',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.2rem",
  width: "90%",
  textAlign: "center"}} 
  
  to="../services#Concept">LEARN MORE</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="serv1">
        <h3 >BRANDING</h3>
          <img src={diamond} style={{width:100} }></img>
          <p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time. </p>
          <Link     style={{textDecoration: "none" ,
  color: "black",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontFamily: '29LT Bukra Regular',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.2rem",
  width: "90%",
  textAlign: "center"}}  to="../services#Branding">LEARN MORE</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="serv2">
        <h3>BRANDING</h3>
        <img src={diamond} style={{width:100} }></img>
        <p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time. </p>
        <Link    style={{textDecoration: "none" ,
  color: "black",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontFamily: '29LT Bukra Regular',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.2rem",
  width: "90%",
  textAlign: "center"}}  to="../services#Branding">LEARN MORE</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="serv3">
        <h3>BRANDING</h3>
          <img src={diamond} style={{width:100} }></img>
          <p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time. </p>
          <Link     style={{textDecoration: "none" ,
  color: "black",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontFamily: '29LT Bukra Regular',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.2rem",
  width: "90%",
  textAlign: "center"}}  to="../services#Branding">LEARN MORE</Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="serv4">
        <h3>BRANDING</h3>
          <img src={diamond} style={{width:100} }></img>
          <p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time. </p>
          <Link     style={{textDecoration: "none" ,
  color: "black",
  backgroundColor: "white",
  borderRadius: "0.5rem",
  padding: "0.5rem",
  fontFamily: '29LT Bukra Regular',
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "1.2rem",
  width: "90%",
  textAlign: "center"}}  to="../services#Branding">LEARN MORE</Link>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
