import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public audio: HTMLAudioElement = new Audio()
  private strAudioUrl: string = ''
  constructor() { 
    
    this.trackInfo$.subscribe(
      (res) => {
        if (res) {
          this.strAudioUrl = res.url
          this.setAudio(this.strAudioUrl)
        }
      }
    )
  }

  public setAudio(trackURL:string): void{
    this.audio.src = trackURL.replace('//','http://localhost:3001/')
    this.audio.play()
  }

  private listenAllEvents(): void {

  }


}
