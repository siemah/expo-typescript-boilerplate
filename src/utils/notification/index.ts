import * as Notifications from 'expo-notifications';
import { Platform, Alert } from 'react-native';
import Constants from 'expo-constants';
import notificationConfig from '@local/config/notification';

/**
 * Generate a push notification token from Expo notification service
 * @returns push notification token
 */
export async function registerForPushNotificationsAsync() {
  let notification_token: string | null;

  if (Constants.isDevice === false) {
    return null;
  }

  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      Alert.alert(
        'Notification',
        'Check your phone configuration because this app are disabled to receive notifications'
      );
      return null;
    }
    notification_token = (await Notifications.getExpoPushTokenAsync()).data;
    // todo: send notification to server
    // todo: save the token to phone db to prevent from generating each time a new token

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', notificationConfig.channel);
    }
  } catch (error) {
    // todo: report this error
    notification_token = null;
  }

  return notification_token;
}