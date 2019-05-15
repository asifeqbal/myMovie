import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import RegisterService from '../register.service';
import { Alert } from 'selenium-webdriver';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  
  constructor(public alertController: AlertController, private router: Router,private registerService:RegisterService,private storage: Storage) { }
 

  validate:any={};
  data:any={};

  onLogin(){
    this.registerService.authRemoteCustomer(this.validate).subscribe((customer) => { this.data= customer; 
      if( typeof(this.data.email)=='string') { this.router.navigate(['movielist']); 
      if(localStorage.getItem('user')==null) 
      {
          localStorage.setItem('user',JSON.stringify(customer));
         
      }
    
    
    } 
      else {
     this.presentAlert();
    } 
  });
   
  
  }

  ngOnInit() 
  {
      this.storage.set('user','asif');
      this.storage.get('name').then((res)=>{
        console.log('Dublicate shahruk khan :'+res);
      });
  }

    


  // onLogin(){
   
  //   if(this.username==this.password){
  //     this.router.navigate(['/movielist']);
  //   }

    
  //   else if(this.username!= this.password){
  //     this.presentAlert();
  //     //alert("Hi");
    
  //   }   
  // }

  forgotPass(){
    this.router.navigate(['/forgetpass']);
  }

  register(){

    this.router.navigate(['/register']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Sorry',
      subHeader: 'Incurrect User Name or password',
      message: 'Please try Again',
      buttons: ['OK']
    });

    await alert.present();
  }

  }



