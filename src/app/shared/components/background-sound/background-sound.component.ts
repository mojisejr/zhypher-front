import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { faVolumeMute, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-background-sound',
  templateUrl: './background-sound.component.html',
  styleUrls: ['./background-sound.component.css'],
})
export class BackgroundSoundComponent implements AfterViewInit {
  faVolume = faVolumeHigh;
  faMute = faVolumeMute;
  @ViewChild('bgSound', { static: false })
  audioEl: ElementRef<HTMLAudioElement>;
  @Input('playToggle') toggle: boolean;
  constructor() {
    this.toggle = true;
    this.audioEl = {} as ElementRef;
  }

  async ngAfterViewInit(): Promise<void> {
    this.audioEl.nativeElement.controls = true;
    this.audioEl.nativeElement.loop = true;
    await this.onToggle();
  }

  async setToggle() {
    this.toggle = !this.toggle;
    await this.onToggle();
  }

  async onToggle() {
    if (this.toggle === true) {
      await this.audioEl.nativeElement.play();
    } else {
      this.audioEl.nativeElement.pause();
    }
  }
}
