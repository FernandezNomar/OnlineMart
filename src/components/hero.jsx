import React from 'react';
import PropTypes from 'prop-types';
import imgHome_1 from "../assets/images/imgHome_1.png";
import imgHome_2 from "../assets/images/imgHome_2.png";
import imgHome_3 from "../assets/images/imgHome_3.png";
const Hero = () => {
    return (
        <div>
            <div className="mt-80 mb-5">
            <div className="bg-[#262626] w-3/4 p-8 rounded-xl ml-56 inline-flex">
            <img src={imgHome_1} className="w-60 h-60 rounded-full object-cover -mt-20 -ml-20 shadow-4xl" />
              <div className=" p-10 rounded-xl ml-5">
            <p className="text-[#FF7800] text-4xl font-extrabold mb-5"> - Victoria Beckham</p>
            <p className="text-[#FFFFFF] text-2xl font-blod">"La joyería es una inversión atemporal que trasciende 
            las tendencias y se convierte en un tesoro personal." </p>
              </div>
               </div>
        </div>
        <div className="mt-20 mb-20 ">
            <div className="bg-[#262626] w-3/4 p-8 rounded-xl ml-56 inline-flex">
              <div className=" p-10 rounded-xl ml-5 -mt-8 ">
            <p className="text-[#FF7800] text-4xl font-extrabold mb-5">Pharrell Williams</p>
            <p className="text-[#FFFFFF] text-2xl font-blod">"La ropa es una forma de autenticidad visual, una forma de contar 
            una historia sobre quién eres sin decir una palabra."</p>
              </div>
              <img src={imgHome_2} className=" w-80 h-60 rounded-full object-cover -mt-20 -mr-20 shadow-4xl" />
               </div>
        </div>
        <div className="mt-20 mb-20 ">
            <div className="bg-[#262626] w-3/4 p-8 rounded-xl ml-56 inline-flex">
            <img src={imgHome_3} className="w-60 h-60 rounded-full object-cover -mt-20 -ml-20 shadow-4xl" />
              <div className=" p-10 rounded-xl ml-5 -mt-8 -mb-8">
            <p className="text-[#FF7800] text-4xl font-extrabold mb-5"> - Karl Lagerfeld</p>
            <p className="text-[#FFFFFF] text-2xl font-blod">"La moda te permite ser quien quieras ser en cualquier momento. 
            Es una forma de arte en movimiento." </p>
              </div>
               </div>
        </div>
        </div>
    );
};



export default Hero;
