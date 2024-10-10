import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '@/components/participant'

export default function Home() {
  const participants = [
    'Rodrigo',
    'Diego',
    'Vini',
    'Bruno',
    'Gustavo',
    'Eduardo',
    'Bruna',
    'Giovanna',
    'Felipe',
    'Vitor',
  ]

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
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
