import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';  
import { OfficeCenters } from './app/office-centers/office-centers';
import { Footer } from './app/footer/footer';
import { OnlineCourses } from './app/online-courses/online-courses';
import { CorporateTraining } from './app/corporate-training/corporate-training';
import { Home } from './app/home/home';
import { Hire } from './app/hire/hire';
import { Placement } from './app/placement/placement';
import { Contact } from './app/contact/contact';
import { TermCondition } from './app/term-condition/term-condition';
import { About } from './app/about/about';
import { Careers } from './app/careers/careers';
import { Update } from './app/update/update';
import { API } from './app/online-courses/api/api';
import { Python } from './app/online-courses/python/python';
import { Selenium } from './app/online-courses/selenium/selenium';
import { Database } from './app/online-courses/database/database';
import { AWS } from './app/online-courses/aws/aws';
import { MobileTesting } from './app/online-courses/mobile-testing/mobile-testing';
import { DevOps } from './app/online-courses/dev-ops/dev-ops';
import { ManualTesting } from './app/online-courses/manual-testing/manual-testing';
import { JMeter } from './app/online-courses/jmeter/jmeter';
import { SecurityTesting } from './app/online-courses/security-testing/security-testing';
import { AITesting } from './app/online-courses/aitesting/aitesting'; 
import { APITesting } from './app/online-courses/apitesting/apitesting';
import { JUnit } from './app/online-courses/junit/junit';
import { Jenkins } from './app/online-courses/jenkins/jenkins';
import { Automation } from './app/online-courses/automation/automation'; 
import { provideHttpClient } from '@angular/common/http'; 
import { Admin } from './app/admin/admin';
import { AdminLogin } from './app/admin-login/admin-login';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';  
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { firebaseConfig } from './app/firebase.config'; 
import { firebaseConfig } from './app/firebase-config';
// import { routes } from './app/app.routes';


bootstrapApplication(App,
  
  {providers: [
     provideHttpClient(),
     provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), 
    provideRouter([
      
      // { path: '', component: App },
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      {path:'Home', component: Home },
      {path:'office-center', component:OfficeCenters }, 

      {path:'footer',component:Footer},
      {path:'online-courses',component:OnlineCourses},
      {path:'corporate-training',component:CorporateTraining},
      {path:'Hire', component:Hire},
      {path:'Placement', component:Placement},
      {path:'Contact', component:Contact},
      {path:'TermCondition', component:TermCondition},
      {path:'About', component:About}, 
      {path:'Careers',component:Careers },
      {path:'Update', component:Update},
      {path:'API', component:API},
      {path:'Python', component:Python},
      {path:'Selenium', component:Selenium},
      {path:'Database', component:Database},
      {path:'AWS', component:AWS},
      {path:'MobileTesting', component:MobileTesting},
      {path:'DevOps', component:DevOps},
      {path:'ManualTesting', component:ManualTesting},
      {path:'JMeter', component:JMeter},
      {path:'SecurityTesting', component:SecurityTesting},
      {path:'AITesting', component:AITesting},
      {path:'APITesting', component:APITesting},
      {path:'JUnit', component:JUnit},
      {path:'Jenkins', component:Jenkins},
      {path:'Automation', component:Automation},
      { path: 'Admin', component: Admin },
      {path:'AdminLogin', component:AdminLogin },
    ])
  ]
});