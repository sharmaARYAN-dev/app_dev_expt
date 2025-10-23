import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import RegistrationScreen from './RegistrationScreen';
import Dashboard from './Dashboard';

export default function App() {
  const [user, setUser] = useState(null);

  const handleRegister = (data) => {
    setUser(data);
  };

  const handleEdit = () => {
    setUser(null);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {user ? <Dashboard user={user} onEdit={handleEdit} /> : <RegistrationScreen onRegister={handleRegister} />}
    </SafeAreaView>
  );
}
