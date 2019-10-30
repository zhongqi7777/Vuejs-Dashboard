let userlist = require("./db/userlist.json");
module.exports = function() {
  return {
    menu: require("./db/menu.json"),
    userlist: userlist,
    adduser: userlist
  };
};
