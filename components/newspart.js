import Image from 'next/image'
import  styles  from '../styles/components/newspart.module.css'
import titleicon from '../public/newstitleicon.png'
import ParentComponent from '../components/parentcomponent'


export default function Newspart() {
  return (
    <>
      <div className={styles.bgc}> 
        <div className={styles.ellibgc}>
        </div>   
        <div className={styles.news}>
              <div className={styles.title}>
                <Image src={titleicon} className={styles.titleicon}></Image>
                <span className={styles.word}>新闻动态</span>
                <span className={styles.Engword}>/News Trends</span>
              </div>
              <div className={styles.content}>
              <ParentComponent></ParentComponent>     
              </div>
        </div>   
      </div>
    </>
   
  )
}
