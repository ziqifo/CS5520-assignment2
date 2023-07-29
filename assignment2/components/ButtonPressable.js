import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../MyStyles";

export default function ButtonPressable({ 
    children,
    onPressed,
    selfStyle
    }) {

    return (
        <Pressable
            onPress={onPressed}
            android_ripple={{ color: 'grey', radius: 20 }}
            style={({ pressed }) => {
                return [
                  styles.generalButton,
                  selfStyle,
                  pressed && styles.pressedButton
                ];
              }}
        >
            {children}
        </Pressable>
    );
}