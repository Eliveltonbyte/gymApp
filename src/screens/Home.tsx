import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

import { HomerHeader } from "@components/HomeHearder";
import { FlatList } from "react-native";
import { Group } from "@components/Group";
import { useState } from "react";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home(){
    const [groups, setGroups] = useState(["Costas", "Bíceps", "Tríceps", "Ombro"])
    const [groupSelected, setGroupSelected] = useState("Costas")

    return(
        <VStack flex={1}>
         <HomerHeader />  

         <FlatList 
         data={groups}
         keyExtractor={item => item}
         renderItem={({item}) => ( 
         <Group name={item}
         isActive={groupSelected === item}
         onPress={() =>setGroupSelected(item)}
          />
         )}
         horizontal
         showsHorizontalScrollIndicator
         contentContainerStyle={{paddingHorizontal: 28}}
         style={{marginVertical: 40, maxHeight: 44, minHeight:44 }}
         />

         <VStack px="$8">
            <HStack justifyContent="space-between" mb="$5" alignItems="center">
              <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
                Exercícios  
              </Heading>   

              <Text color="$gray200" fontSize="$sm" fontFamily="$body">
                4
              </Text>
            </HStack>

            <ExerciseCard />
         </VStack>
        </VStack>
    )
}