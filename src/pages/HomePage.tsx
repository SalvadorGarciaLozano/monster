import React from 'react'
import { ICategoria } from '../interfaces/ICategoria'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
import './home.css'
import { NavLink } from 'react-router-dom'


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
        </>
  )
}