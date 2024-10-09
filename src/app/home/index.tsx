import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Participant } from '@/components/participant'

export default function Home() {
  function handleAddParticipant() {
    console.log('Adicionar participante')
  }

  function handleRemoveParticipant(name: string) {
    console.log(`Deletar participante: ${name}`)
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
        <Participant
          name="Rodrigo"
          onRemove={() => handleRemoveParticipant('Rodrigo')}
        />
        <Participant
          name="Diego"
          onRemove={() => handleRemoveParticipant('Diego')}
        />
        <Participant
          name="Vini"
          onRemove={() => handleRemoveParticipant('Vini')}
        />
        <Participant
          name="Pablo"
          onRemove={() => handleRemoveParticipant('Pablo')}
        />
      </View>
    </View>
  )
}
