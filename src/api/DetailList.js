import ajax from './ajxa'


// https://x.dscmall.cn/api/category/goodsdetail?goods_id=621
export const DetailList = (params)=> ajax('/api/goods/show', params,'post')