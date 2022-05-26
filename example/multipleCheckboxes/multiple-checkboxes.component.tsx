import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ICheckboxComponent = {
  id: string;
  title: string;
};

type IItem = {
  item: ICheckboxComponent;
};

const generateToggleState = (
  array: ICheckboxComponent[],
  key: string,
  value: boolean,
) => {
  if (!array) return [];
  const initialValue = {};
  return array.reduce((obj, item) => {
    // @ts-ignore
    return item[key]
      ? {
          ...obj,
          // @ts-ignore
          [item[key].replace(/\s/, "")]: value,
        }
      : obj;
  }, initialValue);
};

const MultipleCheckboxes = () => {
  const itemList = [
    { id: "checkbox-1", title: "First checkbox" },
    { id: "checkbox-2", title: "Second checkbox" },
    { id: "checkbox-3", title: "Third checkbox" },
    { id: "checkbox-4", title: "Forth checkbox" },
  ];

  const [toggleCheckbox, setToggleCheckbox] = useState<any>({});

  const handleToggleState = (item: ICheckboxComponent) =>
    setToggleCheckbox({
      ...toggleCheckbox,
      [item.id]: !toggleCheckbox[item.id],
    });

  useEffect(() => {
    setToggleCheckbox(generateToggleState(itemList, "id", false));
  }, []);

  const CheckboxComponent = ({ item }: IItem) => {
    const { id, title } = item;
    return (
      <BouncyCheckbox
        disableBuiltInState
        fillColor="red"
        iconStyle={{ borderColor: "red" }}
        isChecked={toggleCheckbox[id]}
        key={id}
        onPress={() => handleToggleState({ id, title })}
        style={{ paddingBottom: 10 }}
        text={title}
        textStyle={{ textDecorationLine: "none" }}
      />
    );
  };

  const renderItem = ({ item }: IItem) => <CheckboxComponent item={item} />;

  return (
    <View>
      <Text>Toggle multiple checkboxes</Text>
      <SafeAreaView
        style={{
          marginTop: 10,
          height: 140,
        }}
      >
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ padding: 2 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default MultipleCheckboxes;
