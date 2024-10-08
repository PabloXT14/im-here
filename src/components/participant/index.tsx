import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type ParticipantProps = {
  name: string
}

export const Participant = ({ name }: ParticipantProps) => {
  function handleDeleteParticipant() {
    console.log('Deletar participante')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleDeleteParticipant}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
