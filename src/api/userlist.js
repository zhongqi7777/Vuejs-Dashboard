import request from "@/utils/request";

export const getUserList = () => {
  return request({
    url: "/userlist",
    method: "get"
  });
};

export const addUser = data => {
  return request({
    url: "/userlist",
    method: "post",
    data
  });
};

//axios.post(url,product,{headers: headers});
