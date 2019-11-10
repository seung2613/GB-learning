import React, { memo, useState, Component } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 'first', //has to be string here for id
    title: 'Anatomical Models',
  },
  {
    id: 'second',
    title: 'Surgical Task Trainers',
  },
  {
    id: 'third',
    title: 'Patient Education',
  },
  // {
  //   id: 'fourth',
  //   title: 'Fourth Item',
  // },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={styles.item}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}



// export default function LandingScreen() {
  const LandingScreen = ({navigation,navigationOptions})=>{
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));
    //   alert(id);

      setSelected(newSelected);
      // Actions.videolist({pressed: id});
      navigation.navigate('VideoList',{pressed: id});
    },
    [selected],
  );

  return (
    // <View>
    //   <Text> asbd" </Text>
    // </View>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}
LandingScreen.navigationOptions = {
  title: 'Home',
  headerLeft: null,

};
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: Constants.statusBarHeight,
    //display:"flex",
    //flexDirection:"row",
    
    alignItems:'center',
    justifyContent:'center',
    //height:700,
  },
  item: {
    //height:300,
    //display:"flex",
    width:"100%",
    flex:1,
    backgroundColor: '#8c7ba8',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    //display:"flex",
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
});
export default memo(LandingScreen);