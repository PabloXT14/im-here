import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
      }}
    >
      <Text
        style={{
          color: '#fafafa',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}
      >
        Nome do evento
      </Text>
      <Text
        style={{
          color: '#6b6b6b',
          fontSize: 16,
        }}
      >
        Sexta, 4 de Novembro de 2024
      </Text>
    </View>
  )
}
