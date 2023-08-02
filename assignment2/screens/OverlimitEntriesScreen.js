import { useEffect } from "react";
import { View, Text } from "react-native";
import EntryList from "../components/EntryList";

export default function OverlimitEntriesScreen({ route, navigation }) {

    useEffect(() => {
        navigation.setOptions({
            title: route.params.titleText
        });
    });

    return (
        <View>
            <EntryList
                showWarnOnly={true}
                navigation={navigation}
                route={route}
            >
            </EntryList>
        </View>
    );
}