import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy{
  mockCover: TrackModel = {
    cover: 'https://i0.wp.com/edmjoy.com/wp-content/uploads/3052fa49-7a5a-1f3e-57b6-cf778c50300a.jpg?w=1200&ssl=1',
    album: 'Bebe(Official)',
    name: 'Gioli & Assia',
    url: 'localhost.com/cancion.mp3',
    _id: 1
  }



  constructor(private multimediaService:MultimediaService){}
  listObservers: Array<Subscription> = [];
  ngOnInit(): void {
    const observer1$:Subscription = this.multimediaService.callback.subscribe(
      (Response: TrackModel) => {
        console.log('recibiendo...', Response)
      }
    )
    this.listObservers = [observer1$]
  }
  ngOnDestroy(): void {
    this.listObservers.forEach( u => u.unsubscribe())
  }
}
