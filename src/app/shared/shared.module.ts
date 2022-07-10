import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BackgroundSoundComponent } from './components/background-sound/background-sound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, BackgroundSoundComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [HeaderComponent, BackgroundSoundComponent],
})
export class SharedModule {}
