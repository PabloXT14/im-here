import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#fafafa',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    height: 56,
    flex: 1,
    backgroundColor: '#1f1e25',
    borderRadius: 4,
    color: '#fafafa',
    padding: 16,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 4,
    backgroundColor: '#31cf67',
  },
  buttonText: {
    color: '#fafafa',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
})
