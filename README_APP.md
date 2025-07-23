# 黄晨翔个人简历移动应用

一个基于React Native开发的个人简历移动应用，支持iOS和Android平台。

## 📱 应用特色

### 🎨 **现代化设计**
- Material Design风格的用户界面
- 流畅的动画效果和过渡
- 响应式布局适配各种屏幕尺寸
- 优雅的渐变色彩和阴影效果

### 🚀 **丰富功能**
- **首页展示** - 个人介绍和快速信息预览
- **关于我** - 详细的个人信息和优势展示
- **教育经历** - 时间轴形式的学习背景
- **专业技能** - 分类展示技能熟练度
- **荣誉奖项** - 成就展示和成长轨迹
- **联系方式** - 多种联系方式和留言表单

### ⚡ **性能优化**
- 懒加载和动画优化
- 图标矢量化处理
- 内存使用优化
- 平滑的滚动体验

## 🛠️ 技术栈

- **React Native 0.73** - 跨平台移动应用框架
- **React Navigation 6** - 导航管理
- **React Native Vector Icons** - 图标库
- **React Native Linear Gradient** - 渐变效果
- **React Native Animatable** - 动画库
- **React Native Reanimated** - 高性能动画

## 📋 系统要求

### 开发环境
- **Node.js** >= 16.0.0
- **npm** 或 **yarn**
- **React Native CLI**

### iOS开发
- **Xcode** >= 12.0
- **iOS** >= 11.0
- **CocoaPods**

### Android开发
- **Android Studio**
- **Android SDK** >= 21
- **Java JDK** >= 11

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/yourusername/huang-chenxiang-resume-app.git
cd huang-chenxiang-resume-app
```

### 2. 安装依赖
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. iOS配置
```bash
cd ios
pod install
cd ..
```

### 4. 运行应用

#### iOS
```bash
# 使用 npm
npm run ios

# 或使用 yarn
yarn ios
```

#### Android
```bash
# 使用 npm
npm run android

# 或使用 yarn
yarn android
```

## 📂 项目结构

```
HuangChenxiangApp/
├── src/
│   └── screens/
│       ├── HomeScreen.js          # 首页
│       ├── AboutScreen.js         # 关于我
│       ├── EducationScreen.js     # 教育经历
│       ├── SkillsScreen.js        # 专业技能
│       ├── AwardsScreen.js        # 荣誉奖项
│       └── ContactScreen.js       # 联系方式
├── App.js                         # 主应用组件
├── index.js                       # 应用入口
├── package.json                   # 依赖配置
├── app.json                       # 应用配置
├── metro.config.js               # Metro配置
├── babel.config.js               # Babel配置
└── README_APP.md                 # 说明文档
```

## 🎨 自定义配置

### 修改个人信息
编辑对应的屏幕组件文件：
- `src/screens/HomeScreen.js` - 首页个人信息
- `src/screens/AboutScreen.js` - 详细个人信息
- `src/screens/ContactScreen.js` - 联系方式

### 修改主题颜色
在各个组件的 `styles` 对象中修改颜色值：
```javascript
const styles = StyleSheet.create({
  // 主色调
  primaryColor: '#6366f1',
  // 次要颜色
  secondaryColor: '#10b981',
  // 强调色
  accentColor: '#fbbf24',
});
```

### 添加新页面
1. 在 `src/screens/` 目录下创建新的组件文件
2. 在 `App.js` 中导入并添加到导航配置

## 📱 构建发布版本

### Android APK
```bash
cd android
./gradlew assembleRelease
```

### iOS Archive
```bash
cd ios
xcodebuild -workspace HuangChenxiangApp.xcworkspace -scheme HuangChenxiangApp -configuration Release
```

## 🔧 常见问题

### 1. Metro服务器启动失败
```bash
# 清理缓存
npx react-native start --reset-cache
```

### 2. Android构建失败
```bash
# 清理Android构建缓存
cd android
./gradlew clean
cd ..
```

### 3. iOS Pod安装失败
```bash
cd ios
pod deintegrate
pod install
cd ..
```

### 4. 图标不显示
确保已正确安装并链接 `react-native-vector-icons`：
```bash
# Android需要在android/app/build.gradle中添加配置
# iOS需要运行pod install
```

## 📄 许可证

此项目仅供个人使用，请勿用于商业用途。

## 📞 技术支持

如果您在使用过程中遇到问题，可以通过以下方式联系：

- **邮箱**: 2607007440@qq.com
- **微信**: hcx185381
- **电话**: 13720317900

## 🎯 未来计划

- [ ] 添加作品集展示功能
- [ ] 集成深色模式支持
- [ ] 添加多语言支持
- [ ] 优化动画性能
- [ ] 添加数据持久化
- [ ] 集成推送通知

## 🙏 致谢

感谢React Native社区提供的优秀开源库和工具，让移动应用开发变得更加高效和便捷。

---

**祝您使用愉快！如果觉得这个项目对您有帮助，欢迎给个星标⭐**