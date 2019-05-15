import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentdone',
  templateUrl: './paymentdone.component.html',
  styleUrls: ['./paymentdone.component.scss'],
})
export class PaymentdoneComponent implements OnInit {

  constructor(public alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  paymentSucess(){

    this.router.navigate(['/movielist']);
  }

  goBack(){
    this.router.navigate(['/movielist']);
  }

}
