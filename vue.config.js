module.exports ={
    devServer:{
        host:'0.0.0.0',
        port:'9527',
        open:true,
        proxy:{
            '/api':{
                target:'https://x.dscmall.cn/api/',//要代理的域名
                changeOrigin:true,//开启代理，允许跨域访问
                pathRewrite:{
                    '^/api':''
                }
            },
            // '/api2':{
            //     target:'http://114.215.173.225:3000/api/',//要代理的域名
            //     changeOrigin:true,//开启代理，允许跨域访问
            //     pathRewrite:{
            //         '^/api2':''
            //     }
            // }
        }
    }
}