import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SharedLocation from './Components/Share-location';
import {Link , Route , Switch,NativeRouter} from 'react-router-native'
export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Switch>
          <Route exact path='/' render={
            () => <View style={styles.container}><Link to='/map' component={Text}>Hi</Link></View>
          }></Route>
          <Route exact path='/map' component={SharedLocation}/>
        </Switch>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
