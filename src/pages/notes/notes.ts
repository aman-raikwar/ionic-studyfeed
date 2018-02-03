import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  	this.notes = [
	  	{id:1, title:'Test 1'},
	  	{id:2, title:'Test 2'},
	  	{id:3, title:'Test 3'},
	  	{id:4, title:'Test 4'},
	  	{id:5, title:'Test 5'},
	  	{id:6, title:'Test 6'},
	  	{id:7, title:'Test 7'},
	  	{id:8, title:'Test 8'},
	  	{id:9, title:'Test 9'},
	  	{id:10, title:'Test 10'},
	  	{id:11, title:'Test 11'},
	  	{id:12, title:'Test 12'}        
    ];
  }  

  addNote(){
 
        let prompt = this.alertCtrl.create({
            title: 'Add Note',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.notes.push(data);
                    }
                }
            ]
        });
 
        prompt.present();
    }
 
    editNote(note){
 
        let prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.notes.indexOf(note);
 
                        if(index > -1){
                          this.notes[index] = data;
                        }
                    }
                }
            ]
        });
 
        prompt.present();      
 
    }
 
    deleteNote(note){
 
        let index = this.notes.indexOf(note);
 
        if(index > -1){
            this.notes.splice(index, 1);
        }
    }

}
