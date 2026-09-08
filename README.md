# 陈楠的个人小站 (Portfolio Website)

这是一个使用 **React 19 + TypeScript + Vite + Tailwind CSS** 打造的现代化个人创意与设计作品集网站。

---

## 🚀 快速开始（本地运行）

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动本地开发服务器**
   ```bash
   npm run dev
   ```
   启动后访问浏览器：`http://localhost:3000`

3. **打包构建**
   ```bash
   npm run build
   ```
   构建后的静态页面文件将输出在 `dist/` 目录下。

---

## 📦 如何上传到 GitHub

在项目根目录下打开终端（Terminal）执行以下命令：

```bash
# 1. 初始化 Git 仓库
git init

# 2. 将所有文件添加到暂存区
git add .

# 3. 提交更改
git commit -m "feat: 初次提交个人作品集小站"

# 4. 将主分支重命名为 main
git branch -M main

# 5. 关联你的 GitHub 远程仓库（替换成你自己的 GitHub 仓库地址）
git remote add origin https://github.com/<你的GitHub用户名>/<你的仓库名>.git

# 6. 推送代码到 GitHub
git push -u origin main
```

---

## 🌐 网站在线部署上线方案（任选一种）

### 方案一：使用 GitHub Pages 自动部署（免费、已全自动配置）

本项目已内置 `.github/workflows/deploy.yml` 自动化部署脚本，你无需手动打包：

1. 将代码推送到 GitHub 仓库的 `main` 分支。
2. 打开 GitHub 仓库页面，点击顶部的 **Settings**（设置）。
3. 在左侧菜单点击 **Pages**。
4. 在 **Build and deployment** 下方的 **Source** 下拉菜单中，选择 **GitHub Actions**。
5. 稍等 1-2 分钟，GitHub 会自动完成构建并生成专属访问链接（例如：`https://<用户名>.github.io/<仓库名>/`）。

> **已做优化**：项目在 `vite.config.ts` 中配置了 `base: './'`，无论部署在根域名还是二级子路径下，所有 CSS、JS 与图片资源均能无缝加载，杜绝 404 白屏。

---

### 方案二：使用 Vercel 一键上线（推荐，全球极速 CDN、自带免费域名）

1. 打开 [Vercel 官网](https://vercel.com/) 并使用 GitHub 账号登录。
2. 点击 **Add New...** -> **Project**。
3. 选择刚刚推送到 GitHub 的仓库，点击 **Import**。
4. Framework Preset 会自动识别为 **Vite**，直接点击 **Deploy**。
5. 约 30 秒后即可上线，并获得一个免费的 `xxx.vercel.app` 独立访问网址。

---

## 🛠 技术栈
- **核心框架**：React 19 + TypeScript
- **构建工具**：Vite 6
- **样式方案**：Tailwind CSS v4
- **动效库**：Motion (Framer Motion)
- **图标库**：Lucide React
- **趣味交互**：Canvas Confetti
