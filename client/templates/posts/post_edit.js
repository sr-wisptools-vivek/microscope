Template.postEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentPostId = this._id;

        var postProperties = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val()
        }
        
        Meteor.call('postUpdate', currentPostId, postProperties, function(error, result) {
            if (error)
                return alert(error.reason);
            
            if (result.postExists)
                alert('This link has already been posted');
            
            if (result.postDenyEdit)
                alert('You can only edit posts that you own');
            
            Router.go('postPage', {_id: result._id});
        });
        
    },
    'click .delete': function (e) {
        e.preventDefault();

        if (confirm("Delete this post?")) {
            var currentPostId = this._id;
            Posts.remove(currentPostId);
            Router.go('postsList');
        }
    }
});