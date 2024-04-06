import React, {useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Pressable,
  Alert,
} from 'react-native';
import AppleHeader from 'react-native-apple-header';
import BottomSearchBar from 'react-native-bottom-search-bar';
// import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BouncyCheckbox, {BouncyCheckboxHandle} from './lib/BouncyCheckbox';

const App: React.FC = () => {
  const bouncyCheckboxRef = useRef<BouncyCheckboxHandle>(null);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppleHeader
          dateTitle={'2024-04-06'}
          largeTitle={'Welcome'}
          onPress={() => {}}
          imageSource={{
            uri: 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        />
        <View style={{margin: 16}}>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              TouchableComponent={Pressable}
              iconStyle={{borderColor: 'red'}}
              disableText={false}
              unFillColor="#FFFFFF"
              text="Custom Checkbox with Pressable Component"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              disabled
              isChecked={false}
              iconStyle={{borderColor: 'blue', borderRadius: 10}}
              unFillColor="white"
              text="Custom Disabled Checkbox Example"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              text="Call my mom 😇"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              isChecked
              text="Get groceries"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              isChecked
              text="Pay the bills"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              text="Take out of the trash 💩"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              disableText={false}
              text="Buy tickets for concert 🎉 🎊"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              isChecked
              text="Try new gym routine"
              textStyle={{
                color: 'red',
                textDecorationLine: 'none',
              }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
          <View style={{margin: 8}}>
            <BouncyCheckbox
              isChecked
              text="Do a load of laundry"
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 16,
          }}>
          <Text
            style={{
              marginLeft: 24,
              fontSize: 24,
              fontWeight: '700',
            }}>
            Checkbox Only
          </Text>
          <View
            style={{
              marginTop: 16,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <BouncyCheckbox
              size={50}
              isChecked
              iconImageStyle={{width: 18, height: 18}}
              disableText
              onPress={() => {}}
            />
            <BouncyCheckbox
              disableText
              fillColor="#f54b42"
              size={50}
              iconImageStyle={{width: 18, height: 18}}
              iconStyle={{borderColor: '#f54b42'}}
              onPress={() => {}}
            />
            <BouncyCheckbox
              isChecked
              disableText
              fillColor="#4287f5"
              size={50}
              iconImageStyle={{width: 18, height: 18}}
              iconStyle={{borderColor: '#4287f5'}}
              onPress={() => {}}
            />
            <BouncyCheckbox
              ref={bouncyCheckboxRef}
              disableText
              fillColor="#9342f5"
              size={50}
              iconImageStyle={{width: 18, height: 18}}
              iconStyle={{borderColor: '#9342f5'}}
              onPress={isChecked => {
                Alert.alert(`Checked:: ${isChecked}`);
              }}
            />
            <BouncyCheckbox
              isChecked
              disableText
              fillColor="green"
              size={50}
              iconImageStyle={{width: 18, height: 18}}
              iconStyle={{borderColor: 'green'}}
              onPress={() => {
                if (bouncyCheckboxRef.current) {
                  bouncyCheckboxRef.current.onCheckboxPress();
                }
              }}
            />
          </View>
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
