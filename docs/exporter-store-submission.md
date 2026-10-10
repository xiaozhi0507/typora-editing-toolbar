# Chrome 商店提交资料 — 0.5.14

名称：ScienceDirect → Typora

简述：将当前可访问的 ScienceDirect 论文导出为 Markdown、本地图片和 Typora 引用索引。

详细介绍：

保存当前可访问的 ScienceDirect 论文，整理成便于阅读与检索的 Markdown。支持标题、作者、正文、图片、参考文献和可用补充材料，可下载 ZIP，也可配对本机 Typora 工具栏直接写入知识库。设置默认分类和保存方式，适合个人研究阅读与整理。无需 API Key。只处理你能访问的内容，不解锁付费论文。独立项目，非 Elsevier、ScienceDirect 或 Typora 官方产品。

单一用途：把用户当前访问的 ScienceDirect 论文导出为本地文件或保存到本机 Typora 知识库。

类别建议：工具 / 工作效率。语言：中文（简体）。免费，不包含购买流程。

隐私说明 URL：https://github.com/xiaozhi0507/typora-editing-toolbar/blob/main/docs/exporter-privacy.md

## 权限说明

- activeTab：用户点击扩展后，读取当前论文页，不持续扫描浏览历史。
- scripting：点击保存时注入本地打包的论文提取代码。
- downloads：保存导出的 ZIP 和配套资源。
- offscreen：后台生成 ZIP、处理资源下载，在关闭选项页后完成用户发起的任务。
- storage：本地保存分类、连接设置和配对信息。
- https://www.sciencedirect.com/*：获取当前论文与相关资源。
- https://ars.els-cdn.com/*：获取 Elsevier 论文图片及补充材料。
- http://127.0.0.1/*：与用户自行配对的本机 Typora 工具栏通信；实际服务限制在 23120，浏览器匹配模式不支持端口级权限。

不包含远程执行代码：所有 JavaScript 随包提供，无远程 eval 或远程脚本加载。商店包不包含 GitHub 访问权限和 alarms 权限。

## 审核测试说明

1. 加载商店 ZIP，在可公开访问全文的 ScienceDirect 论文页点击扩展图标。
2. 未连接 Typora 时，可按页面提供的导出流程下载 ZIP；有权限的正文和图片导出为本地文件。
3. 知识库直存为可选功能，需要安装本项目 Typora 工具栏，再在扩展选项中配对。不要向审核人员提供私人令牌；使用审核机器自己的配对码。
4. 扩展选项中可查看版本和“检查更新”；只有经商店安装后，浏览器才管理商店更新。解压加载商店包仅用于审核功能，不代表商店已安装。

## 提交前由账号持有人完成

在 Chrome 网上应用店开发者信息中心登录并完成开发者注册；若要求支付注册费、接受协议或完成身份/联系信息核验，请由账号持有人操作。填写实际发布者信息，不使用示例邮箱。上传 store ZIP、图标和截图，核对隐私声明后提交审核。审核批准前没有可用商店链接或商店自动更新通道。
