import { StatusBar } from 'react-native'
import Home from './home'

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  )
}
