export const pizzaData = {
  massas: [
    {
      id: 1,
      nome: "Napolitana",
      info: "O modo napolitano de preparo é considerado um Patrimônio Cultural Imaterial da Humanidade pela Unesco. Acima de tudo,  a massa napolitana deve atender a um conjunto muito específico. Seu sabor e textura únicos, precisam ser assados em um forno a lenha com cúpula. Além disso,  a massa deve ser amassada à mão, com no máximo 35 centímetros de diâmetro e no máximo um terço de centímetro de espessura. Os estilos clássicos incluem a Margherita e a Marinara. E devido ao sabor e textura é a opção perfeita para quem quer saborear uma pizza italiana autêntica.",
      preco: 10,
    },
    {
      id: 2,
      nome: "Nova-iorquina",
      info: "Frequentemente vendida em fatias grandes e largas, a pizza ao estilo de Nova York tem uma massa mais grossa e é levemente crocante por fora. Dessa forma, são consumidas sem talheres. É bastante comum que as fatias sejam dobradas, facilitando o consumo por parte dos clientes. Normalmente são assadas em temperaturas mais baixas, em fornos a gás. ",
      preco: 10,
    },
    {
      id: 3,
      nome: "Siciliana",
      info: "A pizza siciliana é conhecida por sua massa grossa em forma de retângulo, geralmente com mais de um centímetro de espessura. A saber, pode ser feita em qualquer formato de assadeira untada com azeite, o que a deixa bem crocante no fundo.  Se você gosta da pizza tradicional da Sicília, a farinha de rosca fica por cima dos ingredientes. Além disso, ainda existe a opção de ralar um queijo para finalizar o perfil de sabor. Curiosidade: a pizza com massa estilo siciliana não usa muçarela porque o leite de vaca não está disponível na ilha.",
      preco: 10,
    },
  ],
  sabores: [
    {
      id: 1,
      nome: "Calabresa",
      ingredientes: [
        "mussarela",
        "peito de peru",
        "palmito",
        "parmesão",
        "orégano",
      ],
      preco: 37,
    },
    {
      id: 2,
      nome: "Pizza Napolitana",
      ingredientes: [
        "mussarela",
        "peito de peru",
        "palmito",
        "parmesão",
        "orégano",
      ],
      preco: 37,
    },
    {
      id: 3,
      nome: "Calabresa",
      ingredientes: [
        "mussarela",
        "peito de peru",
        "palmito",
        "parmesão",
        "orégano",
      ],
      preco: 37,
    },
    {
      id: 4,
      nome: "Calabresa",
      ingredientes: [
        "mussarela",
        "peito de peru",
        "palmito",
        "parmesão",
        "orégano",
      ],
      preco: 37,
    },
  ],
  tamanhos: [
    {
      id: 1,
      nome: "Pequena",
      info: "6 pedaços",
      preco: 5,
    },
    {
      id: 2,
      nome: "Media",
      info: "8 pedaços",
      preco: 7,
    },
    {
      id: 3,
      nome: "Grande",
      info: "10 pedaços",
      preco: 11,
    },
  ],
};

export const pizzaDia = {
  id: 1,
  nome: "Pizza Napolitana",
  massa: "Napolitana",
  tamanho: "M",
  points: 50,
  ingredientes: [
    "mussarela",
    "peito de peru",
    "palmito",
    "parmesão",
    "orégano",
  ],
  preco: 37,
};
