import { AndroidImportance } from 'expo-notifications'
const notificationConfig = {
  channel: {
    name: 'default',
    importance: AndroidImportance.MAX,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#FF005C7C',
    enableVibrate: true,
    showBadge: true,
    enableLights: true,
  },
  notificationHandler: {
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    }),
  }
};

export default notificationConfig;