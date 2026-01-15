AllCssMaf
Uma solução prática e organizada para gerenciar CSS em seus projetos PHP, focada na automação via Composer. Este projeto foi desenvolvido como parte do meu Trabalho.

---

🚀 Como Instalar
Para adicionar o pacote ao seu projeto, execute o comando abaixo no terminal:

```

composer require matheus14112003/all-css-maf

```

---

🛠️ Configuração Recomendada (Scripts Composer)
Para garantir que a estrutura de pastas fique organizada automaticamente, recomendo adicionar os seguintes scripts ao seu arquivo `composer.json`.

Estes comandos automatizam a movimentação dos arquivos da pasta `vendor` para a sua pasta `public`, mantendo o ambiente limpo.

```

"scripts": {

    "limpar-vendor": [

        "powershell -Command \"Move-Item -Path 'vendor/matheus14112003/all-css-maf/public/styles' -Destination 'public/' -ErrorAction SilentlyContinue\"",

        "powershell -Command \"Remove-Item -Path 'vendor/matheus14112003' -Recurse -Force\""

    ],

    "setup": [

        "@limpar-vendor",

        "echo Estrutura organizada com sucesso !"

    ],

    "att-styles": [

        "powershell -Command \"Remove-Item -Path 'public/styles' -Recurse -Force -ErrorAction SilentlyContinue\"",

        "composer update matheus14112003/all-css-maf",

        "powershell -Command \"Copy-Item -Path 'vendor/matheus14112003/all-css-maf/public/styles' -Destination 'public/' -Recurse -Force\"",

        "powershell -Command \"Remove-Item -Path 'vendor/matheus14112003' -Recurse -Force\"",

        "echo Pasta styles atualizada com sucesso!"

    ]

}

```

Como usar os comandos:

• `composer run setup`: Organiza as pastas logo após a primeira instalação.

• `composer run att-styles`: Atualiza o pacote e sincroniza os novos arquivos CSS com sua pasta pública.

---

💻 Tecnologias Utilizadas
O projeto utiliza o que há de melhor para desenvolvimento web e automação de pacotes:

• HTML5 / CSS3 / JavaScript

• Composer

• GitHub

---

🎓 Projeto 
Este repositório foi desenvolvido para salvar e melhorar classes pré-montadas que se adaptam a um arquivo styles.css com as variáveis de cada projeto.