Accounts.onCreateUser(function(options, user) {
    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
        user.profile = options.profile;
        user.createdAt = new Date();

        if(user.services.facebook){
          // Copy data from Facebook to user object
          user.profile.firstName = user.services.facebook.first_name;
          user.profile.firstName = user.services.facebook.last_name;
          user.profile.email = user.services.facebook.email;
          user.profile.link = user.services.facebook.link;
        }

    }

    return user;
});
