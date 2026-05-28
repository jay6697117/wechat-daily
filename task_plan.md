# Task Plan

## Goal
重新优化 `人类高质量前端框架群/`：19 张漫画图全部使用 `$imagegen` 重新生成，风格对齐 `AI全书学习交流群/`，同时修复 HTML 阅读页与参考群页面的功能和样式差距。

## Scope
- Reference root: `AI全书学习交流群/`
- Target root: `人类高质量前端框架群/`
- Compare all PNG comic images currently under both roots.
- Preserve the target group story scripts, dates, filenames, HTML image references, and no-`沙雕鱼` role rule.
- Regenerate all 19 target PNG comic pages with built-in `$imagegen`.
- Replace the target date-page HTML with a reader that matches the functionality and style of `AI全书学习交流群` date pages.

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
| 1. Reconfirm references and current state | complete | Initial state and references checked; no lingering generation/server process. |
| 2. Generate 19 replacement images with `$imagegen` | complete | All target PNG bodies were regenerated and copied to stable filenames. |
| 3. Regenerate WebP derivatives | complete | Full, 768w, and 512w WebP derivatives regenerated for every PNG. |
| 4. Replace target HTML with reference-style reader | complete | Target date pages now reuse the reference reader CSS/JS functionality. |
| 5. Validate optimized output | complete | Image count/dimensions, refs, forbidden text, contact sheet, browser console/network, and viewer open/close checked. |

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
- Superseded decision: previous title/footer-only optimization is no longer sufficient. User explicitly requires all 19 target comic images to be regenerated with `$imagegen`.
- Image prompts must explicitly fix the issues reported by the user: reference-style footer, differentiated character designs, no speech bubble without a visible speaker, and target group pages aligned with reference HTML.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| None | current task | Not applicable. |
| 2026-05-27 page 2 imagegen server error | First attempt returned a server error | Retried with a shorter prompt and copied the successful image. |
| Generated footer glyph squares | Decorative footer stars rendered as square boxes in local font | Re-ran title/footer normalization without decorative glyphs and regenerated WebP derivatives. |
| User rejected partial style-layer fix | Previous optimization did not regenerate all image bodies | Regenerate all 19 target PNGs with `$imagegen` and then rebuild derivatives/HTML. |
| 2026-05-26 page 1 imagegen returned landscape | First retry produced `1536 x 1024` | Re-ran with explicit portrait `1024x1536` constraints and copied only after dimension validation. |
| 2026-05-26 page 7 footer text drift | Image body matched the requested page but footer drifted to the workflow page | Keep the regenerated comic body and normalize exact title/footer text after all images are regenerated. |
