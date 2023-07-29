import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import EntryList from "../components/EntryList";

export default function AllEntriesScreen({ route, navigation }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: route.params.titleText,
    });

    if (route.params.editedMeal) {

      const editedEntryIndex = entries.findIndex(
        (entry) => entry.id === route.params.editedMeal.id
      );
      if (editedEntryIndex !== -1) {
        const updatedEntries = [...entries];
        updatedEntries[editedEntryIndex] = route.params.editedMeal;
        setEntries(updatedEntries);
      }
    }
  }, [route.params.editedMeal]);

  return (
    <View>
      <EntryList
        showWarnOnly={false}
        navigation={navigation}
        route={route}
        entries={entries} 
        setEntries={setEntries} 
      />
    </View>
  );
}
