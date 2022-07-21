import { ParamListBase, useNavigation } from '@react-navigation/native'
import { AspectRatio, Box, Button, ChevronLeftIcon, ChevronRightIcon, Heading, HStack, Icon, Image, IStackProps, Pressable, Stack } from 'native-base'
import { PressableAnimation } from '../PressableAnimation/PressableAnimation'
import { AddIcon } from "@native-base/icons"
interface CardHomeProps {
    title: string
    urlImage: string
    page: "vermes" | "question" | "credits" | 'glossario'
}
export const CardHome = ({ title, urlImage, page }: CardHomeProps) => {
    const image = urlImage === "FILARIOSE" ?
        require("../../../assets/Home/FILARIOSE2.jpg") :
        urlImage === "GLOSSARIO" ?
            require("../../../assets/Home/GLOSSARIO.jpg") :
            urlImage === "CREDITOS" ?
                require("../../../assets/Home/preta.jpg") :
                require("../../../assets/Home/question.jpg")

    const navigation = useNavigation()
    const handleOpenPage = () => {
        navigation.navigate(page)
    }

    return <PressableAnimation onPress={handleOpenPage}>
        <Box _dark={{
            borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="4" py="2">
            <HStack justifyContent="center">
                <Box alignItems="center">

                    <Box
                        maxW="80"
                        rounded="lg"
                        overflow="hidden"
                        borderColor="coolGray.200"
                        borderWidth="1"
                        _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                        <Box>
                            <AspectRatio w="100%" ratio={5 / 2}>
                                <Image
                                    h="140"
                                    w="100%"
                                    source={image}
                                    alt="image" />
                            </AspectRatio>
                        </Box>
                        <Pressable
                            p="4"
                            bgColor="white"
                            onPress={handleOpenPage}
                        >
                            <HStack alignItems="center" justifyContent="space-between" space={2}>
                                <Heading
                                    size="sm"
                                    ml="-1">
                                    {title}
                                </Heading>
                              <ChevronRightIcon/>
                            </HStack>

                        </Pressable>
                    </Box>
                </Box>
            </HStack>
        </Box>
    </PressableAnimation>
}
