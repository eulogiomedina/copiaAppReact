import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo/>
      <Textop/>
      <Textoc/>
      <Botones/>
      <StatusBar style="auto" />
    </View>
  );
}

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logoImage}
        source={require('./assets/src/amazon.png')}
      />
    </View>
  );
};

const Textop=()=>{
  return(
    <Text style={styles.text}>
      Ingresar a tu cuenta
    </Text>

  );
}

const Textoc = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.text1}>Ver tu wish list</Text>
      <Text style={styles.text1}>Busca y reordena compras anteriores</Text>
      <Text style={styles.text1}>Rastrea tus compras</Text>
    </View>
  );
};

const Botones = () => {
  return (
    <View style={styles.container2}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>¿Ya eres cliente? Iniciar sesión.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>¿Nuevo en Amazon.com.mx?Crea una cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.buttonText}>Omitir inicio de sesion </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinea los elementos en la parte superior
    paddingTop: 20, // Espaciado en la parte superior para dar espacio al StatusBar
  },
  logoContainer: {
    marginTop: 20, // Puedes ajustar la distancia desde la parte superior según tus necesidades
  },
  text: {
    fontWeight: 'bold', // Establece el texto en negrita
    textAlign: 'center', // Centra el texto
    fontSize: 20, // Ajusta el tamaño del texto (puedes ajustar según tus necesidades)
  },
  container1: {
    marginTop: 15, // Puedes ajustar el espacio superior según tus necesidades
    marginLeft: -15, // Ajusta el espacio a la izquierda según tus necesidades
  },
  text1: {
    marginBottom: 13, // Puedes ajustar el espacio inferior entre textos según tus necesidades
    fontSize: 15,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#efb810', // Color de fondo del botón
    padding: 10, // Espaciado interno del botón
    borderRadius: 5, // Bordes redondos
    width: '100%',
    marginBottom: 15,
   
  },
  button1: {
    backgroundColor: '#d2d0d0' ,// Color de fondo del bot
    padding: 10, // Espaciado interno del botón
    borderRadius: 5, // Bordes redondos
    width: '100%',
    marginBottom: 15,
   
  },
  buttonText: {
    color: 'black', // Color del texto del botón
    textAlign: 'center', // Centra el texto dentro del botón
  },

  container2: {
    width: '90%',
    margin: 15,
  },
  
});
