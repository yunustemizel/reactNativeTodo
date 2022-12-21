import React, { useState } from "react";
import { Text, View, SafeAreaView, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const Router = () => {
    const [todoList, setTodoList] = useState([])
    const [text, setText] = useState("")

    const addTodo = () => {
        setTodoList([...todoList, text])
        setText("")
    }
    const deleteTodo = (index) => {
        const newArray = [...todoList]
        newArray.splice(index, 1)
        setTodoList(newArray)
    }
    const renderItem = ({ item, index }) => (
        <View style={styles.itemStyle}>
            <View style={styles.textView}>
                <Text style={styles.text}>{index +1}-{item}</Text>
            </View>
            <View style={styles.butonView}>
                <TouchableOpacity style={styles.buton} onPress={() => deleteTodo(index)} />
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.kutu}>
                {/* <FlatList><Text style={styles.text}>{todoList.toString()}</Text></FlatList> */}
                <FlatList
                    data={todoList}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.inner_container}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Yaz..."}
                    placeholderTextColor="greenyellow"
                    onChangeText={text => setText(text)}
                    value={text}
                />
                <Button title="ADD TODO" color="black" onPress={() => addTodo()} />
            </View>
        </View>
    )
}
export default Router;

const styles= StyleSheet.create({
  container:{
      backgroundColor: "greenyellow",
      flex:1,
  },
  textInput:{
      backgroundColor:"black",
      margin:20,
      padding:20,
      borderRadius:20,
      color:"greenyellow",
      fontSize:20,
  },
  kutu:{
      backgroundColor:"black",
      flex:1,
      margin:20,
      marginTop:100,
      borderRadius:20,
  },
  inner_container:{
      justifyContent:"flex-end",
      flex:1,
      marginBottom:50,
  },
  text:{
      margin:10,
      padding:10,
      fontSize:20,
      fontWeight:"bold",
      color:"yellow",
  },
  buton:{
      backgroundColor:"greenyellow",
      width:30,
      height:30,
      borderRadius:15,

  },
  itemStyle:{
      flexDirection:"row",
      alignItems:"center",

  },
  butonView:{
      flex:0.2,
      alignItems:"center",
  },
  textView:{
      flex:0.8,
  },

})