import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '@/components/participant'
import { useState } from 'react'

export default function Home() {
  const [participantName, setParticipantName] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleAddParticipant() {
    const isParticipantNameEmpty = participantName.trim() === ''

    if (isParticipantNameEmpty) return

    if (participants.includes(participantName.trim())) {
      return Alert.alert(
        'Participante existente',
        'Ja existe um participante com esse nome'
      )
    }

    setParticipants(prevState => [...prevState, participantName.trim()])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () =>
          setParticipants(prevState =>
            prevState.filter(participant => participant !== name)
          ),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
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
          value={participantName}
          onChangeText={setParticipantName}
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
