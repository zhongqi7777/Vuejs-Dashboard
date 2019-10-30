import request from "@/utils/request";

export const getUserList = () => {
  return request({
    url: "/userlist",
    method: "get"
  });
};

export const addUser = data => {
  return request({
    url: "/adduser",
    method: "post",
    data
  });
};

//axios.post(url,product,{headers: headers});
