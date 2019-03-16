import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { EmailComposer } from '@ionic-native/email-composer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public emailComposer: EmailComposer) {
  }

  click(){
    let email={
      to: 'saimon@devdactic.com',
      subject:'I love this one: ' ,
      body: 'Can you rememeber the opening?<br><br>\"'+'\"',
      isHtml:true
    };
    this.emailComposer.open(email);
    //console.log(title);
    //console.log(opening_crawl);
  }
  }

