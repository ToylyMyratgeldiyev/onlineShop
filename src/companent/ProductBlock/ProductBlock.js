import styles from '../Home/Home.module.scss'
import image from './smartphone.jpeg'


function ProductBlock({title,price,operatingSystem,screenSize,screenExtension,RAM,builtMemory,camera,battery,image}) {
    return ( 
        <>
        
             <a href="#">
              <img src={image} alt="phone" />
              <h3>Смартфон {title}</h3>
             </a>
             <div className={styles.price}> от {price} р.</div>
             <div className={styles.descriptions}>{operatingSystem}, экран {screenSize}  ({screenExtension}), HiSilicon Kirin 710, ОЗУ {RAM} ГБ, флэш-память {builtMemory} ГБ карты памяти, камера {camera} Мп, 
               аккумулятор {battery} мАч</div>
                            
        </>
     );
}

export default ProductBlock;

