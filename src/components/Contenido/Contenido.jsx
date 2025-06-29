import React from 'react'
import Persona from '../../assets/Persona.png'
import Logo from '../../assets/Espadas.png'
import css from '../../assets/css-3.png'
import html from '../../assets/html-5.png'
import react from '../../assets/react.png'
import javascript from '../../assets/javascript.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import flask from '../../assets/flask.svg'
import python from '../../assets/python.png'
import django from '../../assets/django.png'
import mysql from '../../assets/mysql.svg'
import apache from '../../assets/apache.png'
import kotlin from '../../assets/kotlin.svg'
import android from '../../assets/android studio.svg'
import figma from '../../assets/figma.svg'
import github from '../../assets/github.svg'
import teatro from '../../assets/teatro.png'
import juegos from '../../assets/tienda_juegos.png'
import municipio from '../../assets/municipio.png'
import calculadora from '../../assets/calculadora.png'

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { slipeUp } from '../../utility/animation'

const Contenido = () => {
  return (
    <motion.section className='mt-20'
    variants={slipeUp(0.6)}
          initial="initial"
          animate="animate"
    >
      <div className='grid grid-cols-1 md:grid-cols-2 '>

        {/* Textos y descripcion */}
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Logo} alt="" className='w-20 h-20 flex justify-center mx-auto'/>
          <span className='text-white flex justify-center text-2xl'>
            SOBRE MI
          </span>
          <p className='py-5 text-white'>
            Mi nombre es Eddy Noe Torrico Rocha, soy un apasionado del desarrollo web y de aplicaciones de escritorio, donde encuentro un equilibrio perfecto entre creatividad y tecnología. Me encanta transformar ideas en soluciones funcionales y visuales, ya sea creando experiencias interactivas en la web o desarrollando software robusto para el escritorio. Mi objetivo es seguir aprendiendo y perfeccionando mis habilidades, siempre con el enfoque de crear herramientas que sean útiles y accesibles para los usuarios.
          </p>
          <div className='flex justify-center gap-4'>
            <a href="https://github.com/eddyNTR" target="_blank" rel="noopener noreferrer" className='bg-purple-600 py-2 px-6 rounded-3xl text-white hover:bg-purple-800 transition-all duration-300 items-center cursor-pointer'>
              github 
              <i className="bi bi-git text-xl ml-2"></i>
            </a>
            <a href="" className='text-white flex items-center cursor-pointer'>
              Contactame 
              <i className="bi bi-google ml-2 text-xl"></i>
            </a>
          </div>
        </div>
        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <img src={Persona} alt="Foto persona" className='rounded-full'/>
        </div>
      </div>
      
      {/*Mis habilidades */}
        <span className='text-white text-4xl flex justify-center'>
          Mis Habilidades
        </span>
        {/*Tarjetas con habilidades*/}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <div className='bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 '>
            <h3 className='text-xl font-bold'>Desarrollo Web</h3>
            <p className='mt-2 flex flex-wrap gap-4'> 
              <span className='flex items-center'>
                CSS 
                <img src={css} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                HTML
                <img src={html} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                JavaScript
                <img src={javascript} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                Boostrap
                <img src={bootstrap} alt="" className='w-10 h-10'/>,
              </span>
              <span className='flex items-center'>
                Tailwind
                <img src={tailwind} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                React
                <img src={react} alt="" className='w-10 h-10 '/>
              </span>
            </p>
          </div>

          <div className='bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 '>
            <h3 className='text-xl font-bold'>Backend</h3>
            <p className='mt-2 flex flex-wrap gap-4'> 
              <span className='flex items-center'>
                Python
                <img src={python} alt="" className='w-10 h-10'/>,
              </span>
              <span className='flex items-center'>
                Django
                <img src={django} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                Flask
                <img src={flask} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                MySQL
                <img src={mysql} alt="" className='w-10 h-10'/>,
              </span>
              <span className='flex items-center'>
                XAMPP
                <img src={apache} alt="" className='w-10 h-10 '/>
              </span>
            </p>
          </div>

          <div className='bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 '>
            <h3 className='text-xl font-bold'>Desarrollo Móvil</h3>
            <p className='mt-2 flex flex-wrap gap-4'> 
              <span className='flex items-center'>
                Kotlin
                <img src={kotlin} alt="" className='w-10 h-10 '/>,
              </span>
              <span className='flex items-center'>
                Android Studio
                <img src={android} alt="" className='w-10 h-10 '/>
              </span>
            </p>
          </div>

          <div className='bg-[rgba(128,0,128,0.5)] p-5 rounded-lg text-white hover:bg-purple-800 transition-all duration-300 '>
            <h3 className='text-xl font-bold'>Diseño UI/UX</h3>
            <p className='mt-2 flex flex-wrap gap-4'> 
              <span className='flex items-center'>
                Figma
                <img src={figma} alt="" className='w-10 h-10 '/>
              </span>
            </p>
          </div>
        </div>

        {/*tarjetas con los proyectos*/}
        <span className='text-white text-4xl flex justify-center'>
          Mis Proyectos
        </span>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'>
          <article className='bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden'>
            <img src={municipio} alt="proyecto 1" className='h-[180px] w-full object-cover' />
            <div className='flex gap-4 p-6'>
              <img src={Logo} alt="Logo" className='w-10 h-10'/>
              <div>
                <h2 className='font-bold text-xl'>Pagina municipio</h2>
                <p className='text-xs text-[#757575] font-light'>lenguajes: HTML, CSS</p>
              </div>
            </div>
              {/*Contenido de la tarjeta */}
            <div className='flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]'>
              <div className='grow'>
                <img src={html} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={css} alt="" className='h-10 w-10 mx-auto'/>
              </div>
              <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <a href="https://github.com/eddyNTR/Pagina-municipio.git" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" className='h-10 w-10 mx-auto'/>
                </a>
              </div>
            </div>
          </article>

          <article className='bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden'>
            <img src={juegos} alt="proyecto 1" className='h-[180px] w-full object-cover' />
            <div className='flex gap-4 p-6'>
              <img src={Logo} alt="Logo" className='w-10 h-10'/>
              <div>
                <h2 className='font-bold text-xl'>Pagina Tienda juegos</h2>
                <p className='text-xs text-[#757575] font-light'>lenguajes: HTML, CSS, JavaScript</p>
              </div>
            </div>
              {/*Contenido de la tarjeta */}
            <div className='flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]'>
              <div className='grow'>
                <img src={html} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={css} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={javascript} alt="" className='h-10 w-10 mx-auto'/>
              </div>
              <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <a href="https://github.com/eddyNTR/paginas-web.git" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" className='h-10 w-10 mx-auto'/>
                </a>
              </div>
            </div>
          </article>

          <article className='bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden'>
            <img src={calculadora} alt="proyecto 1" className='h-[180px] w-full object-cover' />
            <div className='flex gap-4 p-6'>
              <img src={Logo} alt="Logo" className='w-10 h-10'/>
              <div>
                <h2 className='font-bold text-xl'>Calculadora</h2>
                <p className='text-xs text-[#757575] font-light'>lenguajes: HTML, CSS</p>
              </div>
            </div>
              {/*Contenido de la tarjeta */}
            <div className='flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]'>
              <div className='grow'>
                <img src={html} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={css} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={javascript} alt="" className='h-10 w-10 mx-auto'/>
              </div>
              <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <a href="https://github.com/eddyNTR/paginas-web.git" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" className='h-10 w-10 mx-auto'/>
                </a>
              </div>
            </div>
          </article>

          <article className='bg-white rounded-2xl shadow-sm h-[340px] overflow-hidden'>
            <img src={teatro} alt="proyecto 1" className='h-[180px] w-full object-cover' />
            <div className='flex gap-4 p-6'>
              <img src={Logo} alt="Logo" className='w-10 h-10'/>
              <div>
                <h2 className='font-bold text-xl'>Pagina Teatro</h2>
                <p className='text-xs text-[#757575] font-light'>Lenguajes: HTML, CSS, JavaScript, Python</p>
              </div>
            </div>
              {/*Contenido de la tarjeta */}
            <div className='flex h-[64px] items-center justify-around border-t-[1px] border-[#c0bcbc]'>
              <div className='grow'>
                <img src={html} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={css} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={javascript} alt="" className='h-10 w-10 mx-auto'/>
              </div>
                <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <img src={python} alt="" className='h-10 w-10 mx-auto'/>
              </div>
              <hr className='mx-4 h-4 w-[1px] border-none bg-black/10'/>
              <div className='grow'>
                <a href="https://github.com/adrixVic/Dessingg_teatro.git" target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="" className='h-10 w-10 mx-auto'/>
                </a>
              </div>
            </div>
          </article>


        </div>
        
    </motion.section>
  
  )
}

export default Contenido