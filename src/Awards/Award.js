//import { ImgWrapper } from "../Post/Post.elements"
import {AwardContainer,AwardWrapper,AwardImg,AwardDesc, AwardsContainer,ImgWrapper} from "./Awards.components"


export default function Award({...props}){
    
    console.log(props.img)
    return(
            

                <AwardWrapper>
                    <ImgWrapper>
                        <AwardImg src={props.img}/>
                    </ImgWrapper>
                    <AwardDesc>{props.name}</AwardDesc>               
                </AwardWrapper>
                
                

            
    )
}