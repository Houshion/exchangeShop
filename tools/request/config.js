// 配置公共url
let url_config = ""

if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'https://xxx'
}else{
    // 生产环境
    url_config = 'https://xxx'
}

export default url_config