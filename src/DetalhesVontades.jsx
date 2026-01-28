import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DetalhesVontades.css";

const funcionamentoPelourinho = {
  atendimento: "Todos os dias • 9:00 - 18:00",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoMercadoModelo = {
  atendimento: "Seg a sáb • 9:00 - 18:00 | Dom • 9:00 - 14:00",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoBonfim = {
  atendimento: "Seg a sáb • 8:00 - 17:00 | Dom • 8:00 - 14:00",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoFarolBarra = {
  atendimento: "Ter a dom • 9:00 - 18:00",
  pagamento: "Ingresso simbólico",
  reserva: "Não precisa",
  movimento: "Moderado",
};

const funcionamentoPraiaLivre = {
  atendimento: "Todos os dias • Livre (melhor pela manhã ou fim de tarde)",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Variável",
};

const funcionamentoDiqueTororo = {
  atendimento: "Todos os dias • 6:00 - 22:00",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Moderado",
};

const funcionamentoRioVermelho = {
  atendimento: "Bares e restaurantes • Tarde e noite",
  pagamento: "Consumo no local",
  reserva: "Depende do local",
  movimento: "Movimentado à noite",
};

const funcionamentoItapua = {
  atendimento: "Todos os dias • Livre",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Moderado",
};

const funcionamentoPraiaDoForte = {
  atendimento: "Todos os dias • Livre | Projeto Tamar: 9:00 - 17:00",
  pagamento: "Praia gratuita | Tamar pago",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoChapada = {
  atendimento: "Parques e trilhas • 7:00 - 17:00",
  pagamento: "Guias e entradas variáveis",
  reserva: "Recomendado",
  movimento: "Variável",
};

const funcionamentoCachoeiraFumaca = {
  atendimento: "Trilha • 6:00 - 16:00",
  pagamento: "Guia recomendado",
  reserva: "Recomendado",
  movimento: "Moderado",
};

const funcionamentoMorroSP = {
  atendimento: "Todos os dias • Livre",
  pagamento: "Taxa turística",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoArraial = {
  atendimento: "Todos os dias • Livre",
  pagamento: "Gratuito",
  reserva: "Não precisa",
  movimento: "Moderado",
};

const funcionamentoElevadorLacerda = {
  atendimento: "Seg a dom • 7:00 - 22:00",
  pagamento: "Tarifa simbólica",
  reserva: "Não precisa",
  movimento: "Movimentado",
};

const funcionamentoCoffeeLab = { atendimento: "12:00 - 22:00", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Movimentado à noite" };
const funcionamentoCafeDoMercado = { atendimento: "07:00 - 18:00", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Moderado" };
const funcionamentoCafeComProsa = { atendimento: "13:00 - 21:00", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Tranquilo à tarde" };
const funcionamentoSantaClara = { atendimento: "08:00 - 21:00", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Movimentado" };
const funcionamentoVersado = { atendimento: "07:00 - 21:00", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Tranquilo de manhã" };
const funcionamentoOlindaCafe = { atendimento: "15:30 - 21:30", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Moderado à noite" };
const funcionamentoZoco = { atendimento: "15:00 - 20:30", pagamento: "Cartão, Pix, Dinheiro", reserva: "Não precisa", movimento: "Tranquilo à tarde" };

// Funcionamento padrão para lugares que não têm horário específico
const funcionamentoPadrao = {
  atendimento: "08:00 - 18:00",
  pagamento: "Cartão, Pix, Dinheiro",
  reserva: "Não precisa",
  movimento: "Tranquilo dependendo do horário",
};

const lugaresPorCategoria = {
  "Ir a cafeteria": {
    recife: [
      { nome: "Coffee Lab - Recife", icone: "☕", funcionamento: funcionamentoCoffeeLab },
      { nome: "Café do Mercado - Recife", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Café Amélia - Recife", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Padaria São José - Recife", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Café Pina - Recife", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Café com Prosa - Recife", icone: "☕", funcionamento: funcionamentoCafeComProsa },
      { nome: "Roasters Café - Pina", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "CatCafé – Gato & Grão, Aflitos", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Casa Salu - Recife", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Do Zero Café - Marco Zero", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Aurora Café - Marco Zero", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Cafeteria Bom Jesus - Marco Zero", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Café São Braz - Marco Zero", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Heiwa Gastrocafé - Marco Zero", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Cafeteria Santa Clara - Graças", icone: "☕", funcionamento: funcionamentoSantaClara },
      { nome: "81 Coffee co. - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "São Braz Coffee Shop - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Versado Café - Graças", icone: "☕", funcionamento: funcionamentoVersado },
      { nome: "Go Coffee - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Cafe e Letras Bistro - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Santo Doce - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "O Pátio Café & Cozinha - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
      { nome: "Cafe Jaqueira - Graças", icone: "☕", funcionamento: funcionamentoCafeDoMercado },
    ],
    olinda: [
      { nome: "Café do Forte - Olinda", icone: "☕", funcionamento: funcionamentoOlindaCafe },
      { nome: "Café São Bento - Olinda", icone: "☕", funcionamento: funcionamentoOlindaCafe },
      { nome: "Café da Rua do Amparo - Olinda", icone: "☕", funcionamento: funcionamentoOlindaCafe },
      { nome: "Café Cultural - Olinda", icone: "☕", funcionamento: funcionamentoOlindaCafe },
      { nome: "Café do Carmo - Olinda", icone: "☕", funcionamento: funcionamentoOlindaCafe },
      { nome: "Zoco Mirante - Olinda", icone: "☕", funcionamento: funcionamentoZoco },
    ],
  },
  "Ir ao museu": {
  recife: [
    {
      nome: "Cais do Sertão",
      icone: "🏛️",
      descricao: "Museu interativo sobre a cultura nordestina e Luiz Gonzaga.",
      funcionamento: {
        atendimento: "10:00 - 16:00",
        pagamento: "Entrada gratuita",
        reserva: "Não precisa",
        movimento: "Moderado",
      },
    },
    {
      nome: "Paço do Frevo",
      icone: "🎶",
      descricao: "Museu dedicado ao frevo, patrimônio cultural de Pernambuco.",
      funcionamento: {
        atendimento: "10:00 - 17:00",
        pagamento: "Ingresso acessível",
        reserva: "Não precisa",
        movimento: "Movimentado",
      },
    },
    {
      nome: "Museu do Homem do Nordeste",
      icone: "🏺",
      descricao: "Exposições sobre a cultura e história do Nordeste.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Instituto Ricardo Brennand",
      icone: "🏰",
      descricao: "Castelo-museu com acervo histórico e artístico.",
      funcionamento: {
        atendimento: "13:00 - 17:00",
        pagamento: "Ingresso pago",
        reserva: "Recomendado",
        movimento: "Tranquilo",
      },
    },
  ],
  olinda: [
    {
      nome: "Museu de Arte Sacra de Pernambuco",
      icone: "⛪",
      descricao: "Acervo de arte sacra em edifício histórico.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Museu Regional de Olinda",
      icone: "🏛️",
      descricao: "Museu com obras de artistas pernambucanos.",
      funcionamento: funcionamentoPadrao,
    },
  ],
},
"Ir na Feira da Aurora": {
  recife: [
    {
      nome: "Rua da Aurora",
      icone: "🌅",
      descricao: "Rua histórica à beira do rio Capibaribe, ideal para caminhadas e fotos.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Ponte da Boa Vista",
      icone: "🌉",
      descricao: "Ponte histórica com vista para o centro do Recife.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Praça da República",
      icone: "🌳",
      descricao: "Praça com prédios históricos e áreas para descanso.",
      funcionamento: funcionamentoPadrao,
    },
  ],
  olinda: [],
},
"Viajar para Bahia": {
  recife: [
    {
      nome: "Pelourinho",
      icone: "🏘️",
      descricao: "Centro histórico com arquitetura colonial e cultura afro-brasileira.",
      funcionamento: funcionamentoPelourinho,
    },
    {
      nome: "Mercado Modelo",
      icone: "🛍️",
      descricao: "Artesanato, lembranças típicas e comidas regionais.",
      funcionamento: funcionamentoMercadoModelo,
    },
    {
      nome: "Igreja do Bonfim",
      icone: "⛪",
      descricao: "Tradicional ponto de fé e das famosas fitinhas.",
      funcionamento: funcionamentoBonfim,
    },
    {
      nome: "Praia do Porto da Barra",
      icone: "🏖️",
      descricao: "Praia urbana com mar calmo.",
      funcionamento: funcionamentoPraiaLivre,
    },
    {
      nome: "Dique do Tororó",
      icone: "🛶",
      descricao: "Esculturas dos orixás e área para caminhada.",
      funcionamento: funcionamentoDiqueTororo,
    },
    {
      nome: "Rio Vermelho",
      icone: "🎶",
      descricao: "Bairro boêmio com vida noturna.",
      funcionamento: funcionamentoRioVermelho,
    },
    {
      nome: "Itapuã",
      icone: "🌴",
      descricao: "Praia famosa pela música e cultura.",
      funcionamento: funcionamentoItapua,
    },
    {
      nome: "Praia do Forte",
      icone: "🐢",
      descricao: "Piscinas naturais e Projeto Tamar.",
      funcionamento: funcionamentoPraiaDoForte,
    },
    {
      nome: "Chapada Diamantina",
      icone: "⛰️",
      descricao: "Trilhas, grutas e paisagens naturais.",
      funcionamento: funcionamentoChapada,
    },
    {
      nome: "Cachoeira da Fumaça",
      icone: "💦",
      descricao: "Uma das maiores cachoeiras do Brasil.",
      funcionamento: funcionamentoCachoeiraFumaca,
    },
    {
      nome: "Morro de São Paulo",
      icone: "🌊",
      descricao: "Destino paradisíaco com praias e festas.",
      funcionamento: funcionamentoMorroSP,
    },
    {
      nome: "Arraial d’Ajuda",
      icone: "🌞",
      descricao: "Praias, falésias e clima descontraído.",
      funcionamento: funcionamentoArraial,
    },
    {
      nome: "Elevador Lacerda",
      icone: "🛗",
      descricao: "Liga cidade alta e baixa.",
      funcionamento: funcionamentoElevadorLacerda,
    },
    {
      nome: "Farol da Barra",
      icone: "🌊",
      descricao: "Pôr do sol mais famoso de Salvador.",
      funcionamento: funcionamentoFarolBarra,
    },
  ],
  olinda: [],
},


"Vagar de Bike": {
  recife: [
    {
      nome: "Bike Itaú – Boa Viagem",
      icone: "🚴‍♀️",
      descricao: "Estação próxima à orla, ideal para passeios.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Bike Itaú – Parque da Jaqueira",
      icone: "🚴‍♀️",
      descricao: "Estação dentro do parque.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Bike Itaú – Marco Zero",
      icone: "🚴‍♀️",
      descricao: "Estação turística no centro histórico.",
      funcionamento: funcionamentoPadrao,
    },
  ],
  olinda: [
    {
      nome: "Bike Itaú – Carmo",
      icone: "🚴‍♀️",
      descricao: "Estação próxima ao sítio histórico.",
      funcionamento: funcionamentoPadrao,
    },
  ],
},
"Yoga": {
  recife: [
    {
      nome: "Espaço Yoga Recife",
      icone: "🧘‍♀️",
      descricao: "Aulas para iniciantes e intermediários.",
      funcionamento: {
        atendimento: "07:00 - 20:00",
        pagamento: "Mensalidade",
        reserva: "Necessária",
        movimento: "Tranquilo",
      },
    },
    {
      nome: "Yoga no Parque da Jaqueira",
      icone: "🌳",
      descricao: "Aulas ao ar livre.",
      funcionamento: funcionamentoPadrao,
    },
  ],
  olinda: [
    {
      nome: "Yoga Olinda Zen",
      icone: "🧘‍♀️",
      descricao: "Espaço acolhedor no sítio histórico.",
      funcionamento: funcionamentoPadrao,
    },
  ],
},
"Pilates": {
  recife: [
    {
      nome: "Studio Pilates Boa Viagem",
      icone: "🤸‍♀️",
      descricao: "Pilates solo e aparelhos.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Pilates Graças",
      icone: "🤸‍♀️",
      descricao: "Aulas personalizadas.",
      funcionamento: funcionamentoPadrao,
    },
  ],
  olinda: [
    {
      nome: "Pilates Olinda",
      icone: "🤸‍♀️",
      descricao: "Studio próximo ao centro histórico.",
      funcionamento: funcionamentoPadrao,
    },
  ],
},
"Oficina de cerâmica": {
  recife: [
    {
      nome: "Ateliê de Cerâmica Recife",
      icone: "🎨",
      descricao: "Oficinas criativas para iniciantes.",
      funcionamento: funcionamentoPadrao,
    },
    {
      nome: "Oficina Criativa – Casa Zero",
      icone: "🏺",
      descricao: "Cursos e workshops artísticos.",
      funcionamento: funcionamentoPadrao,
    },
  ],
  olinda: [
    {
      nome: "Ateliê de Cerâmica de Olinda",
      icone: "🎨",
      descricao: "Cerâmica artesanal no sítio histórico.",
      funcionamento: funcionamentoPadrao,
    },
  ],
},
"Ir a um show": {
  recife: [
    {
      nome: "Show – Ivete Sangalo",
      icone: "🎤",
      descricao: "Axé e pop brasileiro, shows animados e cheios de energia.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Muito cheio",
      },
    },
    {
      nome: "Show – Jorge & Mateus",
      icone: "🎶",
      descricao: "Sertanejo romântico e animado, grandes públicos.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Cheio",
      },
    },
    {
      nome: "Show – Matheus & Kauan",
      icone: "🎶",
      descricao: "Sertanejo romântico com repertório conhecido.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Cheio",
      },
    },
    {
      nome: "Show – Joyce Alane",
      icone: "🎵",
      descricao: "MPB contemporânea, shows mais intimistas.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Moderado",
      },
    },
  ],
  olinda: [
    {
      nome: "Show – Felipe Amorim",
      icone: "🎤",
      descricao: "Pop e forró com clima animado.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Cheio",
      },
    },
    {
      nome: "Show – Henry Freitas",
      icone: "🎶",
      descricao: "Forró e piseiro, público jovem.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Cheio",
      },
    },
    {
      nome: "Show – Xand Avião",
      icone: "🎤",
      descricao: "Forró eletrônico com grandes produções.",
      funcionamento: {
        atendimento: "Noite",
        pagamento: "Ingresso",
        reserva: "Compra antecipada",
        movimento: "Muito cheio",
      },
    },
  ],
},
  "Ir na rua do Bom Jesus": {
    recife: [
      { nome: "Rua do Bom Jesus", icone: "🌇", descricao: "Rua histórica com arquitetura colonial, bares e lojinhas.", funcionamento: funcionamentoPadrao },
      { nome: "Feira do Bom Jesus", icone: "🛒", descricao: "Feira local com comidas típicas e artesanato.", funcionamento: funcionamentoPadrao },
      { nome: "Igreja Madre de Deus", icone: "⛪", descricao: "Igreja histórica com obras de arte sacra.", funcionamento: funcionamentoPadrao },
      { nome: "Cais do Sertão", icone: "🏛️", descricao: "Museu sobre cultura e música de Luiz Gonzaga.", funcionamento: funcionamentoPadrao },
      { nome: "Mercado de São José", icone: "🛍️", descricao: "Mercado tradicional com comidas e artesanato.", funcionamento: funcionamentoPadrao },
      { nome: "Galerias de arte locais", icone: "🎨", descricao: "Espaços de exposições de artistas locais.", funcionamento: funcionamentoPadrao },
    ],
    olinda: [],
  },

};

const gerarSlug = (titulo) => titulo.toLowerCase().replace(/\s+/g, "-");
const slugParaTitulo = (slug) => {
  const chave = Object.keys(lugaresPorCategoria).find(
    (titulo) => gerarSlug(titulo) === slug
  );
  return chave || slug;
};
const agruparPorBairro = (lugares) => {
  const agrupados = {};
  lugares.forEach((lugar) => {
    let bairro = "Outros bairros";
    if (lugar.nome.includes("Marco Zero")) bairro = "Marco Zero";
    else if (lugar.nome.includes("Graças")) bairro = "Graças";
    else if (lugar.nome.includes("Pina")) bairro = "Pina";
    else if (lugar.nome.includes("Aflitos")) bairro = "Aflitos";
    else if (lugar.nome.includes("Recife")) bairro = "Centro";
    if (!agrupados[bairro]) agrupados[bairro] = [];
    agrupados[bairro].push(lugar);
  });
  return agrupados;
};

export default function DetalhesVontade() {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const tituloCategoria = slugParaTitulo(categoria);
  const lugares = lugaresPorCategoria[tituloCategoria] || { recife: [], olinda: [] };

  const recifeAgrupado = agruparPorBairro(lugares.recife);
  const olindaAgrupado = agruparPorBairro(lugares.olinda);

  return (
    <div className="lista-vontades">
      <header className="softgo-header">
        <div className="softgo-logo">
          <span className="logo-icone">☁️</span>
          <span className="logo-texto">SoftGo</span>
        </div>
        <button
    className="home-exit"
    onClick={() => navigate("/")}
  >
    Sair
  </button>
      </header>

      <div className="voltar-container">
        <button className="voltar-btn" onClick={() => navigate(-1)}>
          ← Voltar
        </button>
      </div>

      <main className="home-content">
        <h1>{tituloCategoria}</h1>
        <p className="subtitle">Lista de lugares em Recife-PE e Olinda-PE</p>

        {Object.keys(recifeAgrupado).length > 0 && (
          <div>
            <h2 className="cidade-titulo">Recife</h2>
            {Object.keys(recifeAgrupado).map((bairro) => (
              <div key={bairro}>
                <h3 className="bairro-titulo">{bairro}</h3>
                <div className="cards">
                  {recifeAgrupado[bairro].map((lugar, index) => (
                    <div
                      key={index}
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/detalhes-lugar", { state: lugar })}
                    >
                      <div className="icon">{lugar.icone}</div>
                      <h4>{lugar.nome}</h4>
                      {lugar.descricao && <p>{lugar.descricao}</p>}
                      {lugar.data && <p>📅 {lugar.data}</p>}
                      {lugar.local && <p>📍 {lugar.local}</p>}
                      {lugar.funcionamento && <p>⏰ {lugar.funcionamento.atendimento}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {Object.keys(olindaAgrupado).length > 0 && (
          <div>
            <h2 className="cidade-titulo">Olinda</h2>
            {Object.keys(olindaAgrupado).map((bairro) => (
              <div key={bairro}>
                <h3 className="bairro-titulo">{bairro}</h3>
                <div className="cards">
                  {olindaAgrupado[bairro].map((lugar, index) => (
                    <div
                      key={index}
                      className="card"
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/detalhes-lugar", { state: lugar })}
                    >
                      <div className="icon">{lugar.icone}</div>
                      <h4>{lugar.nome}</h4>
                      {lugar.descricao && <p>{lugar.descricao}</p>}
                      {lugar.data && <p>📅 {lugar.data}</p>}
                      {lugar.local && <p>📍 {lugar.local}</p>}
                      {lugar.funcionamento && <p>⏰ {lugar.funcionamento.atendimento}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
