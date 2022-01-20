/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { NbAuthJWTToken, NbAuthModule, NbAuthOAuth2JWTToken, NbOAuth2AuthStrategy, NbOAuth2ResponseType } from '@nebular/auth';

export class AuthAzureToken extends NbAuthOAuth2JWTToken {

  // let's rename it to exclude name clashes
  static NAME = 'nb:auth:azure:token';

  getValue(): string {
    return this.token.id_token;
  }
}



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: 'IdServer',
          clientId: 'Nebularjs',
          clientSecret: '',
          authorize: {
            endpoint: 'http://host.docker.internal:5105/connect/authorize',
            responseType:  (NbOAuth2ResponseType as any)['TOKEN'] = 'id_token token' ,
            scope: 'openid profile orders basket webshoppingagg orders.signalrhub',
            redirectUri: location.origin + '/auth/callback',
            params: {'nonce': getNounce() },
          },
          token: {
            class: AuthAzureToken,

          },

          redirect: {
            success: location.origin + '/',
          },
        }),
      ],
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

function getNounce(): string {
  return 'N' + Math.random() + '' + Date.now();
}


