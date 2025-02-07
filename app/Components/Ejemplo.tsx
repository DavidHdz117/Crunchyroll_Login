import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Acceder', `Email: ${email}\nContraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Acceder</Text>

        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Image source={require('./image.png')} style={styles.logo} />
      </View>

      <Text style={styles.welcomeText}>
        ¡Te damos la bienvenida a Crunchyroll! Para acceder puedes usar tanto tu usuario de
        Crunchyroll como el de Funimation.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.termsText}>
        Al usar tu cuenta accedes a nuestros <Text style={styles.link}>Términos</Text> y{' '}
        <Text style={styles.link}>Política de Privacidad</Text> y confirmas que tienes 16 años o más.
      </Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>ACCEDER</Text>
      </TouchableOpacity>

      <View style={styles.footerLinks}>
        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <Text style={styles.separatorText}>|</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    left: 20,
  },
  closeText: {
    color: '#fff',
    fontSize: 24,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 10,
  },
  logo: {
    width: 350,
    height: 50,
    resizeMode: 'contain',
  },
  welcomeText: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#1c1c1c',
    borderColor: '#f47521',
    borderBottomWidth: 2,
    marginBottom: 15,
    padding: 10,
    color: '#fff',
  },
  termsText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    color: '#f47521',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#888',
  },
  loginText: {
    color: '#888',
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separatorText: {
    color: '#fff',
    marginHorizontal: 10,
  },
});
