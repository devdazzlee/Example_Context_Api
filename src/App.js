import React from 'react'
import { MyContextProvider } from './Context/VariableContext'
import Component1 from './Components/Component1'
import { CrudContextProvider } from './Context/CrudContext'
import Component2 from './Components/Component2'
const App = () => {
  return (
    <>
<MyContextProvider>
  <CrudContextProvider>
  {/* <Component1/> */}
  <Component2/>
  </CrudContextProvider>
</MyContextProvider>

    </>
  )
}

export default App