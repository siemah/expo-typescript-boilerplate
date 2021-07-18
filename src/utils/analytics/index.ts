import * as Analytics from 'expo-firebase-analytics';

/**
 * @name AppAnalytic
 * @description centralized code send analytics on
 * users behavior to third party services
 * @version 1.0.0
 * @see https://docs.expo.io/versions/latest/sdk/firebase-analytics/
 */
export default class AppAnalytic {

  /**
   * Track which screen users spend ther time in the app
   * @param currentRouteName name of the screen
   * @param screenClassOverride class of the screen
   * @see https://docs.expo.io/versions/latest/sdk/firebase-analytics/#setcurrentscreen
   */
  static setCurrentScreen(currentRouteName: string, screenClassOverride?: string) {
    console.log(`current screen: ${currentRouteName}`)
    return Analytics.setCurrentScreen(currentRouteName, screenClassOverride);
  }

  /**
   * Send an event to analytic service
   * @param name name of the event
   * @param properties is a key/value object containing extra details about event
   */
  static logEvent(name: string, properties?: Record<string, any>) {
    return Analytics.logEvent(name, properties);
  }

}