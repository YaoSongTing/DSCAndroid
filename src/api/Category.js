import ajxa from './ajxa'


export const getCategoryRightdata=(cid)=>ajxa('/api/catalog/list/'+cid)
export const getCategoryLeftdata=()=>ajxa('/api/catalog/list/')