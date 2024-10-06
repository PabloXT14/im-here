import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="#000000" />
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>

      <View style={styles.square}>
        <Text style={styles.squareText}>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#09090b',
  },
  square: {
    width: 64,
    height: 64,
    backgroundColor: '#10b981',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  squareText: {
    fontSize: 24,
    color: '#fafafa',
  },
})
