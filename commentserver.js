

/*Author: Navya Eetaram
Created: [08/17/2015]
<Associated Files: comments.html, comments.js, comments.less, commentserver.js,comments_page.less,comments_page_logic.js,comments_page.html
 */

CommentsData  = new Mongo.Collection('cdata');
ReplyData = new Mongo.Collection('rdata');
cpageData = new Mongo.Collection('cpdata');
rpageData = new Mongo.Collection('rpdata');

CommentsData .allow({
  insert: function(userId, doc) {
    return true;
  }
});

CommentsData .allow({
  remove: function(userId, doc) {
    return true;
  }
});

ReplyData.allow({
  insert: function(userId, doc) {
    return true;
  }
});
ReplyData.allow({
  remove: function(userId, doc) {
    return true;
  }
});
cpageData .allow({
  insert: function(userId, doc) {
    return true;
  }
});

cpageData .allow({
  remove: function(userId, doc) {
    return true;
  }
});

rpageData.allow({
  insert: function(userId, doc) {
    return true;
  }
});
rpageData.allow({
  remove: function(userId, doc) {
    return true;
  }
});


if (Meteor.isServer) {
  Meteor.publish('cdata', function() {
    return CommentsData .find();
  });
  Meteor.publish('rdata', function() {
    return ReplyData.find();
  });

  Meteor.publish('cpdata', function() {
    return cpageData .find();
  });
  Meteor.publish('rpdata', function() {
    return rpageData.find();
  });

}
