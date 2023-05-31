import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
import { getDatos } from '../firebase/FBcategorias';
import { useForm } from 'react-hook-form';
import { newCategoria } from '../firebase/FBcategorias';
import './mh.css'

export const ServiciosPage = () => {
  const { register, handleSubmit } = useForm<ICategoria>();
  const onAddCategoria = async (dataCategoria: ICategoria) => {
    console.log(dataCategoria)
    await newCategoria(dataCategoria)
    window.location.reload();
  }
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getDatos()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])
  return (
    <>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={5} sx={{ backgroundColor: 'purple', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
        <table border={2}>
            <th>Nombre</th>
            <th>Peso</th>
            <th>Daño</th>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <tr>
              <td key={categoria.name}>{categoria.monstruos}</td>
              <td>{categoria.peso}</td>
              <td>{categoria.daño}</td>
              {/* <img src={categoria.logo} alt="" /> */}
              </tr>
              </>
            ))
          }
          </table>
        </Grid>

        <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
          <h2 id='NewCat'>Añadir nuevos monstruos</h2>
          <form onSubmit={handleSubmit(onAddCategoria)} noValidate >
            <TextField
              {...register('monstruos')}
              // id='nombre'
              label='Nombre'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('peso')}
              // id='nombre'
              label='peso'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('daño')}
              // id='nombre'
              label='daño'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>

            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
        </Grid>
      </Grid>

    </>
  );
    
}
export default ServiciosPage;