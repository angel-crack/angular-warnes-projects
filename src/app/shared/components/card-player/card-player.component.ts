import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{
@Input() mode: 'small' | 'big' = 'small'
@Input() track: TrackModel = {
    name:'',
    album: '',
    cover: '',
    url: '',
    _id: ''
}

constructor(private multimediaService:MultimediaService) {}

ngOnInit(): void {
  
}

sendPlay(track: TrackModel) {
  this.multimediaService.callback.emit(track)
}

}
