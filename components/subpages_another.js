import styles from '../styles/components/subpages_another.module.css'
import { useState, useEffect } from 'react';
export default function Subpages_anothor(){  
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
           return(
             <>
                 <div className={styles.nav}>
                    <span className={styles.othernews}>其他新闻</span>
                    <a href='#' className={styles.morenews}>更多新闻</a>
                 </div>
                 <div className={styles.content}> 

                    <div className={styles.item}>
                    {(data||[]).filter(item => item.id === 3).map((item)=>{
                        return(
                            <>  
                            <ul>
                            <li className={styles.title} key={item.id}>{item.title}</li>
                            <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                            <a href='#'>
                            <li className={styles.datacontent} key={item.id}>{item.content}</li>
                            </a>
                            </ul> 
                            </>
                        )})}
                    </div>
                    <div className={styles.item}>
                    {(data||[]).filter(item => item.id === 4).map((item)=>{
                        return(
                            <>  
                            <ul>
                            <li className={styles.title} key={item.id}>{item.title}</li>
                            <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                            <a href='#'>
                            <li className={styles.datacontent} key={item.id}>{item.content}</li>
                            </a>
                            </ul> 
                            </>
                        )})}
                    </div>
                    <div className={styles.item}>
                    {(data||[]).filter(item => item.id === 5).map((item)=>{
                        return(
                            <>  
                            <ul>
                            <li className={styles.title} key={item.id}>{item.title}</li>
                            <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                            <a href='#'>
                            <li className={styles.datacontent} key={item.id}>{item.content}</li>
                            </a>
                            </ul> 
                            </>
                        )})}
                    </div>
                    <div className={styles.item}>
                    {(data||[]).filter(item => item.id === 6).map((item)=>{
                        return(
                            <>  
                            <ul>
                            <li className={styles.title} key={item.id}>{item.title}</li>
                            <li className={styles.resource} key={item.id}>来源： {item.resource}时间： {item.time}</li>
                            <a href='#'>
                            <li className={styles.datacontent} key={item.id}>{item.content}</li>
                            </a>
                            </ul> 
                            </>
                        )})}
                    </div>
                  </div> 
             </>
           )
     } 
   