import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function RegistrationScreen({ onRegister, initial = {} }) {
  const [name, setName] = useState(initial.name || '');
  const [email, setEmail] = useState(initial.email || '');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState(initial.phone || '');
  const [address, setAddress] = useState(initial.address || '');
  const [role, setRole] = useState(initial.role || 'User');
  const [showRoles, setShowRoles] = useState(false);

  const onSubmit = () => {
    if (!name.trim() || !email.trim() || !password) {
      Alert.alert('Missing fields', 'Please fill name, email and password.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Password mismatch', 'Please make sure both passwords match.');
      return;
    }
    const data = { name: name.trim(), email: email.trim(), phone: phone.trim(), address: address.trim(), role };
    if (typeof onRegister === 'function') onRegister(data);
    else Alert.alert('Registered', `Name: ${name}\nEmail: ${email}`);
  };

  // layout: if width is wide, place welcome and card side-by-side
  const isWide = width > 700;

  return (
    <LinearGradient colors={["#2b0550", "#4b0f6a", "#6a1a8a"]} style={styles.background}>
      <View style={[styles.container, isWide ? styles.row : null]}>
        <View style={[styles.left, isWide ? { flex: 1 } : { width: '100%' }]}>
          <Text style={styles.welcome}>Welcome!</Text>
          <View style={styles.leftLine} />
          <Text style={styles.subtitle}>Create your account to access the dashboard and manage your profile.</Text>
        </View>

        <View style={[styles.right, isWide ? { width: 420 } : { width: '100%' }]}>
          <View style={styles.cardTranslucent}>
            <Text style={styles.cardTitle}>Sign up</Text>

            <TextInput style={styles.pill} placeholder="Full name" value={name} onChangeText={setName} placeholderTextColor="#8b93a7" />
            <TextInput style={styles.pill} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#8b93a7" />
            <TextInput style={styles.pill} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry placeholderTextColor="#8b93a7" />
            <TextInput style={styles.pill} placeholder="Confirm password" value={confirm} onChangeText={setConfirm} secureTextEntry placeholderTextColor="#8b93a7" />

            <View style={styles.rowSmall}>
              <TextInput style={[styles.pill, styles.flex1]} placeholder="Phone" value={phone} onChangeText={setPhone} keyboardType="phone-pad" placeholderTextColor="#8b93a7" />
              <TouchableOpacity style={[styles.pill, styles.rolePill]} onPress={() => setShowRoles(!showRoles)}>
                <Text style={styles.roleText}>{role}</Text>
              </TouchableOpacity>
            </View>

            {showRoles && (
              <View style={styles.roleListFloat}>
                {['User', 'Admin', 'Guest'].map(r => (
                  <TouchableOpacity key={r} onPress={() => { setRole(r); setShowRoles(false); }} style={styles.roleItemFloat}>
                    <Text style={{ color: '#fff' }}>{r}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity onPress={onSubmit} style={{ width: '100%' }}>
              <LinearGradient colors={["#ff7a18", "#ff4e50"]} style={styles.gradientButton}>
                <Text style={styles.buttonText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  left: { padding: 20, alignItems: 'flex-start' },
  welcome: { color: '#fff', fontSize: 42, fontWeight: '800' },
  leftLine: { width: 40, height: 3, backgroundColor: '#fff', marginVertical: 12, opacity: 0.4 },
  subtitle: { color: '#e9dff0', maxWidth: 420, lineHeight: 20 },
  right: { alignItems: 'center', justifyContent: 'center' },
  cardTranslucent: { width: '100%', backgroundColor: 'rgba(255,255,255,0.06)', padding: 18, borderRadius: 12, alignItems: 'center' },
  cardTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 12 },
  pill: { width: '100%', backgroundColor: 'rgba(255,255,255,0.1)', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 30, color: '#fff', marginTop: 10 },
  rowSmall: { flexDirection: 'row', width: '100%', marginTop: 10, justifyContent: 'space-between' },
  flex1: { flex: 1, marginRight: 8 },
  rolePill: { width: 110, justifyContent: 'center', alignItems: 'center' },
  roleText: { color: '#fff' },
  roleListFloat: { position: 'absolute', top: 220, right: 28, backgroundColor: 'rgba(0,0,0,0.25)', borderRadius: 8, overflow: 'hidden' },
  roleItemFloat: { padding: 10, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.06)' },
  gradientButton: { marginTop: 16, paddingVertical: 14, borderRadius: 30, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '700' },
});
