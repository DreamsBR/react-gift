
import { useEffect, useState } from "react"
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (cateogy) =>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    
        
    useEffect( ()=> {
        getGifts(cateogy)        
            .then(imgs => {                
                    console.log(imgs);
                    setstate({
                        data:imgs,
                        loading:false
                    });
                
            })
    },[cateogy])

    return state;
}