import request from '@/utils/request'



//登录相关
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

//对接所有导航条
export const findContype = () => {
  return request({
    method: "GET",
    url: "/api/newsFeature/findContype",
    // data用来设置POST请求体

  })
};

//点击对应的导航条弹出对应内容
export const findCategoryByContypeId = (data) => {
  let param = new URLSearchParams();
  param.append("contypeId", data.contypeId);
  return request({
    method: "GET",
    url: "/api/newsFeature/findCategoryByContypeId",
    params: param,
  })
};

//根据类型类别查询一类新闻
export const findNewsByTypeAndCategory = (data) => {
  let param = new URLSearchParams();
  param.append("categoryId", data.categoryId);
  param.append("contypeId", data.contypeId);
  param.append("p", data.p);
  return request({
    method: "POST",
    url: "/api/newsFeature/findNewsByTypeAndCategory",
    // data用来设置POST请求体
    data: param,
  })
};

