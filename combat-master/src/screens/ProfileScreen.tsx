import React, { useEffect, useState } from "react";
import { View, Button, TextInput, AsyncStorage, Text } from "react-native";
import { NavigationInjectedProps } from "react-navigation";
import { Formik } from "formik";
import { useSelector } from "react-redux";

export interface ProfileScreenProps {
  currentCharacterValues: CharacterValues;
}

type InternalProfileScreenProps = NavigationInjectedProps<ProfileScreenProps>;

export interface CharacterValues {
  name: string;
  class: string;
  level: number;
}

export const DefaultCharacterKey = "@combatMaster_character";

const storeCharacter = async (values: CharacterValues) => {
  try {
    await AsyncStorage.setItem(DefaultCharacterKey, JSON.stringify(values));
  } catch (e) {
    alert(`oh shoot had some trouble saving that one...here's the error if you're curious ${e}`);
  }
};

const getStoredCharacter = async (key: string) => {
  try {
    const character = await AsyncStorage.getItem(key);
    return JSON.parse(character) as CharacterValues;
  } catch (e) {
    alert(`No luck on that one, here's the error: ${e}`);
  }
  return;
};

const placeholderCharacter: CharacterValues = {
  name: "Xavier Xiloscient",
  class: "Bard",
  level: 6,
};

export const getCharacterOrPlaceholder = async (key: string) => {
  const storedCharacter = await getStoredCharacter(key);
  return storedCharacter || placeholderCharacter;
};

export const ProfileScreen: React.FC<InternalProfileScreenProps> = (props) => {
  const { navigate } = props.navigation;
  const state = useSelector((state) => state.characterReducer);

  const submit = (values: CharacterValues) => {
    storeCharacter(values);
    navigate("Home");
  };

  const currentCharacter = props.navigation.getParam("currentCharacterValues");
  const [character] = useState(currentCharacter);

  return (
    <View>
      <Text>Current character values: {JSON.stringify(currentCharacter)}</Text>
      <Formik initialValues={currentCharacter} onSubmit={submit} enableReinitialize>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              placeholder={values.name || "Character name"}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
            />
            <TextInput
              placeholder={values.class || "Character class"}
              onChangeText={handleChange("class")}
              onBlur={handleBlur("class")}
              value={values.class}
            />
            <TextInput
              placeholder={values.level.toString() || "Character level"}
              onChangeText={handleChange("level")}
              onBlur={handleBlur("level")}
              value={values.level.toString()}
            />
            <Button title="Save and return home" onPress={() => handleSubmit(values)} />
          </View>
        )}
      </Formik>
    </View>
  );
};

ProfileScreen.navigationOptions = { title: "Profile" };
