const fs = require('fs');
const path = require('path');

const stitchPath = path.join(__dirname, '../docs/stitch-export/tela-principal.html');
let stitch = fs.readFileSync(stitchPath, 'utf8');

// Fix mojibake from export
const fixes = [
  ['Gram├ítica', 'Gramática'],
  ['Classifica├º├úo', 'Classificação'],
  ['Pr├ítica', 'Prática'],
  ['Te├│rico', 'Teórico'],
  ['preposi├º├úo', 'preposição'],
  ['crian├ºa', 'criança'],
  ['not├¡cia', 'notícia'],
  ['Liga├º├úo', 'Ligação'],
  ['est├í', 'está'],
  ['p├íssaro', 'pássaro'],
  ['In├¡cio', 'Início'],
];

for (const [from, to] of fixes) {
  stitch = stitch.split(from).join(to);
}

stitch = stitch.replace(
  '@keyframes toast-in-right {',
  '.explicacao-erro { background-color: #ffdad6; }\n        @keyframes toast-in-right {'
);

stitch = stitch.replace(
  '<meta charset="utf-8"/>',
  '<meta charset="utf-8"/>\n<link href="/favicon.svg" rel="icon" type="image/svg+xml"/>\n<link href="/favicon.ico" rel="alternate icon"/>'
);

// Header full-width: barra de fundo em 100%, conteúdo centralizado em 800px
stitch = stitch.replace(
  '<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50 flex justify-between items-center px-gutter h-16 max-w-container-max mx-auto shadow-sm">',
  '<header class="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 left-0 right-0 w-full z-50 shadow-sm"><div class="max-w-container-max mx-auto flex justify-between items-center px-gutter h-16 w-full">'
);
stitch = stitch.replace(
  '            Perfil\n        </div>\n</header>',
  '            Perfil\n        </div>\n</div>\n</header>'
);

// Links de navegação com âncoras reais
stitch = stitch.replace('href="#">Teoria</a>', 'href="#teoria" data-nav-link="teoria">Teoria</a>');
stitch = stitch.replace('href="#">Prática</a>', 'href="#quiz-app" data-nav-link="pratica">Prática</a>');
stitch = stitch.replace('href="#">Desafios</a>', 'href="#quiz-app" data-nav-link="desafios">Desafios</a>');
stitch = stitch.replace('href="#">Progresso</a>', 'href="#quiz-app" data-nav-link="progresso">Progresso</a>');

// IDs e scroll offset para header fixo
stitch = stitch.replace('<main class="max-w-container-max mx-auto px-margin-mobile md:px-0 py-8 space-y-12">', '<main id="topo" class="max-w-container-max mx-auto px-margin-mobile md:px-0 py-8 space-y-12">');
stitch = stitch.replace(
  '<!-- Theory Section -->\n<section class="space-y-6">',
  '<!-- Theory Section -->\n<section id="teoria" class="space-y-6 scroll-mt-24">'
);

stitch = stitch.replace(
  'body { background-color: #F9FAFB; }',
  'html { scroll-behavior: smooth; }\n        body { background-color: #F9FAFB; }'
);

// Bottom nav mobile — links funcionais
stitch = stitch.replace(
  '<div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors cursor-pointer rounded-xl">\n<span class="material-symbols-outlined" data-icon="home">home</span>',
  '<a href="#topo" data-nav-link="inicio" class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors cursor-pointer rounded-xl no-underline">\n<span class="material-symbols-outlined" data-icon="home">home</span>'
);
stitch = stitch.replace(
  '<span class="font-label-sm text-label-sm mt-1">Início</span>\n</div>\n<div class="flex flex-col items-center justify-center bg-primary-container',
  '<span class="font-label-sm text-label-sm mt-1">Início</span>\n</a>\n<a href="#teoria" data-nav-link="verbos" class="flex flex-col items-center justify-center bg-primary-container'
);
stitch = stitch.replace(
  '<span class="font-label-sm text-label-sm mt-1">Verbos</span>\n</div>\n<div class="flex flex-col items-center justify-center text-on-surface-variant',
  '<span class="font-label-sm text-label-sm mt-1">Verbos</span>\n</a>\n<a href="#quiz-app" data-nav-link="quiz" class="flex flex-col items-center justify-center text-on-surface-variant'
);
stitch = stitch.replace(
  '<span class="font-label-sm text-label-sm mt-1">Quiz</span>\n</div>\n<div class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors cursor-pointer rounded-xl">\n<span class="material-symbols-outlined" data-icon="leaderboard">',
  '<span class="font-label-sm text-label-sm mt-1">Quiz</span>\n</a>\n<a href="#quiz-app" data-nav-link="ranking" class="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors cursor-pointer rounded-xl no-underline">\n<span class="material-symbols-outlined" data-icon="leaderboard">'
);
stitch = stitch.replace(
  '<span class="font-label-sm text-label-sm mt-1">Ranking</span>\n</div>\n</nav>',
  '<span class="font-label-sm text-label-sm mt-1">Ranking</span>\n</a>\n</nav>'
);

const shellEnd = stitch.indexOf('<!-- Quiz App Container -->');
const shell = stitch.slice(0, shellEnd);

const quizSection = `<section id="quiz-app" class="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-card-padding scroll-mt-24"></section>
</main>`;

const navStart = stitch.indexOf('<!-- BottomNavBar');
const bottomNav = stitch.slice(navStart, stitch.indexOf('<!-- JavaScript App Logic -->'));

const script = fs.readFileSync(path.join(__dirname, 'quiz-app.js'), 'utf8');

const html = `${shell}${quizSection}
${bottomNav}
<script>
${script}
</script>
</body></html>`;

const outPath = path.join(__dirname, '../public/classificacao-verbos.html');
fs.writeFileSync(outPath, html, 'utf8');
console.log('Written:', outPath, html.length, 'bytes');
