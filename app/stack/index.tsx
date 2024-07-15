import { View, Text } from "react-native";
import styles from "@/constants/styles";
import Botao from "@/components/botao";
import { Link } from "expo-router";

export default function StackInicial() {
    return (
        <View style={[styles.centralizado, {gap: 10}]}>
            <Text>Stack Inicial</Text>
            <Botao>
                <Link href='/stack/nova' style={{color: '#FFFFFF'}}>Ir para stack nova</Link>
            </Botao>
            <Botao>
                <Link href='/' style={{color: '#FFFFFF'}}>Ir para home</Link>
            </Botao>
        </View>
    )
}