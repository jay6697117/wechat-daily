
    const catalog = [
      {
        id: "ai-books-study",
        name: "AI全书学习交流群",
        icon: "📘",
        themeColor: "#10b981",
        themeRgb: "16, 185, 129",
        description: "围绕 AI 工具、账号事故、硬盘急诊和群聊吐槽展开的日更漫画。",
        path: "AI全书学习交流群/",
        episodes: [
          {
            date: "2026-05-25",
            title: "20260525话《账号拉闸，群聊开庭》",
            summary: "从 Claude Code 输出爆掉到账号拉闸、验证门、工具跑偏 and 职场坑洞的一整天群聊小剧场。",
            href: "AI全书学习交流群/2026-05-25/index.html"
          },
          {
            date: "2026-05-24",
            title: "20260524话《硬盘一转，群聊开会》",
            summary: "沙雕鱼的机械硬盘疑似阵亡，群聊瞬间变成远程硬盘急诊，深夜又接上账号陨落。",
            href: "AI全书学习交流群/2026-05-24/index.html"
          }
        ]
      },
      {
        id: "ai-editor-tech-2",
        name: "AI编辑器技术讨论-二群",
        icon: "💻",
        themeColor: "#8b5cf6",
        themeRgb: "139, 92, 246",
        description: "围绕 AI 编辑器、ComfyUI、生图工具、显卡焦虑和云端订阅展开的技术群聊漫画。",
        path: "AI编辑器技术讨论-二群/",
        episodes: [
          {
            date: "2026-05-24",
            title: "20260524话《显卡烟囱，AI生图审判》",
            summary: "从考试题库、ComfyUI、本地显卡、云端视频到 AI 生图乱码审判的一天群聊小剧场。",
            href: "AI编辑器技术讨论-二群/2026-05-24/index.html"
          }
        ]
      }
    ];

    const globalLoader = document.getElementById("global-loader");
    const groupGrid = document.getElementById("groupGrid");
    const dateList = document.getElementById("dateList");
    const library = document.getElementById("library");
    const activeGroupName = document.getElementById("activeGroupName");
    const activeGroupDesc = document.getElementById("activeGroupDesc");
    const activeGroupMeta = document.getElementById("activeGroupMeta");
    const groupCount = document.getElementById("groupCount");
    const episodeCount = document.getElementById("episodeCount");
    const latestDate = document.getElementById("latestDate");

    function escapeHTML(value) {
      return String(value).replace(/[&<>'"]/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      }[char]));
    }

    let catalogReady = false;
    let pageLoaded = document.readyState === "complete";

    function hideGlobalLoader() {
      globalLoader.classList.add("is-hidden");
      window.setTimeout(() => globalLoader.setAttribute("hidden", ""), 400);
    }

    function updateGlobalLoader() {
      if (catalogReady && pageLoaded) {
        hideGlobalLoader();
      }
    }

    if (!pageLoaded) {
      window.addEventListener("load", () => {
        pageLoaded = true;
        updateGlobalLoader();
      }, { once: true });
    }

    function setCatalogBusy(isBusy) {
      groupGrid.setAttribute("aria-busy", String(isBusy));
      dateList.setAttribute("aria-busy", String(isBusy));
      library.setAttribute("aria-busy", String(isBusy));
    }

    function scheduleInitialRender(callback) {
      window.requestAnimationFrame(() => {
        if ("requestIdleCallback" in window) {
          window.requestIdleCallback(callback, { timeout: 900 });
        } else {
          window.setTimeout(callback, 80);
        }
      });
    }

    function renderStats() {
      const episodes = catalog.flatMap(group => group.episodes);
      const latest = episodes.map(episode => episode.date).sort().at(-1) || "-";
      groupCount.textContent = catalog.length;
      episodeCount.textContent = episodes.length;
      latestDate.textContent = latest;
    }

    function renderGroups(activeId) {
      groupGrid.innerHTML = catalog.map(group => `
        <button class="group-card${group.id === activeId ? " active" : ""}" 
                type="button" 
                data-group-id="${escapeHTML(group.id)}"
                style="--group-theme: ${group.themeColor}; --group-theme-rgb: ${group.themeRgb};">
          <span class="group-icon" aria-hidden="true">${escapeHTML(group.icon || group.name.slice(0, 1))}</span>
          <span class="group-card-content">
            <h3>${escapeHTML(group.name)}</h3>
            <p>${escapeHTML(group.description)}</p>
            <span class="group-meta">
              <span class="pill">${group.episodes.length} 话漫画</span>
            </span>
          </span>
        </button>
      `).join("");

      groupGrid.querySelectorAll(".group-card").forEach(card => {
        card.addEventListener("click", () => selectGroup(card.dataset.groupId, true));
      });
    }

    function renderEpisodes(group) {
      activeGroupName.textContent = group.name;
      activeGroupDesc.textContent = group.description;
      activeGroupMeta.textContent = `${group.episodes.length} 话 · 按日期倒序`;

      if (group.episodes.length === 0) {
        dateList.innerHTML = "<div class=\"empty-state\">这个群还没有可打开的漫画页面。</div>";
        return;
      }

      dateList.innerHTML = group.episodes.map(episode => `
        <a class="episode-card" href="${escapeHTML(episode.href)}">
          <span class="date-badge">
            <span>${escapeHTML(episode.date)}</span>
            <span>YYYY-MM-DD</span>
          </span>
          <span class="episode-main">
            <h3>${escapeHTML(episode.title)}</h3>
            <p>${escapeHTML(episode.summary)}</p>
          </span>
          <span class="open-mark" aria-hidden="true">→</span>
        </a>
      `).join("");
    }

    function selectGroup(id, shouldScroll) {
      const group = catalog.find(item => item.id === id) || catalog[0];
      if (!group) return;
      history.replaceState(null, "", `#${group.id}`);
      
      // 动态更新右侧看板的主题变量
      library.style.setProperty("--group-theme", group.themeColor);
      library.style.setProperty("--group-theme-rgb", group.themeRgb);

      renderGroups(group.id);
      renderEpisodes(group);
      if (shouldScroll) {
        // 大屏下滚动到展厅，如果是在小屏下尤为必要
        document.getElementById("library").scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    renderStats();
    scheduleInitialRender(() => {
      selectGroup(location.hash.replace("#", "") || catalog[0]?.id, false);
      setCatalogBusy(false);
      catalogReady = true;
      updateGlobalLoader();
    });
  