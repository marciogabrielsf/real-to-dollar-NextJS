import Image from 'next/image'
import React, { PureComponent } from 'react'
import LoaderGif from '../../../public/img/loadingGif.gif'
import styles from './fullpageloader.module.scss'

export default class FullPageLoader extends PureComponent {
    render() {
        return (
            <div className={styles.loaderContent}>
                <div className={styles.loader}>
                    <Image src={LoaderGif} alt="Carregando..." quality={100} />
                </div>
            </div>
        )
    }
}
