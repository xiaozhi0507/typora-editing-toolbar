# Typora 编辑工具栏

Windows 工具栏、AI 阅读助手、ScienceDirect 抓取扩展与科研绘图技能的统一下载仓库。

## 当前下载

| 内容 | 版本 | 下载 | 说明 |
| --- | --- | --- | --- |
| Typora 编辑工具栏与完整源码 | 1.114.7 | [安装 ZIP](downloads/typora-editing-toolbar-2026-10-11-v1.114.7.zip?raw=true) | 下方安装步骤 |
| AI 阅读助手独立模块 | 1.3.5 | [模块 ZIP](downloads/ai-reading-assistant-1.3.5.zip?raw=true) | [模块说明](docs/ai-reading-assistant.md) |
| ScienceDirect → Typora | 0.5.14 | [扩展 ZIP](downloads/sciencedirect-typora-exporter-v0.5.14.zip?raw=true) | [扩展安装](docs/sciencedirect-typora-exporter.md) |
| 科研 Python 绘图 Skill | 1.1.0 | [Skill ZIP](downloads/scientific-python-plotting.zip?raw=true) | [技能导入](docs/scientific-python-plotting.md) |

[校验文件](downloads) · [版本记录与 Release 附件](https://github.com/xiaozhi0507/typora-editing-toolbar/releases)

请下载上表指定 ZIP。主安装包内含源码，AI 模块独立安装；本仓库 Code 下载不能直接替代安装包。

## 工具栏安装或更新

1. 下载并完整解压安装 ZIP，保留 files 文件夹。
2. 保存文档，完全退出所有 Typora 窗口。
3. 运行 install.cmd，选择包含 Typora.exe 的目录。
4. 安装器备份后更新，完成后重新打开 Typora。

面向 Windows，安装包测试宿主为 Typora 1.14.10。

## AI 1.3.5 更新测试

主程序为 1.114.3 或更新版本、AI 当前为 1.3.3 时，打开插件市场检查更新，应显示 AI 1.3.5。点击“更新”后重新打开助手，欢迎页会显示带出处的随机名句。每次打开助手更换一句，同一页面停留期间保持不变。更新不会自动安装 Python 或改动已有环境。

## 1.114.7 更新入口

插件市场 → 工具栏更新 → 检查更新 → 下载更新 → 退出后安装。支持工具栏 1.114.6 或更新版本。保存文档并退出所有 Typora 窗口后，独立安装器备份并更新；重新打开 Typora 生效。AI 模块仍单独管理。

工具栏更新页与市场条目统一布局，安装确认更紧凑，更新说明只保留相关功能变化。

抓取扩展 0.5.14 增加备用更新地址及商店原生检查。[商店上架资料](docs/exporter-store-submission.md)已准备，尚未通过商店审核。解压版升级仍需替换原 extension 文件夹并重新加载。

## 本轮变化

- AI 欢迎页内置 16 条古典名言与诗句，出处独立显示；支持项目环境管理和四种随机回答流光效果。
- 工具栏分组默认收起，勾选变化保留设置列表条目，不再持续高亮。
- 主程序独立于 AI 模块；新电脑需单独安装并启用 AI。引用数在配置相关 API 后显示。
- ScienceDirect 扩展与工具栏通过端口 23120 连接，两端需要匹配更新。
- 绘图 Skill 同步当前规范与 Illustrator 编辑参考。

验证：主程序 1382 项测试通过、17 项可选测试跳过；扩展 69 项通过。包清单和 SHA-256 已核验，界面完成明暗及 360px 检查；尚未进行真实商店更新验证。

## 官方模块市场

固定来源：

https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json

市场自动检查，点击更新后才安装；相同或更高版本显示“无需更新”。扩展与 Skill 使用各自安装方式。网络受限时可下载模块 ZIP，用“本地安装”导入。

[维护与发布约定](docs/PUBLISHING.md)
