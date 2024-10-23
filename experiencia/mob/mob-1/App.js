import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Button,
} from 'react-native';
import { Card } from 'react-native-paper';
import {useState} from 'react';
import Tag from './components/Tag';

export default function App() {
  const [textoBoton, setTextoBoton] = useState("Like")

  const handlePress = () => { // Invierte el texto del boton
    if (textoBoton === "Like") {
      setTextoBoton("Quitar Like")
    } else {
      setTextoBoton("Like")
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Image
          style={styles.pic}
          source={require('./assets/PatoFachero.jpg')}
        />

        <View style={styles.description}>
          <View style={styles.titleButtonContainer}>
            {/* Header usa letra negrita */}
            <Text style={styles.header}>
              Pato Fachero
            </Text>
            <Button
              onPress={handlePress}
              title={textoBoton}
              color="#841584"
            />
          </View>

          {/* Paragraph usa letra normal y más pequeña */}
          <Text style={styles.paragraph}>
            Soy un pato con mucho estilo. Me gustan los computadores y arriba España
          </Text>

          {/* Container de tags, es una fila */}
          <View style={styles.tagsContainer}>
            <Tag category="Cuack"/> {/* A cada tag le pasamos el prop category */}
            <Tag category="Nadar"/>
            <Tag category="Andar en moto"/>
          </View>
        </View>

      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Se usa para que ocupe todo el espacio disponible
    justifyContent: 'center', // Se usa para centrar verticalmente
    backgroundColor: '#A2C1E0',
    padding: 8,
    alignItems: 'center' // Se usa para centrar horizontalmente
  },
  description: {
    padding: 10
  },
  titleButtonContainer: {
    flexDirection: 'row', // Con esto lo convertimos en fila
    justifyContent: 'space-between',
  },
  tagsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 3
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  paragraph: {
    marginTop: 10,
    fontSize: 18,
  },
  card: {
    width: 350
  },
  pic: {
    width: 350,
  }
});
