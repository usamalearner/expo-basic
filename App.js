import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image,ActivityIndicator,TextInput,Button,TouchableOpacity,ScrollView,FlatList, ImageBackground} from 'react-native';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },]


export default function App() {
  
  return (
    
    <View style={styles.container}>
      {/* <ImageBackground 
      style={{width:'100%',height:'100%',resizeMode:'contain'}}
      source={{uri:"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg"}}>

      </ImageBackground> */}
      <Text>hello world</Text>
      <Image style={{width:400,height:400,resizeMode:'contain'}} source={{uri:"https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg"}
    }></Image>
      {/* <Image style={{width:400,height:400,resizeMode:'contain'}} source={require('./assets/car.jpeg')}></Image> */}
      
      <TextInput
      // secureTextEntry={true}
      // autoCorrect={true}
      // keyboardType={"number-pad"}
      style={{ height: 40,width:'80%',backgroundColor:'#000',color:'#fff', borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => console.log(text)}
      placeholder='enter text'
    />
    {/* <Button style={styles.btn} title={"click me"} onPress={()=>alert("helllo")}></Button> */}
     
      <TouchableOpacity onPress={()=>alert("helllo")} activeOpacity={0.8} style={styles.btn}>
    <Text>click me</Text>
      </TouchableOpacity>


      <ScrollView>
    {/* {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((v,i)=>{
      return(
        <Text>Syed Usama Ali</Text>
      )
    })} */}

        <FlatList
        data={DATA}
        renderItem={(data)=>{
          return(
            <Text>{data.item.title}</Text>
          )
        }}
        keyExtractor={item => item.id}
      />

      </ScrollView>
       <ActivityIndicator size="large" color="#000"></ActivityIndicator>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor:'red',
    fontSize:18
  }
});
