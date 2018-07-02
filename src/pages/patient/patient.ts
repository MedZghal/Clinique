import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BackendProvider} from '../../providers/backend/backend';
/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {

  Patients : any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service :BackendProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientPage');
    this.service.get('ListPatients').subscribe(
      data =>{
        this.Patients = data;
      },
      error =>{

      }
    )
  }

}
