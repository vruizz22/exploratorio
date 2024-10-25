import { SafeAreaView, StyleSheet, Button } from 'react-native';
import HabitCard from './components/HabitCard'; // Importa el componente HabitCard
import { useState } from 'react';

// Lista de hábitos iniciales
const initialHabits = [
    { id: 1, name: "Habito 1xd" },
    { id: 2, name: "Habito 2" }
];

export default function App() {
    const [habits, setHabits] = useState(initialHabits);

    function handleHabitDeletion(habitID) {
        // Deja solo los hábitos cuyo nombre no sea igual al hábito que se quiere eliminar
        setHabits((prevHabits) => prevHabits.filter(habit => habit.id !== habitID));
    }

    function handleReloadHabits() {
        /* Recarga los habitos iniciales, si se eliminaron se vuelven a agregar
        Si ya estaban, no se agregan de nuevo */
        setHabits(initialHabits);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="Recargar"
                onPress={handleReloadHabits}
            />
            {habits.map(habit => (
                <HabitCard
                    id={habit.id}
                    name={habit.name}
                    onDelete={handleHabitDeletion}
                />
            ))}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});