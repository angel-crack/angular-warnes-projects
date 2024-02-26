import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  
  listObservers$: Array<Subscription> = []

  ngOnInit(): void {
    const observer1$:Subscription = this.trackService.getAllTracks$().subscribe(
      (response: TrackModel[]) => {
        console.log(response)
        this.tracksTrending = response
      }
    )

    const observer2$:Subscription = this.trackService.getAllRandom$().subscribe(
      (response: TrackModel[]) => {
        this.tracksRandom = response
      }
    )

    this.listObservers$ = [observer1$,observer2$]
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach( u => u.unsubscribe())
  }
  constructor(private trackService:TrackService) {}

}
