import React, { useState } from "react";
import { View, Text, Alert, TextInput } from "react-native";
import ButtonPressable from "../components/ButtonPressable";
import { deleteFromDB } from "../Firebase/firestoreHelper";
import styles from "../MyStyles";
import { AntDesign } from '@expo/vector-icons';

export default function EditEntryScreen({ route, navigation }) {
  const { id } = route.params.meal;

  // State variables for calories and description
  const [calories, setCalories] = useState(route.params.meal.calory.toString());
  const [description, setDescription] = useState(route.params.meal.name);

  const onDelete = function handleDelete(id) {
    Alert.alert(
      'Confirmation of delete',
      'Are you sure you want to delete this entry?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            deleteFromDB({ docid: id });
            navigation.popToTop();
          },
        },
      ],
      { cancelable: false }
    );
  };

  const onEdit = function handleEdit(id) {
    Alert.alert(
      'Edit Entry',
      null,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => {
            // Process the edited values and update the state variables
            // For demonstration purposes, we are not handling validation here
            // Make sure to validate user inputs in your actual implementation
            const editedMeal = {
              calory: parseInt(calories),
              name: description,
            };
            // Update the values in the database or any state management
            // For demonstration, we are just logging the editedMeal
            console.log('Edited Values:', editedMeal);

            // After processing, you can navigate back to the previous screen
            navigation.popToTop();
          },
        },
      ],
      'plain-text', // Change to 'secure-text' if you want to hide the input
      `${calories}\n${description}` // The default value for the input field
    );
  };

  return (
    <>
      <View style={styles.myCardo}>
        <View style={[styles.rowAlignContainer, styles.textAlignContainer]}>
          <Text style={styles.boldText}>Calories</Text>
          <TextInput
            value={calories}
            onChangeText={setCalories}
            style={styles.inputBox}
            keyboardType="numeric"
          />
        </View>
        <Text>&nbsp;</Text>
        <View style={[styles.rowAlignContainer, styles.textAlignContainer]}>
          <Text style={styles.boldText}>Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            style={[styles.inputBox, styles.multiLineTBox]}
            multiline={true}
          />
        </View>
        <View style={styles.rowAlignContainer}>
          <ButtonPressable
            onPressed={() => onDelete(id)}
          >
            <AntDesign name="delete" size={18} color={styles.black} />
          </ButtonPressable>
          <ButtonPressable
            onPressed={() => onEdit(id)}
          >
            <Text>Edit</Text>
          </ButtonPressable>
        </View>
      </View>
    </>
  );
}
