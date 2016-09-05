import can from 'can';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';
import 'can/map/define/define';
import io from 'steal-socket.io';
import firebase from 'firebase';
import canFirebase from 'can-firebase';
//import spawn from 'spawn-it';
const config = {
	apiKey: "AIzaSyDBtIRM19kMmbeMh1aS9jZw9GLSdS5LWis",
	authDomain: "vnfreecams.firebaseapp.com",
	databaseURL: "https://vnfreecams.firebaseio.com",
	storageBucket: "vnfreecams.appspot.com",
};

firebase.initializeApp(config);

const dbRef = firebase.database().ref().child('messages');

export const Message = canFirebase.Model.extend({
	ref: dbRef
},{});

//dbRef.remove();
//
//Promise.all([
//	new Message({
//		name: 'nxcong',
//		body: 'Resolves to an instance of Todo',
//		created_at: firebase.database.ServerValue.TIMESTAMP
//	}).save(),
//	new Message({
//		name: 'nxcong',
//		body: 'Persisted properties match instance properties',
//		created_at: firebase.database.ServerValue.TIMESTAMP
//	}).save()
//]).then((messages) => {
//	console.log(messages);
//})

Message.bind('created', (ev, message) => {
	console.log(message);
})

//Message.List = can.List.extend({
//  Map: Message
//}, {});

//export const messageConnection = superMap({
//  url: 'http://chat.donejs.com/api/messages',
//  idProp: 'id',
//  Map: Message,
//  List: Message.List,
//  name: 'message'
//});
//
//tag('message-model', messageConnection);
//
//const socket = io('http://chat.donejs.com');
//
//socket.on('messages created',
//  message => messageConnection.createInstance(message));
//socket.on('messages updated',
//  message => messageConnection.updateInstance(message));
//socket.on('messages removed',
//  message => messageConnection.destroyInstance(message));


export default Message;
