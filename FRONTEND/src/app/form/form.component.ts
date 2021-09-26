import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname: string = "firstname";
  lastname: string = "lastname";
  username: string = "username";
  civility: string = "civility";
  email: string = "email";
  phone: string = "phone";
  address: string = "address";
  city: string = "city";
  state: string = "state";
  zip: string = "zip";
  psw: string="pswc";
  pswconf: string="pswconf";

  recapdisable: boolean = true;
  conditionfirstname: boolean = false;
  conditionlastname: boolean = false;
  conditionusername: boolean = false;
  conditionemail: boolean = false;
  conditionphone: boolean = false;
  conditionaddress: boolean = false;
  conditioncity: boolean = false;
  conditionzip: boolean = false;
  conditionpswconf: boolean = false;
  conditionnull: boolean = false;
  
  onSubmit(form: NgForm) {

    // affichage sur racap uniquement lors du clic sur le bouton 'valider'
    this.recapdisable = false;

    // declaration des vriables initiées dans le .html
    this.firstname = form.value.firstname;
    this.lastname = form.value.lastname;
    this.username = form.value.username;
    this.civility = form.value.civility;
    this.email = form.value.email;
    this.phone = form.value.phone;
    this.address = form.value.address;
    this.city = form.value.city;
    this.state = form.value.state;
    this.zip = form.value.zip;
    this.psw= form.value.psw;
    this.pswconf = form.value.pswconf;

    // verification sur tous les champs du formulaire
    if (form.value.firstname.match(/\d+/g) != null) {

      this.conditionfirstname = true;
    } else {

      this.conditionfirstname = false;
    }
    
    if (form.value.lastname.match(/\d+/g) != null) {

      this.conditionlastname = true;
    } else {

      this.conditionlastname = false;
    }

    if (form.value.username.match(/\d+/g) === null) {

      this.conditionusername = true;
    } else {

      this.conditionusername = false;
    }

    if (!form.value.email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {

      this.conditionemail = true;
    } else {

      this.conditionemail = false;
    }

    if (isNaN(form.value.phone)) {

      this.conditionphone = true;
    } else {

      this.conditionphone = false;
    }

    if (form.value.address.match(/\d+/g) != null) {

      this.conditionaddress = false;
    } else {

      this.conditionaddress = true;
    }

    if (form.value.city.match(/\d+/g) != null) {

      this.conditioncity = true;
    } else {

      this.conditioncity = false;
    }

    if (isNaN(form.value.zip)) {

      this.conditionzip = true;
    } else {

      this.conditionzip = false;
    }

    if (this.psw === this.pswconf) {

      this.conditionpswconf = false;
    } else {

      this.conditionpswconf = true;
    }

    // test sur les champs nulls
    if ((form.value.firstname === "") ||
        (form.value.lastname === "") ||
        (form.value.username === "") ||
        (form.value.civility === "") ||
        (form.value.email === "") ||
        (form.value.phone === "") ||
        (form.value.address === "") ||
        (form.value.state === "") ||
        (form.value.zip === "") ||
        (form.value.city === "") ||
        (form.value.psw === "") ||
        (form.value.pswconf === "")) {

      this.conditionnull = true;
    } else {

      this.conditionnull = false;
    }

  }
}
