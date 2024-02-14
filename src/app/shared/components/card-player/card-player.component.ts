import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/track.models';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent {
@Input() mode: 'small' | 'big' = 'small'
@Input() track: TrackModel = {
    name:'',
    album: '',
    cover: '',
    url: '',
    _id: ''
}



}
