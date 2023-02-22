
import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
    presupuesto, 
    setPresupuesto, 
    isValidPrespuesto, 
    setIsValidPrespuesto
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>

        {isValidPrespuesto ? (
            <p>Control presupuestos</p>
        ) : (

        <NuevoPresupuesto
            presupuesto = {presupuesto}
            setPresupuesto = {setPresupuesto}
            setIsValidPrespuesto = {setIsValidPrespuesto}
        />

    )}
    </header>
  )
}

export default Header