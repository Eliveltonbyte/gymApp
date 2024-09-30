import { Heading, HStack, VStack, Text } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";

export function HomerHeader(){
    return (
        <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
         <UserPhoto source={{uri: "https://github.com/Eliveltonbyte.png" }}  
         w="$16"
         h="$16"
         alt="Imagem do Usuário"/>
         <VStack>
          <Text color="$gray100" fontSize="$sm">Olá,</Text>
          <Heading color="$gray100" fontSize="$md">Elivelton Carneiro</Heading>
         </VStack>
        </HStack>
    )
}