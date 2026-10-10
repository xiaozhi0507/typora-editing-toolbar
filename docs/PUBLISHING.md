# 统一仓库发布约定

仓库：`xiaozhi0507/typora-editing-toolbar`。每类组件独立版本、独立 Tag；只有完整工具栏 Release 标记 Latest。

| 类别 | Tag 格式 | 安装入口 |
| --- | --- | --- |
| 工具栏 | toolbar-v版本 | install.cmd |
| 功能模块 | 模块ID-v版本 | 工具栏插件市场 |
| 浏览器扩展 | sciencedirect-typora-exporter-v版本 | Chrome 扩展管理 |
| Skill | skill-技能名-v版本 | AI 阅读助手设置中的技能页 |

## 市场索引

固定地址：`https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json`。新版工具栏内置该地址并自动检查。

先发布 ZIP、SHA-256 附件并下载验证，再合并 main/marketplace.json，避免索引指向不存在的包。不要使用 releases/latest/download/marketplace.json；Latest 保留给完整工具栏。浏览器扩展与 Skill 不符合功能模块格式，不放进此清单。

## 构建与核验

在工具栏项目根目录运行 `node files/source/build.cjs`，再运行 `node files/source/build-module-release.cjs --repository xiaozhi0507/typora-editing-toolbar`。构建路径影响打包器模块标签，保持工作目录一致。相同模块版本必须字节一致；更改内容时提升版本。宿主 API 不兼容时提高 minHostVersion。

使用 scripts/update-marketplace.cjs 合并模块清单，运行 scripts/update-marketplace.test.cjs 验证；保留其他模块、拒绝降级及相同版本换包。上传完整安装 ZIP 时检查其 files/metadata/package-manifest.json。

本仓库管理公开文档、市场索引与维护脚本；工具栏源码随完整安装包分发，浏览器扩展源码随扩展 ZIP 分发。保留各组件第三方许可。不要上传本机凭据、知识库、文章导出、聊天记录或测试会话。
