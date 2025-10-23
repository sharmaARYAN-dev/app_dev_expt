import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Dashboard({ user, onEdit }) {
  if (!user) {
    return (
      <View style={styles.wrapper}>
        <View style={styles.card}>
          <Text style={styles.title}>No user data</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.card}>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.item}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.rowTwo}>
          <View style={styles.col}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>{user.phone || '-'}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Role</Text>
            <Text style={styles.value}>{user.role || '-'}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.item}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>{user.address || '-'}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: { padding: 20, backgroundColor: '#f6f8fb', flexGrow: 1 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 18, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.06, shadowRadius: 12, elevation: 3 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#0b2545' },
  item: { marginBottom: 12 },
  label: { fontSize: 13, color: '#64748b' },
  value: { fontSize: 16, color: '#111', marginTop: 6 },
  rowTwo: { flexDirection: 'row', justifyContent: 'space-between' },
  col: { flex: 1 },
  divider: { height: 1, backgroundColor: '#eef3fb', marginVertical: 12 },
  button: { marginTop: 18, backgroundColor: '#2563eb', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
