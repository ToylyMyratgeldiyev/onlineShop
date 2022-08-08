import styles from './Home.module.scss'
import ProductBlock from '../ProductBlock/ProductBlock'
import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {smartphoneAction} from  '../../redux/slices/sliceSmartphone'


function Home() {

    const [item, setItem] = useState([])
    
    const dispatch = useDispatch()
    const itemSmartphone = useSelector((item)=> {return item.smartphone.value})

    useEffect(()=>{
        fetch('https://62e7e82793938a545bdc17ea.mockapi.io/smartphone')
        .then(item =>{ return item.json()})
        .then(item => {return setItem(item)})

    },[])

    console.log(itemSmartphone);

    return ( 
        <>
            <div className={styles.container}>
                <div className={styles.filters}></div>
                <div className={styles.list_products}>
                    <ul>
                        {item.map((item,index) => {
                        return(
                        <li>
                            <div>
                                <ProductBlock 
                                key={index}
                                title={item.title}
                                price={item.price}
                                operatingSystem={item.operatingSystem}
                                screenSize={item.screenSize}
                                screenExtension={item.screenExtension}
                                RAM={item.RAM}
                                builtMemory={item.builtMemory}
                                camera={item.camera}
                                battery={item.battery}
                                image={item.image}
                                />
                            </div>
                        </li>
                        )
                        })}
                        
                        
                        
                    </ul>
                </div>
            </div>
        </>
     );
}

export default Home;