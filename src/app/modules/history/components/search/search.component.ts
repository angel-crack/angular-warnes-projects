import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  src:string = ''

  @Output() callbackData: EventEmitter<any> = new EventEmitter()

  callSearch(term: string):void {
    if(term.length >= 3){
      console.log('desde el hijo 🆗🆗🆗🆗', term)
      this.callbackData.emit(term)
    }
  }

}
