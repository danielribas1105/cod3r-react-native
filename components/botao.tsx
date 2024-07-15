import styles from "@/constants/styles"
import React from "react"
import { Pressable } from "react-native"

export interface BotaoProps {
    children: React.ReactNode,
    onPress?: () => void,
}

export default function Botao(props: BotaoProps) {
    return (
        <Pressable 
            style={({ pressed }) => [
                {opacity: pressed ? 0.8 : 1},
                styles.botao
            ]}
            onPress={props.onPress}>
            {props.children}
        </Pressable>
    )
}