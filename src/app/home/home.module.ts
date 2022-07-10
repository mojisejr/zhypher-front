import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainTitleComponent } from './components/main-title/main-title.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ConnectionZoneComponent } from './components/connection-zone/connection-zone.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent, MainTitleComponent, MainContentComponent, ConnectionZoneComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeModule {}
