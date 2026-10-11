# AI 阅读助手 1.3.8

最低工具栏版本：1.114.3。

[下载独立模块](https://raw.githubusercontent.com/xiaozhi0507/typora-editing-toolbar/b73c963e6947ceb438add238d62b60f8b759728d/downloads/ai-reading-assistant-1.3.8.zip)。在工具栏“插件市场”检查更新；未安装时先安装，再信任并启用。主安装包不预装 AI 模块。

## 1.3.8 插件与连接界面

插件详情共用精简布局，移除重复的连接、断开和登录辅助说明；收紧连接方式弹窗。Google Drive 插件详情不再重复展示知识库备份入口，知识库自身的备份功能保留。账户、授权配置、对话与技能保持不变。

Plugin Creator 可在本机导入 create-plugin、update-plugin、prepare-plugin-submission 三个技能。使用 Typora 已提供的项目工具处理本地插件；Codex 云端创建和发布服务未接入。个人安装的插件与技能不打入公开模块包。

## 1.3.7 拖动整理

配套工具栏 1.114.14：复用公共逐帧调度和拖动样式。旧工具栏没有该能力时加载同源兼容实现，停用时清理，不提高最低主程序版本。拖动取消、窗口位置记忆及现有配置保持不变。

## 欢迎页

保留“从一个问题开始”，下方显示名言或诗句，再单独显示 “--《出处》 · 作者”。内置 100 条，重新打开 Markdown 后打开助手、再次打开助手或新建对话时更换；避免连续重复，不滚动播放。已有对话与资料不会被替换。

名句均为古典作品，核对来源包括：[陆游《冬夜读书示子聿》](https://zh.wikisource.org/wiki/冬夜讀書示子聿)、[朱熹《观书有感》](https://zh.wikisource.org/wiki/觀書有感)、[王之涣《登鹳雀楼》](https://wikisource.org/wiki/登鸛雀樓_(王之渙))、[苏轼《题西林壁》](https://dict.revised.moe.edu.tw/dictView.jsp?ID=21491&la=0&powerMode=0)、[陆游《游山西村》](https://www.classicalchineseliterature.org/article.php?article=遊山西村)、[李白《行路难》](https://zh.wikisource.org/wiki/行路難三首)、[杜甫《望岳》](https://zh.wikisource.org/wiki/望嶽_(岱宗夫如何))、[郑燮《竹石》](https://hanyu.baidu.com/shici/detail?pid=1735da03382449a489a1479c53994009)、[荀子《劝学》](https://zh.wikisource.org/wiki/劝学)、[《论语》](https://zh.wikisource.org/wiki/論語/全覽)、[《礼记·中庸》](https://zh.wikisource.org/wiki/禮記/中庸)。

[完整 100 条名句清单](ai-welcome-quotes.md)。

## 现有功能

阅读问答、编辑、ChatGPT 连接、对话历史、提示词、技能、插件连接、项目文件、终端、代码编辑与 Notebook。项目环境可选择 Python、设为默认或项目覆盖，检查并补齐科研依赖。新电脑可一键安装科研环境。缺少 Node.js 时，ChatGPT 连接页提供官方下载入口与重新检测。

模块更新保留对话和配置。用户通过插件市场手动确认更新后才会安装。若下载超时，使用上面的 ZIP 本地导入。真实模型连接需要自己的账号或 API 配置。

## 更新按钮

工具栏 1.114.5 起更新按钮只显示在“浏览市场”；AI 1.3.8 仍兼容工具栏 1.114.3。旧主程序的“已安装”按钮不会因单独升级 AI 而改变。
