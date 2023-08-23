import styles from '../styles/components/subpages_main.module.css'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import img from '../public/新闻图片.png'
export default function Subpages_main(){
   //获取数据
    const [data, setdata] = useState(null);
    useEffect(() => { 
      fetch("https://hdums.hdu.edu.cn/gw/api/newshdu")
      .then(response=>response.json())
      .then(response=>
        {
        setdata(response.data),
        console.log("fetch_data",response.data)
          } 
        )}, []);
        const handleClick = () => {
          window.location.href = '***.html?data=' + encodeURIComponent(nextPageData);
        };
      return(
        <>
            {(data||[]).filter(item => item.id === 1).map((item)=>{
            return(
                <>
                    <div className={styles.word}> 
                    <ul>
                    <li className={styles.title} key={item.id}>{item.title}</li>
                    <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                    <a onclick={handleClick}>
                    <li className={styles.content} key={item.id}>{item.content}</li>
                    </a>
                    <a onclick={handleClick} className={styles.knowmore}>了解详情</a>
                    </ul>
                    </div>

                    <div className={styles.picture} >
                        <Image src={img}></Image>
                    </div>  
                 </>
            )})}
        </>
      )
} 