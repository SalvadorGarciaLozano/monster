import react from 'react'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import { getDatos } from '../firebase/FBcategorias'
import { NavLink } from 'react-router-dom'
// import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import { TextField } from '@mui/material';
import { ICategoria } from '../interfaces/ICategoria';
// import { cargarprod, getDatos } from '../firebase/FBcategorias';
// import { useForm } from 'react-hook-form';
// import { newCategoria } from '../firebase/FBcategorias';
import './mh.css'


export const HomePage = () => {
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
    <h2 id='NewCat'>Listado de Categorias</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              <div className='caja1' key={categoria.name}>{categoria.voladores}
             
              { <NavLink to={'/contacto'}> <img src="https://www.monsterhunter.com/stories2/assets/images/monster/pic_monster39.png" />
              </NavLink>}
              </div>
              <div className='caja2' key={categoria.name}>{categoria.terrestre}
              { <NavLink to={'/sesion'}> <img src="https://www.monsterhunter.com/stories2/assets/images/monster/pic_monster34.png
" />
              </NavLink>}
              </div>
              <div className='caja3' key={categoria.name}>{categoria.acuatico}
              { <NavLink to={'/proyectos'}> <img src="https://www.monsterhunter.com/stories2/assets/images/monster/pic_monster17.png
" />
              </NavLink>}
              </div>
              <div className='caja4' key={categoria.name}>{categoria.anciano}
              { <NavLink to={'/servicios'}> <img src="https://monsterbuddy.app/_nuxt/img/Nergigante.f156186.webp

" />
              </NavLink>}
              </div>
              </>
            ))
          }
          <section>
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Grid item xs={5} sx={{ backgroundColor: 'purple', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
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
              <td key={categoria.name}>{categoria.monstruos}</td>
              <td>{categoria.peso}</td>
              <td>{categoria.daño}</td>
              <td>{categoria.elemento}</td>
              <td>{categoria.debilidad}</td>
              <td>{categoria.especie}</td>
              {/* <img src={categoria.logo} alt="" /> */}
              </tr>
              </>
            ))
          }
          </table>
        </Grid>

        {/* <Grid item xs={5} sx={{ backgroundColor: 'aqua', margin: '10px', padding: '12px', height: 'max-content', borderRadius: '20px' }}>
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

            <Button type='submit' variant="contained" sx={{ marginTop: '10px' }}>Añadir</Button>
          </form>
          <Button variant='contained' onClick={cargarprod}>Cargar Datos</Button>
        </Grid> */}
      </Grid>
    </section>
        </>
 
 )
}