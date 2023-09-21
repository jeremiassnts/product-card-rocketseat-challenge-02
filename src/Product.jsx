import styles from './Product.module.css'
import couch from './assets/couch.png'
import close from './assets/close.svg'
import image360 from './assets/360.svg'
import couch360 from './assets/couch.gif'

export function Product() {
    return (
        <div className={styles.container}>
            <div className={styles.productImage}>
                <img src={couch} alt='Pink couch' />
                <button>
                    <img src={image360} alt='360 turn icon' />
                </button>
                {/* <img src={couch360} alt='Pink couch rotating' /> */}
                {/* <button>
                    <img src={close} alt='Close icon' />
                </button> */}
            </div>
            <div className={styles.info}>
                <span className={`lato ${styles.code}`}>CÓDIGO: 42404</span>
                <span className={`crimson ${styles.title}`}>Sofá Margot II - Rosé</span>
                <span className={`lato ${styles.value}`}>R$ 4.000</span>
                <button className='lato'>ADICIONAR À CESTA</button>
            </div>
        </div>
    )
}