import { VStack, Image, Center, Text, Heading, ScrollView} from "@gluestack-ui/themed"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignIn(){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        >
        <VStack flex={1} bg="$gray700"> 
            <Image 
            w="$full"
            h={624}    
            source={BackgroundImg}
            defaultSource={BackgroundImg}
            alt="Pessoas Treinando" 
            position="absolute"
            /> 

            <VStack flex={1} px="$10" pb="$16">
            <Center my="$24">
            <Logo/>

            <Text color="$gray100" fontSize="$sm">
             Treine sua mente e seu corpo
            </Text>
            </Center>

            <Center gap="$2">
                <Heading color="$gray100">Acesse a conta</Heading>

                <Input placeholder="E-mail" autoCapitalize="none"  keyboardType="email-address"/>
                <Input placeholder="Senha" secureTextEntry  />

                <Button title="Acessar" />
            </Center> 

            <Center flex={1} justifyContent="flex-end" mt="$4">
                <Text color="$gray100" fontFamily="$body" mb="$3" fontSize="$sm">
                    Ainda não possui uma conta?
                </Text>
                <Button title="Criar Conta"  variant="outline"/>
            </Center>

            </VStack>
        </VStack>
 </ScrollView>


    )
}
