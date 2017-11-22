import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AgricultureComponent } from './activities/agriculture/agriculture.component';
import { CulturalComponent } from './activities/cultural/cultural.component';
import { EmploymentComponent } from './activities/employment/employment.component';
import { EducationComponent } from './activities/education/education.component';
import { EmergencyComponent } from './activities/emergency/emergency.component';
import { EnvironmentComponent } from './activities/environment/environment.component';
import { LegalComponent } from './activities/legal/legal.component';
import { MedicalComponent } from './activities/medical/medical.component';
import { MsmeComponent } from './activities/msme/msme.component';
import { NewsMediaComponent } from './activities/news-media/news-media.component';
import { SocialMediaComponent } from './activities/social-media/social-media.component';
import { TrainingComponent } from './activities/training/training.component';
import { TransportationComponent } from './activities/transportation/transportation.component';
import { TourismComponent } from './activities/tourism/tourism.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HistoryComponent,
    ActivitiesComponent,
    ContactusComponent,
    GalleryComponent,
    AgricultureComponent,
    CulturalComponent,
    EmploymentComponent,
    EducationComponent,
    EmergencyComponent,
    EnvironmentComponent,
    LegalComponent,
    MedicalComponent,
    MsmeComponent,
    NewsMediaComponent,
    SocialMediaComponent,
    TrainingComponent,
    TransportationComponent,
    TourismComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'about',component:AboutComponent},
      {path:'history',component:HistoryComponent},
      {path:'gallery',component:GalleryComponent},
      {path:'activities',component:ActivitiesComponent,
    children:[
      {path:'agriculture',component:AgricultureComponent},
      {path:'cultural',component:CulturalComponent},
      {path:'education',component:EducationComponent},
      {path:'emergency',component:EmergencyComponent},
      {path:'employment',component:EmploymentComponent},
      {path:'legal',component:LegalComponent},
      {path:'medical',component:MedicalComponent},
      {path:'msme',component:MsmeComponent},
      {path:'news-media',component:NewsMediaComponent},
      {path:'social-media',component:SocialMediaComponent},
      {path:'tourism',component:TourismComponent},
      {path:'transportation',component:TransportationComponent},
      {path:'training',component:TrainingComponent},
      {path:'environment',component:EnvironmentComponent}

    ]
    },
      {path:'contactus',component:ContactusComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
