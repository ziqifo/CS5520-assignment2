import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import ButtonPressable from "../components/ButtonPressable";
import { writeToDB } from "../Firebase/firestoreHelper";
import styles from "../MyStyles";

function isValidNumber(p) {
    return !isNaN(p) && parseInt(p) >= 0;
}

export default function AddEntryScreen({ route, navigation }) {

    const [ calory, setCalory ] = useState('');
    const [ name, setName ] = useState('');

    
    const rfunc = function reset() {
        setCalory('');
        setName('');
    };

    const sfunc = function submit() {
        if (!isValidNumber(calory) || name == '') {
            Alert.alert('Input invalid',
                'Please correct your input.');
            return;
        }
        const newMeal = {
            name: name,
            calory: parseInt(calory),
            reviewed: parseInt(calory) > route.params.limit ? false : true,
        };
        writeToDB({ meal: newMeal });
        rfunc();
        navigation.navigate('Home');
    };

    return (
        <View>
            <View style={[styles.rowAlignContainer, styles.textAlignContainer]}>
                <Text style={styles.boldText}>
                    Calories
                </Text>
                <TextInput
                    value={calory}
                    onChangeText={ txt => setCalory(txt.trim()) }
                    style={ styles.inputBox }
                >
                </TextInput>
            </View>
            <View style={[styles.rowAlignContainer, styles.textAlignContainer]}>
                <Text style={styles.boldText}>
                    Description
                </Text>
                <TextInput
                    value={name}
                    onChangeText={ txt => setName(txt) }
                    style={ [styles.inputBox, styles.multiLineTBox] }
                    multiline={true}
                >
                </TextInput>
            </View>

            <View style={styles.rowAlignContainer}>
                <ButtonPressable
                    onPressed={() => {rfunc();}}
                >
                    <Text>
                        Reset
                    </Text>
                </ButtonPressable>
                <ButtonPressable
                    onPressed={() => {sfunc();}}
                >
                    <Text>
                        Submit
                    </Text>
                </ButtonPressable>
            </View>
        </View>
    );
}