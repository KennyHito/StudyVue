import Mock from 'mockjs';
import pinyin from 'pinyin';

// 模拟用户列表接口
Mock.mock('/api/users','post', (options) => {
 // 解析请求体中的分页参数
  const { page = 1, pageSize = 10, keyword = '' } = JSON.parse(options.body || '{}');
  
  // 生成模拟数据总条数
  const total = 120;
  const allUsers = Mock.mock({
    [`list|${total}`]: [
      {
        'id|+1': 1,                   // 自增ID，从1开始
        'name': '@cname',             // 随机中文姓名
        'age|18-60': 25,              // 18-60的随机整数
        'gender|1': ['男', '女'],       // 随机性别
        'email': '@email',            // 随机邮箱
        'phone': /1[3456789]\d{9}/,   // 手机号正则
        'constellation|1': ['白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯','水瓶','双鱼'], // 星座
        'bloodType|1': ['A','B','AB','O'], // 血型
        'maritalStatus|1': ['单身','恋爱中','已婚','离异'], // 婚姻状况
        'avatar': function() {        //头像
          const firstChar = this.name.substring(0, 1);
          const firstLetter = pinyin(firstChar, {
            style: pinyin.STYLE_FIRST_LETTER // 获取首字母
          })[0][0].toUpperCase();
          return Mock.Random.image(
            '200x200',
            Mock.Random.color(),
            firstLetter
          );
        },
        'tags': () => {// 随机1-4个兴趣标签
          const tags = ['旅行','美食','摄影','编程','读书','音乐','运动','电影']
          return Mock.Random.shuffle(tags).slice(0, Mock.Random.integer(1, 4))
        }, 
        'address': '@county(true)',   // 随机地址
        'latitude': '@float(20, 40, 6, 6)', // 纬度
        'longitude': '@float(110, 120, 6, 6)', // 经度
        'createTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 随机创建时间
        'signature': '@csentence(10, 25)', // 新增个性签名字段,随机10-25个中文字符
        'balance|0-1000000.2': 0, // 账户余额(2位小数)
        'creditScore|300-950': 600, // 信用分
        'lastLoginTime': '@datetime("yyyy-MM-dd HH:mm:ss")', // 最后登录时间
        'wechat': 'wx_' + Mock.Random.string('lower', 8), // 随机微信ID
        'qq': /[1-9]\d{4,12}/, // QQ号正则
        'github': 'github_' + Mock.Random.string('lower', 6), // GitHub账号
        'blog': 'https://' + Mock.Random.string('lower', 8) + '.com', // 个人博客
        'profession': '@cword(2,4)', // 随机职业
        'company': '北京@ctitle(3,5)有限公司', // 随机公司名
        'education|1': ['高中','大专','本科','硕士','博士'], // 学历
        'graduationSchool': '@ctitle(2,4)大学', // 毕业院校
        'status|1': ['active', 'inactive', 'banned'], // 用户状态
        'vipLevel|0-5': 0, // VIP等级
        'isVerified|1': [true, false] // 是否认证
      }
    ]
  }).list;
  
  // 根据关键词过滤（如果有）
  const filteredUsers = keyword 
    ? allUsers.filter(user => user.name.includes(keyword) || user.email.includes(keyword))
    : allUsers;
  
  // 计算当前页数据
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const pageData = filteredUsers.slice(start, end);
  
  return {
    code: 200,
    message: '成功',
    data: {
      list: pageData,
      page,
      pageSize,
      total: filteredUsers.length
    }
  };
});