import { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../MyStyles";
import ButtonPressable from "./ButtonPressable";
import { AntDesign } from '@expo/vector-icons';

export default function EntryItem({ route, navigation, meal }) {

    const { name, calory, id, reviewed } = meal;
    const insertIcon = (
        <AntDesign name="exclamationcircle" size={15} color={styles.black} />
    );


    const onp = function onp(id) {
        navigation.navigate('Edit', {
            meal: meal
        });
    };

    return (
        <View>
            <ButtonPressable
                onPressed={() => {onp(id);}}
            >
                <Text style={styles.tagText} numberOfLines={1} ellipsizeMode='tail'>
                    {name}
                </Text>
                <View style={styles.rowAlignContainer}>
                    {!reviewed && insertIcon}
                    <Text style={styles.tagButn}>
                        {calory}
                    </Text>
                </View>
            </ButtonPressable>
        </View>
    );
}