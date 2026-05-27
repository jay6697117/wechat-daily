# Task Plan

## Goal
根据项目根目录的 `CLAUDE.md` 生成 Codex 使用的项目级 `AGENTS.md`，保留现有日更漫画工作流、视觉风格、角色一致性、内容安全和 `index.html` 验证规则，并把 Claude 专属路径适配为 Codex 项目路径。

## Scope
- Source file: `CLAUDE.md`
- Target file: `AGENTS.md`
- Keep project-specific rules intact.
- Adapt image generation helper path from `.claude/skills/...` to `.codex/skills/...` because this is for Codex.

## Hard Rules
- 不删除或回滚用户已有业务产物。
- 不改动漫画、聊天记录、脚本、HTML 或图片文件。
- `AGENTS.md` 正文使用简体中文。
- 代码路径、命令、文件名和标识符保持原样。
- 只做项目级 agent 指令转换，不扩展无关工程任务。

## Phases
| Phase | Status | Notes |
|---|---|---|
| 1. Read source and current state | complete | Read `CLAUDE.md`, checked current files and existing planning files. |
| 2. Convert project rules to Codex `AGENTS.md` | complete | Preserved workflow and adapted `.codex` image helper path. |
| 3. Validate generated file | complete | Checked key sections, `.codex` helper path, and no `.claude` helper preference in `AGENTS.md`. |
| 4. Report result | complete | Ready to summarize file path and validation. |

## Decisions
- Treat `CLAUDE.md` as the source of truth for project-specific workflow rules.
- Keep both `.codex` and `.claude` context implicit in the repository, but make `.codex/skills/codex-gateway-imagegen` the Codex-facing primary helper path in `AGENTS.md`.
- Do not alter previous comic-generation assets or site files as part of this task.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| None | current task | Not applicable. |
