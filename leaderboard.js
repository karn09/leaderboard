PlayersList = new Mongo.Collection('players');
console.log("PlayersList collection created.")


if (Meteor.isClient) {
    console.log("initiating leaderboard Template. ")
    Template.leaderboard.helpers({
        'player': function() {
            return PlayersList.find()
        },
        'selectedClass': function() {
            var playerId = this._id;
            var selectedPlayer = Session.get('selectedPlayer');
            if (playerId == selectedPlayer) {
                return "selected"
            }
        }

    });

    Template.leaderboard.events({
        'click .player': function() {
            var playerId = this._id;
            Session.set('selectedPlayer', playerId);
        }
    });



}