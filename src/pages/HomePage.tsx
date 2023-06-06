import react from 'react'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import { cargarprod, getDatos } from '../firebase/FBcategorias'
import { NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
// import { cargarprod, getDatos } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import { newCategoria } from '../firebase/FBcategorias';
import './mh.css'
import Button from '@mui/material/Button';




export const HomePage = () => {
  const { register, handleSubmit } = useForm<ICategoria>();
  const onAddCategoria = async (dataCategoria: ICategoria) => {
    console.log(dataCategoria)
    await newCategoria(dataCategoria)
    window.location.reload();
  }
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
 
  return (
    <>
   
    </>
  )
}