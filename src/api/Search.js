import ajax from './ajxa'

const Url = '/api'
// https://x.dscmall.cn/api/catalog/goodslist
export const SearchList =(prams)=> ajax(Url+'catalog/goodslist',prams,'post')