import React from 'react'
import { ICategoria } from '../interfaces/ICategoria'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
export const SesionPage = () => {
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
    <h2 id='NewCat'>Listado de monstruos Brutos</h2>
          {
            categorias.slice(0, 100).map((categoria) => (
              <>
              </>
            ))
          }
        </>
  )
}