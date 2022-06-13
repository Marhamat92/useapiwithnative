import React from 'react';
import {SafeAreaView, View, Text, Button, FlatList,ActivityIndicator} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

function App() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUsers(response.data);
    setLoading(false);
  }

  const renderUsers = ({item}) => <UserCard name={item.name} />;

  // React.useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <SafeAreaView>
      <View>
         {loading ? <ActivityIndicator size="large"/>:
          <FlatList
            data={users}
            renderItem={renderUsers}
            keyExtractor={item => item.id}
          />}
        
        <Button title="Get Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

export default App;
