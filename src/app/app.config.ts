import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { loaderInterceptor } from './shared/interceptors/loader.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [   provideHttpClient(  withFetch() ,withInterceptors([loaderInterceptor]) ) , provideAnimations(),  provideRouter(routes ),provideClientHydration() , importProvidersFrom(HttpClientModule , RouterModule , BrowserAnimationsModule ,NgxSpinnerModule

), provideAnimationsAsync()]
};


