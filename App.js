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
    justifyContent: 'flex-start', 
    paddingTop: 20, 
  },
  logoContainer: {
    marginTop: 20, 
  },
  text: {
    fontWeight: 'bold', 
    textAlign: 'center', 
    fontSize: 20, 
  },
  container1: {
    marginTop: 15, 
    marginLeft: -15, 
  },
  text1: {
    marginBottom: 13, 
    fontSize: 15,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#efb810',
    padding: 10, 
    borderRadius: 5, 
    width: '100%',
    marginBottom: 15,
   
  },
  button1: {
    backgroundColor: '#d2d0d0' ,
    padding: 10, 
    borderRadius: 5, 
    width: '100%',
    marginBottom: 15,
   
  },
  buttonText: {
    color: 'black', 
    textAlign: 'center', 
  },

  container2: {
    width: '90%',
    margin: 15,
  },
  
});
