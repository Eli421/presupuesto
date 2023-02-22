import { useState } from 'react'

import Header from './components/Header'


function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false)


  return (
    <div>
      <Header 
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValidPrespuesto = {setIsValidPrespuesto}

      />
    </div>
  )
}

export default App
