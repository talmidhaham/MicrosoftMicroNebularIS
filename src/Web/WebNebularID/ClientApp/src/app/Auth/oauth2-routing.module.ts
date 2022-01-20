   
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

 import { NgModule } from '@angular/core';
 import { RouterModule, Route} from '@angular/router';
 //import { OAuth2CallbackComponent } from './oauth2-callback.component';
 import { OAuth2LoginComponent } from './oauth2-login.component';
 import {OauthComponent} from './oauth2-component'
import { OAuth2CallbackComponent } from './oauth2-callback.component';

 const routes: Route[] = [
   {
     path: '',
     component: OauthComponent,

   children: [
    {
      path: 'auth',
      component: OAuth2LoginComponent,
    },
    {
      path:'callback',
      component: OAuth2CallbackComponent,
    },
    {
        path: '',
        redirectTo: 'auth',
    },
]

},
 ];
 
 @NgModule({
   imports: [ RouterModule.forChild(routes) ],
   exports: [ RouterModule ],
 })
 export class Oauth2RoutingModule {}