import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#3A7EFF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '80%'
    },
    inputError: {
        borderColor: '#FF0000'
    }
})

export default styles