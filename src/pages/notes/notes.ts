import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-notes',
    templateUrl: 'notes.html',
})
export class NotesPage {
    notesRef: AngularFireList<any>;
    notes: Observable<any[]>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, afDB: AngularFireDatabase) {
        this.notesRef = afDB.list('notes');
        // Use snapshotChanges().map() to store the key
        this.notes = this.notesRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
    }

    addNote() {
        let prompt = this.alertCtrl.create({
            title: 'Add Note',
            inputs: [{ name: 'title', placeholder: 'Title' }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.notesRef.push({ name: data.title });
                    }
                }
            ]
        });

        prompt.present();
    }

    editNote(note) {
        let prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{ name: 'title', placeholder: 'Title', value: note.name }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.notesRef.update(note.key, { name: data.title });
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
                { 
                    text: 'No'
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.notesRef.remove(key);
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
                { 
                    text: 'No'
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.notesRef.remove();
                    }
                }
            ]
        });
        confirm.present();
    }

}
