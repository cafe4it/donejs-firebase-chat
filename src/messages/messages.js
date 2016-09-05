import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './messages.less!';
import template from './messages.stache!';
import Message from '../models/message';
import firebase from 'firebase';
export const ViewModel = Map.extend({
	define: {
		messages: {
			get: () => {
				return Message.findAll({ orderByKey: [] })
			}
		}
	},
	send(e) {
		e.preventDefault();
		new Message({
			name: this.attr('name'),
			body: this.attr('body'),
			created_at: firebase.database.ServerValue.TIMESTAMP
		}).save().then(msg => this.attr('body', ''));
	}
});

export default Component.extend({
	tag: 'chat-messages',
	viewModel: ViewModel,
	template
});