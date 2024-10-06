import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export default function Home() {
  function handleAddParticipant() {
    console.log('Adicionar participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddParticipant}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
