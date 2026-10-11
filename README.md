# Typora 编辑工具栏

Windows 工具栏、AI 阅读助手、ScienceDirect 抓取扩展与科研绘图技能的统一下载仓库。

## 当前下载

| 内容 | 版本 | 下载 | 说明 |
| --- | --- | --- | --- |
| Typora 编辑工具栏与完整源码 | 1.114.12 | [安装 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/typora-editing-toolbar-2026-10-11-v1.114.12.zip) · [备用](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/toolbar-v1.114.12/typora-editing-toolbar-2026-10-11-v1.114.12.zip) | 下方安装步骤 |
| AI 阅读助手独立模块 | 1.3.6 | [模块 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/ai-reading-assistant-1.3.6.zip) · [备用](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/ai-reading-assistant-v1.3.6/ai-reading-assistant-1.3.6.zip) | [模块说明](docs/ai-reading-assistant.md) |
| ScienceDirect → Typora | 0.5.17 | [扩展 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/sciencedirect-typora-exporter-v0.5.17.zip) · [备用](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/sciencedirect-typora-exporter-v0.5.17/sciencedirect-typora-exporter-v0.5.17.zip) | [扩展安装](docs/sciencedirect-typora-exporter.md) |
| 科研 Python 绘图 Skill | 1.1.0 | [Skill ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/scientific-python-plotting.zip) · [备用](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/skill-scientific-python-plotting-v1.1.0/scientific-python-plotting.zip) | [技能导入](docs/scientific-python-plotting.md) |

[校验文件](downloads) · [版本记录与 Release 附件](https://github.com/xiaozhi0507/typora-editing-toolbar/releases)

请下载上表指定 ZIP。主安装包内含源码，AI 模块独立安装；本仓库 Code 下载不能直接替代安装包。

## 工具栏安装或更新

1. 下载并完整解压安装 ZIP，保留 files 文件夹。
2. 保存文档，完全退出所有 Typora 窗口。
3. 运行 install.cmd，选择包含 Typora.exe 的目录。
4. 安装器备份后更新，完成后重新打开 Typora。

面向 Windows，安装包测试宿主为 Typora 1.14.10。

## AI 1.3.6 更新

欢迎页名言与经典诗词扩充到 100 条，出处和作者单独显示。重新打开文档后打开助手、再次打开助手或新建对话时换句，避免连续重复。已有对话不受影响。最低工具栏版本仍为 1.114.3，在“插件市场 → 浏览市场”更新独立模块。

[100 条名句清单](docs/ai-welcome-quotes.md)

## 1.114.12 更新流程测试

本版用于验证本地能否顺畅完成在线更新。打开“插件市场 → 工具栏更新”自动检查；有新版时点击“更新”，下载校验完成后选择“退出并完成安装”。Typora 按原生流程处理未保存文档，所有窗口退出后安装，安装成功后自动打开 Typora。重开后显示“已是最新版本”和“无需更新”。

包含 1.114.11 的安装启动修复：先确认后台安装任务就绪，再请求退出；顶部统一显示状态，去掉卡片内重复通知。

1.114.6 / 1.114.7 升级时仍使用旧界面的“下载更新 → 退出后安装”。自动重开等流程由发起更新的旧版本控制，旧版首次升级未必具有全部新行为。

抓取扩展 0.5.17 修复更新检查请求并调整更新区布局。[商店上架资料](docs/exporter-store-submission.md)已准备，尚未通过商店审核。解压版升级仍需替换原 extension 文件夹并重新加载。

## 本轮变化

- AI 欢迎页内置 100 条古典名言与诗句，出处独立显示；支持项目环境管理和四种随机回答流光效果。
- 工具栏分组默认收起，勾选变化保留设置列表条目，不再持续高亮。
- 主程序独立于 AI 模块；新电脑需单独安装并启用 AI。引用数在配置相关 API 后显示。
- ScienceDirect 扩展与工具栏通过端口 23120 连接，两端需要匹配更新。
- 绘图 Skill 同步当前规范与 Illustrator 编辑参考。

验证：61 项相关测试通过；隔离 Typora 中验证全部 100 条名句、重开换句、明暗样式和 360px 窄窗口。三个安装包内容与 SHA-256 已核验。本次仅发布，不覆盖本机安装。

## 官方模块市场

固定来源：

https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json

市场自动检查，点击更新后才安装；相同或更高版本显示“无需更新”。扩展与 Skill 使用各自安装方式。网络受限时可下载模块 ZIP，用“本地安装”导入。

[维护与发布约定](docs/PUBLISHING.md)
