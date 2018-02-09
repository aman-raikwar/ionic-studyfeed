import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'page-notes',
    templateUrl: 'notes.html',
})
export class NotesPage {

    notes: Observable<any[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public afDB: AngularFireDatabase) {
        this.notes = this.afDB.list('notes').valueChanges();
        console.clear();
    }

    addNote() {
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
                        const itemsRef = this.afDB.list('notes');
                        itemsRef.push({ name: data.title });
                    }
                }
            ]
        });

        prompt.present();
    }

    editNote(note) {

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
                        const itemsRef = this.afDB.list('notes');
                        itemsRef.set(index, { name: data.title });
                    }
                }
            ]
        });

        prompt.present();

    }

    deleteNote(key) {
        let confirm = this.alertCtrl.create({
            title: 'Note',
            message: 'Confirm to delete this Note',
            buttons: [
                { text: 'No', handler: () => { } },
                {
                    text: 'Yes',
                    handler: () => {
                        const itemsRef = this.afDB.list('notes');
                        itemsRef.remove(key);
                    }
                }
            ]
        });
        confirm.present();
    }
    
    deleteAllNotes() {
        let confirm = this.alertCtrl.create({
            title: 'Note',
            message: 'Confirm to delete All Notes',
            buttons: [
                { text: 'No', handler: () => { } },
                {
                    text: 'Yes',
                    handler: () => {
                        const itemsRef = this.afDB.list('notes');
                        itemsRef.remove();
                    }
                }
            ]
        });
        confirm.present();
    }

}
