import Mock from 'mockjs';

// 模拟用户列表接口
Mock.mock('/api/users','post', (options) => {
 // 解析请求体中的分页参数
  const { page = 1, pageSize = 10, keyword = '' } = JSON.parse(options.body || '{}');
  
  // 生成模拟数据（100条基础数据）
  const total = 100;
  const allUsers = Mock.mock({
    [`list|${total}`]: [
      {
        'id|+1': 1,                  // 自增ID，从1开始
        'name': '@cname',            // 随机中文姓名
        'age|1-100': 25,             // 18-60的随机整数
        'gender|1': ['男', '女'],     // 随机性别
        'email': '@email',           // 随机邮箱
        'phone': /1[3456789]\d{9}/,  // 手机号正则
        'avatar': '@image("100x100", "@color", "@cname")',  // 随机头像
        'address': '@county(true)',  // 随机地址
        'createTime': '@datetime("yyyy-MM-dd HH:mm:ss")'  // 随机创建时间
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