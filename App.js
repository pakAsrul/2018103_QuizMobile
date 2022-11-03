import { Text, View, TouchableOpacity, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';


export default function App() {

  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [jurusan, setJurusan] = useState('')
  const [fakultas, setFakultas] = useState('')
  const [userData, setUserData] = useState({})

  function onCetak() {
    setUserData({ nama, nim, jurusan, fakultas })
  }

  function onNama(text) {
    setNama(text)
  }

  function onNim(text) {
    setNim(text)
  }

  function onJurusan(text) {
    setJurusan(text)
  }

  function onFakultas(text) {
    setFakultas(text)
  }


  return (
    <ScrollView style={styling.container}>
      <View style={styling.containerHeader}>
        <Image style={styling.imageHeader} source={require('./itn.png')} />
        <Text style={styling.txtHeader}>Cetak Kartu Tanda Mahasiswa</Text>
      </View>
      <View style={styling.containerInp}>
        <View style={styling.containerTextInp}>
          <Text>Nama        :</Text>
          <TextInput style={styling.textInp} placeholder='Masukkan Nama Lengkap' onChangeText={onNama} />
        </View>
        <View style={styling.containerTextInp}>
          <Text>NIM           :</Text>
          <TextInput style={styling.textInp} placeholder='Masukkan NIM' onChangeText={onNim} />
        </View>
        <View style={styling.containerTextInp}>
          <Text>Jurusan   :</Text>
          <TextInput style={styling.textInp} placeholder='Masukkan Jurusan' onChangeText={onJurusan} />
        </View>
        <View style={styling.containerTextInp}>
          <Text>Fakultas   :</Text>
          <TextInput style={styling.textInp} placeholder='Masukkan Fakultas' onChangeText={onFakultas} />
        </View>
      </View>
      <TouchableOpacity style={styling.btnCetak} onPress={onCetak}>
        <Text style ={styling.txtBtn}>Cetak KTM</Text>
      </TouchableOpacity>
      <View style={styling.containerOutp}>
        <View style={styling.containerTextOutp}>
          <Text >Nama        :</Text>
          <Text >{userData ? userData.nama : '-'}</Text>
        </View>
        <View style={styling.containerTextOutp}>
          <Text>NIM           :</Text>
          <Text >{userData ? userData.nim : '-'}</Text>
        </View>
        <View style={styling.containerTextOutp}>
          <Text>Jurusan   :</Text>
          <Text >{userData ? userData.jurusan : '-'}</Text>
        </View>
        <View style={styling.containerTextOutp}>
          <Text>Fakultas   :</Text>
          <Text >{userData ? userData.fakultas : '-'}</Text>
        </View>
      </View>
      <View style={styling.containerFooter}>
        <Text style={styling.txtFooter}>@2022 Asrul Dev ITN Malang</Text>
      </View>
    </ScrollView>

  )
}

const styling = StyleSheet.create({
  txtBtn:{
    fontWeight: 'bold',
  },
  containerFooter: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 24,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    elevation: 12,
  },
  containerOutp: {
    padding: 24,
    marginVertical: 16,
    backgroundColor :'#ffffff',
    marginHorizontal : 12,
    marginVertical : 12,
    borderRadius : 12,
    elevation : 12,
  },
  btnCetak: {
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 16,
    backgroundColor: '#92C5FD'
  },
  textInp: {
    flex: 2,
    marginLeft: 12,
    textAlign: 'right',
    borderBottomWidth: 0.5,
    borderColor: '#f3f3f3',

  },
  containerTextOutp: {
    marginVertical: 22,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  containerTextInp: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  containerInp: {
    padding: 24,
    backgroundColor :'#ffffff',
    margin : 12,
    borderRadius : 12,
    elevation : 12
  },
  txtHeader: {
    marginLeft : 30,
    fontFamily: 'poppins',
    fontSize: 18,
    fontWeight: '900'
  },
  imageHeader:{
    width: 40,
    height: 40,
  },
  containerHeader: {
    backgroundColor: '#FFF',
    flexDirection : 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 24,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    elevation: 12,
    position : 'relative'
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  }
})