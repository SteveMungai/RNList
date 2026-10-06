import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Button,Alert,} from 'react-native';
import { supabase } from './supabase';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!name.trim() || !password.trim()) {
      Alert.alert('Error', 'Please enter your name and password');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('Student')
        .select('*')
        .eq('name', name)
        .eq('password', password)
        .single();

      if (error || !data) {
        Alert.alert('Login Failed', 'Invalid name or password');
        return;
      }

      Alert.alert(
        'Login Successful',
        `Welcome ${data.name}! You are ${data.age} years old.`
      );

      console.log('Logged in user:', data);
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Student Login</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={handleLogin}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  form: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});