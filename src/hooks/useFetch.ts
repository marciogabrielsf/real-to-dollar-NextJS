import axios from "axios";
import { env } from "process";
import { useState, useEffect } from "react";


export function useFetch<T = unknown>(url: string){
    const [data, setData] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

         useEffect(() => {
              axios.get(url, {
                 headers: {
                     'apikey': process.env.NEXT_PUBLIC_API_KEY as string
                 }
              })
              .then(response => {
                 setData(response.data)
              })
              .catch(err => {
                setError(err)
              })
              .finally(() => {
                setIsFetching(false)
              })
          
         }, [])

    return { data }
}