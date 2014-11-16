'use strict';

var _ = require('lodash');
var People = require('./people.model');

// Get list of peoples
exports.index = function(req, res) {
  People.find(function (err, peoples) {
    if(err) { return handleError(res, err); }
    return res.json(200, peoples);
  });
};

// Get a single people
exports.show = function(req, res) {
  People.findById(req.params.id, function (err, people) {
    if(err) { return handleError(res, err); }
    if(!people) { return res.send(404); }
    return res.json(people);
  });
};

// Creates a new people in the DB.
exports.create = function(req, res) {
  People.create(req.body, function(err, people) {
    if(err) { return handleError(res, err); }
    return res.json(201, people);
  });
};

// Updates an existing people in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  People.findById(req.params.id, function (err, people) {
    if (err) { return handleError(res, err); }
    if(!people) { return res.send(404); }
    var updated = _.merge(people, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, people);
    });
  });
};

// Deletes a people from the DB.
exports.destroy = function(req, res) {
  People.findById(req.params.id, function (err, people) {
    if(err) { return handleError(res, err); }
    if(!people) { return res.send(404); }
    people.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}