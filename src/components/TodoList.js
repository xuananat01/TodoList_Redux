import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'React-Native',
  },
  {
    id: 2,
    title: 'ReactJS',
  },
  {
    id: 3,
    title: 'Redux',
  },
];

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  // console.log(todos);

  const onDelete = id => {
    dispatch(
      deleteTask({
        id: id,
      }),
    );
  };

  const renderItem = ({item}) => {
    return (
      <View style={{width, flexDirection: 'row'}}>
        <Text style={styles.txtList}>{item.name}</Text>
        <TouchableOpacity
          style={styles.tobList}
          onPress={() => onDelete(item.id)}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={item => renderItem(item)}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  txtList: {
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    color: 'white',
    width: '75%',
    borderRadius: 5,
  },
  tobList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
