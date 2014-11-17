/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Idea = require('../api/idea/idea.model');

// Thing.find({}).remove(function() {
//   Thing.create({
//     name : 'Development Tools',
//     info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
//   }, {
//     name : 'Server and Client integration',
//     info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
//   }, {
//     name : 'Smart Build System',
//     info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
//   },  {
//     name : 'Modular Structure',
//     info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
//   },  {
//     name : 'Optimized Build',
//     info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
//   },{
//     name : 'Deployment Ready',
//     info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
//   });
// });




// User.find({}).remove(function() {
//   User.create({
//     provider: 'local',
//     name: 'Alberto',
//     role: 'admin',
//     email: 'alberto@test.com',
//     password: 'test',
//     image:"alberto.jpg",
//     archetype:"hacker"
//   }, {
//     provider: 'local',
//     name: 'Daniel',
//     email: 'daniel@test.com',
//     password: 'test',
//     image:"daniel.jpg",
//     archetype:"hustler"
//   }, {
//     provider: 'local',
//     name: 'Soan',
//     email: 'soan@test.com',
//     password: 'test',
//     image:"soan.jpg",
//     archetype:"hustler"
//   }, {
//     provider: 'local',
//     name: 'Danette',
//     email: 'danette@test.com',
//     password: 'test',
//     image:"danette.jpg",
//     archetype:"hustler"
//   }, {
//     provider: 'local',
//     name: 'Darcie',
//     email: 'darcie@test.com',
//     password: 'test',
//     image:"darcie.jpg",
//     archetype:"hipster"
//   }, {
//     provider: 'local',
//     name: 'Robert',
//     email: 'robert@test.com',
//     password: 'test',
//     image:"robert.jpg",
//     archetype:"hustler"
//   }, {
//     provider: 'local',
//     name: 'reid',
//     email: 'reid@test.com',
//     password: 'test',
//     image:"reid.jpg",
//     archetype:"hustler"
//   }, function() {
//       console.log('finished populating users');
//     }
//   );
// });

  // name: String,
  // info: String,
  // active: Boolean,
  // hacker: Boolean,
  // hipster: Boolean,
  // hustler: Boolean,
  // owner: String

// Idea.find({}).remove({});