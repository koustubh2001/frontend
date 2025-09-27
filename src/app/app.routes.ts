import { Routes } from '@angular/router';  
import { App } from './app';  
import { OfficeCenters } from './office-centers/office-centers'; 
import { OnlineCourses } from './online-courses/online-courses';
import { CorporateTraining } from './corporate-training/corporate-training';
import { Home } from './home/home';
import { Hire } from './hire/hire';
import { Placement } from './placement/placement';
import { Contact } from './contact/contact';
import { TermCondition } from './term-condition/term-condition';
import { About } from './about/about';
import { Careers } from './careers/careers';
import { Update } from './update/update';
import { API } from './online-courses/api/api';
import { Python } from './online-courses/python/python';
import { Selenium } from './online-courses/selenium/selenium';
import { Database } from './online-courses/database/database';
import { AWS } from './online-courses/aws/aws';
import { MobileTesting } from './online-courses/mobile-testing/mobile-testing';
import { DevOps } from './online-courses/dev-ops/dev-ops';
import { ManualTesting } from './online-courses/manual-testing/manual-testing';
import { JMeter } from './online-courses/jmeter/jmeter';
import { SecurityTesting } from './online-courses/security-testing/security-testing';
import { AITesting } from './online-courses/aitesting/aitesting';
import { APITesting } from './online-courses/apitesting/apitesting';
import { JUnit } from './online-courses/junit/junit';
import { Jenkins } from './online-courses/jenkins/jenkins';
import { Automation } from './online-courses/automation/automation';  
import { Admin } from './admin/admin'; 
import { AdminLogin } from './admin-login/admin-login';

export const routes: Routes = [   
  { path: '', redirectTo: "Home", pathMatch: "full" },
{ path: "Home", component: Home }, 
  { path:'office-center', component:OfficeCenters }, 
  {path:'online-courses',component:OnlineCourses},
  {path:'corporate-training',component:CorporateTraining},
  {path:'Hire', component:Hire},
  {path:'Placement', component:Placement},
  {path:'Contact', component:Contact},
  {path:'TermCondition', component:TermCondition},
  {path:'About', component:About},
  {path:'Careers', component:Careers},
  {path:'Update', component:Update },
  {path:'API', component:API},
  {path:'Python' , component:Python},
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
 { path: 'Admin', component: Admin } ,
 {path:'AdminLogin', component:AdminLogin },
 { path: "**", redirectTo: "Home" }
 
];
  