import { Component } from '@angular/core';
import { TrackModel } from '@core/models/track.models';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {
  constructor(private searchService:SearchService) {}

  listResults$: Observable<any> = of([])

  receiveData(data:string):void {
    console.log('desde el padre 🔴🔴🔴', data)
    this.listResults$ = this.searchService.searchTracks$(data)
  }



}
