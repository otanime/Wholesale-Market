import { Component, Input, OnInit } from '@angular/core';
import { Hangar } from 'src/app/mg/modules/Hangar';
import { HangarService } from '../services/hangar.service';

@Component({
  selector: 'app-hangar-details',
  templateUrl: './hangar-details.component.html',
  styleUrls: ['./hangar-details.component.css']
})
export class HangarDetailsComponent implements OnInit {

  @Input()  hangar: Hangar
  
  constructor(private hangarService : HangarService) {}

  ngOnInit() {
  }

}
