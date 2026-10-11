# ScienceDirect → Typora 0.5.17

将当前可访问的 ScienceDirect 论文保存为 Markdown、本地图片、补充材料与引用索引。可下载 ZIP，或配对本机 Typora 知识库后直接保存。无需 API Key，也不会绕过网站访问权限。

[下载扩展 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/sciencedirect-typora-exporter-v0.5.17.zip)。

## 安装与更新

GitHub 解压版：解压下载包，在 Chrome / Edge 的扩展管理页加载 extension 文件夹。升级请替换原 extension 文件夹内容，然后重新加载扩展并刷新论文页，原路径保持不变。

扩展选项中的“扩展更新”默认每六小时检查，也可手动检查或关闭。0.5.17 包含更新请求修复：修正原生 fetch 调用，优先使用 GitHub API，提供备用地址及重试，并区分超时、请求受限和网络连接异常。版本号位于标题旁，状态与检查按钮上下排列在右侧。发现新版后可下载 ZIP；解压版仍需手动替换文件。

商店版：通过商店审核后，从商店安装，后续由浏览器自动更新。设置页的“检查更新”请求浏览器原生检查，不依赖 GitHub 更新地址。当前提供的是待提交商店的 ZIP，不代表已经上架。商店包仅包含运行文件，并去掉 GitHub 与定时检查权限。

## 连接 Typora

需安装 Typora 工具栏 1.113.3 或以上，连接本机 127.0.0.1:23120 服务；先核验服务再配对。不向公网发送连接凭据。修改扩展后请刷新之前打开的论文页。

## 隐私

详见 [隐私说明](https://github.com/xiaozhi0507/typora-editing-toolbar/blob/main/docs/exporter-privacy.md)。本工具是独立项目，与 Elsevier、ScienceDirect 或 Typora 官方无隶属关系。
