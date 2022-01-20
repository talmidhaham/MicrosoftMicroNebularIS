   
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

 import { CommonModule } from '@angular/common';
 import { NgModule } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { HttpClientModule } from '@angular/common/http';
 
 import {
   NbCardModule,
   NbLayoutModule,
 } from '@nebular/theme';
 
 import {
   NbAuthModule,
   NbOAuth2AuthStrategy,
   NbOAuth2ResponseType,
 } from '@nebular/auth';
 
 import { OAuth2LoginComponent } from './oauth2-login.component';
 import { OAuth2CallbackComponent } from './oauth2-callback.component';
 //import { OAuth2CallbackComponent } from './oauth2-callback.component';
 import {OauthComponent} from './oauth2-component'
 import { Oauth2RoutingModule } from './oauth2-routing.module';
 
import { ThemeModule } from '../@theme/theme.module';
 
 
 @NgModule({
   imports: [
     CommonModule,
     FormsModule,
     ThemeModule,
     HttpClientModule,

 
     NbCardModule,
     NbLayoutModule,
     Oauth2RoutingModule,
   ],
   declarations: [
     OAuth2LoginComponent,
     OAuth2CallbackComponent,
     OauthComponent

   ],
 })
 export class OAuth2PlaygroundModule {
 }