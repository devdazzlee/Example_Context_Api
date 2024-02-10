import React, { useContext, useState } from 'react';
import { useCrudContext } from '../Context/CrudContext';

const Component2 = () => {
  const { items, addItem , deleteItem , updateItem  } = useCrudContext(); // Use useCrudContext hook to access context values
  const [value, setValue] = useState('');

  const addItemInner = () => {
    addItem(Math.random() , value);
    setValue(''); // Clear input value after adding item
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>Crud Operation</h1>
      <input value={value} onChange={handleChange} type="text" />
      <button onClick={addItemInner}>Add</button>




<h1>Items List</h1>


{console.log(items)}
{items.map((item) => (
  <div key={item._id}>
    <h1>{item.Value}</h1>
    <button onClick={() => updateItem(item._id, prompt('Enter new text:', item.text))}>
            Edit
          </button>

    <button   onClick={()=>{
        deleteItem(item._id)
    }}  >Delete</button>
  </div>
))}



    </>
  );
};

export default Component2;
