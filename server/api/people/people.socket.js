/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var People = require('./people.model');

exports.register = function(socket) {
  People.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  People.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('people:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('people:remove', doc);
}