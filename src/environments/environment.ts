// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'Ionic env',
  appVersion: 1.0,
  packageId: 'com.ionic8',
  APIBASEURL: 'http://localhost/',
  playStoreURL: 'https://play.google.com/store/apps/details?id=com.ionic8',
  ratePlayStoreURL: 'market://details?id=com.ionic8',
  socialShare: {
    msg: 'Check out com.ionic8 app for your smartphone. Download it today from',
    subject: "Ionic 8",
    image: "xxx",
    url: "https://play.google.com/store/apps/details?id=ionic8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
