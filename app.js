//导入express,axios这里用require
let express = require('express')
let axios = require('axios')

var app = express()

//如果是空的就发送
app.get('/', function (req, res) {
  res.send('hello world 这是开始的第一步哦！')
})

//定义头文件
let options1 = {
  headers: {
      "Access-Control-Allow-Origin":"*",
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
      'Accept': 'application/json, text/plain, */*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Connection': 'keep-alive',
      'Host': 'stock.xueqiu.com',
      'Origin': 'https://xueqiu.com',
      'Referer': 'https://xueqiu.com/',
      'Sec-Fetch-Mode':'cors' ,
      'Sec-Fetch-Site': 'same-site',
      'Cookie':'xq_a_token=1132205e8c57eb587b26526804cff9f3b6bf6799; xqat=1132205e8c57eb587b26526804cff9f3b6bf6799; xq_r_token=81b9c911ea3907729d8f8e9f60d9f5251227c551; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwOTEyMzA1NywiY3RtIjoxNjA3MzA2MTY4NDM1LCJjaWQiOiJkOWQwbjRBWnVwIn0.Z2bVmgz-YQNj0sU6ac_KNwByYOmwQih1O8-58rJSXEvHUaSid5uHXd6cP5maiTcMoUxWttl9e6Vc5HhixJsHdXIbN1aFh8zsP1HaHm9O6kASKhz1DJ_3WLYoHZprDQ9XDcNIfpPnsGyd7ozZ1wE5nLb1vr7ccxs1iwYdnZgdXsVZcpHFIWyM4e5CpJx2KVI8eEEE3xDvQXov4w_Y0Qj7dy5dUsyvgTcjEPYAdhRBe-om58GHSX6DVPisjkRz8aUXZrWuf2ZIV5RKn_nYUwyxtAy6sHXQF9V6cI_TnFP1-w7I3mlTX7wHw5cjTOBMKRY1ca2sG9Guq13Ft2X_LZofnw; u=501607306174871; device_id=24700f9f1986800ab4fcc880530dd0ed; Hm_lvt_1db88642e346389874251b5a1eded6e3=1607306176,1607306308; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1607306308'
    }
}

let options2 = {
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Referer': 'http://localhost:2020/seibertron-web/build/index.html',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin":"*",
  }
}

let options3 = {
  headers: {
    ':authority':'blackhole-m.m.jd.com',
    ':method': 'POST',
    ':path': '/getinfo',
    ':scheme': 'https',
    'accept':'*/*',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-length': '1036',
    'content-type': 'application/x-www-form-urlencoded',
    'origin': 'https://www.jd.com',
    'referer':'https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_13dda4a96e89476c989b20d1fd196feb',
    'sec-fetch-mode':'cors',
    'sec-fetch-site':'same-site',
    'user-agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36'
  }
}

//请求路径  这里采用async 和 await
app.get('/api', async (req, res) => {
  //请求的网址路径
  let httpUrl='https://stock.xueqiu.com/v5/stock/batch/quote.json?symbol=SH000001,SZ399001,SZ399006,SH000688,HKHSI,HKHSCEI,HKHSCCI,.DJI,.IXIC,.INX'
  //axios中get post请求后的数据
  let result = await axios.get(httpUrl, options1)
  //转Json
  let resData = res.json(result.data)
  console.log(resData);
})
// app.get('/seb', async (req, res) => {
//   let httpUrl = 'http://localhost:2020/seibertron-web/build/assets/js/citypicker/districtDist.json'
//   let result= await axios.get(httpUrl,options2)
// })

// app.get('/jd', async (req, res) => {
//   let httpUrl='https://blackhole-m.m.jd.com/getinfo'
//   let result =await axios.get(httpUrl,options3)
// })

//设置监听的端口
app.listen(8080, () => {
  console.log('server start:','http://localhost:8080');
})