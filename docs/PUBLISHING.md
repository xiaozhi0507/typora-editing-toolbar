# 发布维护

- 主程序、AI 模块、浏览器扩展与 Skill 分别版本化，保留旧版本以便回退。
- downloads 中的 ZIP 与 .sha256 是经校验的分发文件。release-bundle.json 记录发布标签、说明和每个附件的 SHA-256。
- Publish verified downloads 工作流核验哈希后创建草稿 Release、上传附件并核对 GitHub 返回的摘要，再公开发布。仅为本仓库授予 contents:write，不执行 ZIP 内容。
- 官方 marketplace.json 是聚合索引。附件可下载并核验后才更新对应模块条目；保留其他模块。包 URL 应固定到发布标签或提交 SHA，避免同一版本悄然改变字节。
- 主程序安装包不携带 AI 模块或个人配置，源码位于安装包 files/source。扩展排除私人 exports、连接凭据和旧构建输出。
- 用户可以保留本机旧模块以测试市场升级，发布过程不要代替用户覆盖安装。

- 首页及安装说明的 ZIP 链接使用固定提交的 raw.githubusercontent.com 绝对地址，每项仅保留一个 ZIP 下载入口；避免使用 GitHub 文件预览页的相对下载跳转。发布后逐一下载页面入口并核对 ZIP 类型与 SHA-256。
