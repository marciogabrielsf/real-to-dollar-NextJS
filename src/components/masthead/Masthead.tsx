import React, { useState, useEffect } from 'react'
import styles from './masthead.module.scss'
import { maskNumber } from '../../util/mask'
import { useFetch } from '../../hooks/useFetch'

type Currency = {
    rates: any
    USD: number
    BRL: number
}


const Masthead: React.FC = () => {

    const [inputReal, setInputReal] = useState("")
    const [inputDolar, setInputDolar] = useState("")

    const { data } = useFetch<Currency>('https://api.apilayer.com/exchangerates_data/latest?symbols=USD&base=BRL')


    const handleBRLConvertion = (str: string, cotacao: number) => {
        return ((parseFloat(str.replace(/[^0-9,]/g, '').replace(/,/g, '.')) * cotacao).toFixed(2));
    }
    const handleUSDConvertion = (str: string, cotacao: number) => {
        return ((parseFloat(str.replace(/[^0-9,]/g, '').replace(/,/g, '.')) / cotacao).toFixed(2));
    }


    const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        maskNumber(e)
        setInputReal(e.target.value)
        if (e.target.value.length > 0)
            setInputDolar(handleBRLConvertion(e.target.value, data?.rates.USD))
        else
            setInputDolar("")

    }
    const handleDolarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        maskNumber(e)
        setInputDolar(e.target.value)
        if (e.target.value.length > 0)
            setInputReal(handleUSDConvertion(e.target.value, data?.rates.USD))
        else
            setInputReal("")

    }

    return (
        <section className={styles.section1}>
            <div className={styles.mainDiv}>
                <h1>Conversor de Real para Dólar</h1>
                <h2>Insira o valor abaixo.</h2>
                <div>
                    <span>R$</span>
                    <input type="text"
                        placeholder='R$'
                        value={inputReal}
                        onChange={(e) => handleRealChange(e)}
                    />
                    <input type="text" placeholder='USD'
                        value={inputDolar}
                        onChange={(e) => handleDolarChange(e)}
                    />
                    <span>USD</span>
                </div>
            </div>
        </section>
    )
}

export default Masthead