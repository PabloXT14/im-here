import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '@/components/participant'

export default function Home() {
  function handleAddParticipant() {
    console.log('Adicionar participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      {/* FORM */}
      <View style={styles.form}>
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

      {/* LISTA DE PARTICIPANTES */}
      <View>
        <Participant name="Rodrigo" />
        <Participant name="Diego" />
        <Participant name="Vini" />
        <Participant name="Pablo" />
      </View>
    </View>
  )
}
