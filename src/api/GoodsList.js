import ajax from './ajxa'

// https://x.dscmall.cn/api/catalog/goodslist/1131
export const getGoodsList = (params)=>ajax('/api/catalog/goodslist',params,"post") 