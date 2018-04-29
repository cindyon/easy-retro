import React from 'react';
import { StyleSheet, Text, View, Button, SectionList } from 'react-native';

const happyItems = [
  'Teamwork!',
  'Finished \<Blah\>',
  'Team lunch',
  'Welcome \<New team member\>',
  'Free food',
  'Work from home'
];

const getHappyItems = () => happyItems.map(v => ({ type: 'happy', desc: v}));

const sadItems = [
  'The Wall',
  'Meetings',
  'Standup',
  'Retro'
];

const getSadItems = () => sadItems.map(v => ({ type: 'sad', desc: v}));

const confusedItems = [
  'Where is \<team member\>',
  'Task xxx',
  'Everything'
];

const getConfusedItems = () => confusedItems.map(v => ({ type: 'confused', desc: v}));

const getItem = arr => {
  const index = Math.floor((Math.random() * arr.length));
  const item = arr.splice(index, 1);
  return { item , all: arr};
};

const generateRandom = () => {
  const numItems = 3;
  let all = getHappyItems().concat(getSadItems()).concat(getConfusedItems());
  let results = [];

  for (let i=0; i<numItems; i++) {
    let r = getItem(all);
    all = r.all;
    results.push(r.item);
  }

  return results;
};

export default class RetroItemsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Retro Items',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(generateRandom())}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }
});
