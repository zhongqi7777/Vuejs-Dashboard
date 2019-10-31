import request from "@/utils/request";

export const getAllUserList = () => {
  return request({
    url: "/userlist",
    method: "get"
  });
};

export const getUserList = val => {
  return request({
    url: "/userlist?_page=" + val.currentPage + "&_limit=" + val.pageSize,
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

export const delUser = data => {
  return request({
    url: "/userlist/" + data,
    method: "DELETE"
  });
};

export const modifyUser = data => {
  return request({
    url: "/userlist/" + data.id,
    method: "PUT",
    data
  });
};
//axios.post(url,product,{headers: headers});
