import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import MovieService from '../movie.service';
import BookingService from '../booking.service';
import { from } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-makebooking',
  templateUrl: './makebooking.component.html',
  styleUrls: ['./makebooking.component.scss'],
})
export class MakebookingComponent implements OnInit {
  
  constructor(private movieservice:MovieService,private bookingservice:BookingService,private router:Router,private route: ActivatedRoute) { }
  
  id:number;
  private sub:any;
  movie:any={};
  books:any={};

  

  ngOnInit() {
  
   
    
    this.movie ={name:"",year:"",image_url:"",production_house:"",rating:"",type:"",language:"",date:""};
    // this.booking = {
    //   customer_id:1,      
    //   movie_id:'02',      
    //   movie_name:'Bahu Balli',
    //   movie_time:'10AM',
    //   movie_date:'2019-02-03',
    //   movie_screen:'screen1',
    //   movie_city:'Kolkata',
    //   no_of_ticket:'2',
    //   total_amount:'200',
    //   date:'2019-02-03'
    // };
    this.sub = this.route.params.subscribe(params =>{
      this.id = +params['id'];//converts string 'id' to a number
      this.movieservice.getRemoteMovieById(this.id).subscribe((movie)=>
      {
        this.movie = movie;
        console.log(movie);
        
      }
      );

    });

  }

  customerId= JSON.parse(localStorage.getItem('user'));

  addBooking(){
   var booking = {customer_id:this.customerId.id,movie_id:this.id,movie_name:this.movie.name,movie_time:this.books.movie_time,movie_date:this.books.movie_date,movie_screen:this.books.movie_screen,movie_city:this.books.movie_city,no_of_ticket:this.books.no_of_ticket,total_amount:this.books.total_amount,date:this.movie.date};
    this.bookingservice.addRemoteBooking(booking).subscribe(()=>{this.router.navigate(['/payment']);});
  }

  addBook(){
    this.router.navigate(['/payment']);
  }

  getPrice(selectObject){
    var value = selectObject.value;
    console.log(value);
  }

  goBack(){
    this.router.navigate(['/movielist']);
  }
  
 

  // book(){

  //   this.booking.customer_id = Math.round(Math.random()*100);
  //   this.booking.movie_id = this.movie.id;
  //   this.booking.movie_name = this.movie.name;

  //   this.booking.amount = this.booking.tickets * this.booking.ticket_price;

  //  this.bookingservice.addRemoteBooking(this.booking).subscribe(()=>{this.router.navigate(['/payment']);});
  
  // }

 


}
