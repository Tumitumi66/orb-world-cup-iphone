# 小球竞技场 · iPhone Safari 第10版

游戏网址：https://tumitumi66.github.io/orb-world-cup-iphone/

32支颜色队伍，使用原创战队名与重新配色的旗帜图案。支持随机打乱、32强交叉晋级、手动或自动连赛。

- 圆形与方形场地，共8种布局。
- 左轮手枪仅3发；7种近战武器命中2次后耗尽（命中盾牌、召唤球也计算）。
- 盾牌和盾刺可被新拾取的武器替换；苹果回血保留当前装备。
- 图案球带追踪眼神；血量下降产生裂纹，回血修复，归零碎裂。
- iPhone安全区、触屏布局、Safari PCM WAV音效、后台暂停、进度保存和离线游玩。

首次点开始或试听启用声音。Safari“分享 → 添加到主屏幕”可独立打开。首次联网加载并缓存完成后可离线使用。

## 发布与维护

Pages来源为GitHub Actions，.github/workflows/pages.yml直接发布根目录静态文件。修改默认分支后会自动发布。

本地源码位于 outputs/orb-arena-v10。执行 work/build_v10.py 生成本地版本，再执行 work/package_v10.py 生成这个手机发布目录与备份包。资源路径为相对路径，支持GitHub Pages仓库子目录。
