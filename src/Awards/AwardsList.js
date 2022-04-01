import React from "react";
import awardsData from "../Awards/awardsData"
import Award  from "./Award";





export function AwardsList() {

    const awardsArray = awardsData.map(item => {

        return (
            
            <Award  

                key={item.id}
                img={item.img}
                name={item.name}
  
            />
        )
    })

    console.log(awardsArray)
    

    return (
        <>
        {awardsArray}
        </>
    )
    
}