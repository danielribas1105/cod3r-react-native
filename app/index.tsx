import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

import Botao from "@/components/botao";
import styles from "@/constants/styles";
import { DrawerActions } from "@react-navigation/native";

export default function TelaInicial() {
  const nav = useNavigation()
  return (
    <View style={[styles.centralizado, {gap: 10}]}>
      <Ionicons name={'logo-react'} size={100}/>
      <Text style={{ fontSize: 20, fontWeight: 700}}>React Native</Text>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
        <Text style={{color: '#FFFFFF'}}>Exercícios</Text>
      </Botao>
    </View>
  )
}
