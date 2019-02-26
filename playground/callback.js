var getUser = function(name, callback) {
    var user = {
        name:  name,
        id : 1,
        age : 26
    };

    setTimeout(() => {
        callback(user);
    }, 2000);
};

getUser("yoyo", function(user) {
    console.log("Printing user", user);
});