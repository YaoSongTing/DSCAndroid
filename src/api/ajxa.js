import axios from 'axios';
export default function ajax(url='',params={},type='get'){
    // 1、定义Promise对象
    let promise
    return new Promise((resolve,reject)=>{
        // 2、判断请求方式
        if('get'==type){
            let paramsStr=''
            Object.keys(params).forEach(key=>{
                paramsStr+=key+'='+params[key]+'&'
            })

            if(paramsStr!=''){
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'))
            }

            //拼接完整路径
            url+='?'+paramsStr
            promise=axios.get(url)
        }else if('post' == type){
            promise=axios.post(url,params)
        }

        //返回请求结果
        promise.then(response=>{
            resolve(response.data)
        }).catch(err=>{
            reject(err)
        })
    })
}