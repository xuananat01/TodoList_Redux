import React, {useState} from 'react';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';

const {width, height} = Dimensions.get('window');

const TodoHeader = () => {
  const dispatch = useDispatch();

  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('Pls enter task');
      setTodo('');
      return;
    }
    dispatch(
      addTask({
        task: todo,
      }),
    );
    setTodo('');
  };
  const [todo, setTodo] = useState('');
  return (
    <View>
      <Text style={styles.txtTitle}>Todo List</Text>
      <View style={{width, flexDirection: 'row'}}>
        <TextInput
          style={styles.txtInput}
          placeholder="Add Todo"
          onChangeText={setTodo}
          value={todo}
        />
        <TouchableOpacity style={styles.tobAdd} onPress={onSubmitTask}>
          <Text style={{fontSize: 18, color: 'white'}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;

const styles = StyleSheet.create({
  txtTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  txtInput: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: '75%',
  },
  tobAdd: {
    backgroundColor: 'grey',
    position: 'absolute',
    right: 20,
    marginTop: 10,
    height: 50,
    borderRadius: 5,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
