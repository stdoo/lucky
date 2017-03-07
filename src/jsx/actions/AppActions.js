import alt from '../alt';
var io = require('socket.io-client');

class AppActions {
  constructor() {
    this.generateActions(
      'getChainSuccess',
      'getChainFail'
    );
  }

  getChain() {
    var that = this;
    this.socket = io();
    this.socket.emit('chain');
    this.socket.on('chainResult', function (body) {
      that.actions.getChainSuccess(body);
    });
  }
}

export default alt.createActions(AppActions);
