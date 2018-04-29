import React from 'react';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';
import { RANDOM_OPT } from './constants';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Button
            onPress={() => navigate('RetroItems', { type: RANDOM_OPT })}
            title="Generate retro items"
            color="#0000ff"
          />
        </View>
        <View style={styles.item}>
          <Button
            onPress={() => navigate('Configure')}
            title="Configure retro"
            color="#0000ff"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#eee',
    width: '100%',
    marginTop: 20,
    marginBottom: 2
  }
});
