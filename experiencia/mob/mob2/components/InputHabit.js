import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const InputHabit = ({ onChangeText, value }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    {/* Si el input es vacio mostrar una alerta pop up
                    de que no puede estar vacio */}
                    <TextInput
                        style={styles.inputhabit}
                        onChangeText={onChangeText}
                        value={value}
                        placeholder="Ingresa un Hábito"
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    inputhabit: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        
    },
});

export default InputHabit;