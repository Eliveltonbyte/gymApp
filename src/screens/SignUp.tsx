import { VStack, Image, Center, Text, Heading, ScrollView} from "@gluestack-ui/themed"

import { useNavigation } from "@react-navigation/native"


import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input"
import { Button } from "@components/Button"

export function SignUp(){
  const navigator = useNavigation();
  
  function handleBackLogin(){
    navigator.goBack();
  }
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        >
        <VStack flex={1} > 
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

            <Center gap="$2" flex={1}>
                <Heading color="$gray100">Crie sua conta</Heading>

                <Input placeholder="Nome"   />

                <Input placeholder="E-mail" autoCapitalize="none"  keyboardType="email-address"/>
                <Input placeholder="Senha" secureTextEntry  />

                <Button title="Criar Conta e Acessar" />
            </Center> 
   
            <Button title="Voltar para o login."  variant="outline" mt="$12" onPress={handleBackLogin}/>
            </VStack>
        </VStack>
 </ScrollView>


    )
}
