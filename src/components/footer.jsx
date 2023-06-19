import React from 'react'
import logoOnlyMarket from "../assets/images/marca/logoOnlyMarket.png";
const Footer = () => {
  return (
    <footer>
      <div className=" bg-[#262626] container px-5 py-11 mx-auto flex items-center flex-row flex-nowrap">
        <div className="w-64 flex-shrink-0 ml-24 mr-10 mt-3 ">
          <a className="flex items-center justify-stat ">
            <img src={logoOnlyMarket} fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" className="w-14 h-14 rounded-full" viewBox="0 0 24 24">
            </img>
            <span className="ml-1 text-3xl font-black text-[#FF7800]">Online</span>
            <span className="ml-1 text-3xl font-black text-[#59291C]">Mart</span>
          </a>
          <p className="mt-2 text-sm-3xl text-gray-500">Productos de calidad entregados directamente a tu puerta</p>
        </div>
        <div className="flex-grow flex flex-wrap pl-10 -mb-10 mt-10 text-left">
          <div className="w-1/3 px-6">
            <h2 className="title-font text-[#FF7800] tracking-widest text-sm mb-3 font-black uppercase">categorias</h2>
            <nav className="list-none mb-10">
            <p className="mt-2 text-sm text-gray-500">La idea de Online surgió producto de una visión 
            inteligente de que el mundo de los videojuegos iba a tener una gran importancia y crecimiento en nuestro país.
            Así nacemos en 1999 abriendo al público nuestra primera sucursal</p>
            </nav>
          </div>
          <div className="w-1/3 px-6">
          <h2 className="title-font text-[#FF7800] tracking-widest text-sm mb-3 font-black uppercase">Horarios de servicio</h2>
            <nav className="list-none mb-10">
            <p className="mt-2 text-sm text-gray-500">Estamos disponibles los 7 días de la semana 
            en horarios de 9.00am a 9.00pm, domingo y días feriados de 10.00am a 7.00pm.
              <br /><br />
            Megacentro (de 10.am a 6.pm, domingo y días feriados).</p>
            </nav>
          </div>
          <div className="w-1/3">
            <h2 className="title-font text-[#FF7800] tracking-widest text-sm mb-3 font-black uppercase">Redes sociales</h2>
            <nav className="list-none mb-10">
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
            </nav>
          </div>
         
        </div>
      </div>
      <div className="bg-[#2D2D2D]">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
            <a href="#" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
          </p>
           </div>
      </div>
    </footer>
  )
}

export default Footer