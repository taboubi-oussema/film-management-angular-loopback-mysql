import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  filmId: string | null = null;
  constructor(
    public donne: ServisService,
    private route: ActivatedRoute,
    public ret: Router
  ) {}
  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.get('id');

    this.donne.Edit(this.filmId);
  }
  EditForm(f: NgForm) {
    try {
      this.donne.NewData.title = f.value['title'];
      this.donne.NewData.genre = f.value['genre'];
      this.donne.NewData.release_date = f.value['releaseDate'];
      this.donne.NewData.director = f.value['director'];
      this.donne.NewData.rating = f.value['rating'];
      this.donne.NewData.description = f.value['description'];
      this.donne.Edit(this.filmId);

      window.alert('Film Edit successfully!');
      this.ret.navigateByUrl('/list').then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  }
}
