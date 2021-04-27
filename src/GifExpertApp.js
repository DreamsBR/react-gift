import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const  GifExpertApp = () => {

    const [cantegorias, setCategoria] = useState(['Pokemon'])

    // const handleAdd = () =>{
    //     setCategoria(e => [...e, 'AEA']);
    //     // setCategoria( [ 'Hola comoestas', ...cantegorias]);
    // }

    console.log(cantegorias);
    
    return (  
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr/>
            {/* <button onClick={handleAdd}>+Agregar</button> */}
            <AddCategory setCategoria={setCategoria}/>
            <ol>
            {  cantegorias.map((e)=> 
                <GifGrid key={e} cateogy={e}/>
            )} 
               
            
            
               
            </ol>
            
        </Fragment>
    );
    
}
 
export default GifExpertApp ;