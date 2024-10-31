import { VStack } from "@gluestack-ui/themed";

import { HomerHeader } from "@components/HomeHearder";
import { Group } from "@components/Group";


export function Home(){
    return(
        <VStack flex={1}>
             <HomerHeader />  
             <Group name="Cpsta" isActive={false} />    
        </VStack>
    )
}