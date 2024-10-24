import { StyleSheet, Button, ScrollView, View, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import HabitCard from './components/HabitCard'; // Importa el componente HabitCard
import InputHabit from './components/InputHabit'; // Importa el componente InputHabit
import TimerCount from './components/TimerCount';
import { useState } from 'react';

// Lista de hábitos iniciales
const initialHabits = [
  { id: 1, name: "Habito 1" },
  { id: 2, name: "Habito 2" },
  { id: 3, name: "Habito 3" }
];

export default function App() {
  const [habits, setHabits] = useState(initialHabits);
  const [newHabit, setNewHabit] = useState('');

  function handleHabitDeletion(habitID) {
    // Deja solo los hábitos cuyo nombre no sea igual al hábito que se quiere eliminar
    setHabits((prevHabits) => prevHabits.filter(habit => habit.id !== habitID));
  }

  function handleReloadHabits() {
    /* Recarga los habitos iniciales, si se eliminaron se vuelven a agregar
    Si ya estaban, no se agregan de nuevo */
    setHabits(initialHabits);
  }

  function addHabit(name) {
    if (name.trim() === '') {
      Alert.alert('Error', 'El hábito no puede estar vacío');
      return;
    }
    // Agrega un nuevo hábito a la lista de hábitos
    setHabits((prevHabits) => [...prevHabits, { id: prevHabits.length + 1, name }]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <TimerCount />
        {/*SafeAreaView es un contenedor que se ajusta a los márgenes del dispositivo */}
        <View style={styles.inputContainer}>
          <InputHabit
            onChangeText={setNewHabit}
            value={newHabit}
          />
        </View>
        <ScrollView style={styles.scrollView}>
        <Button
          title="Agregar Hábito"
          onPress={() => {
            addHabit(newHabit);
            setNewHabit('');
          }}
        />
          {habits.map(habit => (
            <HabitCard
              key={habit.id}
              id={habit.id}
              name={habit.name}
              onDelete={handleHabitDeletion}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Asegura que los elementos se alineen al principio
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputContainer: {
    marginBottom: 100, // Espacio entre el input y el ScrollView
  },
  scrollView: {
    flex: 1, // Ocupa el espacio restante
  },
});