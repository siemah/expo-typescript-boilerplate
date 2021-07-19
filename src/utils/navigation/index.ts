import * as Notifications from 'expo-notifications';
import * as Linking from 'expo-linking';

/**
 * Get the initial link when the app was open from launcher, notification or ...
 */
export const getInitialURL = async () => {
  let url: string | null | undefined;
  const data = await Notifications.getLastNotificationResponseAsync();
  url = String(data?.notification?.request?.content.data?.url);

  if (url !== null && data?.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER) {
    return url;
  }

  url = await Linking.getInitialURL();
  if (url != null) {
    return url;
  }

  return undefined;
}
/**
 * Subscribe to each event on navigator container such as changing of the link(current screen)
 * @param listener 
 */
export const subscribe = (listener: any) => {
  const onReceiveURL = ({ url }: { url: string }) => listener(url);

  Linking.addEventListener('url', onReceiveURL);
  const subscription = Notifications.addNotificationResponseReceivedListener(response => {
    const url = response.notification.request.content.data.url;
    listener(String(url));
  });

  return () => {
    Linking.removeEventListener('url', onReceiveURL);
    subscription.remove();
  };
}