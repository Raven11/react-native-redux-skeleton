import React, { View, Text } from 'react-native';
import Button from 'react-native-button';
import routes from '../../scripts/routes';

const Welcome = ({navigator}) => (
  <View style={styles.container}>
    <Button onPress={() => {
          // Get a route object from the router
          let profile = {
            name: 'Jane',
            photoUrl: 'https://avatars3.githubusercontent.com/u/146186?v=3&s=40',
          };

          let route = routes.getProfileRoute(profile);

          // `navigator` is passed into your scene component when you have
          // implemented getSceneClass in your route
          navigator.push(route);
        }}>
      Navigate to a profile
    </Button>
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10
  }
};

export default Welcome;
