# Task Plan

## Goal
对比 `AI全书学习交流群/` 与 `人类高质量前端框架群/` 两个目录下的漫画图风格差异，并优化 `人类高质量前端框架群/`，使其更贴近 `AI全书学习交流群/` 的漫画页风格。

## Scope
- Reference root: `AI全书学习交流群/`
- Target root: `人类高质量前端框架群/`
- Compare all PNG comic images currently under both roots.
- Preserve the target group story scripts, dates, filenames, HTML image references, and no-`沙雕鱼` role rule.
- Optimize image style only where it moves the target closer to the reference without copying reference fixed characters.

## Hard Rules
- 所有说明与总结使用简体中文。
- 剧本、HTML、文件名、代码和标识符按项目既有风格处理。
- 每张漫画 PNG 固定 `1024x1536`。
- 不做真实微信截图，不画真实群友肖像。
- 不展示真实 URL、API key、token、手机号、支付链路、绕过流程、微信自动化教程或投资建议。
- 本群不使用 `沙雕鱼` 固定角色；剧本和图片角色必须完全根据当天聊天昵称与剧情编排，不引入鱼形吉祥物。
- 图片必须最终复制到项目目录，不能只留在 `$CODEX_HOME/generated_images`。

## Phases
| Phase | Status | Notes |
|---|---|---|
| 1. Reconfirm references and current state | complete | Read project rules, prior planning files, and current image inventories. |
| 2. Generate comparison evidence | complete | Built full contact sheets for 29 reference PNGs and 19 target PNGs. |
| 3. Identify style differences | complete | Main gap was target title/footer strips being cleaner and less like reference comic pages. |
| 4. Optimize target images | complete | Repainted title/footer/frame layer with reference-style black borders and vector gold star markers; regenerated WebP derivatives. |
| 5. Validate optimized output | complete | Confirmed 19 PNGs, 57 WebPs, no missing HTML image references, clean target forbidden-text check, and optimized contact sheet review. |

## Decisions
- Use one stable title per episode:
  - `20260525话《API钥匙与十连Agent》`
  - `20260526话《上下文瘦身与漫画馆出道》`
  - `20260527话《Vue叉车与语音Rapper》`
- Use page counts from subagent/read-only analysis: 6, 7, and 6 pages.
- Use `$imagegen` built-in mode directly because the user explicitly requested `$imagegen`.
- Generate complete pages without waiting for extra user confirmation, because the current instruction is to implement the approved plan.
- Keep root `index.html` changes limited to adding the new group and its three episodes.
- User correction: `人类高质量前端框架群` has no `沙雕鱼` role; remove that fixed-role assumption from scripts and image prompts.
- Current optimization decision: do not regenerate all image bodies, because the story panels already match scripts and safety constraints. Apply deterministic style-layer optimization to title/footer/page frame, which is the most consistent visual mismatch against the reference directory.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| None | current task | Not applicable. |
| 2026-05-27 page 2 imagegen server error | First attempt returned a server error | Retried with a shorter prompt and copied the successful image. |
| Generated footer glyph squares | Decorative footer stars rendered as square boxes in local font | Re-ran title/footer normalization without decorative glyphs and regenerated WebP derivatives. |
