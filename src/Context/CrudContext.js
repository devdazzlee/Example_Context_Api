import React, {createContext , useContext, useState} from "react";  

const CrudContext = createContext()
export const  useCrudContext = () => useContext(CrudContext);

export  const  CrudContextProvider  = ({children})=>{

const [items, setItems] = useState([])
const addItem  = (_id , Value)=>{
   setItems([...items , {_id , Value}])
}

const deleteItem = (_id)=>{
    setItems(items.filter((item)=>  item._id !== _id ))

}   
const updateItem = (_id, newText) => {
    setItems(items.map((item) => (item._id === _id ? { ...item, Value: newText } : item)));
};

return(
<CrudContext.Provider  value={{items , addItem,deleteItem , updateItem  }} >

{children}

</CrudContext.Provider>


)


}