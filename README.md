# Typora 编辑工具栏

Windows 上的 Typora 编辑工具栏与独立功能模块。此仓库统一提供安装包、模块发布、文档和插件市场索引。

## 下载和安装

- [工具栏 v1.108.0](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/tag/toolbar-v1.108.0)：首次安装或更新主程序。
- [AI 阅读助手 v1.1.0](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/tag/ai-reading-assistant-v1.1.0)：独立模块包，需要工具栏 v1.108.0 或更高版本。

从对应 Release 的 Assets 下载 ZIP，完整解压工具栏安装包，保存文档并退出所有 Typora 窗口后运行 `install.cmd`。安装包包含插件、源码和安装资源；请保留 `files/`。Typora 本体需自行安装。

安装完成后重新打开 Typora。在工具栏的“插件市场”中启停 AI 阅读助手；项目、终端、代码编辑器及 Notebook 随模块一起切换，Markdown、笔记、知识库及云备份保留在主程序。

## 添加官方模块市场

进入“插件市场 → 市场来源”，添加以下固定地址：

```text
https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json
```

市场索引列出各模块的当前版本、最低工具栏版本、独立下载地址和 SHA-256。添加后在“浏览市场”查找模块，在“检查更新”中获取新版本。当前已安装相同版本时不会提示更新。

下载更新会校验文件完整性；更新后需自行启用并确认信任模块。当前提供手动检查更新，不会后台静默更新。模块在本机执行代码，仅启用信任的来源。

若在线安装提示超时，可从对应 Release 下载模块 ZIP，再用“插件市场 → 本地安装”导入。当前 v1.108.0 的下载请求限时为 30 秒，慢速网络可能超过此限制；完整下载后的模块包仍可本地安装。

## 文档

- [AI 阅读助手使用说明](docs/ai-reading-assistant.md)
- [发布与更新约定](docs/PUBLISHING.md)

工具栏使用 `toolbar-v版本号` 标签，各模块使用 `模块ID-v版本号` 标签，独立维护版本。之后的插件也可在本仓库的 Releases 发布；不同包类型应使用各自的导入入口。

本仓库当前作为发布与文档入口，完整工具栏源码随安装 ZIP 提供。第三方组件的许可证随安装包保留。
