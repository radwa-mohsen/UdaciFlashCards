
}import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'

const NOTIFICATION_KEY = 'UdaciFlashCards:notifications'

  const createNotification = () => {
    return {
      title: 'Shall Take Your Quiz',
      body: "👋 don't forget , you have to refresh tour memory with daily quiz",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let nextDay = new Date()
                nextDay.setDate(nextDay.getDate() + 1)
                nextDay.setHours(20)
                nextDay.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: nextDay,
                    repeat: 'day',
                  }
                )
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
