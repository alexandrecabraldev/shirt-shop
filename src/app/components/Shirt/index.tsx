import styles from "./style.module.css";
import Image from "next/image";
import shirt1 from '../../../../public/assets/shirt1.png'

export function Shirt(){
    return(

        <div className={`${styles.shirtContainer}`}>
            <Image src={shirt1} 
                alt=""
                width={520}
                height={480}
                />
            <div className={`${styles.description}`}>
                Camiseta Beyond the Limits
                <span className={`${styles.spanStyle}`}>R$ 79,90</span>
            </div>
        </div>

    );
}