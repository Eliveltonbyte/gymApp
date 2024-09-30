import { VStack } from "@gluestack-ui/themed";

import { HomerHeader } from "@components/HomeHearder";


export function Home(){
    return(
        <VStack flex={1}>
             <HomerHeader />      
        </VStack>
    )
}