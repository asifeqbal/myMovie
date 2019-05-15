import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service';
import { Router } from '@angular/router';
import {LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list.movies',
  templateUrl: './list.movies.component.html',
  styleUrls: ['./list.movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  movie_date = '';
  movies = this.movieService.getMovies();

  constructor(private movieService: MovieService, private router:Router,private loadingController:LoadingController) { }

  ngOnInit() {

    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;});
    this.presentLoading();
  }
  slideChanged(slides){
    slides.startAutoplay();
  }
  offerpage(){
    this.router.navigate(['/offer']);

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  goBack(){
    this.router.navigate(['/login']);
  }
  logOut(){
    this.router.navigate(['/login']);
  }
  

  booking(movie){
    this.router.navigate(['moviebook/'+movie]);
  }
}
