import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServisService } from '../servis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(public donne: ServisService, private router: Router) {}

  ADD(f: NgForm): void {
    try {
      this.donne.NewData.title = f.value['title'];
      this.donne.NewData.genre = f.value['genre'];
      this.donne.NewData.release_date = f.value['releaseDate'];
      this.donne.NewData.director = f.value['director'];
      this.donne.NewData.rating = f.value['rating'];
      this.donne.NewData.description = f.value['description'];
      this.donne.Post();

      window.alert('Film added successfully!');

      this.router.navigateByUrl('/list').then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
