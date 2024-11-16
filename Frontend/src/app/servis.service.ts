import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServisService {
  data: any;
  old_data: any;
  NewData = {
    title: '',
    release_date: '',
    genre: '',
    director: '',
    rating: '',
    description: '',
  };

  constructor(public http: HttpClient) {
    this.http.get('http://localhost:3000/films').subscribe((e) => {
      console.log(e);
      this.data = e;
    });
  }

  Post() {
    this.http.post('http://localhost:3000/films', this.NewData).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error in POST request:', error);
      }
    );
  }

  Edit(id: any) {
    this.http.get(`http://localhost:3000/films/${id}`).subscribe((e) => {
      console.log(e), (this.old_data = e);
    });
    this.http.put(`http://localhost:3000/films/${id}`,this.NewData).subscribe((e) => {
      console.log(e);
    })
  }
  Delet(id: any){
    this.http.delete(`http://localhost:3000/films/${id}`).subscribe(e=>console.log(e))
  }
}
