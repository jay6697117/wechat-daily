# Task Plan

## Goal
为项目首页 `index.html` 设计并接入符合“微信群聊日更漫画馆”定位的 favicon 与左上角 logo，同时优化首页顶部品牌区布局。

## Scope
- Target page: `index.html`
- New assets: `assets/logo.svg`, `assets/favicon.svg`, `assets/favicon.ico`
- Keep existing catalog data, episode links, loader behavior, and comic date pages unchanged.

## Hard Rules
- 所有沟通与规划说明使用简体中文。
- 代码、路径、文件名、标识符保持英文或既有项目命名。
- 不引入构建系统或外部前端依赖。
- 不覆盖聊天记录、剧本、漫画 PNG/WebP、日期页 HTML。
- favicon/logo 需要贴合项目语义：微信群聊、日更、漫画分镜、夜空舞台。

## Phases
| Phase | Status | Notes |
|---|---|---|
| 1. Inspect homepage and current assets | complete | `index.html` is a single-file homepage with inline CSS/JS and a placeholder `data:,` favicon. |
| 2. Design favicon and logo assets | in_progress | Add lightweight SVG assets and generate a real `.ico` favicon. |
| 3. Integrate top-left brand layout | pending | Add a top bar/brand lockup above the hero and replace favicon links. |
| 4. Validate HTML/assets/browser behavior | pending | Check file existence, HTML references, and browser console/network. |

## Decisions
- Use vector SVG for the visible logo because it stays crisp on high-DPI screens and is easy to review in git.
- Generate a small `favicon.ico` for browser compatibility, with `favicon.svg` as the sharper modern fallback.
- Place the logo in a slim top bar above the hero, rather than inside the hero card, so it reads as site identity and stays stable on mobile.

## Errors Encountered
| Error | Attempt | Resolution |
|---|---|---|
| None | current task | Not applicable. |
