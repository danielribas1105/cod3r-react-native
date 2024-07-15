import { View, Text, TextInput } from "react-native";
import styles from "@/constants/styles";
import Botao from "@/components/botao";
import Cpf from "@/utils/cpf";
import useFormUsuario from "@/hooks/useFormUsuario";
import { Link } from "expo-router";

export default function TelaFormulario() {

    const {usuario, erros, setUsuario, salvar} = useFormUsuario()

    return (
        <View style={styles.centralizado}>
            <Text>Formulário</Text>
            <TextInput 
                placeholder="Nome" 
                value={usuario.nome ?? ''} 
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setUsuario({...usuario, nome})}
            />
            {erros.nome && <Text style={{color: '#FF0000'}}>{erros.nome}</Text>}
            <TextInput 
                placeholder="CPF" 
                value={usuario.cpf ?? ''} 
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({...usuario, cpf: Cpf.formatar(cpf)})}
            />
            <View style={{gap: 10}}>
                <Botao onPress={salvar}>
                    <Text style={{color: '#FFFFFF'}}>Salvar</Text>
                </Botao>
                <Botao>
                    <Link href='/' style={{color: '#FFFFFF'}}>Home</Link>
                </Botao>
            </View>
        </View>
    )
}