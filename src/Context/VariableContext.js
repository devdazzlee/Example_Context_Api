import React, {createContext, useContext, useState} from "react";


export const MyContext = createContext()

export const MyContextProvider   = ({children }) =>{
const [name , setName ] = useState("Ahmed")

const updateName = (value)=>{
 return setName(value)
}

return(

    <MyContext.Provider value={{name , updateName}} >
        {children}
    </MyContext.Provider>
)


}



