import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItems } from './GifGridItems';

// import { GifGridItems } from './GifGridItems';

export const GifGrid = ({cateogy}) => {
    // const [contador, setContador] = useState(0)
    const {data , loading} = useFetchGifs( cateogy );
    

    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{cateogy}</h3>
            {loading && <p className="animate__animated animate__flash" >Cargando</p> }
            <div className="card-read">
                 
                    { data.map( (img) =>(
                        <GifGridItems 
                            key={img.id}
                            { ...img }
                        />
                        
                    )) }
                
            </div>
        </>            
    )
}
