import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const DATA = [
  { id: '1', firstName: 'John', lastName: 'Doe', nickname: 'Johnny', course: 'Computer Science', year: '3rd' },
  { id: '2', firstName: 'Jane', lastName: 'Smith', nickname: 'Janey', course: 'Business', year: '2nd' },
  { id: '3', firstName: 'Michael', lastName: 'Brown', nickname: 'Mike', course: 'Engineering', year: '1st' },

];

const App = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => Alert.alert('Full Information', `First Name: ${item.firstName}\nLast Name: ${item.lastName}\nNickname: ${item.nickname}\nCourse: ${item.course}\nYear: ${item.year}`)}
    >
      <Text style={styles.title}>{item.nickname}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

