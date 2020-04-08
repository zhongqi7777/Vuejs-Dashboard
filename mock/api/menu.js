
var menulist = [
  {
    "path": "editor",
    "name": "editor",
    "meta": {
      "title": "流程设计器",
      "icon": "chart",
      "noCache": true,
      "affix": true
    },
    "alwaysShow": true,
    "children": [
      {
        "path": "flowlist",
        "name": "flowlist",
        "meta": {
          "title": "jsplumbchart",
          "icon": "nested",
          "noCache": true,
          "affix": true
        }
      }
    ]
  }
];

// console.log(process.env.npm_config_baseenv);

// console.log("baseURL", baseURL);

module.exports = [
  // mock get all routes form server
  {
    url: '/menu',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: menulist
      }
    }
  }
  // user login
  // {
  //   url: '/vuejs-h5-wx/user/login',
  //   type: 'post',
  //   response: config => {
  //     const { username } = config.body
  //     const token = tokens[username]

  //     // mock error
  //     if (!token) {
  //       return {
  //         code: 60204,
  //         message: 'Account and password are incorrect.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: token
  //     }
  //   }
  // },

  // // get user info
  // {
  //   url: '/vuejs-h5-wx/user/info\.*',
  //   type: 'get',
  //   response: config => {
  //     const { token } = config.query
  //     const info = users[token]

  //     // mock error
  //     if (!info) {
  //       return {
  //         code: 50008,
  //         message: 'Login failed, unable to get user details.'
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: info
  //     }
  //   }
  // },

  // // user logout
  // {
  //   url: '/vuejs-h5-wx/user/logout',
  //   type: 'post',
  //   response: _ => {
  //     return {
  //       code: 20000,
  //       data: 'success'
  //     }
  //   }
  // }
]


