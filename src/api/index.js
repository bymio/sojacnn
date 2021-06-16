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

//根据类型类别插入新闻
export const getNewsTiBydata = (dataParams) => {
  let param = new URLSearchParams();
  param.append("categoryId", dataParams.categoryId);
  param.append("contypeId", dataParams.contypeId);
  param.append("data", dataParams.data);
  param.append("title", dataParams.title);
  return request({
    method: "POST",
    url: "/api/background/saveNewsTheme",
    // data用来设置POST请求体
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
    method: "GET",
    url: "/api/newsFeature/findNewsByTypeAndCategory",
    // data用来设置POST请求体
    params: param,
  })
};


// 获取角色
export const getRole = (p) => {
  let param = new URLSearchParams()
  param.append('p',p)
  return request({
    url:'/api/background/findRoles',
    method:'GET',
    params:param
  })
}


// 添加新闻类型
export const newsXing = (data) => {
  let param = new URLSearchParams()
  param.append('contypeName',data)
  return request({
    url:'/api/background/saveNewsContype',
    method:'POST',
    params:param
  })
}
// 删除新闻类型
export const removeNewsXing = (id) => {
  // let param = new URLSearchParams()
  // param.append('id',id)
  return request({
    url:`/api/background/deleteContype/${id}`,
    method:'POST',
    // params:param
  })
}
// 更新新闻类型
export const updateNewsXing = (data) => {
  let param = new URLSearchParams()
  param.append('contypeName',data.editValue)
  return request({
    url:`/api/background/updateContype/${data.id}`,
    method:'POST',
    params:param
  })
}
// 获取新闻类型对应的类别
export const getNewsBie = (data) => {
  let param = new URLSearchParams()
  param.append("contypeId", data.contypeId);
  param.append('p',data.p)
  return request({
    url:'/api/newsFeature/findCategoryByContypeId',
    method:'GET',
    params:param
  })
}
// 根据类型id，类别id，类别名称更新类别
export const updateNewsBie = (data) => {
  let param = new URLSearchParams()
  param.append("categoryName", data.categoryName);
  param.append("contypeId", data.contypeId);
  param.append('id',data.id)
  return request({
    url:'/api/background/updateNewsCategory',
    method:'POST',
    params:param
  })
}
// 删除新闻类别
export const removeNewsBie = (id) => {
  let param = new URLSearchParams()
  param.append('id',id)
  return request({
    url:`/api/background/deleteNewsCategory`,
    method:'POST',
    params:param
  })
}
// 添加新闻类别
export const newsBie = (data) => {
  let param = new URLSearchParams()
  param.append("categoryName", data.categoryName);
  param.append('contypeId',data.contypeId)
  return request({
    url:'/api/background/saveNewsCategory',
    method:'POST',
    params:param
  })
}
