# ScienceDirect → Typora

版本：0.5.11。将浏览器当前可阅读的 ScienceDirect 英文全文导出为 Markdown、相对路径图片与附件（`_assets`）、引用索引（`_xref`）。在本地转换，无需 API Key，不执行翻译。

## 安装

1. 下载 [v0.5.11 ZIP](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/sciencedirect-typora-exporter-v0.5.11/sciencedirect-typora-exporter-v0.5.11.zip) 并完整解压到固定目录。
2. 使用 Chrome 116 或更新版本，打开 `chrome://extensions`，开启开发者模式，点击“加载已解压的扩展程序”，选择包含 `manifest.json` 的 `extension` 文件夹。
3. 打开可阅读全文的 ScienceDirect 论文页，点击扩展图标保存。更新时重新加载扩展，再刷新论文页。

## 导出方式

- **仅下载 ZIP 压缩包**：不需要 Typora 运行，也不会自动登记到知识库。完整解压后打开 Markdown，并保留 `_assets` 与 `_xref` 的相对位置。
- **保存到 Typora 知识库**：需要本仓库工具栏 v1.90.22 或更新版本（推荐 v1.113.1），启动 Typora 后按扩展设置页完成本地连接，再选择此模式并保存设置。

支持 MathML/TeX 公式、文献链接、图注、合并单元格表格与补充材料；旧版二进制 Word/Excel（.doc/.xls）和 .docx/.xlsx 原样下载。单个资源上限 50 MB、总量 250 MB。

## 权限与范围

扩展使用当前标签页、脚本注入、下载、离屏文档和本地设置权限；访问 ScienceDirect、其图片 CDN 及本机 127.0.0.1 连接。只处理当前有权阅读的页面，不绕过付费或登录限制。缺失或无效资源会报错，不伪造内容。

## 本次分发核验

2026-10-10：51 项自动测试通过，扩展运行文件与本地 v0.5.11 逐文件哈希一致。公开 ZIP 整理了 README/验证说明，未包含私人文章导出目录。在线文章完整抓取未在本次重复验证，技术测试不等于全文校对。
