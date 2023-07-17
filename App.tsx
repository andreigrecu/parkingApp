import React, {useEffect} from 'react';
//import axios from 'axios';
import WelcomePage from './components/welcome/welcomePage';

import {
  View,
  StyleSheet
} from 'react-native';

function App(): JSX.Element {

  // const url = 'http://192.168.1.136:3000/test'
  // const fetchApi = async () => {
  //   const res = await axios.get(url)
  //   console.log(res.data)
  // }
  // useEffect(() => {
  //   fetchApi()
  // }, [])
  return (
    <View style={styles.container}>
      <WelcomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
