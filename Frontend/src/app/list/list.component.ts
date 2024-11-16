import { Component } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(public donne:ServisService){}
}
