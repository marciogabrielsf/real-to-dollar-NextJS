import React, { useState } from 'react'
import styles from './masthead.module.scss'
import { maskNumber } from '../../util/mask'

const Masthead: React.FC = () => {

    const [inputReal, setInputReal] = useState({ real: "", dolar: "" })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputReal({ ...inputReal, real: e.target.value })
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
                        name='real'
                        value={inputReal.real}
                        onChange={(e) => handleChange(maskNumber(e))}
                    />
                    <span>USD</span>
                    <input type="text" placeholder='USD' />
                </div>
            </div>
        </section>
    )
}

export default Masthead