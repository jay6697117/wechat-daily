# Task Plan

## Goal
为 `AI编辑器技术讨论-二群` 生成 2026-05-24 和 2026-05-25 两天的微信群日更漫画资料。必须先阅读项目 `CLAUDE.md`，参考 `AI全书学习交流群/2026-05-25/` 的完整微信群漫画生成逻辑，并使用 agent team 分工实施。

## Output Directories
- `AI编辑器技术讨论-二群/2026-05-24/`
- `AI编辑器技术讨论-二群/2026-05-25/`

## Required Outputs Per Day
- `YYYY-MM-DD_AI编辑器技术讨论-二群_聊天记录.txt`
- `YYYYMMDD话_<短标题>_剧本.md`
- 用户确认剧本和第一页后，再继续生成 PNG 漫画页与 `index.html`。

## Hard Rules
- 先用 `wechat-cli` 导出当天聊天记录。
- 先根据完整聊天记录生成剧本。
- 用户确认剧本后，才生成漫画图和 `index.html`。
- 批量出图前先生成并核查第一页；第一页确认后再继续后续页面。
- 页数不能固定，必须由当天聊天量和剧本分镜决定。
- 图片生成必须使用 `.claude/skills/codex-gateway-imagegen` / helper 脚本，尺寸 `1024x1536`。
- 参考图优先使用 `AI全书学习交流群/2026-05-24/` 的漫画图；参考生成逻辑使用 `AI全书学习交流群/2026-05-25/` 的完整产物。
- 账号、token、网络节点、平台链接等敏感内容只能抽象成漫画笑点，不能写教程、真实链接、价格、token 字符串或绕过步骤。

## Phases
| Phase | Status | Owner | Notes |
|---|---|---|---|
| 1. Restore context and reset planning files | complete | main | Ran session catchup, read current planning files and project CLAUDE.md, corrected target group to `AI编辑器技术讨论-二群`. |
| 2. Create agent team and task list | complete | main | Created team `wechat-editor-comics-20260524-25`; created shared tasks and dependencies. |
| 3. Analyze reference generation logic | complete | reference-analyst | Reference workflow analysis task is completed. |
| 4. Export target chat records | complete | main | Exported both dates with `--limit 5000`; 2026-05-24 has 185 lines and 2026-05-25 has 768 lines. |
| 5. Draft scripts for both dates | complete | main | Main controller wrote both scripts after script agents failed to produce files. |
| 6. Validate script files and wait for confirmation | complete | main | Verified script files, page counts, and no real URLs; waiting for user approval before image generation. |
| 7. Generate first page after script approval | blocked | image-generator | Only start after user confirms scripts. |
| 8. Batch-generate remaining pages and index | blocked | image-generator/main | Only after first page confirmation. |

## Decisions
- Because project rules require approval gates, this session will first produce chat records and scripts for both days.
- Do not generate PNGs or `index.html` until scripts are approved.
- Use agent team for reference analysis, chat extraction, and script drafting.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| Planning files temporarily referenced the wrong target group | 1 | User confirmed the correct target is `AI编辑器技术讨论-二群`; planning files were corrected back to that group. |
