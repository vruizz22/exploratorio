import { Text, View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { useState } from 'react';

// NO TOCAR ESTE ARCHIVO
export default function HabitCard(props) {
    const [count, setCount] = useState(0); // Estado para el contador de hábitos, inicialmente 0

    function handleIncrease() { // Añade 1 al contador de hábitos
        setCount((prevCount) => prevCount + 1);
    }

    function handleDecrease() { // Quita 1 al contador de hábitos
        setCount((prevCount) => prevCount - 1);
    }

    function handleDelete() { // Llama a la función onDelete del componente padre con el nombre del hábito
        props.onDelete(props.name);
    }

    return (
        <Card style={styles.habitCard}>
            <View style={styles.row}>
                <Button onPress={handleDelete} title="X" color="#ff5c5c" />
                <Text style={styles.habitName}>{props.name}</Text>
                <View style={styles.counterContainer}>
                    <Button onPress={handleDecrease} title="-" />
                    <Text style={styles.counter}>{count}</Text>
                    <Button onPress={handleIncrease} title="+" />
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    habitCard: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    habitName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 10,
    },
    counter: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
});