import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const logoPath = '../../images/logo.jpg';

const WelcomePage =  ({navigation}: {navigation: any}) => {

  const handleCreateAccount = () => {
    // Handle create account button press
    navigation.navigate('Login')
    console.log('Create Account button pressed!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperBar}>
    <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
    </TouchableOpacity>
      </View>
      <View style={styles.middle}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Image source={require(logoPath)} style={styles.logo} />
        <Text style={styles.appText}>Parking App</Text>
      </View>
      {handleCreateAccount && (
        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
          <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000',
    paddingTop: 30,
  },
  upperBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  appText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  createAccountButton: {
    backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginBottom: 30,
    alignSelf: 'center',
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WelcomePage;
