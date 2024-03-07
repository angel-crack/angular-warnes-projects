import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{


  constructor(public multimediaService:MultimediaService){}
  
  ngOnInit(): void {

  }

}
