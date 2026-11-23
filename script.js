const researchYears = {
  2023: {
    kicker: "O ponto de partida",
    title: "Literatura como espaço de compreensão",
    description: "Investigamos como diferentes autoras representam depressão, ansiedade, vulnerabilidade e preconceito em contextos históricos, sociais e culturais distintos.",
    methods: ["Pesquisa bibliográfica", "Análise comparativa", "Entrevista", "Questionários"],
    books: [
      ["A Redoma de Vidro", "Sylvia Plath"],
      ["Garota, Interrompida", "Susanna Kaysen"],
      ["Violet Bent Backwards…", "Lana Del Rey"]
    ],
    resultTitle: "1º lugar · LLA",
    resultLabel: "Conquista",
    resultDescription: "MTEP ArteCeb e credencial para a feira Ciência Jovem, em Recife–PE.",
    resultImage: "assets/images/premiacao-2023.jpeg",
    resultAlt: "Equipe do projeto celebrando a premiação da MTEP 2023"
  },
  2024: {
    kicker: "Novas linguagens",
    title: "Da página para o audiovisual",
    description: "Comparamos obras literárias e suas adaptações para o cinema, analisando como linguagens diferentes ampliam a compreensão da vulnerabilidade e da saúde mental feminina.",
    methods: ["Literatura comparada", "Análise fílmica", "Entrevista", "Divulgação científica"],
    books: [
      ["As Meninas", "Lygia Fagundes Telles · livro + adaptação"],
      ["As Virgens Suicidas", "Jeffrey Eugenides · livro + adaptação"],
      ["Veronika Decide Morrer", "Paulo Coelho · livro + adaptação"]
    ],
    resultTitle: "2º lugar · LLA",
    resultLabel: "Conquista",
    resultDescription: "Reconhecimento na MTEP — Mostra Técnica de Projetos Científicos ArteCeb.",
    resultImage: "assets/images/premiacao-2024.jpeg",
    resultAlt: "Equipe do projeto celebrando a premiação da MTEP 2024"
  },
  2025: {
    kicker: "Olhar ampliado",
    title: "Gênero, desigualdade e subjetividade",
    description: "A pesquisa passou a observar como estereótipos e desigualdades de gênero, raça e classe atravessam a construção da subjetividade e da saúde mental feminina, a partir da análise de três obras literárias.",
    methods: ["Pesquisa bibliográfica", "Análise crítica", "Entrevistas", "Público jovem"],
    books: [
      ["A Amiga Genial", "Elena Ferrante · livro"],
      ["Lucíola", "José de Alencar · livro"],
      ["Torto Arado", "Itamar Vieira Junior · livro"]
    ],
    resultTitle: "Campeão geral",
    resultLabel: "Conquista",
    resultDescription: "1º lugar em LLA na MTEP e credencial para a Cientec, em Lima, Peru.",
    resultImage: "assets/images/premiacao-2025.jpeg",
    resultAlt: "Equipe do projeto com certificados e troféu na premiação da MTEP 2025"
  },
  2026: {
    kicker: "Novo ciclo",
    title: "Desejos, memória e vozes femininas",
    description: "O ciclo de 2026 abre novas leituras para investigar identidade, silenciamento, afeto e liberdade a partir de três obras fundamentais da literatura brasileira.",
    methods: ["Ciclo em andamento", "Literatura comparada", "Leitura crítica"],
    books: [
      ["A Bolsa Amarela", "Lygia Bojunga"],
      ["Olhos d’água", "Conceição Evaristo"],
      ["Ciranda de Pedra", "Lygia Fagundes Telles"]
    ],
    resultTitle: "Pesquisa em andamento",
    resultLabel: "Ciclo atual",
    resultDescription: "As leituras de 2026 já integram a trajetória do projeto. Novos textos e resultados serão publicados ao longo do ciclo.",
    resultImage: "",
    resultAlt: ""
  }
};

const readingsIndex = {
  2023: {
    works: [
      { id: "violet", art: "book-violet", artTitle: "Violet<br>bent backwards<br>over the grass", genre: "poesia", meta: "Artigo de opinião · 2023", author: "Por Arthur Santos de Castro", time: "6 min" },
      { id: "redoma", art: "book-redoma", artTitle: "A redoma<br>de vidro", genre: "romance", meta: "Artigo de opinião · 2023", author: "Por Letícia Castro Barbosa Cruz", time: "5 min" },
      { id: "garota", art: "book-garota", artTitle: "Garota,<br>interrompida", genre: "memórias", meta: "Artigo de opinião · 2023", author: "Por Carla Guedes", time: "5 min" }
    ],
    quiz: null
  },
  2024: {
    works: [
      { id: "meninas", art: "book-meninas", artTitle: "As<br>Meninas", genre: "romance", meta: "Análise de obra · 2024", author: "Por Letícia Castro", time: "7 min" },
      { id: "virgens", art: "book-virgens", artTitle: "As Virgens<br>Suicidas", genre: "romance", meta: "Análise de obra · 2024", author: "Por Carla Guedes", time: "7 min" },
      { id: "veronika", art: "book-veronika", artTitle: "Veronika<br>Decide Morrer", genre: "romance", meta: "Análise de obra · 2024", author: "Por Arthur Santos", time: "7 min" }
    ],
    quiz: {
      id: "quiz2024",
      meta: "Pesquisa de opinião · 2024",
      stats: [["100", "participantes ouvidos"], ["91%", "veem a literatura como essencial"], ["89%", "aprovam o audiovisual"]]
    }
  },
  2025: {
    works: [
      { id: "amiga", art: "book-amiga", artTitle: "A Amiga<br>Genial", genre: "romance", meta: "Análise de obra · 2025", author: "Por Carla Guedes", time: "7 min" },
      { id: "luciola", art: "book-luciola", artTitle: "Lucíola", genre: "romance", meta: "Análise de obra · 2025", author: "Por Giovanna de Oliveira", time: "6 min" },
      { id: "torto", art: "book-torto", artTitle: "Torto<br>Arado", genre: "romance", meta: "Análise de obra · 2025", author: "Por Letícia Castro", time: "6 min" }
    ],
    quiz: {
      id: "quiz2025",
      meta: "Pesquisa de opinião · 2025",
      stats: [["123", "jovens ouvidos"], ["77,7%", "preferem autoras mulheres"], ["84%", "veem pouco debate sobre o tema"]]
    }
  }
};

const articles = {
  violet: {
    kicker: "Artigo de opinião · 2023",
    title: "O livro que revela aquilo que muitas mulheres sentem, mas não dizem",
    byline: "Por Arthur Santos de Castro · sobre Violet Bent Backwards over the Grass, de Lana Del Rey",
    paragraphs: [
      "Em uma sociedade que valoriza a produtividade constante e frequentemente ignora o sofrimento emocional, falar sobre saúde mental ainda é um desafio para muitas pessoas, especialmente para as mulheres. Nesse contexto, obras artísticas que abordam sentimentos profundos e experiências pessoais desempenham um papel importante na promoção da reflexão e do acolhimento.",
      "A obra reúne mais de trinta poemas que oferecem uma visão íntima dos pensamentos, emoções e inquietações da autora. Diferentemente da imagem glamourosa associada às celebridades, Lana apresenta uma versão vulnerável de si mesma, expondo solidão, ansiedade, inseguranças e a busca por pertencimento. Essa honestidade aproxima a autora de seus leitores e torna suas reflexões ainda mais impactantes.",
      "Ao longo dos poemas, percebe-se uma tentativa constante de compreender a si mesma e o mundo ao redor. A autora aborda questões que afetam muitas mulheres, como pressão social, sentimento de inadequação e dificuldade de encontrar significado em uma rotina marcada pela velocidade e pelo isolamento.",
      "Lana Del Rey utiliza a poesia para transformar experiências dolorosas em arte. Em vez de esconder suas fragilidades, coloca-as no centro de sua escrita, demonstrando que a vulnerabilidade não é sinal de fraqueza, mas uma característica essencial da condição humana.",
      "Mais do que uma coletânea de poemas, o livro é um convite à reflexão sobre a complexidade da mente humana, a importância do autoconhecimento e a necessidade de acolher nossas imperfeições. A escrita sensível nos lembra que a arte pode ser uma ferramenta poderosa para compreender a nós mesmos e aos outros."
    ]
  },
  redoma: {
    kicker: "Artigo de opinião · 2023",
    title: "Ela tinha tudo para ser feliz. Então por que estava sofrendo?",
    byline: "Por Letícia Castro Barbosa Cruz · sobre A Redoma de Vidro, de Sylvia Plath",
    paragraphs: [
      "Muitas das dificuldades enfrentadas pelas mulheres continuam sendo ignoradas ou minimizadas. Nesse contexto, a literatura desempenha um papel fundamental ao dar voz a experiências que, muitas vezes, permanecem silenciadas.",
      "O romance acompanha Esther Greenwood, uma jovem inteligente e promissora que conquista um estágio em uma renomada revista de moda em Nova York. Apesar de viver o que muitos considerariam uma oportunidade dos sonhos, Esther não sente felicidade ou realização. Ela se vê cada vez mais sufocada por cobranças sobre sucesso profissional, casamento, maternidade e o papel que uma mulher deve desempenhar.",
      "Sylvia Plath apresenta de forma sensível e realista o agravamento da saúde mental da protagonista. A depressão, o vazio, a falta de perspectiva e o isolamento tornam-se cada vez mais presentes. A metáfora da redoma de vidro representa esse estado: sentir-se separada do mundo, incapaz de respirar livremente ou de se conectar plenamente com a realidade.",
      "Mesmo escrito na década de 1960, muitos dos conflitos continuam atuais. Mulheres ainda enfrentam dificuldades para equilibrar expectativas profissionais, familiares e pessoais. Assim, a obra ultrapassa seu contexto histórico e se torna uma reflexão universal sobre liberdade, identidade e saúde mental.",
      "A escrita poética e introspectiva permite compreender a dor da protagonista sem reduzi-la a estereótipos. Essa abordagem contribui para ampliar a consciência sobre transtornos mentais e combater preconceitos ligados ao sofrimento psicológico."
    ]
  },
  garota: {
    kicker: "Artigo de opinião · 2023",
    title: "E se os “loucos” fossem os únicos dizendo a verdade?",
    byline: "Por Carla Guedes · sobre Garota, Interrompida, de Susanna Kaysen",
    paragraphs: [
      "A forma como a sociedade enxerga a saúde mental mudou ao longo do tempo, mas o preconceito e a falta de compreensão ainda fazem parte da realidade de muitas pessoas. Garota, Interrompida oferece um relato sincero sobre sofrimento psicológico, identidade e pertencimento.",
      "A narrativa acompanha Susanna Kaysen, uma jovem internada em um hospital psiquiátrico após uma tentativa de suicídio. Durante sua permanência, ela convive com pacientes que enfrentam desafios próprios. Um dos aspectos mais marcantes é como a autora humaniza essas mulheres e mostra que são muito mais do que seus diagnósticos.",
      "Susanna questiona os limites entre sanidade e loucura. A autora provoca o leitor a refletir sobre quem define o que é normal e até que ponto certos comportamentos são sinais de doença ou respostas a uma sociedade cheia de cobranças e contradições.",
      "O livro também evidencia as relações de poder no hospital e as limitações dos métodos de tratamento da época. Demonstra como o estigma pode ser tão prejudicial quanto a própria doença, contribuindo para o isolamento e a incompreensão.",
      "Ao compartilhar suas experiências com honestidade, Kaysen ajuda a quebrar preconceitos. A obra nos lembra que ninguém deve ser reduzido a um diagnóstico e que compreender o sofrimento do outro é um passo essencial para uma sociedade mais justa e humana."
    ]
  },
  entrevista: {
    kicker: "Entrevista · 22 de setembro de 2023",
    title: "Escuta, autoestima e saúde mental feminina",
    byline: "Conversa com Sônia Pargas · terapeuta especialista em mulheres",
    paragraphs: [
      "A entrevista com Sônia Pargas buscou aprofundar a compreensão sobre desafios emocionais enfrentados pelas mulheres e sobre as formas de acolhimento e tratamento disponíveis.",
      "Sônia destacou a importância dos grupos terapêuticos como espaços de escuta, acolhimento e identificação. Ao compartilhar experiências e ouvir histórias semelhantes, as mulheres percebem que não estão sozinhas em suas dores e dificuldades.",
      "A terapeuta explicou que experiências dolorosas podem deixar marcas profundas, mas que é possível ressignificá-las por meio do autoconhecimento, do acolhimento emocional e do acompanhamento terapêutico. A cura começa quando a pessoa reconhece suas feridas e se permite reconstruir novos caminhos.",
      "A literatura também apareceu como ferramenta de aprendizado e empatia. Conhecer as experiências de outras pessoas por meio de livros e relatos possibilita uma compreensão mais ampla da realidade humana.",
      "Ao discutir mudanças sociais, Sônia reconheceu avanços, mas reforçou a necessidade de campanhas permanentes de conscientização e educação emocional. A saúde mental deve ser prioridade cotidiana, não apenas uma ação pontual.",
      "Por fim, ressaltou que a autoestima não depende apenas da aprovação externa. Ela é construída internamente, pelo reconhecimento do próprio valor e pelo desenvolvimento de uma relação mais saudável consigo mesma."
    ]
  },
  meninas: {
    kicker: "Análise de obra · 2024",
    title: "As Meninas: literatura, ditadura e os desafios de ser mulher",
    byline: "Por Letícia Castro · sobre As Meninas, de Lygia Fagundes Telles (livro e adaptação)",
    paragraphs: [
      "As Meninas, de Lygia Fagundes Telles, apresenta a história de três jovens — Lorena, Ana Clara e Lia — que vivem em São Paulo durante a ditadura militar brasileira. Apesar de terem personalidades e histórias muito diferentes, as três compartilham conflitos relacionados à identidade, à liberdade e ao amadurecimento.",
      "Lorena é introspectiva e pertence a uma família rica; Ana Clara enfrenta traumas, vícios e dificuldades decorrentes de sua origem humilde; enquanto Lia é uma militante política envolvida na resistência à ditadura. A partir das diferentes perspectivas das personagens, o livro aborda temas como repressão política, sexualidade, relações familiares, condição feminina e busca por autonomia.",
      "Um dos principais recursos utilizados por Lygia é o fluxo de consciência, que permite ao leitor acompanhar de perto os pensamentos e sentimentos das protagonistas. Dessa forma, a narrativa não se limita aos acontecimentos externos: mostra também os conflitos internos de cada uma. A obra se torna, assim, tanto uma crítica ao autoritarismo quanto um retrato das experiências femininas em uma sociedade marcada pela repressão.",
      "Sobre o filme: a história ganhou uma adaptação cinematográfica dirigida por Emiliano Ribeiro. O filme procura representar a atmosfera de tensão da ditadura e a complexidade das três protagonistas, utilizando recursos como planos fechados e monólogos internos para aproximar o público de seus conflitos.",
      "As atuações de Adriana Esteves, Drica Moraes e Cláudia Liz ajudam a transmitir as diferentes personalidades das personagens. No entanto, como acontece em muitas adaptações, parte da profundidade psicológica presente no livro acaba sendo reduzida, principalmente pela dificuldade de reproduzir no cinema o fluxo de consciência e a multiplicidade de vozes da narrativa original.",
      "Enquanto o livro apresenta de maneira mais profunda a dimensão política e os pensamentos das personagens, o filme concentra-se mais nos dramas pessoais e nas relações entre elas. Ainda assim, mantém temas importantes da obra, como a luta por liberdade, a repressão e a condição feminina.",
      "Tanto o livro quanto o filme mostram mulheres tentando encontrar seu espaço e sua identidade em meio a diferentes formas de pressão. As Meninas vai além de um retrato da ditadura militar: é também uma reflexão sobre liberdade, escolhas, amadurecimento e os desafios enfrentados pelas mulheres.",
      "Ao dar voz a três personagens tão diferentes, Lygia Fagundes Telles constrói uma obra que continua relevante justamente por mostrar que, mesmo em contextos distintos, a busca por liberdade e autonomia permanece uma questão fundamental."
    ]
  },
  virgens: {
    kicker: "Análise de obra · 2024",
    title: "As Virgens Suicidas: adolescência, repressão e o silêncio sobre a saúde mental feminina",
    byline: "Por Carla Guedes · sobre As Virgens Suicidas, de Jeffrey Eugenides (livro e adaptação)",
    paragraphs: [
      "As Virgens Suicidas, de Jeffrey Eugenides, publicado em 1993, acompanha a história das cinco irmãs Lisbon, adolescentes que vivem em um ambiente familiar marcado pelo controle e pelo isolamento. Narrado por um grupo de meninos da vizinhança, o livro e o filme apresentam as irmãs a partir do olhar de quem as observa de fora, criando uma atmosfera de mistério.",
      "A família Lisbon é marcada pela presença de uma mãe autoritária e de um pai passivo. As meninas têm sua liberdade limitada e são afastadas do convívio social, o que evidencia como o excesso de controle e a falta de espaço para expressão podem afetar profundamente a adolescência. Ao longo da história, o isolamento das irmãs se intensifica até culminar em uma série de suicídios, que permanece como o grande mistério da narrativa.",
      "Um dos aspectos mais importantes da obra é justamente a dificuldade de compreender verdadeiramente as irmãs. Como a história é contada pelos meninos da vizinhança, elas acabam sendo transformadas em figuras misteriosas e idealizadas. Suas individualidades, sentimentos e possíveis sofrimentos permanecem parcialmente inacessíveis, representando também a dificuldade da sociedade de perceber e compreender o que acontece por trás do silêncio de muitas adolescentes.",
      "Sobre o filme: a adaptação cinematográfica de Sofia Coppola, de 1999, mantém a essência da história, mas utiliza recursos visuais para tornar o isolamento e a melancolia das personagens ainda mais perceptíveis. A fotografia, a trilha sonora e a atmosfera nostálgica ajudam o espectador a sentir a distância e o controle presentes na vida das irmãs.",
      "Kirsten Dunst, no papel de Lux Lisbon, destaca-se ao representar a mistura de vulnerabilidade e rebeldia da personagem. Apesar de algumas simplificações necessárias para a adaptação, o filme preserva os principais temas do livro: repressão, desejo de liberdade, adolescência e o mistério em torno das mortes.",
      "Enquanto o romance utiliza uma narrativa coletiva e uma linguagem mais poética para construir o mistério, o filme aposta principalmente na estética e na experiência sensorial. As duas obras, porém, apresentam uma reflexão semelhante sobre os efeitos do isolamento e da repressão durante uma fase tão importante para a construção da identidade.",
      "Mais do que contar uma história trágica, As Virgens Suicidas chama atenção para aquilo que muitas vezes não é percebido: o sofrimento silencioso das adolescentes. A obra mostra como a falta de liberdade, diálogo e acolhimento pode contribuir para o isolamento e para a dificuldade de expressar sentimentos. A história também provoca uma reflexão sobre como mulheres e meninas podem ser observadas, julgadas ou idealizadas sem que seus sentimentos sejam realmente compreendidos."
    ]
  },
  veronika: {
    kicker: "Análise de obra · 2024",
    title: "O questionamento da normalidade em Veronika Decide Morrer",
    byline: "Por Arthur Santos · sobre Veronika Decide Morrer, de Paulo Coelho (livro e adaptação)",
    paragraphs: [
      "Veronika Decide Morrer, de Paulo Coelho, é uma obra que aborda temas como a vida, a morte, a liberdade, a loucura e, principalmente, o conceito de normalidade. A história acompanha Veronika, uma jovem de 25 anos que, aparentemente, tem uma vida normal e estável, mas que, mesmo assim, sente um grande vazio. Por não encontrar sentido em sua vida, ela decide cometer suicídio.",
      "Sua tentativa, porém, não dá certo. Veronika sobrevive e acorda internada em um hospital psiquiátrico. Lá, ela recebe a notícia de que teria pouco tempo de vida. A partir desse momento, começa uma espécie de contagem regressiva, que faz com que ela passe a enxergar sua existência de uma forma diferente.",
      "Durante sua permanência no hospital, Veronika conhece outros pacientes, cada um com suas próprias histórias, problemas e formas de enxergar o mundo. A convivência com essas pessoas faz com que ela questione aquilo que sempre foi considerado “normal”. O livro mostra que ser diferente dos padrões impostos pela sociedade não significa necessariamente ser louco ou estar errado.",
      "Ao longo da história, Veronika começa a perceber que ainda possui vontade de viver. Aquilo que antes parecia sem importância passa a ter outro significado. A possibilidade de perder a vida faz com que ela passe a valorizá-la mais. Com isso, Paulo Coelho mostra uma contradição interessante: quando Veronika acredita que vai morrer, é justamente quando começa a descobrir motivos para viver.",
      "Curiosidade: a obra também possui uma relação com a experiência do próprio autor. Paulo Coelho já esteve internado em hospitais psiquiátricos e utilizou algumas dessas experiências como inspiração para escrever a história. Isso contribui para a construção dos conflitos e das situações apresentadas no livro.",
      "Sobre o filme: a adaptação cinematográfica de Veronika Decide Morrer apresenta a mesma história principal do livro, mas acaba não conseguindo transmitir toda a profundidade da obra original. O filme tinha potencial para desenvolver melhor temas como a loucura, a liberdade, a busca pelo sentido da vida e os padrões impostos pela sociedade, porém muitos desses assuntos são tratados de forma superficial.",
      "A atuação também deixa a desejar em alguns momentos, principalmente por não transmitir completamente a intensidade dos sentimentos de Veronika e dos outros personagens. A direção e o roteiro acabam deixando de lado parte das reflexões que tornam o livro interessante, fazendo com que algumas situações pareçam menos profundas do que na obra escrita.",
      "Por isso, apesar de o filme contar uma história interessante e importante, ele não consegue causar o mesmo impacto que o livro. A adaptação poderia ter explorado melhor os conflitos dos personagens e, principalmente, o questionamento sobre o que realmente significa ser “normal”.",
      "No geral, Veronika Decide Morrer é uma obra que vai além da história de uma jovem que tenta tirar a própria vida. O livro questiona a maneira como a sociedade define o que é normal e mostra que cada pessoa possui seus próprios conflitos e maneiras de enxergar o mundo."
    ]
  },
  amiga: {
    kicker: "Análise de obra · 2025",
    title: "A Amiga Genial: amizade, classe e a psique feminina em Nápoles",
    byline: "Por Carla Guedes · sobre A Amiga Genial, de Elena Ferrante",
    paragraphs: [
      "A Amiga Genial, de Elena Ferrante, constrói uma cartografia minuciosa da psique feminina imersa em um ambiente de profunda privação material, violência patriarcal e rigidez social. A narrativa, conduzida pela voz de Elena Greco (Lenu), resgata a infância e a juventude vividas em um bairro periférico de Nápoles na década de 1950.",
      "Desde os primeiros anos, a dinâmica entre Lenu e Raffaella Cerullo (Lila) é atravessada por uma simbiose complexa, na qual a admiração mútua convive com a rivalidade e o medo do apagamento. Em um contexto em que o destino feminino é previamente traçado pelo casamento precoce, pela submissão ao lar e pela violência doméstica normalizada, a inteligência das duas meninas surge como um vetor de transgressão, mas também como uma fonte incalculável de sofrimento psicológico e desajuste social.",
      "A ruptura na trajetória escolar das protagonistas constitui o ponto de inflexão na saúde mental de ambas. Enquanto Lenu recebe o privilégio de prosseguir nos estudos formais, Lila é impedida por sua família, sendo forçada a ingressar precocemente no mercado de trabalho e no casamento. Essa cisão expõe como as barreiras de classe e gênero operam na interrupção do desenvolvimento intelectual e emocional da mulher.",
      "Lila desenvolve episódios marcados pelo fenômeno da “desfragmentação” (uma sensação traumática de dissolução das pessoas e das coisas ao seu redor), revelando a angústia de uma mente brilhante sufocada por estruturas repressivas. Já Lenu vivencia uma crônica síndrome da impostora e uma insegurança paralisante, sentindo-se eternamente insuficiente e dependente do brilho e da validação de Lila.",
      "A análise sob a ótica da psicologia demonstra que os sintomas emocionais de Lenu e Lila — como a ansiedade constante, a raiva reprimida, a despersonalização e o medo do abandono — não devem ser interpretados como fraquezas individuais ou desequilíbrios isolados. São reações explicáveis a um ambiente ostensivamente hostil, onde o machismo estrutural e a violência de classe impõem amarras diárias.",
      "Finalmente, a obra estabelece a amizade feminina como um espaço ambíguo, porém fundamental, de sobrevivência e apoio mútuo. Embora a relação seja tensionada por comparações contínuas, é unicamente no olhar da outra que cada uma encontra o espelho de sua verdadeira complexidade. Ao contrário das representações literárias masculinas que frequentemente reduzem as rivalidades femininas ao fútil, a escrita de Ferrante confere dignidade, densidade e contornos realistas ao sofrimento psíquico das mulheres. O cuidado e o reconhecimento entre mulheres funcionam, assim, como alicerces de cura e resistência diante das opressões do sistema patriarcal."
    ]
  },
  luciola: {
    kicker: "Análise de obra · 2025",
    title: "Lucíola: culpa, estigma e a interdição do lugar de fala",
    byline: "Por Giovanna de Oliveira · sobre Lucíola, de José de Alencar",
    paragraphs: [
      "O romance Lucíola, publicado em 1862 por José de Alencar, configura-se como um exemplar clássico do Romantismo urbano brasileiro, no qual a saúde mental e a subjetividade feminina são inteiramente filtradas pela lente moralista e patriarcal da época. A narrativa adota o formato epistolar e é estruturada a partir da perspectiva de Paulo, um jovem interiorano que assume o papel de narrador, observador e julgador moral da vida de Lúcia (cujo nome de batismo é Maria da Glória).",
      "Apresentada inicialmente como uma cortesã de luxo na sociedade carioca do século XIX, Lúcia é fruto do olhar masculino que a oscila continuamente entre a idealização angelical e a condenação moral por sua profissão e sexualidade.",
      "Sob a perspectiva psicológica, a trajetória de Lúcia ilustra os efeitos devastadores da internalização da culpa e da estigmatização social na psique feminina. A personagem ingressa na prostituição por um ato extremo de desespero e amor filial, visando obter recursos para salvar sua família da miséria e da doença. No entanto, a sociedade oitocentista ignora o sacrifício e impõe-lhe o rótulo indelével da “mulher caída”.",
      "Lúcia passa a viver um contínuo e torturante conflito psíquico entre o desejo de viver a pureza de seu afeto por Paulo e o desprezo que sente por si mesma, desenvolvendo quadros profundos de autopunição, depressão, vergonha e anulação de sua própria identidade.",
      "A mediação da voz de Lúcia pela narrativa de Paulo evidencia a interdição do lugar de fala da mulher na literatura escrita por homens do século XIX. Paulo arroga-se o direito de “salvar” e “purificar” Lúcia, mas exige em troca a negação total da autonomia e da sexualidade da personagem. Os erros da juventude masculina são encarados como deslizes passageiros e perdoáveis, enquanto a transgressão feminina é vista como um pecado irremediável que exige sacrifício e expiação extrema.",
      "O desfecho trágico da protagonista, marcado pela doença e pela morte prematura, opera como o símbolo supremo da liquidação da mulher que ousou transgredir as normas de castidade. Lucíola revela, assim, como a literatura romântica tendeu a romantizar a dor e o silenciamento das mulheres, transformando a anulação psíquica e a morte em atos de pseudo-redenção, enquanto ocultava as reais violências de gênero que adoeciam as mulheres da época."
    ]
  },
  torto: {
    kicker: "Análise de obra · 2025",
    title: "Torto Arado: raça, classe, gênero e saúde mental no sertão",
    byline: "Por Letícia Castro · sobre Torto Arado, de Itamar Vieira Junior",
    paragraphs: [
      "Em Torto Arado, Itamar Vieira Junior constrói um panorama denso e poético sobre a interseccionalidade entre raça, classe, gênero e saúde mental no sertão da Bahia. O romance acompanha a vida de duas irmãs, Bibiana e Belonísia, filhas de trabalhadores rurais assentados em um regime de quase escravidão contemporânea na fazenda Água Negra.",
      "O evento traumático da infância — o acidente com a faca da avó que decepa a língua de Belonísia e fere a de Bibiana — serve como ponto de partida para discutir como a privação da fala e o silenciamento histórico marcam a subjetividade e a experiência emocional das mulheres negras e camponesas no Brasil.",
      "A mutilação física de Belonísia desdobra-se em uma poderosa metáfora do silenciamento imposto pelo racismo ambiental e patriarcal. Privada da voz vocalizada, a personagem precisa reconstruir suas formas de comunicação e expressão no mundo, desenvolvendo uma ligação visceral com a terra, com o trabalho físico e com as tradições espirituais do Jarê. A impossibilidade de verbalizar seus traumas, somada à experiência de um casamento abusivo, acumula em seu psiquismo um sofrimento silencioso que reflete a vulnerabilidade de milhares de mulheres rurais.",
      "Bibiana, por sua vez, canaliza sua angústia para o letramento, para a consciência política e para a liderança comunitária. Todavia, o engajamento na luta pela terra e pelos direitos trabalhistas exige dela um custo psíquico elevadíssimo. A constante ameaça de violência dos latifundiários, a perda de entes queridos e a sobrecarga de responsabilidades familiares e coletivas colocam Bibiana diante do esgotamento emocional e da solidão.",
      "A obra de Itamar Vieira Junior demonstra com clareza que o sofrimento psicológico feminino não pode ser desvinculado das estruturas materiais de exploração. As personagens ressignificam o trauma por meio da religiosidade, da união entre mulheres e do pertencimento comunitário, provando que a saúde mental feminina também é mantida pelo fortalecimento dos laços de solidariedade e pela busca por justiça social."
    ]
  },
  quiz2024: {
    kicker: "Pesquisa de opinião · 2024",
    title: "O que 100 pessoas pensam sobre literatura e saúde mental feminina",
    byline: "Análise do questionário · pesquisa de opinião com 100 participantes",
    paragraphs: [
      "A saúde mental das mulheres envolve aspectos como pressões sociais, traumas, expectativas culturais e papéis de gênero. Para entender como as pessoas enxergam a relação entre arte e saúde mental, foi realizada uma pesquisa de opinião com 100 participantes, analisando principalmente a importância da literatura e do audiovisual na conscientização sobre os problemas psicológicos enfrentados pelas mulheres.",
      "A literatura como forma de conscientização: 91% dos participantes consideram essencial o uso da literatura em pesquisas sobre saúde mental; 93% concordam que a literatura comparada ajuda a identificar problemas sociais, econômicos e psicológicos enfrentados pelas mulheres ao longo da história; e 93% concordam que a literatura contribui para aumentar a conscientização sobre a saúde mental feminina, sendo 60% de concordância total e 33% parcial.",
      "Além disso, 88% consideram que as obras abordam de maneira adequada fatores como traumas, fatores de risco e expectativas relacionadas ao gênero, e 82% enxergam a literatura como um espaço positivo e respeitoso para representar mulheres de diferentes origens socioculturais. Para grande parte dos participantes, a literatura não serve apenas como entretenimento: ela também é uma forma de dar visibilidade a experiências femininas e estimular discussões pouco debatidas.",
      "O audiovisual e a representação da saúde mental: 89% dos participantes atribuíram notas 4 ou 5 à eficácia do audiovisual para retratar questões relacionadas à saúde mental feminina. Entretanto, 39% não souberam opinar quando questionados sobre o consumo de filmes voltados especificamente ao tema, 38% afirmaram já ter assistido e identificado filmes com essa temática e 23% disseram nunca ter tido contato com essas produções.",
      "A valorização e o consumo da literatura comparada: quando os dados são analisados em conjunto, surge um cenário interessante. De um lado, há uma grande valorização da arte como forma de conscientização; de outro, existe uma diferença entre acreditar no potencial dessas obras e realmente ter contato com elas. No caso do audiovisual, quase 62% dos participantes não assistiram a produções sobre o tema ou não souberam identificar se já haviam consumido alguma.",
      "Isso mostra que o problema não está apenas na falta de interesse: a divulgação e o acesso a essas obras também são fatores importantes. A pesquisa revela uma espécie de distância entre aquilo que as pessoas valorizam e aquilo que realmente consomem. A maioria reconhece o poder da arte para discutir e conscientizar sobre a saúde mental feminina, mas uma parcela significativa ainda não tem contato com essas produções."
    ]
  },
  quiz2025: {
    kicker: "Pesquisa de opinião · 2025",
    title: "O que os jovens pensam sobre literatura, gênero e saúde mental",
    byline: "Análise dos questionários · 103 participantes (unissex) e 20 jovens (público masculino)",
    paragraphs: [
      "A pesquisa de 2025 ouviu dois públicos. O questionário unissex foi aplicado a 103 participantes de 13 a 17 anos; o questionário masculino, a 20 jovens. Os dados ajudam a entender como as novas gerações percebem a relação entre a literatura e o bem-estar psicológico das mulheres.",
      "Hábitos de leitura (unissex): 44,7% dos participantes leem de 1 a 2 obras por ano, 27,2% leem de 3 a 4 obras e 28,2% leem 5 ou mais livros no período de doze meses. Apesar disso, 91,3% afirmam já ter lido livros com protagonistas mulheres.",
      "O impacto da literatura: 63,1% afirmaram que a leitura os tornou mais compreensivos sobre o tema, enquanto 33% disseram que “nunca pensaram sobre isso”. Na avaliação direta, 62,1% atribuíram nota máxima (5 em 5) à afirmação de que a literatura ajuda a compreender os dilemas da saúde mental feminina.",
      "Percepção social: 54,4% sentem que o assunto é discutido apenas “às vezes” e 30,1% afirmam que é “raramente” debatido, totalizando mais de 84% de percepções sobre o déficit de atenção pública ao tema. Apenas 54,4% lembraram de ter lido obras com personagens femininas no ensino fundamental e médio.",
      "Autoria e representação: 77,7% acreditam que autoras mulheres representam melhor a saúde mental feminina do que autores homens, contra apenas 2,9% que discordam (19,4% não souberam opinar). Além disso, 81,6% acreditam que ler histórias com dilemas emocionais ajuda outras mulheres a se sentirem menos sozinhas.",
      "Conhecimento das obras: entre os títulos de anos anteriores, As Meninas (44,4%) e Garota, Interrompida (37%) foram os mais lidos pelo público. Já as obras analisadas no ciclo de 2025 revelaram índice baixo entre os jovens: 92,2% não leram A Amiga Genial, 82,5% não leram Torto Arado e 68,9% não leram Lucíola.",
      "Público masculino: 35% atribuíram nota máxima (5) à ideia de que a literatura valoriza a saúde mental das mulheres, 25% deram nota 4 e 30% ficaram na nota neutra (3). Porém, 70% percebem que os livros retratam a saúde mental da mulher de forma “romantizada” — 45% dizem que isso ocorre “às vezes” e 25% “frequentemente”.",
      "Os dados também revelam estigmas persistentes. Quando perguntados se as mulheres confundem “drama” com problemas de saúde mental, 70% responderam que isso acontece “às vezes” e 30% afirmaram que ocorre “sempre”. Sobre sobrecarga emocional, 40% acham que as mulheres “às vezes” exageram e 15% acreditam que isso ocorre “sempre”. Para 55%, as mulheres “às vezes” usam problemas emocionais como desculpa para evitar responsabilidades, e 20% afirmam que isso acontece “frequentemente”.",
      "Conclusão: os resultados reforçam a urgência de debates educacionais aprofundados sobre gênero e saúde mental, pois, embora muitos jovens reconheçam o potencial da literatura, uma parcela significativa ainda absorve narrativas que naturalizam a vulnerabilidade feminina como fraqueza."
    ]
  },
  "entrevista-2024": {
    kicker: "Entrevista · 23 de agosto de 2024",
    title: "Adolescência, maternidade e sobrecarga feminina",
    byline: "Conversa com Sônia Pargas · terapeuta especialista em mulheres",
    paragraphs: [
      "No dia 23/08/2024, realizamos uma reunião com a participação de Sônia Pargas. Com esse encontro, conseguimos expandir ainda mais nossos conhecimentos sobre saúde mental feminina e os desafios enfrentados pelas mulheres em diferentes fases da vida. Durante a conversa, foram abordados temas como a influência da literatura na saúde mental, a adolescência feminina, a maternidade, a pressão social e a dificuldade de conciliar a vida pessoal e profissional.",
      "Ao falar sobre literatura, Sônia destacou seu potencial como ferramenta de identificação, fortalecimento e inspiração. Segundo ela, encontrar mulheres e experiências semelhantes às nossas em livros e filmes pode ajudar a perceber que não estamos sozinhas e que é possível superar momentos difíceis. Para a terapeuta, a literatura pode funcionar como uma verdadeira aliada, despertando nas leitoras a percepção de que também são capazes de transformar suas próprias histórias.",
      "Outro ponto de destaque foi a saúde mental das adolescentes. Sônia ressaltou que essa fase precisa receber uma atenção especial, já que é durante a adolescência que muitas meninas começam a construir sua identidade e a lidar com mudanças físicas, emocionais e sociais. A falta de orientação, as comparações, os rótulos e as crenças limitantes podem fazer com que muitas jovens escondam seus sentimentos e deixem de expressar quem realmente são. Para ela, é fundamental que adolescentes tenham apoio para falar sobre o que sentem, sem medo de julgamentos.",
      "A terapeuta também chamou atenção para os desafios enfrentados pelas mulheres na vida adulta. Entre eles, está a dificuldade de conciliar trabalho, família e autocuidado. Muitas mulheres assumem diferentes responsabilidades ao mesmo tempo e acabam colocando suas próprias necessidades em segundo plano. Além da sobrecarga, existe ainda o medo do julgamento social, que pode fazer com que muitas mulheres tenham dificuldade para se posicionar e tomar decisões de acordo com aquilo que realmente desejam.",
      "A maternidade também foi abordada como uma experiência que pode impactar profundamente a saúde mental feminina. A sobrecarga de responsabilidades e a falta de apoio podem contribuir para o surgimento de estresse, ansiedade, depressão e outros sofrimentos emocionais. Por isso, segundo a terapeuta, cuidar da mãe também deve ser uma parte essencial do cuidado com o bebê.",
      "A entrevista reforçou, portanto, a importância de olhar para a mulher de forma integral, considerando não apenas os papéis que ela desempenha, mas também seus sentimentos, desejos, limites e necessidades. Promover a saúde mental feminina envolve oferecer espaços de escuta e acolhimento desde a adolescência, incentivar o autoconhecimento e reconhecer que cuidar de si não deve ser visto como egoísmo, mas como uma necessidade. Nesse processo, a literatura também pode ocupar um espaço importante, ajudando mulheres a se reconhecerem em outras histórias."
    ]
  },
  "entrevista-vinicius": {
    kicker: "Entrevista · 2025",
    title: "Cultura, ansiedade e o cuidado com a saúde mental feminina",
    byline: "Conversa com Vinícius Pinto · psicólogo e terapeuta de casais",
    paragraphs: [
      "A entrevista concedida pelo psicólogo e terapeuta de casais Vinícius Pinto, realizada no Espaço Bretas Clínica, trouxe contribuições fundamentais ao conectar a cultura, a psicologia e a busca pelo bem-estar emocional das mulheres. Em sua fala, o profissional destacou que a cultura abrange tudo aquilo que o ser humano cultiva e consome — leituras, filmes, músicas e conteúdos de redes sociais —, servindo diretamente de matéria-prima para a construção dos pensamentos, da linguagem e do comportamento individual.",
      "Sob a ótica da psicologia, aprender a pensar com clareza possibilita falar melhor e agir de forma mais consciente. A partir dessa premissa, o entrevistado ressaltou a relevância da literatura como uma importante ponte para debater a saúde mental feminina, uma vez que a arte consegue democratizar e jogar luz em temas complexos e delicados, muitas vezes difíceis de serem abordados diretamente ou verbalizados em uma sessão de terapia tradicional. A obra literária atua, portanto, como um recurso de sensibilização e acolhimento, permitindo ao público identificar seus próprios conflitos emocionais.",
      "Aprofundando o panorama da saúde mental no século XXI, Vinícius Pinto ressaltou o aumento expressivo dos transtornos de ansiedade no Brasil, mencionando dados da Organização Mundial da Saúde (OMS) que já apontavam o país como o mais ansioso do mundo antes do período pandêmico. Nesse contexto, o terapeuta revelou que cerca de 90% das pessoas que buscam atendimento psicológico e psiquiátrico pertencem ao público feminino.",
      "Segundo o profissional, essa preponderância ocorre porque as mulheres tendem a priorizar ativamente a própria saúde e o bem-estar psicológico em comparação aos homens, o que também se reflete nos índices gerais de expectativa de vida. Por atender majoritariamente mulheres e casais, ele ressaltou que a clínica se torna um espaço de escuta contínua de vivências marcadas por exigências sociais, pressões relacionais e sofrimentos silenciosos, reforçando a urgência de que a sociedade continue promovendo espaços de diálogo e desmistificando o acompanhamento psicológico.",
      "Outro ponto central discutido foi o impacto destrutivo do machismo estrutural na saúde emocional e na autoimagem das mulheres. Definido pelo psicólogo como uma conduta essencialmente egoísta e centralizadora, o machismo se manifesta na tentativa de controle sobre o outro, anulando a individualidade, os desejos e a liberdade da parceira. Esse tipo de dinâmica favorece a criação de relacionamentos disfuncionais, caracterizados pela dependência emocional, pela falta de respeito mútuo e pelo acúmulo de mágoas e inseguranças.",
      "O especialista enfatizou que esse problema ultrapassa a esfera individual do casal e se consolida como uma questão de saúde pública, exigindo ações preventivas desde a infância. Promover o ensino do respeito, da empatia e da igualdade dentro das famílias e nas escolas é indispensável para romper ciclos de violência psíquica e construir vínculos afetivos mais humanos, equilibrados e pautados na confiança recíproca.",
      "Ao apontar o principal motivo que leva as mulheres a procurarem o auxílio terapêutico, o psicólogo destacou a insegurança como a raiz de diversas queixas clínicas, como crises de pânico, quadros ansiosos e a permanência em relacionamentos abusivos. Segundo ele, essa insegurança decorre fundamentalmente da falta de autoconhecimento e da dificuldade em compreender o próprio posicionamento e limites diante do mundo, somando-se às variações hormonais ao longo da vida da mulher — como a primeira menstruação, a TPM, a gestação e a menopausa —, que influenciam a percepção corporal, a autoestima, a oscilação de humor e a forma de se comunicar.",
      "Por fim, Vinícius relatou seu aprendizado no atendimento ao público feminino, ressaltando a necessidade de reconhecer as particularidades e a sensibilidade do universo feminino sem impor lógicas rígidas, valorizando a empatia, a intuição e a dimensão transformadora que a mulher traz para as relações e para a sociedade."
    ]
  },
  "entrevista-alana": {
    kicker: "Entrevista · 2025",
    title: "Escrita feminina, sobrecarga e resistência",
    byline: "Conversa com Alana Lima · psicóloga especialista em mulheres",
    paragraphs: [
      "A entrevista realizada com a psicóloga Alana Lima, que atua diretamente no atendimento ao público feminino, trouxe contribuições valiosas ao analisar a relação entre a psicologia, as representações literárias de gênero e os desafios enfrentados pelas mulheres na contemporaneidade.",
      "Um dos pontos centrais abordados pela profissional foi a diferença marcante na forma como autores homens e autoras mulheres constroem personagens femininas na literatura. Segundo a especialista, as obras escritas por homens tendem a refletir uma perspectiva masculina que frequentemente idealiza, sexualiza ou reduz a mulher a papéis secundários e subordinados ao protagonista. Essa idealização constrói figuras irrealistas — vistas como perfeitamente compreensivas, atraentes e moldadas ao desejo alheio —, o que impõe padrões inalcançáveis e gera pressões psicológicas sobre as leitoras.",
      "Em contrapartida, as escritoras mulheres apresentam narrativas mais autênticas e multifacetadas, criando personagens realistas com dúvidas, vulnerabilidades, dilemas e conquistas. Essa abordagem sensível permite que a literatura atue como um espaço seguro de identificação, acolhimento e validação das emoções femininas, desconstruindo estigmas de que a intensidade emocional seria um sinal de fraqueza ou instabilidade mental.",
      "No âmbito da prática clínica, Alana Lima destacou o impacto direto da sobrecarga cotidiana sobre a saúde mental das mulheres, com especial ênfase nas pressões decorrentes da dupla jornada e das expectativas sociais. A psicóloga observou que, mesmo ocupando posições profissionais equivalentes às dos homens, as mulheres sentem a necessidade constante de provar sua competência, autoridade e credibilidade, enfrentando questionamentos e exigências adicionais.",
      "A isso soma-se o acúmulo das tarefas domésticas, do cuidado com os filhos e da gestão familiar, o que gera um estado de cansaço contínuo, exaustão emocional, ansiedade e estresse. Além da sobrecarga de trabalho, a imposição de padrões estéticos rígidos e a cobrança para demonstrar equilíbrio em todas as áreas da vida afetam significativamente a autoimagem e o bem-estar psíquico.",
      "A partir dessas reflexões, a entrevista evidenciou que a escrita feminina e o debate aberto sobre a saúde mental são ferramentas indispensáveis de resistência e transformação social, pois dão voz às experiências frequentemente silenciadas e promovem uma compreensão mais empática e crítica sobre as desigualdades estruturais que atravessam o cotidiano feminino."
    ]
  }
};

const people = {
  kayron: {
    kicker: "Orientador · ArteCeb",
    title: "Kayron Kaic da Silva Sousa",
    byline: "Professor, orientador e presença que deixa marcas de carinho.",
    paragraphs: [
      "Para a equipe, falar sobre o “Tio Kayron” é falar sobre alguém que torna os ambientes mais leves e ensina muito além do conteúdo. Acolher, incentivar, acreditar e caminhar ao lado de quem precisa fazem parte de sua forma de orientar.",
      "Referência de confiança e alegria, Kayron participa não só da formação das pesquisadoras, mas também da história pessoal de cada uma. Sua dedicação faz com que cada estudante se sinta visto, importante e capaz de chegar mais longe.",
      "É o elo que une rigor científico e afeto — e a certeza de que ensinar também é cuidar."
    ]
  },
  carla: {
    kicker: "Pesquisadora · ArteCeb",
    title: "Carla Guedes Sarmento Costa",
    byline: "Uma presença tranquila com energia capaz de iluminar qualquer ambiente.",
    paragraphs: [
      "Carla carrega um jeito próprio de tornar tudo mais leve. Tranquila e, ao mesmo tempo, cheia de energia quando se anima, ela está presente nas memórias, nas risadas e nas fases vividas ao lado da equipe.",
      "As pessoas próximas destacam sua generosidade e sua alegria espontânea: alguém que ajuda sem esperar nada em troca e transforma conversas simples em lembranças especiais.",
      "No projeto, assina a leitura crítica de Garota, Interrompida, contribuindo para uma reflexão humana sobre diagnóstico, estigma e acolhimento."
    ]
  },
  leticia: {
    kicker: "Pesquisadora · ArteCeb",
    title: "Letícia Castro Barbosa Cruz",
    byline: "Coragem, convicção e uma risada que irradia o ambiente.",
    paragraphs: [
      "Letícia é descrita como porto seguro: uma amiga que está presente, percebe os detalhes e demonstra carinho nas pequenas coisas. Sua energia deixa qualquer encontro mais vivo.",
      "Ela defende suas convicções com coragem, fala o que pensa e não passa despercebida. Inteligência e posicionamento fazem de sua voz uma parte essencial do grupo.",
      "Em A Redoma de Vidro, seu olhar investiga como as expectativas externas podem sufocar mulheres que, mesmo diante de oportunidades, enfrentam sofrimentos muitas vezes invisíveis."
    ]
  },
  giovanna: {
    kicker: "Pesquisadora · ArteCeb",
    title: "Giovanna de Oliveira dos Reis",
    byline: "Um jeito calmo, atento e capaz de fazer muita diferença.",
    paragraphs: [
      "Giovanna construiu com a equipe uma amizade rápida e bonita. É a pessoa que vibra junto em qualquer ocasião e traz energia tanto para os momentos bons quanto para os difíceis.",
      "Mais quieta e observadora, ela não precisa chamar atenção para ser notada. Quando fala, tem algo bom a dizer; sua calma deixa as conversas mais leves e sua presença transforma o grupo.",
      "Seu olhar atento ajuda a pesquisa a preservar algo essencial: por trás de cada conceito, há experiências humanas que precisam ser ouvidas com respeito."
    ]
  }
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function appendElement(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  parent.append(element);
  return element;
}

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -25px" });

function observeReveals(scope = document) {
  $$(".reveal:not(.visible)", scope).forEach(element => revealObserver.observe(element));
}

function readingCard(item) {
  const data = articles[item.id];
  const card = document.createElement("article");
  card.className = "article-card reveal";

  const art = document.createElement("div");
  art.className = `book-art ${item.art}`;
  art.setAttribute("aria-hidden", "true");
  const artTitle = document.createElement("span");
  artTitle.innerHTML = item.artTitle;
  const artGenre = document.createElement("i");
  artGenre.textContent = item.genre;
  art.append(artTitle, artGenre);
  card.append(art);

  const meta = document.createElement("div");
  meta.className = "article-meta";
  appendElement(meta, "span", item.meta);
  appendElement(meta, "span", item.time);
  card.append(meta);

  appendElement(card, "h3", data.title);
  appendElement(card, "p", item.author);

  const button = appendElement(card, "button", "Ler artigo ", "read-button");
  button.type = "button";
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(arrow);
  button.addEventListener("click", () => openModal(data));

  return card;
}

function quizCard(quiz) {
  const data = articles[quiz.id];
  const card = document.createElement("article");
  card.className = "reading-quiz-card reveal";

  const copy = document.createElement("div");
  copy.className = "quiz-copy";
  appendElement(copy, "span", quiz.meta, "quiz-kicker");
  appendElement(copy, "h3", data.title);
  appendElement(copy, "p", data.byline);
  const button = appendElement(copy, "button", "Ler a análise ", "read-button");
  button.type = "button";
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  button.append(arrow);
  button.addEventListener("click", () => openModal(data));

  const stats = document.createElement("div");
  stats.className = "quiz-stats";
  quiz.stats.forEach(([value, label]) => {
    const block = document.createElement("div");
    appendElement(block, "strong", value);
    appendElement(block, "span", label);
    stats.append(block);
  });

  card.append(copy, stats);
  return card;
}

function renderReadings(year) {
  const set = readingsIndex[year];
  const grid = $("#reading-grid");
  grid.replaceChildren();
  set.works.forEach(item => grid.append(readingCard(item)));

  const quizBox = $("#reading-quiz");
  quizBox.replaceChildren();
  if (set.quiz) {
    quizBox.hidden = false;
    quizBox.append(quizCard(set.quiz));
  } else {
    quizBox.hidden = true;
  }

  observeReveals($("#reading-panel"));
}

function renderYear(year) {
  const data = researchYears[year];
  const panel = $("#year-panel");
  $("#year-kicker").textContent = data.kicker;
  $("#year-title").textContent = data.title;
  $("#year-description").textContent = data.description;
  const methods = $("#year-methods");
  methods.replaceChildren();
  data.methods.forEach(method => appendElement(methods, "span", method));

  const books = $("#year-books");
  books.replaceChildren();
  data.books.forEach(([title, author]) => {
    const line = appendElement(books, "div", "", "book-line");
    appendElement(line, "strong", title);
    appendElement(line, "span", author);
  });
  $("#year-result-title").textContent = data.resultTitle;
  $("#year-result-label").textContent = data.resultLabel;
  $("#year-result-description").textContent = data.resultDescription;
  const resultImage = $("#year-result-image");
  const resultFigure = $("#year-result-figure");
  if (data.resultImage) {
    resultImage.src = data.resultImage;
    resultImage.alt = data.resultAlt;
    resultFigure.hidden = false;
    panel.classList.remove("current-cycle");
  } else {
    resultImage.removeAttribute("src");
    resultImage.alt = "";
    resultFigure.hidden = true;
    panel.classList.add("current-cycle");
  }
  panel.classList.remove("switching");
  void panel.offsetWidth;
  panel.classList.add("switching");
}

function openModal(content) {
  const modal = $("#content-modal");
  $("#modal-kicker").textContent = content.kicker;
  $("#modal-title").textContent = content.title;
  $("#modal-byline").textContent = content.byline;
  const modalBody = $("#modal-body");
  modalBody.replaceChildren();
  content.paragraphs.forEach(paragraph => appendElement(modalBody, "p", paragraph));
  document.body.classList.add("modal-open");
  modal.showModal();
  $(".modal-scroll", modal).scrollTop = 0;
}

function whatsappUrl(type = "catalogo") {
  const messages = {
    catalogo: "Olá! Conheci o projeto MUSA — Um Olhar para a Saúde Mental Feminina a partir da Literatura Comparada — e gostaria de saber mais sobre a Agenda Terapêutica, valores e disponibilidade.",
    apoiar: "Olá! Conheci o projeto MUSA — Um Olhar para a Saúde Mental Feminina a partir da Literatura Comparada — e gostaria de saber como posso apoiar a continuidade da pesquisa.",
    convite: "Olá! Conheci o projeto MUSA — Um Olhar para a Saúde Mental Feminina a partir da Literatura Comparada — e gostaria de conversar sobre um convite para a equipe.",
    pesquisa: "Olá! Conheci o projeto MUSA — Um Olhar para a Saúde Mental Feminina a partir da Literatura Comparada — e gostaria de conversar com a equipe sobre a pesquisa."
  };
  const number = (window.ARTCEB_CONFIG?.whatsappNumber || "").replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(messages[type] || messages.catalogo)}`;
}

function updateWhatsappLinks() {
  const type = $("#interest-select")?.value || "catalogo";
  $("#whatsapp-link").href = whatsappUrl(type);
  $("#floating-whatsapp").href = whatsappUrl("catalogo");
}

function init() {
  renderYear("2023");
  renderReadings("2023");
  updateWhatsappLinks();
  $("#current-year").textContent = new Date().getFullYear();

  const header = $(".site-header");
  const floatingWhatsapp = $("#floating-whatsapp");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 80);
    floatingWhatsapp.classList.toggle("is-visible", window.scrollY > 560);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuButton = $(".menu-toggle");
  const nav = $(".main-nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    nav.classList.toggle("open", !open);
  });
  $$("a", nav).forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    nav.classList.remove("open");
  }));

  $$("a[href='#inicio']").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", `${location.pathname}${location.search}#inicio`);
  }));

  $$(".year-tabs button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".year-tabs button").forEach(tab => tab.setAttribute("aria-selected", "false"));
      button.setAttribute("aria-selected", "true");
      renderYear(button.dataset.year);
    });
  });

  $$('[data-article]').forEach(button => button.addEventListener("click", () => openModal(articles[button.dataset.article])));
  $$('[data-person]').forEach(button => button.addEventListener("click", () => openModal(people[button.dataset.person])));

  const modal = $("#content-modal");
  $(".modal-close", modal).addEventListener("click", () => modal.close());
  modal.addEventListener("click", event => {
    const box = modal.getBoundingClientRect();
    const inside = event.clientX >= box.left && event.clientX <= box.right && event.clientY >= box.top && event.clientY <= box.bottom;
    if (!inside) modal.close();
  });
  modal.addEventListener("close", () => document.body.classList.remove("modal-open"));

  $("#interest-select").addEventListener("change", updateWhatsappLinks);

  $$(".reading-tabs button").forEach(button => {
    button.addEventListener("click", () => {
      $$(".reading-tabs button").forEach(tab => tab.setAttribute("aria-selected", "false"));
      button.setAttribute("aria-selected", "true");
      renderReadings(button.dataset.reading);
    });
  });

  observeReveals();
}

document.addEventListener("DOMContentLoaded", init);
