// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientId: '82bfcad9-8934-4936-8120-2ef15f9f1df8',
    //redirectUri: 'https://consolidador-dev.terpel.com',
    redirectUri: 'http://localhost:4200',
    tenant:
      'https://login.microsoftonline.com/ff75ff80-d07f-4679-b756-869408b1cad3',
    graph: 'https://graph.microsoft.com/v1/me',
    graphDataUser: 'https://graph.microsoft.com/v1.0/me',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
