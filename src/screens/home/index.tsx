import React, { useEffect } from 'react';
import { Alert, Platform, Text, View } from 'react-native';
import { registerForPushNotificationsAsync } from '@local/utils/notification';

export default function Home() {
  useEffect(() => {
    const notificationConfigurations = async () => {
      try {
        // todo: handle the case when user has already accepted/denied notification

        if (Platform.OS === 'ios') {
          Alert.alert(
            'Notification',
            'Would you like to receive notification on the latest news?',
            [
              {
                text: 'Yes, i do',
                style: 'default',
                onPress: registerForPushNotificationsAsync
              },
              {
                text: 'Not now',
                style: 'cancel'
              }
            ]
          );
        } else {
          registerForPushNotificationsAsync();
        }
      } catch (error) {
        // todo: report error
      }
    }
    notificationConfigurations();
    return () => { }
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
