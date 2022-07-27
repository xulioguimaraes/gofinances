import { Box, Pressable } from 'native-base'
import React, { ReactNode } from 'react'
interface PressableAnimationProps {
    children: ReactNode
    onPress: () => void
} 
export const PressableAnimation = ({ children, onPress, ...props }: PressableAnimationProps) => {
    return <Pressable onPress={onPress} {...props}>
        {({
            isPressed
        }) => {
            return <Box maxW="96" rounded="8" style={{
                transform: [{
                    scale: isPressed ? 0.96 : 1
                }]
            }}>
                {children}
            </Box>
        }}
    </Pressable>
}
