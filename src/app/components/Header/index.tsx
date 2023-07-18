import Logo from '../../../../public/assets/Logo.png'
import Image from 'next/image';

export function Header(){
    
    return(
        <header>
            <Image src={Logo} alt="" 
            width={130} 
            height={52}/>
        </header>
    );
}