import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  user: any;
	user_id: string = '1';
	message: string = '';

	chatMessagesList: Observable<any[]>;
	chatMessagesRef: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afDb: AngularFireDatabase) {
    this.user = navParams.get("user");
    console.log(this.user);

	  this.chatMessagesRef = afDb.list('chat-messages');
	  // Use snapshotChanges().map() to store the key
	  this.chatMessagesList = this.chatMessagesRef.snapshotChanges().map(changes => {
		  return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
	  });
	  console.clear();
	  console.log("Chat Messages =>> ", this.chatMessagesList);
  }  

  sendMessage() {
  	this.afDb.list('/chat-messages').push({
  		user_id: this.user_id,
  		user_message: this.message
  	}).then(() => {
  		// Message Sent Successfully
		this.message = '';
  	//}).catch(error => {
  		// If error occurs or Firebase is unreachable
  	});
  }

}
