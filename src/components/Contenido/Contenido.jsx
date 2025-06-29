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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sit natus soluta ipsam et facere, molestias totam inventore corrupti error aliquam a officia itaque enim aut, nam voluptate quasi suscipit ipsa blanditiis praesentium adipisci? Veritatis quo optio modi tenetur ad.
          </p>
          <div className='flex justify-center gap-4'>
            <a href="" className='bg-purple-600 py-2 px-6 rounded-3xl text-white hover:bg-purple-800 transition-all duration-300 items-center cursor-pointer'>
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
        
    </motion.section>
  
  )
}

export default Contenido