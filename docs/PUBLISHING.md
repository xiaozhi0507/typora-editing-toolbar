# 统一仓库发布约定

仓库：`xiaozhi0507/typora-editing-toolbar`。工具栏、功能模块和其他插件统一使用本仓库的 Releases 分发，各自维护版本。

## 固定市场索引

用户添加的地址始终是：

```text
https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json
```

`main/marketplace.json` 是所有功能模块当前版本的汇总。每个条目的 `packageUrl` 指向该模块的精确版本 Release。不能用单个模块生成的清单直接覆盖汇总文件，也不要把 `releases/latest/download/marketplace.json` 当作多模块市场地址：工具栏或其他模块的新 Release 会改变 latest。

## AI 阅读助手发布

1. 在工具栏源码的 `files/source/build-ai-module.cjs` 中修改模块 `version`，保持 `id: ai-reading-assistant`；接口兼容性变化时提高 `minHostVersion`。需要给新安装用户设置默认问号文档时，同时填写 `documentationUrl`。
2. 在工具栏 `files/source` 下运行：

   ```powershell
   node build.cjs
   node build-module-release.cjs --repository xiaozhi0507/typora-editing-toolbar
   ```

3. 创建 Release，Tag 严格采用生成结果，例如 `ai-reading-assistant-v1.1.1`。将 `ai-reading-assistant-1.1.1.zip`、对应 `.sha256`、本次生成的 `marketplace.json` 上传为附件，再发布。
4. 下载附件，验证实际 SHA-256 与清单一致，确认可以公开访问。
5. 在本仓库 checkout 中合并本次模块条目：

   ```powershell
   node scripts/update-marketplace.cjs '实际路径/dist/modules/marketplace.json'
   node --test scripts/update-marketplace.test.cjs
   ```

6. 检查 `marketplace.json` 差异，只应新增或更新本次发布的模块；提交并推送到 `main`。先发布附件，再更新市场索引，避免用户读到尚不存在的安装包。

新模块也按同样步骤操作，使用独立且稳定的模块 ID。脚本保留其他模块，并拒绝降级和相同版本换包；需要改包时发布新版本。

## 工具栏和其他插件

- 工具栏 Tag：`toolbar-v1.108.0`，附件为完整安装 ZIP 及 SHA-256。它是宿主程序，不放进功能模块清单。
- 功能模块 Tag：`模块ID-v版本号`，附件为符合 `module.json` 规范的独立模块 ZIP。
- AI 技能或第三方 AI 插件可以使用 `skill-名称-v版本号` / `plugin-名称-v版本号`；它们不是功能模块包，应从 AI 阅读助手设置中对应的入口导入，不加入当前功能模块清单。

首次公开发布使用已验证的工具栏 v1.108.0 和 AI 阅读助手 v1.1.0；索引中的文档链接指向本仓库。模块 1.1.0 包内文档字段保持原样，已有安装可通过问号在本机设置文档网址。

## 目录与敏感文件

安装 ZIP 自带 `files/source`，本仓库当前只管理发布说明、市场索引和维护脚本。不上传本机 API 密钥、OAuth 账户、知识库、聊天历史、草稿、缓存、测试输出或私人技能。

发布完成以公开 URL 可访问、附件哈希一致、插件市场能读取清单并通过实际模块预览为准。当前更新由用户手动检查、安装并启用。
