import request from '@/utils/request'



export const login = (data) => {
  let param = new URLSearchParams();
  param.append("account", data.account);
  param.append("password", data.password);
  return request({
    method: "POST",
    url: "/login",
    // data用来设置POST请求体
    data: param,
  })
};
// export const saveNewsContype = (data) => {
//   let param = new URLSearchParams();
//   param.append("contypeName", data.contypeName);
//   return request({
//     method: "POST",
//     url: "/api/background/saveNewsContype",
//     headers: {
//       Authorization: 'cff3c103-eac8-4e2e-aadb-432a2ab099cd'
//     },
//     // data用来设置POST请求体
//     data: param,
//   })
// };

export const findContype = () => {
  return request({
    method: "GET",
    url: "/api/newsFeature/findContype",
    // data用来设置POST请求体

  })
};

export const findCategoryByContypeId = (data) => {
  let param = new URLSearchParams();
  param.append("contypeId", data.contypeId);
  return request({
    method: "GET",
    url: "/api/newsFeature/findCategoryByContypeId",
    params: param,
  })
};

