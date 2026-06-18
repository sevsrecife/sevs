/* ==========================================================================
   Vigilância Epidemiológica — Dicionários de Dados SINAN (Agravos)
   ========================================================================== */

const AGRAVOS = [
    { nome: "Animais Peçonhentos", categoria: "Acidentes", arquivo: "agravos/AAP_DIC_DADOS_Animais_Pedonhentos_v5.pdf" },
    { nome: "AIDS (Adulto)", categoria: "IST/HIV/AIDS", arquivo: "agravos/AidsAdulto_DIC_DADOS_Aids_adulto_v5.pdf" },
    { nome: "AIDS (Criança)", categoria: "IST/HIV/AIDS", arquivo: "agravos/AidsCrianca_DIC_DADOS_Aids_crianca_v5.pdf" },
    { nome: "Atendimento Antirrábico", categoria: "Zoonoses", arquivo: "agravos/Atendimento Anti-rabico_DIC_DADOS_anti_rabico_v5.1.pdf" },
    { nome: "Botulismo", categoria: "Toxi-infecções", arquivo: "agravos/Botulismo_DIC_DADOS_Botulismo_v5.pdf" },
    { nome: "Doença de Chagas", categoria: "Doenças Transmissíveis", arquivo: "agravos/Chagas_DIC_DADOS_Chagas_v5.pdf" },
    { nome: "Cólera", categoria: "Doenças Transmissíveis", arquivo: "agravos/Colera_DIC_DADOS_Colera_v5.pdf" },
    { nome: "Coqueluche", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/Coqueluche_DIC_DADOS_Coqueluche_v5.pdf" },
    { nome: "Dengue", categoria: "Arboviroses", arquivo: "agravos/Dengue_DIC_DADOS_ONLINE.pdf" },
    { nome: "Difteria", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/Difteria_DIC_DADOS_Difteria_v5.pdf" },
    { nome: "DRT — Acidente de Trabalho Grave", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/DRT Acidente Trabalho Grave_DIC_DADOS_DRT_Acidente_Trabalho_grave_v5.pdf" },
    { nome: "DRT — Acidente Biológico", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/drtmb_DIC_DADOS_DRT_Acidente_Trabalho_Biologico_v5.pdf" },
    { nome: "DRT — Câncer Relacionado ao Trabalho", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/drtc_DIC_DADOS_DRT_Cancer_v5.pdf" },
    { nome: "DRT — Dermatoses Ocupacionais", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/DRT Dermatoses Ocupacionais_DIC_DADOS_DRT_Dermatoses_v5.pdf" },
    { nome: "DRT — LER/DORT", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/DRT LER DORT_DIC_DADOS_DRT_LERDORT_v5.pdf" },
    { nome: "DRT — PAIR", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/DRT PAIR_DIC_DADOS_DRT_PAIR_v5.pdf" },
    { nome: "DRT — Pneumoconioses", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/drtpneumo_DIC_DADOS_DRT_Pneumoconioses_v5.pdf" },
    { nome: "DRT — Transtornos Mentais", categoria: "Doenças Relacionadas ao Trabalho", arquivo: "agravos/DRT Transtorno Mental_DIC_DADOS_DRT_TranstornosMentais_v5.pdf" },
    { nome: "Doenças Transmitidas por Alimentos (DTA)", categoria: "Toxi-infecções", arquivo: "agravos/DTA_DIC_DADOS_Surto_DTA_v5.pdf" },
    { nome: "Epizootia", categoria: "Zoonoses", arquivo: "agravos/Epizootia_DIC_DADOS_EPIZOO_NET_v5.pdf" },
    { nome: "Esquistossomose", categoria: "Doenças Transmissíveis", arquivo: "agravos/Esquistossomose_DIC_DADOS_Esquistossomose_v5.pdf" },
    { nome: "Exantemáticas", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/Exantematicas_DIC_DADOS_Exantematica_v5.pdf" },
    { nome: "Febre Amarela", categoria: "Arboviroses", arquivo: "agravos/Febre Amarela_DIC_DADOS_Febre_Amarela_v5.pdf" },
    { nome: "Febre do Nilo Ocidental", categoria: "Arboviroses", arquivo: "agravos/Febre_do_Nilo_DIC_DADOS_Febre_do_Nilo.pdf" },
    { nome: "Febre Maculosa", categoria: "Zoonoses", arquivo: "agravos/Febre Maculosa_DIC_DADOS_Febre_Maculosa_v5.pdf" },
    { nome: "Febre Tifoide", categoria: "Doenças Transmissíveis", arquivo: "agravos/Febre-Tifoide_DIC_DADOS_Febre_Tifoide_v5.pdf" },
    { nome: "Gestante HIV+", categoria: "IST/HIV/AIDS", arquivo: "agravos/GestanteHIV_DIC_DADOS_Gestante_HIV_v5.pdf" },
    { nome: "Hanseníase", categoria: "Doenças Transmissíveis", arquivo: "agravos/Hanseniase_DIC_DADOS_Hanseniase_v5.pdf" },
    { nome: "Hantavirose", categoria: "Zoonoses", arquivo: "agravos/Hantavirose_DIC_DADOS_Hantavirose_v5.pdf" },
    { nome: "Hepatites Virais", categoria: "Doenças Transmissíveis", arquivo: "agravos/Hepatites Virais_DIC_DADOS_Hepatite_v5.pdf" },
    { nome: "Influenza", categoria: "Respiratórias", arquivo: "agravos/Influenza_DIC_DADOS_Influenza_v5.pdf" },
    { nome: "Intoxicação Exógena", categoria: "Toxi-infecções", arquivo: "agravos/iexog_DIC_DADOS_Intoxicacao_Exogena_v6_26.02.2026.pdf" },
    { nome: "Investigação de Surto", categoria: "Surtos", arquivo: "agravos/Surto_DIC_DADOS_Investigacao_surto_v5.pdf" },
    { nome: "Leishmaniose Tegumentar Americana", categoria: "Doenças Transmissíveis", arquivo: "agravos/Leishmaniose Tegumentar Americana_DIC_DADOS_LTA_v5.pdf" },
    { nome: "Leishmaniose Visceral", categoria: "Doenças Transmissíveis", arquivo: "agravos/Leishmaniose Visceral_DIC_DADOS_LV_v5.pdf" },
    { nome: "Leptospirose", categoria: "Zoonoses", arquivo: "agravos/Leptospirose_DIC_DADOS_Leptospirose_v5.pdf" },
    { nome: "Malária", categoria: "Doenças Transmissíveis", arquivo: "agravos/Malaria_DIC_DADOS_Malaria_v5.pdf" },
    { nome: "Meningite", categoria: "Doenças Transmissíveis", arquivo: "agravos/Meningite_DIC_DADOS_Meningite_v5.pdf" },
    { nome: "Paralisia Flácida Aguda / Poliomielite", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/PFA-Poliomielite_DIC_DADOS_PFA_v5.pdf" },
    { nome: "Peste", categoria: "Doenças Transmissíveis", arquivo: "agravos/Peste_DIC_DADOS_Peste_v5.pdf" },
    { nome: "Planilha de Surto", categoria: "Surtos", arquivo: "agravos/Surto_DIC_DADOS_Planilha_Surto_v5.pdf" },
    { nome: "Raiva Humana", categoria: "Zoonoses", arquivo: "agravos/Raiva Humana_DIC_DADOS_Raiva_v5.pdf" },
    { nome: "Rotavírus", categoria: "Doenças Transmissíveis", arquivo: "agravos/Rotavirus_DIC_DADOS_ROTA_NET_v5.1.pdf" },
    { nome: "Sífilis Congênita", categoria: "IST/HIV/AIDS", arquivo: "agravos/Sifilis-Con_DIC_DADOS_Sifilis_Congenita_v5.pdf" },
    { nome: "Sífilis em Gestante", categoria: "IST/HIV/AIDS", arquivo: "agravos/Sifilis-Ges_DIC_DADOS_Gestante_Sifilis_v5.pdf" },
    { nome: "Síndrome da Rubéola Congênita (SRC)", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/SRC_DIC_DADOS_SRC_v5.pdf" },
    { nome: "Tétano Acidental", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/tetanoacidental_DIC_DADOS_Tetano_Acidental_v5.pdf" },
    { nome: "Tétano Neonatal", categoria: "Doenças Imunopreveníveis", arquivo: "agravos/tetanoneonatal_DIC_DADOS_Tetano_NeoNatal_v5.pdf" },
    { nome: "Tracoma", categoria: "Doenças Transmissíveis", arquivo: "agravos/Tracoma_DIC_DADOS_Tracoma_v5.pdf" },
    { nome: "Tuberculose", categoria: "Doenças Transmissíveis", arquivo: "agravos/Tuberculose_DICI_DADOS_NET_Tuberculose_23_07_2020.pdf" },
];

function letraInicial(texto) {
    return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0).toUpperCase();
}

function letrasDisponiveis(lista) {
    return new Set(lista.map(a => letraInicial(a.nome)));
}

function criarFiltroAlfabetico(letraAtiva, disponiveis) {
    const container = document.getElementById("filtro-alfabetico");
    if (!container) return;
    container.innerHTML = "";

    const btnTodos = document.createElement("button");
    btnTodos.className = "btn-letra-todos" + (letraAtiva === "TODOS" ? " ativo" : "");
    btnTodos.textContent = "Todos";
    btnTodos.setAttribute("aria-pressed", letraAtiva === "TODOS");
    btnTodos.addEventListener("click", () => renderizar("TODOS"));
    container.appendChild(btnTodos);

    const sep = document.createElement("div");
    sep.style.cssText = "width:1px;height:36px;background:#dee2e6;margin:0 4px;";
    container.appendChild(sep);

    for (let i = 65; i <= 90; i++) {
        const letra = String.fromCharCode(i);
        const disponivel = disponiveis.has(letra);
        const btn = document.createElement("button");
        btn.className = "btn-letra" + (letraAtiva === letra ? " ativo" : "") + (disponivel ? "" : " disabled");
        btn.textContent = letra;
        btn.setAttribute("aria-label", `Filtrar por ${letra}`);
        btn.setAttribute("aria-pressed", letraAtiva === letra);
        if (disponivel) btn.addEventListener("click", () => renderizar(letra));
        container.appendChild(btn);
    }
}

function criarItemAgravo(agravo) {
    const item = document.createElement("a");
    item.href = agravo.arquivo;
    item.target = "_blank";
    item.rel = "noopener noreferrer";
    item.className = "list-group-item list-group-item-action agravo-item d-flex justify-content-between align-items-center gap-3";
    item.innerHTML = `
        <div class="d-flex flex-column flex-md-row align-items-md-center gap-2 flex-grow-1 min-width-0">
            <span class="agravo-nome-tag flex-shrink-0">${letraInicial(agravo.nome)}</span>
            <div class="min-width-0">
                <div class="mb-1">
                    <span class="agravo-categoria-tag">${agravo.categoria}</span>
                </div>
                <h5 class="mb-0 fw-bold text-primary-dark">${agravo.nome}</h5>
                <small class="text-muted"><i class="bi bi-file-earmark-pdf me-1"></i>Dicionário de Dados SINAN NET</small>
            </div>
        </div>
        <span class="btn-dic flex-shrink-0"><i class="bi bi-download me-1"></i>PDF</span>
    `;
    return item;
}

function criarGrupoLetra(letra) {
    const div = document.createElement("div");
    div.className = "grupo-letra";
    div.innerHTML = `<span class="grupo-letra-char">${letra}</span><span class="grupo-letra-linha"></span>`;
    return div;
}

function renderizar(letraAtiva, termoBusca) {
    const disponiveis = letrasDisponiveis(AGRAVOS);
    criarFiltroAlfabetico(letraAtiva, disponiveis);

    const lista = document.getElementById("lista-agravos");
    const vazio = document.getElementById("estado-vazio");
    const contador = document.getElementById("resultado-contador");
    if (!lista || !vazio || !contador) return;
    lista.innerHTML = "";

    let filtrados = letraAtiva === "TODOS"
        ? [...AGRAVOS]
        : AGRAVOS.filter(a => letraInicial(a.nome) === letraAtiva);

    if (termoBusca) {
        const termo = termoBusca.toLowerCase();
        filtrados = filtrados.filter(a =>
            a.nome.toLowerCase().includes(termo) || a.categoria.toLowerCase().includes(termo)
        );
    }

    if (filtrados.length === 0) {
        lista.classList.add("d-none");
        vazio.classList.remove("d-none");
        contador.textContent = "0 agravos";
        return;
    }

    lista.classList.remove("d-none");
    vazio.classList.add("d-none");
    contador.textContent = `${filtrados.length} agravo${filtrados.length > 1 ? "s" : ""}`;

    const grupos = filtrados.reduce((acc, a) => {
        const l = letraInicial(a.nome);
        if (!acc[l]) acc[l] = [];
        acc[l].push(a);
        return acc;
    }, {});

    Object.keys(grupos).sort().forEach(letra => {
        lista.appendChild(criarGrupoLetra(letra));
        grupos[letra].forEach(a => lista.appendChild(criarItemAgravo(a)));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    } catch (e) {
        console.warn('VLibras não pôde ser carregado.', e);
    }

    const navbar = document.querySelector('.transition-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 30);
        });
    }

    const buscaInput = document.getElementById("busca-agravo");
    if (buscaInput) {
        buscaInput.addEventListener("input", () => {
            renderizar("TODOS", buscaInput.value.trim());
        });
    }

    renderizar("TODOS");
});
