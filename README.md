# Typora 编辑工具栏

Windows 工具栏、AI 阅读助手、ScienceDirect 抓取扩展与科研绘图技能的统一下载仓库。

## 当前下载

| 内容 | 版本 | 下载 | 说明 |
| --- | --- | --- | --- |
| Typora 编辑工具栏与完整源码 | 1.114.16 | [安装 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/5a5c763ef936718137b8e6a5459ed92a9b6ff0e4/downloads/typora-editing-toolbar-2026-10-11-v1.114.16.zip) | 下方安装步骤 |
| AI 阅读助手独立模块 | 1.3.7 | [模块 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/1cf121c76071af57022cd1adc1377c12a0288797/downloads/ai-reading-assistant-1.3.7.zip) | [模块说明](docs/ai-reading-assistant.md) |
| ScienceDirect → Typora | 0.5.18 | [扩展 ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/5a5c763ef936718137b8e6a5459ed92a9b6ff0e4/downloads/sciencedirect-typora-exporter-v0.5.18.zip) | [扩展安装](docs/sciencedirect-typora-exporter.md) |
| 科研 Python 绘图 Skill | 1.1.0 | [Skill ZIP](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b9b23f3ef5e24c009a8510ec105c72b4ff895cc5/downloads/scientific-python-plotting.zip) | [技能导入](docs/scientific-python-plotting.md) |

[校验文件](downloads) · [版本记录与 Release 附件](https://github.com/xiaozhi0507/typora-editing-toolbar/releases)

请下载上表指定 ZIP。主安装包内含源码，AI 模块独立安装；本仓库 Code 下载不能直接替代安装包。

## 工具栏安装或更新

1. 下载并完整解压安装 ZIP，保留 files 文件夹。
2. 保存文档，完全退出所有 Typora 窗口。
3. 运行 install.cmd，选择包含 Typora.exe 的目录。
4. 安装器备份后更新，完成后重新打开 Typora。

面向 Windows，安装包测试宿主为 Typora 1.14.10。

## AI 1.3.7 更新

AI 窗口复用工具栏的公共拖动实现；旧工具栏按需加载兼容代码，停用时清理，最低版本保持 1.114.3。现有对话与配置保留。

欢迎页名言与经典诗词扩充到 100 条，出处和作者单独显示。重新打开文档后打开助手、再次打开助手或新建对话时换句，避免连续重复。已有对话不受影响。最低工具栏版本仍为 1.114.3，在“插件市场 → 浏览市场”更新独立模块。

[100 条名句清单](docs/ai-welcome-quotes.md)

## 1.114.16 文献切换与备份修复

- 修复从知识库打开文献时短暂闪回的问题；打开失败或取消时恢复知识库。
- 修复 Google Drive 备份把 LaTeX 公式误判为绝对本地链接，继续检查真实的本地绝对路径，并保留图片、引用和附件备份。
- Google Drive 备份使用独立的 Google 授权，不依赖 Codex Google Drive 插件；AI 阅读助手继续独立使用 1.3.7。

## 工具栏拖动与顶部吸附

- 移除工具栏旁的独立拖柄和固定按钮，直接按住工具条空白处即可拖动。
- 拖到顶部附近显示吸附提示，松开后固定；移出吸附区域后松开保持浮动。
- 保留按钮点击、Esc 取消和位置记忆，浮动与固定状态均可在重启后恢复。
- 沿用侧栏、工具栏和 AI 窗口的公共拖动支持，减少重复代码和样式。
- 新工具栏兼容旧 AI，新 AI 兼容 1.114.3 起的工具栏；不安装或停用 AI 也保留主程序拖动支持。

- 未安装 AI 阅读助手时，侧栏与正文边界同步移动，消除拉伸延迟。
- 恢复顶部工具栏拖动与浮动，位置在重启后保留。
- 移除顶部重复的插件市场入口，统一从“更多 → 插件市场”进入。
- 首次安装的关系图谱默认浅色；已有配色选择保留。

工具条获得键盘焦点后可用方向键移动，Home 固定到顶部。重新安装 Typora 后，可再次运行安装包中的 install.cmd 恢复工具栏。

打开“更多 → 插件市场 → 工具栏更新”自动检查；下载校验后选择“退出并完成安装”。安装成功后自动打开 Typora。AI 模块独立管理。[更新流程说明](docs/toolbar-updates.md)

抓取扩展 **0.5.18** 修复含公式表格的导出：使用原生 Markdown 表格，展开合并单元格并保留引用，避免公式原文显示和 HTML 块编辑。Typora 需开启内联公式，更新后刷新论文页并重新抓取；已有文献不会自动改写。[商店上架资料](docs/exporter-store-submission.md)已准备，尚未通过商店审核。解压版升级仍需替换原 extension 文件夹并重新加载。

## 本轮变化

- AI 欢迎页内置 100 条古典名言与诗句，出处独立显示；支持项目环境管理和四种随机回答流光效果。
- 工具栏分组默认收起，勾选变化保留设置列表条目，不再持续高亮。
- 主程序独立于 AI 模块；新电脑需单独安装并启用 AI。引用数在配置相关 API 后显示。
- ScienceDirect 扩展与工具栏通过端口 23120 连接，两端需要匹配更新。
- 绘图 Skill 同步当前规范与 Illustrator 编辑参考。

验证：工具栏 121 项、抓取扩展 75 项测试通过；隔离原生 Typora 验证文献切换不闪回、失败恢复及窄窗口设置。目标 Table 2 的 30 行、62 处源公式、29 个引用链接保持完整，公式可渲染、单元格可直接编辑。工具栏 530 项清单文件与扩展 33 项文件全部核验；本轮未重新验证在线全文抓取。

## 官方模块市场

固定来源：

https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/main/marketplace.json

市场自动检查，点击更新后才安装；相同或更高版本显示“无需更新”。扩展与 Skill 使用各自安装方式。网络受限时可下载模块 ZIP，用“本地安装”导入。

[维护与发布约定](docs/PUBLISHING.md)
