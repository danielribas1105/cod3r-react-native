import { View, Text } from "react-native";
import { Link } from "expo-router";
import styles from "@/constants/styles";
import Botao from "@/components/botao";

export default function StackNova() {
    return (
        <View style={[styles.centralizado, {gap: 10}]}>
            <Text>Stack Nova</Text>
            <Botao>
                <Link href='/stack' style={{color: '#FFFFFF'}}>Voltar para stack inicial</Link>
            </Botao>
        </View>
    )
}