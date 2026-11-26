
(() => {
  const copy = {
    pt: {
      navProjects: "Projetos",
      navJournal: "Devlog",
      navAbout: "Sobre",
      kicker: "DESENVOLVIMENTO · CIÊNCIA · TECNOLOGIA",
      heroTitle: 'Ideias em movimento.<br><span>Conhecimento em construção.</span>',
      heroText: "Um espaço para registrar projetos, experimentos e aprendizados — da programação à computação científica, da robótica à educação tecnológica.",
      explore: "Explorar projetos",
      projectsTitle: "Projetos em destaque",
      journalTitle: "Do laboratório ao devlog",
      aboutTitle: 'Construir é uma forma<br>de <span>investigar.</span>',
      aboutText: "Sou Akira, técnica em informática, estudante de Licenciatura em Química e desenvolvedora em constante aprendizado. Tenho interesse em programação, computação científica, inteligência artificial, robótica e educação tecnológica. Este espaço documenta o caminho entre uma ideia, seus testes e aquilo que aprendo ao construir.",
      search: "Buscar no devlog...",
      empty: "Nenhum artigo encontrado.",
      all: "Todos",
      read: "Ler artigo ↗"
    },

    en: {
      navProjects: "Projects",
      navJournal: "Devlog",
      navAbout: "About",
      kicker: "DEVELOPMENT · SCIENCE · TECHNOLOGY",
      heroTitle: 'Ideas in motion.<br><span>Knowledge in progress.</span>',
      heroText: "A space to document projects, experiments, and learning — from programming to scientific computing, robotics, and technology education.",
      explore: "Explore projects",
      projectsTitle: "Featured projects",
      journalTitle: "From lab to devlog",
      aboutTitle: 'Building is a way<br>to <span>investigate.</span>',
      aboutText: "I’m Akira, an IT technician, a Chemistry Education undergraduate, and a developer continuously learning. My interests include programming, scientific computing, artificial intelligence, robotics, and technology education. This space documents the path from an idea, through testing, to what I learn by building.",
      search: "Search the devlog...",
      empty: "No articles found.",
      all: "All",
      read: "Read article ↗"
    }
  };

  const projects = [
    {
      n: "Bilhares Simpléticos",
      type: "Scientific computing & mathematics",
      pt: "Simulador computacional de bilhares simpléticos, explorando matemática, física, visualização e simulação numérica.",
      en: "A computational symplectic billiards simulator exploring mathematics, physics, visualization, and numerical simulation.",
      tags: ["Python", "Mathematics", "Simulation"],
      url: "https://github.com/Akira-Kim/ProjetoOmega/tree/main/SimuladorBilharesSimpleticos",
      num: "01"
    },
    {
      n: "Gerenciador de Turmas",
      type: "Educational management",
      pt: "Projeto de software voltado à organização e ao gerenciamento de turmas e informações educacionais.",
      en: "A software project focused on organizing and managing classes and educational information.",
      tags: ["Software", "Management", "Education"],
      url: "https://github.com/Akira-Kim/ProjetoOmega",
      num: "02"
    },
    {
      n: "Sexta-feira",
      type: "Personal AI assistant",
      pt: "Assistente pessoal desenvolvido em Python, explorando inteligência artificial conversacional, memória persistente, ferramentas e automação.",
      en: "A personal assistant built with Python, exploring conversational AI, persistent memory, tools, and automation.",
      tags: ["Python", "AI", "SQLite"],
      url: "https://github.com/Akira-Kim/Sexta-feira",
      num: "03"
    },
    {
      n: "Obby Educativo",
      type: "Educational game development",
      pt: "Experiência educacional desenvolvida com Roblox Studio e Luau, envolvendo obstáculos, checkpoints, plataformas e mecânicas de jogo.",
      en: "An educational experience developed with Roblox Studio and Luau, featuring obstacles, checkpoints, platforms, and game mechanics.",
      tags: ["Roblox Studio", "Luau", "Game Design"],
      url: "https://github.com/Akira-Kim/Ctrl-Play",
      num: "04"
    },
    {
      n: "Smart Wood",
      type: "Collaborative academic project · 2023",
      pt: "Projeto de conclusão desenvolvido em equipe com Ana Luisa durante a formação técnica em Informática.",
      en: "A course completion project developed with Ana Luisa during the IT technical program.",
      tags: ["Teamwork", "Academic Project"],
      url: "https://github.com/Akira-Kim/Smart_Wood",
      num: "05"
    }
  ];

  let lang = "pt";
  let cat = "all";

  const $ = (selector) => document.querySelector(selector);

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));

  function renderProjects() {
    const key = lang;

    $("#projectGrid").innerHTML = projects.map((p) => `
      <article class="project">
        <div class="project-top">
          <span>${p.num} / PROJECT</span>
          <span>↗</span>
        </div>

        <h3>${esc(p.n)}</h3>
        <p>${esc(p[key])}</p>

        <div class="stack">
          ${p.tags.map((tag) => `
            <span>${esc(tag)}</span>
          `).join("")}
        </div>

        <a href="${p.url}" target="_blank" rel="noopener noreferrer">
          View repository ↗
        </a>
      </article>
    `).join("");
  }

  function renderFilters() {
    const cats = [
      "all",
      ...new Set(DEVLOG_POSTS.map((p) => p.category))
    ];

    $("#filters").innerHTML = cats.map((c) => `
      <button
        class="filter ${c === cat ? "active" : ""}"
        data-cat="${esc(c)}"
      >
        ${c === "all" ? copy[lang].all : esc(c)}
      </button>
    `).join("");

    document.querySelectorAll(".filter").forEach((button) => {
      button.addEventListener("click", () => {
        cat = button.dataset.cat;
        renderFilters();
        renderPosts();
      });
    });
  }

  function renderPosts() {
    const q = $("#search").value.trim().toLowerCase();

    const list = DEVLOG_POSTS.filter((p) => {
      const title = p.title[lang] || "";
      const excerpt = p.excerpt[lang] || "";

      return (
        (cat === "all" || p.category === cat) &&
        [title, excerpt, p.category]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    });

    $("#posts").innerHTML = list.map((p) => `
      <article
        class="post"
        role="button"
        tabindex="0"
        data-id="${esc(p.id)}"
      >
        <div class="post-meta">
          <span>
            ${new Date(p.date + "T12:00:00").toLocaleDateString(
              lang === "pt" ? "pt-BR" : "en-US",
              {
                day: "2-digit",
                month: "short",
                year: "numeric"
              }
            )}
          </span>

          <span class="post-tag">${esc(p.category)}</span>
        </div>

        <h3>${esc(p.title[lang] || p.title.pt || "")}</h3>
        <p>${esc(p.excerpt[lang] || p.excerpt.pt || "")}</p>
        <span class="more">${copy[lang].read}</span>
      </article>
    `).join("");

    $("#empty").classList.toggle("hidden", list.length > 0);

    $("#postCount").textContent =
      String(list.length).padStart(2, "0") + " ARTICLES";

    document.querySelectorAll(".post").forEach((element) => {
      const go = () => openPost(element.dataset.id);

      element.addEventListener("click", go);

      element.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          go();
        }
      });
    });
  }

  function openPost(id) {
    const p = DEVLOG_POSTS.find((post) => post.id === id);

    if (!p) return;

    $("#readerContent").innerHTML = `
      <div class="reader-meta">
        ${esc(p.category)} · ${esc(p.date)}
      </div>

      <h2 class="reader-title">
        ${esc(p.title[lang] || p.title.pt || "")}
      </h2>

      <div class="reader-body">
        ${p.body[lang] || p.body.pt || ""}
      </div>
    `;

    $("#reader").showModal();
  }

  function setLang(next) {
    lang = next;

    document.documentElement.lang =
      lang === "pt" ? "pt-BR" : "en";

    document.querySelectorAll("[data-t]").forEach((element) => {
      const value = copy[lang][element.dataset.t];

      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-t-html]").forEach((element) => {
      const value = copy[lang][element.dataset.tHtml];

      if (value) element.innerHTML = value;
    });

    document.querySelectorAll("[data-t-placeholder]").forEach((element) => {
      const value = copy[lang][element.dataset.tPlaceholder];

      if (value) element.placeholder = value;
    });

    $("#language").textContent =
      lang === "pt" ? "EN" : "PT";

    renderProjects();
    renderFilters();
    renderPosts();
  }

  $("#language").addEventListener("click", () => {
    setLang(lang === "pt" ? "en" : "pt");
  });

  $("#search").addEventListener("input", renderPosts);

  $("#close").addEventListener("click", () => {
    $("#reader").close();
  });

  $("#reader").addEventListener("click", (event) => {
    if (event.target === $("#reader")) {
      $("#reader").close();
    }
  });

  $("#year").textContent = new Date().getFullYear();

  renderProjects();
  renderFilters();
  renderPosts();
})();
