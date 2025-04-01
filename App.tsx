import React, { JSX } from 'react';
import { Text, View, StyleSheet , useColorScheme } from 'react-native';

export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return(
    <View style = {styles.container}>
      <Text style = { isDarkMode ? styles.Whitetext : styles.blacktext }>
          Hello
      </Text>
    </View>
  );



}


const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  Whitetext :{
    color : '#ffffff',
    fontSize : 24,
  },
  blacktext : {
    color : '#000000',
    fontSize:24,
  },


});