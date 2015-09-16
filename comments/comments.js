/*Author: Navya Eetaram
Created: [08/17/2015]
Associated Files: comments.html, comments.js, comments.less, commentserver.js*/

//Collection Creation
CommentsData = new Mongo.Collection('cdata');
ReplyData = new Mongo.Collection('rdata');

if(Meteor.isClient){

  Meteor.subscribe('cdata');
  Meteor.subscribe('rdata');

  //Helper class
  Template.comments.helpers({

    cdata: function () {
      return CommentsData .find().fetch().reverse();
    },
    cmntcount:function(){
      var cmntcount = CommentsData .find().fetch().length;
      return cmntcount;

    },
    rdata: function () {
      var id = String(this.cmntid);
      var rdata = ReplyData.find({rpyid: id});
      return rdata;
    },
    time:function(){
      var time = moment().fromNow();
      return time;
    },

    replycount: function () {
      var id = String(this.cmntid);
      var replycount = ReplyData.find({rpyid: id}).fetch().length;
      return replycount;
    }
  });
  //Event Handlers
  Template.comments.events({

    'click .c-m_u_i_share_button': function(e) {
      e.preventDefault();
      var id = CommentsData .find().fetch().length;
      CommentsData .insert({
        text: $('.c-m_u_i_text').val(),
        cmntid: id
      });
      $('.c-m_u_i_text').val("");
    },

    'click .r-bx_row_r-button': function(e) {
      e.preventDefault();
      ReplyData.insert({
        usrrply: $('.r-bx_' + String(this.cmntid)).val(),
        rpyid: String(this.cmntid)
      });
      $('.r-bx_' + String(this.cmntid)).val("");
    },

    'click #sortoption': function(e) {
      $('.dropdown-menu').slideToggle();
    },

    'click #tcomments': function(e) {
      $('.c-m_result-sort').html("Top Comments");
      $('.dropdown-menu').hide();
    },

    'click #mostrecent': function(e) {
      $('.c-m_result-sort').html("Most Recent");
      $('.dropdown-menu').hide();
    },
    /*'focus .c_gplus': function(e) {
      $('.c_gplus').css("background-color","#dd4b39");

    },
    'focus .c_fbook': function(e) {
      $('.c_fbook').css("background-color","#3b5998");

    },
    'focus .c_twitter': function(e) {
      $('.c_twitter').css("background-color","#00aced");

    },*/

  });
};
