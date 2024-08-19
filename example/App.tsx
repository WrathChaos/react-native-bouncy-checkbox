import React, {useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';
import AppleHeader from 'react-native-apple-header';
import BottomSearchBar from 'react-native-bottom-search-bar';
import RNBounceable from '@freakycoder/react-native-bounceable';
import BouncyCheckbox, {BouncyCheckboxHandle} from './build/dist';

const profilePicUri = {
  uri: 'https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const App: React.FC = () => {
  const bouncyCheckboxRef = useRef<BouncyCheckboxHandle>(null);
  const [localChecked, setLocalChecked] = React.useState(false);

  const renderCheckboxes = () => (
    <View style={styles.checkboxesContainer}>
      <BouncyCheckbox
        size={25}
        style={styles.checkbox}
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
      <BouncyCheckbox
        disabled
        style={styles.checkbox}
        isChecked={false}
        iconStyle={{borderColor: 'blue', borderRadius: 10}}
        unFillColor="white"
        text="Custom Disabled Checkbox Example"
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        text="Call my mom 😇"
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <BouncyCheckbox
        isChecked
        style={styles.checkbox}
        text="Get groceries"
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <BouncyCheckbox
        isChecked
        style={styles.checkbox}
        text="Pay the bills"
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <BouncyCheckbox
        style={styles.checkbox}
        disableText={false}
        text="Buy tickets for concert 🎉 🎊"
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
      <BouncyCheckbox
        isChecked
        style={styles.checkbox}
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
  );

  const renderCheckboxOnly = () => (
    <View>
      <Text style={styles.title}>Checkbox Only</Text>
      <View style={styles.checkboxOnlyContainer}>
        <BouncyCheckbox
          size={50}
          isChecked
          iconImageStyle={styles.iconImageStyle}
          disableText
          onPress={() => {}}
        />
        <BouncyCheckbox
          disableText
          fillColor="#f54b42"
          size={50}
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderColor: '#f54b42'}}
          onPress={() => {}}
        />
        <BouncyCheckbox
          isChecked
          disableText
          fillColor="#4287f5"
          size={50}
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderColor: '#4287f5'}}
          onPress={() => {}}
        />
        <BouncyCheckbox
          disableText
          fillColor="#9342f5"
          size={50}
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderColor: '#9342f5'}}
          onPress={isChecked => {
            Alert.alert(`Checked:: ${isChecked}`);
          }}
        />
        <BouncyCheckbox
          isChecked={localChecked}
          disableText
          fillColor="green"
          size={50}
          useBuiltInState
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderColor: 'green'}}
          onPress={(checked: boolean) => {
            // These two should be same value
            console.log('::Checked::', checked);
            console.log('::LocalChecked::', localChecked);
            setLocalChecked(!localChecked);
          }}
        />
      </View>
    </View>
  );

  const renderSyntheticCheckboxControl = () => (
    <View style={styles.checkboxSynthetic}>
      <Text style={styles.titleSynthetic}>Synthetic Checkbox</Text>
      <Text style={styles.checkboxSyntheticSubtitle}>
        Control Checkbox with Another Button
      </Text>
      <View style={styles.checkboxSyntheticContainer}>
        <BouncyCheckbox
          ref={bouncyCheckboxRef}
          disableText
          fillColor="#9342f5"
          size={50}
          iconImageStyle={styles.iconImageStyle}
          iconStyle={{borderColor: '#9342f5'}}
          onPress={isChecked => {
            Alert.alert(`Checked:: ${isChecked}`);
          }}
        />
        <RNBounceable
          style={styles.syntheticButton}
          onPress={() => {
            if (bouncyCheckboxRef.current) {
              bouncyCheckboxRef.current.onCheckboxPress();
            }
          }}>
          <Text style={{color: '#fff', fontWeight: '600'}}>
            Change Checkbox
          </Text>
        </RNBounceable>
      </View>
    </View>
  );

  return (
    <View style={styles.flex}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex}>
        <AppleHeader
          dateTitle={'Welcome'}
          largeTitle={'John Doe'}
          onPress={() => {}}
          imageSource={profilePicUri}
        />
        {renderCheckboxes()}
        {renderCheckboxOnly()}
        {renderSyntheticCheckboxControl()}
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  checkboxesContainer: {
    margin: 16,
  },
  checkbox: {
    margin: 8,
  },
  title: {
    marginLeft: 24,
    fontSize: 24,
    fontWeight: '700',
  },
  checkboxOnlyContainer: {
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  iconImageStyle: {
    width: 18,
    height: 18,
  },
  titleSynthetic: {
    fontSize: 24,
    marginLeft: 24,
    width: '80%',
    fontWeight: '700',
  },
  checkboxSyntheticSubtitle: {
    marginTop: 8,
    marginLeft: 24,
    fontSize: 16,
    width: '80%',
    color: 'gray',
    fontWeight: '300',
  },
  checkboxSynthetic: {
    marginTop: 16,
  },
  checkboxSyntheticContainer: {
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  syntheticButton: {
    height: 35,
    borderRadius: 16,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#531011',
  },
});

export default App;
