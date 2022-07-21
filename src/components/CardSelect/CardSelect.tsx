import { AspectRatio, Center, Image } from 'native-base'
import React from 'react'
import { Pressable } from 'react-native'
interface CardSelectProps {
    setImageSelect: React.Dispatch<React.SetStateAction<number>>
    imageSelect: number
    value: number
}
export const CardSelect = ({ imageSelect, setImageSelect, value }: CardSelectProps) => {
    return (
        <Center
            h="40"
            w="50%"
            overflow="hidden"
            rounded="md"
            borderColor={imageSelect === value ? "success.500" : "success.500"}
            borderWidth={imageSelect === value ? "6" : 0}
            shadow={3}
        >
            <Pressable onPress={() => setImageSelect(value)}>
                <AspectRatio h="100%" ratio={16 / 9}>
                    <Image w="90%" h="100%" source={require("../../../assets/TENIASE.jpg")} alt="image" />
                </AspectRatio>
            </Pressable>
        </Center>
    )
}
