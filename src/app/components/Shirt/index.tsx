import { ContainerAllAhirts, Description, ShirtContainer } from "./style";
import Image from "next/image";
import shirt1 from '../../../../public/assets/shirt1.png'

export function Shirt(){
    return(
        <ContainerAllAhirts>
            <ShirtContainer>
                <Image src={shirt1} 
                    alt=""
                    width={520}
                    height={480}
                />
                <Description>
                    Camiseta Beyond the Limits
                    <span>R$ 79,90</span>
                </Description>
            </ShirtContainer>
            <ShirtContainer>
                <Image src={shirt1} 
                    alt=""
                    width={520}
                    height={480}
                />
                <Description>
                    Camiseta Beyond the Limits
                    <span>R$ 79,90</span>
                </Description>
            </ShirtContainer>
        </ContainerAllAhirts>

    );
}