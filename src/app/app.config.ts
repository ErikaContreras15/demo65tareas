import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
     provideFirebaseApp(() => initializeApp({"projectId":
      "practicademoclases-8b731",
      "appId":"1:157752757912:web:38fdfdc1e5898387ce0aed",
      "storageBucket":"practicademoclases-8b731.firebasestorage.app",
      "apiKey":"AIzaSyC27wbmzHJgJH6Br6JLNOtLEeRZvHH_59Q",
      "authDomain":"practicademoclases-8b731.firebaseapp.com",
      "messagingSenderId":"157752757912"})), provideFirestore(() => getFirestore())]
};
