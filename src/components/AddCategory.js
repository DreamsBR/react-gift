import React, { useState } from 'react'
import PropType  from 'prop-types'

export const AddCategory = ({setCategoria}) => {
    
    const [inputValue, setInput] = useState('')
    
    const handleInputChange = (e)=>{
        // console.log( e.target.value );
        setInput(e.target.value);
    }

    const handleSubmit=  (e) =>{
        e.preventDefault();
        if(inputValue.trim().length >2 ){
            setCategoria(cats => [inputValue, ...cats])
            setInput('')
        }
        
    }
    
    return (        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Busque Gif"
                value={inputValue}
                onChange={ handleInputChange}
            ></input>
        </form>
    )

}
AddCategory.PropType = {
    setCategoria :PropType.func.isRequired
}

