import { 
  StyleSheet, 
  StatusBar, 
  Text, View, 
  Image, 
  TouchableOpacity, 
  Switch,
  TextInput,
  ScrollView,
  Button,
  FlatList,
  Alert,
  ToastAndroid,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
  Linking,
  RefreshControl,
  ImageBackground,
} from 'react-native'
import { BackHandler } from 'react-native';
import React, {Component} from 'react'

const width = Dimensions.get('window').width;
const height = Dimensions.get('screen').height;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header : 'WhatsPap',
      value : true,
      username : '',
      refresh : false,
      data : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      dataMahasiswa : [
        {
          name : "Alfin kamil",
          npm : 2021020100045,
        },
        {
          name : "jauhary",
          npm : 2021020200046,
        },
        {
          name : "Habiburrahman",
          npm : 2021020200047,
        },
        {
          name : "Rizal Amini",
          npm : 20210202000498,
        },
        {
          name : "Risky Rizaldi",
          npm : 2021020200040,
        }
      ]
    };
  }

  backAction = () => {
  console.log('Back button pressed'); // Tambahkan ini
  Alert.alert('Warning', 'Apakah anda yakin untuk menutuo aplikasi', [
    {
      text: 'cancel',
      onPress: () => null,
      style: 'cancel',
    },
    {
      text: 'yes',
      onPress: () => BackHandler.exitApp(),
    },
  ]);
  return true;
};

  requestCameraPermission = async() => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Izinkan Akses',
          message: 'Izinkan Aplikasi Mengakses Camera',
          buttonNeutral: 'Nanti',
          buttonNegative: 'Cancel',
          buttonPositive: 'ok',
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission diberikan');
      } else {
        console.log('permission tiddak diberikan');
      }
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() { 
    this.BackHandler = BackHandler.addEventListener('hardwareBackPress', this.backAction,);
  };

  componentWillUnmount()  {
    this.BackHandler.remove();
  };

  render() { 
    return <View style={styles.header}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#9C27B0"} />
      <View style={styles.container}>
        <Text style={styles.textHeader}>{this.state.header}</Text>
      </View>

      <ActivityIndicator size="small" color="black" />
      <ActivityIndicator animating={false} size="large" color="black" />

      <TouchableOpacity
        onPress={() => this.requestCameraPermission() }>
        <Image 
          source={require('./src/image/image-2.jpg')}
          style={styles.image}
          resizeMode='cover'
         />
      </TouchableOpacity>

      <ImageBackground  
      source={require('./src/image/image-3.jpg')} 
      style={{flex:1, resizeMode: "cover", justifyContent: 'center', alignItems: 'center'}}>
      <Text>BAcgGroud</Text>
      </ImageBackground>

      <View style={styles.switchCenter}>
        <Switch 
        value={this.state.value} onValueChange={() => this.setState({value: !this.state.value})} />
      </View>

      <TouchableOpacity
      onPress={() => Linking.openURL('https://google.com')}>
        <Text>Google</Text>
      </TouchableOpacity>
      {/* <TextInput style={styles.inputUsername} value={this.state.username} 
        onChangeText={(value) => this.setState({username : value})}
      />
      <View style={{marginHorizontal: 20,}}>
        <Button title='Login' color='crimson' 
        onPress={() => console.log('Sudah Login')} />
      </View>
      
      <TouchableOpacity style={styles.tombol}>
        <Text style={{color:'#ffff'}}>Click Me</Text>
      </TouchableOpacity> */}
      
      <FlatList style={{flex: 1,marginTop : 20,}}
        data={this.state.dataMahasiswa}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refresh} onRefresh={() => {console.log('direfresh');
            this.setState({refresh: false})}}
          />
        }
        renderItem={({item, index}) => (
        <TouchableOpacity style={styles.listView} 
        onPress={() => 
        ToastAndroid.show(item.name + ' di klik', ToastAndroid.SHORT)
        }>
          <Text>{item.name}</Text>
          <Text>{item.npm}</Text>
        </TouchableOpacity>
        )}keyExtractor={(item) => item.npm.toString()}
      />
    </View>;
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  container: {
    backgroundColor: '#AB47BC',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  textHeader: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize : 20,
  },
  image:{
    width: width,
    height: height / 5,
  },
  tombol: {
    backgroundColor:'blue',
    paddingVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    borderRadius: 30,
  },
  switchCenter : {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputUsername : {
    borderWidth : 1,
    borderRadius: 5,
    marginTop : 10,
    marginBottom : 10,
    borderColor : 'red',
    marginHorizontal: 20,
  },
  listView : {
    backgroundColor: 'crimson',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    
  }
});

export default App;



















// import React, { useContext } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri:
//             'https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_92x30dp.png',
//         }}
//         style={styles.image}
//       />
//       <Text style={styles.text}>Saya Seorang Programmer</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // marginTop : 10,
//     alignItems: 'center',
//     backgroundColor: 'green',
//   },
//   text: {
//     color: 'black',
//     fontSize: 20,
//   },
//   image: {
//     width: 200, // Atur lebar gambar sesuai kebutuhan Anda
//     height: 60, // Atur tinggi gambar sesuai kebutuhan Anda
//     resizeMode: 'contain', // Sesuaikan dengan gaya penampilan gambar yang Anda inginkan
//     marginBottom: 20, // Sesuaikan dengan jarak yang Anda inginkan antara gambar dan teks
//   },
// });

// export default App;
// Alert.alert('penting', 'Anda Mengklik gambar', [
//           {
//             text: 'Batal',
//             onPress: () => console.log('Batal ditekan'),
//             style: 'cancel'
//           },
//           {
//             text: 'ok',
//             onPress: () => console.log('ok ditekan'),
//           },
//         ])