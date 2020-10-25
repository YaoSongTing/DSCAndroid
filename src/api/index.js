import ajax from './ajxa'

//定义一个全局变量--全局路径
// const DSC_Base_URL='/api'
// const eg_Base_URL='/api2'

export const getHomeSwipe = () =>ajax("http://114.215.173.225:3000/api/v1/index/swipe")