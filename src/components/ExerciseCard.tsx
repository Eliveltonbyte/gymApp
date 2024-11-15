import { Heading, HStack, Image, Text, VStack, Icon } from "@gluestack-ui/themed";
import { TouchableOpacity , TouchableOpacityProps} from "react-native";
import {ChevronRight} from "lucide-react-native"

type Props = TouchableOpacityProps


export function ExerciseCard({...rest}: Props){
    return (
        <TouchableOpacity {...rest}>
            <HStack 
            bg="$gray500" 
            p="$2" 
            pr="$4" 
            alignItems="center" 
            rounded="$md" 
            mb="$3"
            >
                <Image
                source={{uri: "https://i.pinimg.com/236x/26/a4/31/26a4312ea5c9d9ca5415cef6670f88f0.jpg"}}
                alt="img exerc"
               w="$14"
               h="$16"
               rounded="$md"
               mr="$4"
               resizeMode="cover"
               
               />

               <VStack flex={1}>
                <Heading fontSize="$lg" color="$white" fontFamily="$heading">Puxada Frontal </Heading>
                <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={2}>séries x12 repetições </Text>
               </VStack>

            <Icon as={ChevronRight} color="$gray200" />
           
            </HStack>
        </TouchableOpacity>
    )
}