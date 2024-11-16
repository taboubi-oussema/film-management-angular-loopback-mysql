import { Component } from '@angular/core';
import { ServisService } from '../servis.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  constructor(public donne: ServisService) {}

  deletForm(id: any) {
    this.donne.Delet(id);
    window.alert('Film Delet successfully!');
    window.location.reload();
  }
}
