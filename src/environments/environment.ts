// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:"https://api.github.com/",
  users:"users/",
  repositories:"repositories",
  accesstoken:"?access_token=043586e9c75ac64b8b0b4007fdc449d18a2d168c",
  repos:"/repos",


  firebaseconfig:{

    apiKey: "AIzaSyCKSbk59u0Nr-ttV1_MKdQIQbA95IERoNM",
    authDomain: "git-search-477ce.firebaseapp.com",
    databaseURL: "https://git-search-477ce.firebaseio.com",
    projectId: "git-search-477ce",
    storageBucket: "git-search-477ce.appspot.com",
    messagingSenderId: "591997703661"
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
