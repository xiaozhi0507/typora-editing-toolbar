# ScienceDirect → Typora 0.5.13

将当前可访问的论文保存为 Markdown、图片、补充材料和引用索引，无需 API Key。连接知识库需 Typora 工具栏 1.113.3 或以上，使用本机端口 23120。

## 安装与更新

完整解压 ZIP，在 Chrome 或 Edge 的扩展管理页启用开发者模式，加载 extension 文件夹。旧版升级请将新版 extension 内容替换到原路径，再点击重新加载并刷新论文页，保留扩展的原有设置和连接。

右键扩展图标 → 选项 → 扩展更新：
- 默认每 6 小时自动检查，也可关闭或手动检查。
- 发现新版后点击下载，保存官方 Release ZIP。
- 解压版不能自动覆盖自身文件，仍需替换原文件夹并重新加载。商店分发的版本使用浏览器原生自动更新；当前 GitHub 包不等同于商店安装。
- 不会自动下载、运行更新包或中断正在保存的论文。

更新检查仅请求本仓库的公开版本信息，不发送文献内容、连接凭据或 API Key。新增 alarms 定时权限与 raw.githubusercontent.com 访问权限。

更新机制：[Chrome 官方说明](https://developer.chrome.com/docs/extensions/how-to/distribute)。67 项自动测试通过，并完成明暗和 360px 界面检查；真实商店自动安装未验证，本次未新增真实论文抓取验证。
