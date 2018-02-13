import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

    chatUsersRef: AngularFireList<any>;    
    chatUsers: Observable<any[]>;

	contacts;
    groupedContacts = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, afDB: AngularFireDatabase) {
        this.chatUsersRef = afDB.list('chat-users');
        this.chatUsers = this.chatUsersRef.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });        
                     
        // this.contacts = [
        //     'Kate Beckett',
        //     'Richard Castle',
        //     'Alexis Castle',
        //     'Lanie Parish',
        //     'Javier Esposito',
        //     'Kevin Ryan',
        //     'Martha Rodgers',
        //     'Roy Montgomery',
        //     'Jim Beckett',
        //     'Stana Katic',
        //     'Nathan Fillion',
        //     'Molly Quinn',
        //     'Tamala Jones',
        //     'Jon Huertas',
        //     'Seamus Dever',
        //     'Susan Sullivan'
        // ];
 
        // this.groupContacts(this.contacts);
  }

  onSelect(user) {
       this.navCtrl.push(ChatPage, { user: user });
  }

  groupContacts(contacts){
        let sortedContacts = contacts.sort();
        let currentLetter = false;
        let currentContacts = [];
 
        sortedContacts.forEach((value, index) => {
             if(value.charAt(0) != currentLetter){
                 currentLetter = value.charAt(0);
                 let newGroup = {
                    letter: currentLetter,
                    contacts: []
                };
                currentContacts = newGroup.contacts;
                this.groupedContacts.push(newGroup);
             }
             currentContacts.push(value);
         });          
    }

}
