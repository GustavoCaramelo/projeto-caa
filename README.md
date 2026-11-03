# CAA Express - Comunicação Alternativa e Aumentativa

Aplicação PWA de Comunicação Alternativa e Aumentativa (CAA / AAC) projetada especialmente para crianças no espectro autista com **hipersensibilidade sensorial** e que estão em fase de reconhecimento de letras individuais (sem leitura silábica).

---

## 🌿 Filosofia de Design e Acessibilidade Sensorial

1. **Estritamente Tons Pastéis e Baixo Estímulo**:
   - Fundo em tom creme/sálvia suave (`#F6F8F5`), evitando o branco puro que causa reflexo e fadiga ocular.
   - Cartões e silhueta em paleta calmante (verde sálvia, azul brando, pêssego/bege quente e lavanda).
   - Ausência total de cores neon, contraste extremo ou flashes visuais.

2. **Previsibilidade e Zero Áudio Acidental**:
   - **Zero som e zero TTS automático**: Nenhuma API de áudio ou sintetizador é disparado de surpresa, evitando crises sensoriais.
   - Transições restritas a *fade* de opacidade suave (200-250ms), sem movimentos bruscos, saltos ou giros.
   - Feedback de seleção puramente visual (contorno pastel reforçado e anel suave).

3. **Tipografia em Caixa Alta e Alta Legibilidade**:
   - Todas as legendas e mensagens estão em **CAIXA ALTA** (letras maiúsculas bastão), facilitando o reconhecimento por crianças que ainda não leem sílabas cursivas.
   - Legendas posicionadas diretamente abaixo de cada pictograma 2D correspondente.

4. **Áreas de Toque Amigáveis (Touch Targets >= 48x48px)**:
   - Respeito às diretrizes WCAG 2.2 / AAA para evitar toques acidentais e frustração motora.

---

## 📐 Arquitetura da Interface (3 Breakpoints)

- **Mobile (< 768px)**:
  - Disposição em coluna única.
  - Silhueta humana amigável posicionada no topo com pontos de calor táteis.
  - Rolagem vertical suave apresentando os estados do corpo (Fome, Sono) e as 6 emoções em grid de 2x2.
- **Tablet (768px a 1024px)**:
  - Layout *Split Screen* de alta estabilidade visual.
  - Lado esquerdo fixo com a silhueta humana inteira.
  - Lado direito com sistema de abas táteis grandes para alternar entre categorias em grid 3x3.
- **Desktop (> 1024px)**:
  - Visão panorâmica centralizada em tela cheia com generoso uso de *white space* (respiro visual).
  - Silhueta ao centro, emoções à esquerda e estados gerais à direita, sem rolagem vertical desnecessária.

---

## 🧩 Estrutura Modular e Princípios SOLID

```
src/app/
├── core/
│   ├── models/                    # Interfaces segregadas (ISP / LSP)
│   │   ├── communication-item.model.ts
│   │   ├── emotion.model.ts
│   │   ├── body-hotspot.model.ts
│   │   └── systemic-state.model.ts
│   ├── data/                      # Dados imutáveis e desacoplados (OCP)
│   │   ├── emotions.data.ts
│   │   ├── body-hotspots.data.ts
│   │   └── systemic-states.data.ts
│   └── services/                  # Responsabilidade Única (SRP / DIP)
│       ├── communication-state.service.ts   # Estado reativo via Angular Signals
│       └── sensory-policy.service.ts        # Guardrails de silêncio e calma sensorial
├── shared/
│   └── components/
│       ├── icons/                 # Pictogramas em desenho animado 2D amigável
│       │   ├── emotion-icon.component.ts
│       │   └── state-icon.component.ts
│       └── phrase-bar/            # Barra superior da "Voz Ativa" da criança
│           └── sensory-phrase-bar.component.ts
└── features/
    ├── emotions/                  # Módulo 1: Emoções ("O que eu sinto?")
    │   ├── emotion-card/
    │   └── emotions-board/
    ├── body/                      # Módulo 2: Meu Corpo ("Onde incomoda?")
    │   ├── silhouette/            # Silhueta com pontos interativos de calor
    │   └── systemic-states/       # Fome e Sono
    └── board/                     # Orquestrador responsivo da prancha
        ├── board-container.component.ts
        └── board-container.component.html
```

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 20
- NPM >= 10

### Desenvolvimento Local
```bash
npm start
```
Acesse `http://localhost:4200/` no navegador.

### Build de Produção e PWA 100% Offline
```bash
npm run build
```
Os arquivos gerados em `dist/caa-gui/browser/` contêm o Service Worker pré-configurado (`ngsw-worker.js`), `manifest.webmanifest`, ícones e cache de 100% dos assets para funcionamento desconectado da internet.
