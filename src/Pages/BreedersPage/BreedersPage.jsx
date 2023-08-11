import React, { useEffect, useState } from 'react';
import { breederIndexRequest } from '../../utilities/dogs-api';
import BreederList from '../../Components/BreederList/BreederList';

export default function BreederPage(){
    const [breeders, setBreeders]=useState([])
    useEffect(()=>{
        async function getBreeders(){
            const breeders = await breederIndexRequest();
            setBreeders(breeders)
        }
        getBreeders();
    }, [])
    
    return(
        <>
        <main>
            <h1>Breeders</h1>
            <BreederList breeders ={breeders} />
        </main>
    </>
    
    )
}