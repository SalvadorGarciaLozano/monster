import react from 'react'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import { cargarprod} from '../firebase/FBcategorias'
import { NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
// import { cargarprod, getDatos } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import { newCategoria } from '../firebase/FBcategorias';
import './mh.css'


export const HomePage = () => {
  // const { register, handleSubmit } = useForm<ICategoria>();
  // const onAddCategoria = async (dataCategoria: ICategoria) => {
  //   console.log(dataCategoria)
  //   await newCategoria(dataCategoria)
  //   window.location.reload();
  // }
  const [Categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
 
  return (
    <>
   <div>
    <h1>listado de monstruos totales</h1>
    <div className="card-container">
      {Categorias.map((categoria) => (
        <div key={categoria.monstruos} className="card">
          <h3>monstruo: {categoria.monstruos}</h3>
          <p>especie: {categoria.especie}</p>
          <p>debil al: {categoria.debilidad}</p>
          <p>peso promedio: {categoria.peso} Tons</p>
          <p>daño:{categoria.daño}</p>
          {/* Agrega más elementos <p> para mostrar otras propiedades */}
        </div>
      ))}
    </div>
  </div>
    </>
  )
}