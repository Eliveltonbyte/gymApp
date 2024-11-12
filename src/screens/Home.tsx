import { HStack, VStack } from "@gluestack-ui/themed";

import { HomerHeader } from "@components/HomeHearder";
import { Group } from "@components/Group";
import { useState } from "react";


export function Home(){
    const [groupSelected, setGroupSelected] = useState("Costa")

    return(
        <VStack flex={1}>
             <HomerHeader />  

             <HStack>
             <Group name="Costa"
              isActive={groupSelected === "costa"}
              onPress={() => 
              setGroupSelected("costa")}
               />    

              <Group name="Ombro"
              isActive={groupSelected === "ombro"}
              onPress={() => 
              setGroupSelected("ombro")}
               /> 

             </HStack>
        </VStack>
    )
}