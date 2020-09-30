/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { CheckBox, Divider, Icon, Text as TextElement } from 'react-native-elements';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Swipeout, { SwipeoutButtonProperties } from 'react-native-swipeout';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="One">
        <Stack.Screen name="One" component={One} />
        <Stack.Screen name="Two" component={Two} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const One = ({ navigation }: any) => {
  // 電柱
  const personList = [
    { id: "1", name: "123ｱ456", },
    { id: "2", name: "789ｲ012", },
    { id: "3", name: "345ｳ678", },
    { id: "4", name: "901ｴ234", },
    { id: "5", name: "567ｵ890", },
    { id: "6", name: "234ｶ567", },
    { id: "7", name: "890ｷ123", },
    { id: "8", name: "456ｸ789", },
    { id: "9", name: "012ｹ345", },
    { id: "10", name: "678ｺ901", },
    { id: "11", name: "111ｻ111", },
    { id: "12", name: "222ｼ222", },
    { id: "13", name: "333ｽ333", },
    { id: "14", name: "444ｾ444", },
    { id: "15", name: "555ｿ555", },
  ];
  return (
    <View >
      <StatusBar barStyle="dark-content" backgroundColor="#b3e6ff" />
      <FlatList data={personList} renderItem={({ item, index, separators }) => (<Three navigation={navigation} text={item.name} index={index}></Three>)} />
    </View>
  );
};

const Two = ({ navigation, route }: any) => {
  // For datePicker
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [strDate, setStrDate] = useState("xxxx/xx/xx");
  const [isShibiVisible, setShibiVisible] = useState(false);
  const [strShibiDate, setShibiDate] = useState("xxxx/xx/xx");
  const [tsetCheck, setTestCheck] = useState(true);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: Date) => {
    console.log("A date has been picked: ", dayjs(date).locale('ja').format('YYYY/MM/DD(dd)'));
    setStrDate(dayjs(date).locale('ja').format('YYYY/MM/DD'));
    hideDatePicker();
  };

  // 巡視結果
  const kekkaList = [
    { id: "1", name: "A0501", futakuNo: "12345", kigen: "2020/01/01", kan: "2020/02/02", huka: true },
    { id: "2", name: "A0502", futakuNo: "22222", kigen: "2020/01/01", kan: "2020/02/02", huka: false },
    { id: "3", name: "A0503", futakuNo: "33333", kigen: "2020/01/01", kan: "2020/02/02", huka: true },
    { id: "4", name: "A0504", futakuNo: "44444", kigen: "2020/01/01", kan: "2020/02/02", huka: false },
    { id: "5", name: "A0505", futakuNo: "55555", kigen: "2020/01/01", kan: "2020/02/02", huka: true },
  ];

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffbcff" />
      <View style={{ flex: 1, }}></View>
      <View style={{ flex: 8, justifyContent: 'flex-start', marginBottom: 4, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>電柱：</TextElement>
          <TextElement h4>{route.params.name}</TextElement>
        </View>
        <Divider style={{ height: 1, backgroundColor: 'blue', marginBottom: 4 }}></Divider>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>予定月：</TextElement>
          <Icon onPress={showDatePicker} name='today' color='#00aced' />
          <View style={{ flex: 1 }}><TextInput dataDetectorTypes='calendarEvent' style={{ backgroundColor: "#d1ffff", borderRadius: 7, }} value={strDate}></TextInput></View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>条数：</TextElement>
          <View style={{ flex: 1 }}><TextInput dataDetectorTypes='phoneNumber' style={{ backgroundColor: "#d1ffff", borderRadius: 7, }}></TextInput></View>
        </View>
        <Divider style={{ height: 1, backgroundColor: 'blue', marginBottom: 4 }}></Divider>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>巡視日：</TextElement>
          <Icon onPress={() => setShibiVisible(true)} name='today' color='#00aced' />
          <View style={{ flex: 1 }}><TextInput dataDetectorTypes='calendarEvent' style={{ backgroundColor: "#d1ffff", borderRadius: 7, }} value={strShibiDate}></TextInput></View>
          <DateTimePickerModal
            isVisible={isShibiVisible}
            mode="date"
            onConfirm={(date: Date) => { setShibiDate(dayjs(date).locale('ja').format('YYYY/MM/DD')); setShibiVisible(false); }}
            onCancel={() => setShibiVisible(false)}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>巡視者：</TextElement>
          <View style={{ flex: 1 }}><TextInput dataDetectorTypes='all' style={{ backgroundColor: "#d1ffff", borderRadius: 7, }}></TextInput></View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement h4>改修要否：</TextElement>
          <CheckBox uncheckedColor={"#ff7fff"} checked={tsetCheck} onPress={() => { tsetCheck ? setTestCheck(false) : setTestCheck(true) }}></CheckBox>
        </View>
        <Divider style={{ height: 1, backgroundColor: 'blue', marginBottom: 4 }}></Divider>

        <FlatList data={kekkaList} renderItem={({ item, index, separators }) => (<Four navigation={navigation} text={item.name} futakuNo={item.futakuNo} kigen={item.kigen} kan={item.kan} huka={item.huka} index={index}></Four>)} />

        {/* <Button title="" color="#ffbcff" onPress={() => navigation.goBack()} ><Text style={{ color: "#ff7f7f" }}>ssssss</Text></Button> */}
        {/* <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#ffbcff', borderRadius: 7, padding: 10 }} onPress={() => navigation.goBack()}><TextElement style={{ color: "black" }}>←</TextElement></TouchableOpacity> */}
      </View>
      <View style={{ flex: 1, }}></View>
    </View>
  );
};

const Three = (para: { navigation: any, index: number, text: string }) => {
  const [switchVal, setSwitchVal] = useState(false);
  var swipeoutBtns: SwipeoutButtonProperties[] = [
    {
      text: "詳細",
      type: "primary",
      onPress: () => { console.log(para.text); para.navigation.navigate("Two", { name: para.text }); },
    }, {
      text: "△",
      type: "secondary",
      onPress: () => { console.log("△"); Alert.alert(para.text); },
    }, {
      text: "×",
      type: "delete",
      onPress: () => { console.log(para.text); Alert.alert("×"); },
    },
  ];
  return (
    <Swipeout right={swipeoutBtns} style={styles.SwipeoutS}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: "#b3e6ff", }}>
          <View style={{ flex: 2, borderStyle: 'solid', borderWidth: 1, borderColor: '#4682b4', }}><Text style={[styles.item]}>{para.text}</Text></View>
          <View style={{ flex: 3, borderStyle: 'solid', borderWidth: 1, borderColor: '#4682b4', }}><Text style={[styles.item]}>{"あああ"}</Text></View>
          <View style={{ flex: 1, borderStyle: 'solid', borderWidth: 1, borderColor: '#4682b4', alignItems: 'center', }}><Switch value={switchVal} onValueChange={setSwitchVal}></Switch></View>
        </View>
        <View style={{ flex: 2, alignItems: 'center', backgroundColor: "#bcffdd", }}>
          <Text style={[styles.item]}>{"いいい"}</Text>
        </View>
      </View>
    </Swipeout>
  );
};

const Four = (para: { navigation: any, index: number, text: string, futakuNo: string, kigen: string, kan: string, huka: boolean }) => {
  return (
    <>
      <View style={{ flex: 1, }}></View>
      <View style={{ flex: 8, }}>
        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4, backgroundColor: "#7fbfff" }}>
          <TextElement>巡視結果：</TextElement>
          <TextElement>{para.text}</TextElement>
        </View>
        {/* <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}> */}
          {/* <TextElement style={{ flex: 1, backgroundColor: "#7fffff" }}>改修</TextElement> */}
        {/* </View> */}
        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement style={{ flex: 1 }}>付託No：</TextElement>
          <TextElement style={{ flex: 1 }}>{para.futakuNo}</TextElement>
        </View>
        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement style={{ flex: 1 }}>期限：</TextElement>
          <TextElement style={{ flex: 1 }}>{para.kigen}</TextElement>
        </View>
        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement style={{ flex: 1 }}>完了日：</TextElement>
          <TextElement style={{ flex: 1 }}>{para.kan}</TextElement>
        </View>
        <View style={{ height: 25, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 4 }}>
          <TextElement style={{ flex: 1 }}>不可：</TextElement>
          <View style={{ flex: 1, alignItems: 'flex-start', }}>
            <CheckBox uncheckedColor={"#ff7fff"} size={14} checked={para.huka} ></CheckBox>
          </View>
        </View>
        <Divider style={{ height: 1, backgroundColor: '#7fbfff', marginBottom: 4 }}></Divider>
      </View>
      <View style={{ flex: 1, }}></View>
    </>
  );
};
const Five = () => {
  return (
    <>
    </>
  );
};

const styles = StyleSheet.create({
  SwipeoutS: {
    marginTop: wp('2%'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#4682b4',
    borderRadius: 10,
  },
  item: {
    justifyContent: 'center',
    margin: wp('2%'),
  }
})