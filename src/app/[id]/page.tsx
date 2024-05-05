"use client"

import CatCard from "@/components/CatCard";
import Image from 'next/image'
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: string;
    };
};

interface Cat {
    id: string;
    url: string;
    height: number;
    width: number;
  }

export default function page({params} : Props ){

    const [cat, setCat] = useState<Cat | null>(null)



    useEffect(() => {
      const fetchData = async ()=>{
        const response = await axios.get<Cat>(process.env['NEXT_PUBLIC_API_URL'+`/${params.id}`] ?? "");
        console.log(response.data);
        setCat(response.data)
      };


      fetchData();
    },[params.id])
    

  return (
    <main>
        <div>
            <h1>Perfil de Gat</h1>
            <h4>{`ID: ${params.id}`}</h4>
            {
                cat !== null && (
                    <Image src={cat.url} height={cat.height} width={cat.width} alt="gato"/>
                )
            }
        </div>
    </main>
  )
}
