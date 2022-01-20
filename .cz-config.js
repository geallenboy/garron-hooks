module.exports = {
  // 可选类型
  types:[
    { value: 'feat',     name: 'feat:✨ Features | 新功能'},
    { value: 'fix',      name: 'fix:🐛 Bug Fixes | Bug 修复'},
    { value: 'docs',     name: 'docs:📚 Documentation | 文档'},
    { value: 'style',    name: 'style:💎 Styles | 风格'},
    { value: 'init',     name: 'init:🎉 Init | 初始化'},
    { value: 'refactor', name: 'refactor:📦 Code Refactoring | 代码重构'},
    { value: 'pref',     name: 'pref:🚀 Performance Improvements | 性能优化'},
    { value: 'test',     name: 'test:✅ Tests | 测试'},
    { value: 'chore',    name: 'chore:♻️ Chore | 构建/工程依赖/工具'},
    { value: 'revert',   name: 'revert:⏪ Revert | 回退'},
    { value: 'build',    name: 'build:🛠‍ Build System | 打包构建'},
    { value: 'ci',       name: 'ci:👷 Continuous Integration | CI 配置'}
  ],
  
  // 步骤
  messages: {
    type: '请选择提交的类型:',
    customScope: '请输入修改的范围(可选):',
    subject: '请简要描述提交(必填):',
    // body: '请输入详细描述(可选):',
    // footer: '请选择要关闭的issue（可选）',
    confirmCommit: '确认要使用以上信息提交？（y/n）'
  },
  // 跳过步骤
  skip: ['body', 'footer'],
  // 默认长度
  subjectLimit: 72
}
