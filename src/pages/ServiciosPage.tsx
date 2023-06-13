import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
import { cargarprod, getCategorias} from '../firebase/FBcategorias';
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
    getCategorias()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])

  const estilotabla = {
    width: '100%',
    height: 'auto',
  };
  
  return (
    
    <section>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around'}}>
        <Grid item xs={5} sx={{backgroundColor: 'purple', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
        <table border={2}>
            <th>Nombre</th>
            <th>Peso</th>
            <th>Daño</th>
            <th>elemento</th>
            <th>debilidad</th>
            <th>especie</th>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <tr>
              <td>{categoria.monstruos}</td>
              <td>{categoria.peso}</td>
              <td>{categoria.daño}</td>
              <td>{categoria.elemento}</td>
              <td>{categoria.debilidad}</td>
              <td>{categoria.especie}</td>
            {<img src={categoria.logo} alt='' style={estilotabla} /> }
              </tr>
              </>
            ))
          }
          </table>
        </Grid>

        <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px',}}>
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
            <TextField
              {...register('elemento')}
              // id='nombre'
              label='elemento'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('debilidad')}
              // id='nombre'
              label='debilidad'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('especie')}
              // id='nombre'
              label='especie'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>
            <TextField
              {...register('logo')}
              // id='nombre'
              label='url imagen'
              type='string'
              sx={{ width: '60%' }}
            >
            </TextField>

            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
          <Button variant='contained' onClick={cargarprod}>Cargar Datos</Button>
        </Grid>
      </Grid>
    </section>
  );
    
};
export default ServiciosPage;