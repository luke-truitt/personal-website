import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './src/components/home/home.component';
import { MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { ResumeComponent } from './src/components/resume/resume.component';
import { EconomyComponent } from './src/components/economy/economy.component';
import { TechComponent } from './src/components/tech/tech.component';
import { PoliticsComponent } from './src/components/politics/politics.component';
import { PhilosophyComponent } from './src/components/philosophy/philosophy.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    EconomyComponent,
    TechComponent,
    PoliticsComponent,
    PhilosophyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatMenuModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
