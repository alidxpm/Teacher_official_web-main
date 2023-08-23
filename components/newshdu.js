import styles from '../styles/components/newshdu.module.css'
import Subpages_main from '../components/subpages_main'
import Subpages_anothor from '../components/subpages_another'

export default function Newshdu(){  
    return(
        <div className={styles.content}>
            <div className={styles.content1}>
              <Subpages_main ></Subpages_main>      
            </div>
            <div className={styles.content2}>
              <Subpages_anothor></Subpages_anothor> 
            </div>
        </div>
    )
}