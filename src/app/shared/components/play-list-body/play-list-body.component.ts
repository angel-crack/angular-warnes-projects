import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = []


  constructor() {}

  ngOnInit(): void {
    
  }

}
