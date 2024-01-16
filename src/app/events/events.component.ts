import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:any  // Define the type of events
data:{search:string,Author:string}={search:"",Author:""}
  constructor(private _eventService: EventService) { }

  ngOnInit() {
    this._eventService.getEvents(this.data)
      .subscribe(
        res => this.events = res,
        err => console.error(err) // Use console.error for error logging
      );
  }
}
