import { HomeComponent } from './src/components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ResumeComponent } from './src/components/resume/resume.component';
import { EconomyComponent } from './src/components/economy/economy.component';
import { TechComponent } from './src/components/tech/tech.component';
import { PoliticsComponent } from './src/components/politics/politics.component';
import { PhilosophyComponent } from './src/components/philosophy/philosophy.component';
const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'economy', component: EconomyComponent},
    { path: 'tech', component: TechComponent},
    { path: 'politics', component: PoliticsComponent},
    { path: 'philosophy', component: PhilosophyComponent},
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
