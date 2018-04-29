import React from 'react';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';

export default class ConfigureScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Do you want the ability to specify how many retro items you need?</Text>
        <Text>Don't you think it would be cool if you could specify what type of items you need?</Text>
        <Text>But most of all, are you not really excited about having a shinier UI/UX?</Text>
        <Text style={styles.lucky}>You are in luck!!! These features are available on our subscription plan!</Text>
        <View style={styles.item}>
          <Button onPress={() => console.log('Money money')}
                  title="Subscribe now!"
                  color="#0000ff"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  item: {
    backgroundColor: '#eee',
    width: '100%',
    marginTop: 20,
    marginBottom: 2
  },
  lucky: {
    fontWeight: 'bold'
  }
});
