# Typora 编辑工具栏

Windows 工具栏、AI 阅读助手及相关扩展的统一下载仓库。

## 下载

| 内容 | 当前版本 | 安装包 | 使用说明 |
| --- | --- | --- | --- |
| Typora 编辑工具栏（含 AI 模块及源码） | 1.113.1 | [完整安装 ZIP](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/toolbar-v1.113.1/typora-editing-toolbar-2026-10-10-v1.113.1.zip) | 下方安装步骤 |
| AI 阅读助手独立模块 | 1.2.0 | [模块 ZIP](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/ai-reading-assistant-v1.2.0/ai-reading-assistant-1.2.0.zip) | [模块说明](docs/ai-reading-assistant.md) |
| ScienceDirect → Typora 浏览器扩展 | 0.5.11 | [扩展 ZIP](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/sciencedirect-typora-exporter-v0.5.11/sciencedirect-typora-exporter-v0.5.11.zip) | [Chrome 安装与使用](docs/sciencedirect-typora-exporter.md) |
| 科研 Python 绘图 Skill | 1.0.0 | [Skill ZIP](https://github.com/xiaozhi0507/typora-editing-toolbar/releases/download/skill-scientific-python-plotting-v1.0.0/scientific-python-plotting.zip) | [技能导入](docs/scientific-python-plotting.md) |

[所有版本与 SHA-256 校验文件](https://github.com/xiaozhi0507/typora-editing-toolbar/releases)。请下载各 Release 的指定 ZIP 附件，GitHub 自动生成的 Source code 只包含本分发仓库的说明和维护文件。

## 工具栏安装或更新

1. 下载并完整解压工具栏安装 ZIP。
2. 保存文档并完全退出所有 Typora 窗口。
3. 运行 `install.cmd`，选择包含 `Typora.exe` 的文件夹；需要管理员权限时按提示操作。
4. 安装器备份原文件后更新。完成后重新打开 Typora。

面向 Windows，安装包记录的测试宿主为 Typora 1.14.10。保留解压包中的 files 文件夹，不要只复制 install.cmd。

## 本轮更新

- 插件市场默认使用官方源，名称旁显示版本；浏览页显示安装、更新或无需更新。
- 技能和插件刷新带旋转反馈；标签页 Markdown 可拖入 AI 助手作为资料。
- 工具栏设置简化，按钮大小改为横向滑动，窄窗口自动紧凑；颜色采用 Word 风格主题色与 Recent Colors 历史。
- 移除科研模板入口及保护模式卡片编辑；空警告框支持删除、撤销和重做。
- 随机配色移到源码按钮右侧并缩小图标，关系图谱利用侧栏底部空间。

本次工具栏自动测试 1,314 项通过、17 项可选测试跳过，导出扩展 51 项通过；安装包清单与哈希已校验。原生 Typora 界面交互和真实模型服务调用不作本次新增验证声明。

## 官方模块市场

新版工具栏内置固定地址，打开市场自动检查：

`https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json`

已安装对应或更高版本时显示“无需更新”。该清单用于工具栏功能模块；浏览器扩展和 Skill 请使用上表的独立安装方式。

[维护与发布约定](docs/PUBLISHING.md)
