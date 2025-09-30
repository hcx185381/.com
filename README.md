# 黄晨翔 - 个人简历网站

一个现代化的单页个人简历网站，具有响应式设计和丰富的交互动画效果。

## 🌟 功能特点

- **单页滚动设计** - 流畅的单页滚动体验，通过导航栏快速跳转到各个部分
- **响应式布局** - 完美适配桌面端、平板和移动设备
- **动画效果** - 丰富的CSS动画和JavaScript交互效果
- **现代化设计** - 清洁、现代的用户界面设计
- **快速加载** - 优化的代码和资源，确保快速加载

## 📱 网站结构

1. **首页 (Hero)** - 个人介绍和欢迎信息
2. **关于我 (About)** - 个人信息和优势介绍
3. **教育经历 (Education)** - 学术背景和成就
4. **专业技能 (Skills)** - 技能展示和熟练度
5. **荣誉奖项 (Awards)** - 获得的奖项和荣誉
6. **联系方式 (Contact)** - 联系信息和联系表单

## 🚀 部署到GitHub Pages

### 1. 创建GitHub仓库

1. 登录GitHub账户
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称设为：`你的用户名.github.io` (例如：`huangchenxiang.github.io`)
4. 设为Public仓库
5. 点击 "Create repository"

### 2. 上传文件

#### 方法一：通过GitHub网页界面
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 将以下文件拖拽上传：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. 在底部添加提交信息，点击 "Commit changes"

#### 方法二：通过Git命令行
```bash
git clone https://github.com/你的用户名/你的用户名.github.io.git
cd 你的用户名.github.io
# 将所有文件复制到这个文件夹
git add .
git commit -m "Add personal resume website"
git push origin main
```

### 3. 启用GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 滚动到 "Pages" 部分
3. 在 "Source" 下选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

### 4. 访问网站

几分钟后，您的网站将在以下地址可用：
`https://你的用户名.github.io`

## 🎨 自定义修改

### 修改个人信息
编辑 `index.html` 文件中的以下内容：
- 姓名和标题
- 个人描述
- 联系信息
- 教育经历
- 技能水平
- 荣誉奖项

### 修改样式
编辑 `styles.css` 文件可以：
- 更改颜色主题
- 调整字体样式
- 修改布局间距
- 自定义动画效果

### 修改交互效果
编辑 `script.js` 文件可以：
- 调整动画时长
- 修改滚动行为
- 添加新的交互功能

## 🛠️ 技术栈

- **HTML5** - 网页结构
- **CSS3** - 样式设计和动画
- **JavaScript (ES6+)** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体库

## 📧 联系信息

- **电话**: 13720317900
- **邮箱**: 2607007440@qq.com
- **微信**: hcx185381

## 📝 许可证

此项目仅供个人使用，请勿用于商业用途。

## 🔧 故障排除

### 网站无法访问
1. 确认GitHub Pages已正确启用
2. 检查仓库名称是否为 `用户名.github.io`
3. 确认所有文件已正确上传
4. 等待几分钟让GitHub处理部署

### 移动端显示异常
1. 确认viewport meta标签存在
2. 检查CSS中的响应式媒体查询
3. 测试不同屏幕尺寸

### 动画效果不工作
1. 确认JavaScript文件已正确加载
2. 检查浏览器控制台是否有错误
3. 确认CSS动画样式已正确应用

## 🎯 SEO优化建议

1. 添加meta描述标签
2. 使用语义化HTML标签
3. 优化图片alt属性
4. 添加结构化数据
5. 确保快速加载速度

---

**祝您使用愉快！如果有任何问题，欢迎联系我。**
[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=flat&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/hcx185381/.com)
