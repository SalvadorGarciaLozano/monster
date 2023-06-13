import React from 'react'
import { ICategoria } from '../interfaces/ICategoria'
import { getCategorias } from '../firebase/FBcategorias'
import { useState } from 'react'
import { useEffect } from 'react'
import { getmonstruosancianos } from '../firebase/FBcategorias'
export const SesionPage = () => {
  const [categorias, setCategorias] = useState<ICategoria[]>([])
  useEffect(() => {
    getmonstruosancianos()
      .then(res => {
        console.log(...res)
        setCategorias([...res])
      })
  }, [])

  return (
    <>
    <div>
    <h1>listado de dragones ancianos  
    </h1>
    <div className="card-container">
      {categorias.map((categoria) => (
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