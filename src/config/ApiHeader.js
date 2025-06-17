//方式一: 分别暴露（集中导出）
/**
 * 使用
 * 导入: import { Request_Api_1, Request_Api_2, Request_Api_3 } from '@/config/ApiHeader.js';
 * 直接使用: Request_Api_1即可
*/
const Request_Api_1 = "https://api.xygeng.cn/one"
const Request_Api_2 = "https://api.thecatapi.com/v1/images/search"
const Request_Api_3 = "https://api.github.com/search/users?q="

export {
  Request_Api_1,
  Request_Api_2,
  Request_Api_3
}

/*----------------------------------------------------------------------------------------------------------------*/
//方式二:默认导出（Default Export）
/**
 * 使用
 * import ApiUrl from '@/config/ApiHeader.js';
 * 用的时候ApiUrl.Request_Api_1即可
*/
// export default {
//   Request_Api_1:"https://api.xygeng.cn/one",
//   Request_Api_2:"https://api.thecatapi.com/v1/images/search",
//   Request_Api_3:"https://api.github.com/search/users?q="
// }