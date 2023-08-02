import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { collection, query, where, onSnapshot, deleteDoc } from "firebase/firestore";
import { firestore } from '../Firebase/firebase-setup';
import EntryItem from "./EntryItem";

export default function EntryList({ route, navigation, showWarnOnly }) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(firestore, "meals"), (querySnapShot) => {
          if (querySnapShot.empty) {
            setMeals([]);
          } else {
            let mealsfromdb = [];
            querySnapShot.docs.forEach((snapDoc) => {
              mealsfromdb.push({...snapDoc.data(), id: snapDoc.id});
            });
            if (showWarnOnly) {
                mealsfromdb = mealsfromdb.filter((v) => {return !v.reviewed;});
            }
            setMeals(mealsfromdb);
          }
        });
        return () => {
          unsubscribe();
        }
    }, []);

    return (
        <View>
            <FlatList
                data={meals}
                renderItem={(meal) => {
                    return (
                        <EntryItem
                            meal={meal.item}
                            navigation={navigation}
                            route={route}
                        >
                        </EntryItem>
                    );
                }}
                keyExtractor={(meal) => {
                    return meal.id;
                }}
            >
            </FlatList>
        </View>
    );
}