import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RestApiService } from '../restapi.service';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-callapi',
  standalone: false,
  templateUrl: './callapi.component.html',
  styleUrl: './callapi.component.css'
  // providers: [RestApiService]
})
export class CallapiComponent implements OnInit, OnDestroy {
  data: any;
    ds = inject(DataService);
    counter: number = 0;
    s? :Subscription;

  constructor(private api: RestApiService) {
    api.getData().subscribe(d => this.data = d)
  }

  ngOnDestroy(): void {
    if(this.s) {
      this.s?.unsubscribe();
    }
  }
  
  ngOnInit(): void {
    this.s = this.ds.counterChange.subscribe((value) => {
      console.log(value)
      this.counter = value;
    })
  }
}
