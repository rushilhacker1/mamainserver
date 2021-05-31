var users = {
    user1: {
        id: 1,
        firstname: "Munonye",
        lastname: "Kindson",
        email: "kany@gmail.com"
    },

    user2: {
        id: 2,
        firstname: "Imolode",
        lastname: "Saffron",
        email: "saffron@gmail.com"
    },

    user3: {
        id: 3,
        firstname: "Munonye",
        lastname: "Othniel",
        email: "othniel@gmail.com"
    },

    user4: {
        id: 4,
        firstname: "Yuba",
        lastname: "Oleander",
        email: "oleander@gmail.com"
    }
}

exports.create = function(req, res) {
    var newuser = req.body;
    users["user" + newuser.id] = newuser;
    console.log("--->After Post, userrs:\n" + JSON.stringify(users, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newuser, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(users, null, 4));
    res.end("All users: \n" + JSON.stringify(users, null, 4));
};

exports.findOne = function(req, res) {
    var user = users["user" + req.params.id];
    console.log("--->Find user: \n" + JSON.stringify(user, null, 4));
    res.end("Find a user:\n" + JSON.stringify(user, null, 4));
};

exports.update = function(req, res) {
    var id = parseInt(req.params.id);
    var updateduser = req.body;
    if (users["user" + id] != null) {
        // update data
        users["user" + id] = updateduser;

        console.log("--->Update Successfully, users: \n" + JSON.stringify(users, null, 4))

        // return
        res.end("Update Successfully! \n" + JSON.stringify(updateduser, null, 4));
    } else {
        res.end("Don't Exist user:\n:" + JSON.stringify(updateduser, null, 4));
    }
};

exports.delete = function(req, res) {
    var deleteuser = users["user" + req.params.id];
    delete users["user" + req.params.id];
    console.log("--->After deletion, user list:\n" + JSON.stringify(users, null, 4));
    res.end("Deleted user: \n" + JSON.stringify(deleteuser, null, 4));
};