import React, { useState } from 'react'
import styles from './masthead.module.scss'
import { maskNumber } from '../../util/mask'

interface Props {
    makeConvertion: () => string
}



const Masthead: React.FC = () => {

    const [inputReal, setInputReal] = useState("")
    const [inputDolar, setInputDolar] = useState("")


    const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputReal(e.target.value)
    }
    const handleDolarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputDolar(e.target.value)

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
                        onChange={(e) => handleRealChange(maskNumber(e))}
                    />
                    <input type="text" placeholder='USD'
                        value={inputDolar}
                        onChange={(e) => handleDolarChange(maskNumber(e))}
                    />
                    <span>USD</span>
                </div>
            </div>
        </section>
    )
}

export default Masthead