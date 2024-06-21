
document.addEventListener('DOMContentLoaded', () => {
    const tableContainer = document.querySelector('.table-container');

    // Dados simulados das tabelas do Excel
    /*Para adicionar uma nova tabela copie este código
     ,
     {
            title: 'Inserir Título',
            headers: ['Inserir Header', 'Inserir Header'], // Adicione mais headers conforme necessário
            rows: [
                ['inserir linha', 0],
                ['inserir linha', 0],
                // Adicione mais linhas conforme necessário
            ]
        }
    
    */
    const tablesData = [
        {
            title: 'Modelly - Desenvolvedores', //MEMBROS MODELLY
            headers: ['Equipe', 'Funções', 'Contrato', 'Salário','Salário Anual'], // Adicione mais headers conforme necessário
            rows: [
                ['Pamela Miranda(Pamy)', 'Product Owner - UI Designer/Desenvolvedora Front End','PJ','R$1.554','18.648'],
                ['Gabriel Santos(Gabs)', 'Scrum Master - Desenvolvedor Full-Stack','PJ','R$1.554','18.648'],
                ['Gabriel Valentin(Redd)', 'Financeiro - UX Designer/ Desenvolvedor Full-Stack','PJ','R$1.554','18.648'],
                ['Matheus Morgado(Matt)', 'Desenvolvedor Full Stack','PJ','R$1.554','18.648'],
                ['Giovanna Tavares(Gio)', 'UI Designer/Desenvolvedora de Banco de Dados','PJ','R$1.554','18.648'],
                ['João Lucas(Guiado por Deus)', 'Desenvolvedor Front End','PJ','R$1.554','18.648'],
                ['Jhonnatan Gomes(Jhow)', 'Desenvolvedor Front End','PJ','R$1.554','18.648'],
                ['', '','','Total: ','R$130.536,00']
            ]
        },
        {
               title: 'Modelly - Custo Funcionários',
               headers: ['Função', 'Quantidade', 'Contrato', 'Salário', 'Salario Anual'], // Adicione mais headers conforme necessário
               rows: [
                   ['Equipe de Marketing', 1,'PJ','R$1502,00','18.024'],
                   ['Equipe de Suporte', 2, 'PJ', 'R$1502,00','18.024'],
                   ['','','','Total:','R$54.072']
                   // Adicione mais linhas conforme necessário
               ]
           },
           {
            title: 'Modelly - Custo Recursos',
            headers: ['Auxilio', 'Quantidades', 'Valor', 'Total'], // Adicione mais headers conforme necessário
            rows: [
                ['Notebook Lenovo AMD Ryzen 5-7520U 8GB 256GB SSD Tela HD 15.6” Linux Ideapad', '7', 'R$2.069,10', 'R$14.483,70'],
                ['Auxílio Educação (Faculdade/Curso)', '7', 'R$129,00 (Mensal)/R$1.548,00 (Anual)', 'R$903,00 (Mensal)/R$10.836,00 (Anual)'],
                ['', '', 'Total', 'R$25.319,70']
                // Adicione mais linhas conforme necessário
            ]
        },
              {
                     title: 'Modelly - Custo Recursos - Softwares e Web',
                     headers: ['Tecnologias', 'Quantidades', 'Valor Mensal', 'Valor Anual'], // Adicione mais headers conforme necessário
                     rows: [
                        ['Pacote Office', '7', 'R$36,00', 'R$359,00'],
                        ['Dominio(Amazon)', '1', 'R$10,99', 'R$131,88'],
                        ['Serviços AWS', '1', '-', 'R$121,00'],
                        ['Figma Professional', '1', 'R$62,95', 'R$755,40'],
                        ['Adobe Creative', '1', 'R$139,00', 'R$1.668,00'],
                        ['', '', 'Total', 'R$15.732,40']

                         // Adicione mais linhas conforme necessário
                     ]
                 },

                 {
                    title: 'Custos Totais',
                    headers: ['Item', 'Custo', '%'], // Adicione mais headers conforme necessário
                    rows: [
                        ['Desenvolvedores', 'R$130.536,00', '57.85%'],
                        ['Custo Funcionários', 'R$54.072,00', '23.97%'],
                        ['Custo Recursos', 'R$25.319,70', '11.22%'],
                        ['Custo Recursos - Softwares e Web', 'R$15.732,40', '6.97%'],
                        ['Total', 'R$225.660,10', '100%']
                        // Adicione mais linhas conforme necessário
                    ]
                },
                
                
        
        {
            title: 'Proposta de Valor',
            headers: ['Problemas Encontrados(Artistas)','Soluções Encontradas(Artistas)','Problemas Encontrados(Consumidores)','Soluções Encontradas(Consumidores)'], // Adicione mais headers conforme necessário
            rows: [
                ['Construir uma carreira sustentável na Arte', 'Seção de "Freelancer Artesanal"/Seção de Leilão de arte/Feira de Arte Imersiva/Ferramentas de Criação de Portfólio','Dificuldade em encontrar produtos artesanais específicos','Filtro de pesquisa otimizado para os consumidores com uso #tags e categorias específicas de Artesanato, facilitando encontrar produtos váriados.'],
                ['Ambiente Adaptado para Exposição e Venda', 'Feira de Arte Online Imersiva/Personalização de Stands Virtuais','Dificuldade em localizar artistas especializados em artesanatos personalizados.','Seção de Arte "Personalizados" dentro da plataforma, dando abertura para pedidos mais específicos e facilidade de encontrar estes artistas.'],
                ['Disputa por espaço físico no Mercado Artistico', 'Feira de Arte Online Imersiva/Algoritimo de Visualização igual para todos','Ausência de informações essenciais sobre o produto artesanal (material, procedência, tamanho, etc.).','Formulário detalhado sobre material/tamanho/data de produção/marca(opcional)'],
                ['Falta de Acessibilidade nas Plataformas', 'Ferramentas de Criação de Portfólio/Espaço visualmente pensado para acessibilidade','Falta de interatividade e suporte com o vendedor/artesão','Chats categorizador por Prioridades entre o Artista e o Cliente(Vendas/Duvidas e outros...)'],
                ['Dificuldade em Divulgação', 'Fornecer instruções de como impulsionar a qualidade de Marketing/Ferramentas de Criação de Portfólio','Impossibilidade de visualizar o produto artesanal em detalhes ou com qualidade devido às fotos fornecidas.','Funcionalidade de Visualização 360º para exibição de produtos, aumentando a imersão e qualidade exposição do produto artesanal.'],
                ['Alguns Artistas evitam vender online pelo risco de plágio', '(Considerar)Opção de Patentiar o produto','Garantia ao cliente de que o produto será recebido com segurança após o pagamento','Status de Produção/Transporte do produto. Emissão Obrigatória de Nota Fiscal. E Reembolso em caso de não recebimento.'],
                ['Dificuldade dos artistas em encontrar o público-alvo', 'Filtro de pesquisa otimizado para os consumidores com uso #tags e categorias específicas de Artesanato, facilitando o acesso aos artistas.','',''],
                ['Problemas na devolução do produto, independentemente do motivo, podendo causar danos e prejuízos ao artista.', 'No ponto de coleta terá uma equipe responsável por fiscalizar se este produto está em boa condição e perfeito estado para a devolução','',''],
                ['Falta de transparência nas taxas cobradas aos vendedores para utilizar as funcionalidades e vendas na plataforma', 'Uma documentação alegando a porcentagem por venda e demonstração de Custo/Renda/Lucro/Taxa','','']
            
               
                // Adicione mais linhas conforme necessário
            ]
        },
        {
            title:  'Projeção Financeira',
            headers: ['Monetização', 'Descrição'], // Adicione mais headers conforme necessário
            rows:[
                ['Feira de Arte(Stand Espaços):', 'Participação em feiras digitais periódicas que destacam produtos e oferecem promoções especiais. Estandes virtuais que permitem a navegação por espaços em 3D, proporcionando uma experiência de compra imersiva. Ferramentas de interação e negociação direta com os vendedores, permitindo a comunicação em tempo real.'],
                ['Taxação por Venda', 'Cobrança de uma porcentagem de 7% sobre cada venda realizada na plataforma. Além disso, uma taxa de transação de 1% sobre o valor total da transação é aplicada, garantindo um fluxo de receita constante para a manutenção e melhoria dos serviços da plataforma.'],
                ['Adsense (Anúncios)', 'Cobrança por Custo por Clique (CPC) para anúncios baseados em imagem ou Custo por Mil Impressões (CPM) para anúncios em vídeo. Essa funcionalidade permite aos artistas promoverem seus produtos dentro da plataforma, aumentando a visibilidade e as vendas.'],
                ['Dashboard', 'Ferramentas de gestão de negócios que fornecem insights e análises sobre o desempenho das vendas, acompanhamento de estoque, e gestão financeira. Inclui sugestões de empreendedorismo personalizadas para ajudar os artistas a desenvolverem seus negócios, com funcionalidades que aumentam de acordo com cada plano de assinatura.'],
                ['Eventos', 'Divulgação de eventos físicos e digitais, incluindo feiras de arte, exposições, e workshops. Estes eventos são promovidos na plataforma para atrair compradores e incentivar a participação dos artistas, criando oportunidades de networking e vendas.']
            ]
        },
        {
            title: 'Planos Modelly - Artistas',
            headers: ['Funcionalidades', 'Papel (Gratuito)', 'Pincel (Básico)', 'Bordado (Intermediário)', 'Escultura (Premium)'], // Adicione mais headers conforme necessário
            rows: [
                ['Feira de Arte (Stand Espaços):', '15 Espaços no Stand', '50 Espaços no Stand', '100 Espaços no Stand', '200 Espaços no Stand'],
                ['Oficinas de Arte', '-', 'Oficinas Gravadas (Período determinado)', 'Oficinas gravadas/Oficinas ao vivo (Período Determinado)', 'Oficinas gravadas/ao vivo (Vitalício)'],
                ['Funcionalidades do Dashboard', 
                    'Relatórios mensais de vendas, Artigos e dicas básicas de empreendedorismo, Templates básicos de marketing, Notificações de eventos relevantes, Suporte via e-mail', 
                    'Relatórios semanais de vendas, Rastreamento básico de estoque, Acesso a workshops gravados, Templates avançados e sugestões de campanhas, Análise básica de público-alvo, Acesso a calendário personalizado de eventos, Suporte via e-mail e chat', 
                    'Relatórios diários de vendas, Rastreamento básico de estoque, Acesso a workshops ao vivo e gravados, Templates avançados, sugestões de campanhas e análise, Análise avançada de público-alvo, Acesso a calendário personalizado de eventos e lembretes, Suporte via e-mail, chat e fórum exclusivo', 
                    'Relatórios em tempo real, Rastreamento avançado de estoque e alertas automáticas, Acesso a workshops ao vivo, gravados e consultorias, Ferramentas de automação de marketing e análise detalhada, Análise aprofundada e segmentação detalhada do público-alvo, Acesso completo ao calendário, lembretes e integração com outras ferramentas, Suporte prioritário via e-mail, chat, fórum exclusivo e consultoria personalizada'
                ],
                ['Montagem de Portfólio e Personalização Visual',
                    'Montagem básica de portfólio', 
                    'Portfólio com opções básicas de personalização visual', 
                    'Portfólio com opções avançadas de personalização visual', 
                    'Portfólio com personalização visual completa e recursos adicionais'
                ]
                // Adicione mais linhas conforme necessário
            ]
        }
        ,
           {
            title: 'Planos Modelly - Consumidores',
            headers: ['Funcionalidades', 'Admirador', 'Entusiasta', 'Colecionador'],
            rows: [
                ['Acesso a Conteúdos Exclusivos', 'Notícias e atualizações sobre artistas e eventos', 'Notícias, atualizações e entrevistas exclusivas com artistas', 'Notícias, entrevistas, e acesso a bastidores de eventos e processos de criação'],
                ['Descontos em Compras', 'Descontos de até 5% em produtos selecionados', 'Descontos de até 10% em todos os produtos', 'Descontos de até 15% e acesso a promoções exclusivas'],
                ['Acesso a Eventos', 'Acesso prioritário a eventos online gratuitos', 'Acesso prioritário e descontos em eventos pagos', 'Acesso VIP a todos os eventos, incluindo eventos exclusivos'],
                ['Ferramentas de Interação', 'Chat básico com vendedores', 'Chat avançado com histórico de conversas', 'Chat avançado e agendamento de reuniões virtuais com artistas'],
                ['Personalização de Experiência', 'Recomendações personalizadas de produtos', 'Recomendações avançadas e listas de desejos', 'Recomendações avançadas, listas de desejos, e consultoria de curadoria personalizada']
            ]
        },
        {
            title:  'Modelo de Negócio',
            headers: ['O que é a Modelly'],
             // Adicione mais headers conforme necessário
            rows: [ ['O que é a Modelly? Imagine um universo onde artistas e amantes da arte se conectam de forma fluida e enriquecedora. Um espaço virtual onde a criatividade encontra seu público, impulsionando carreiras e democratizando o acesso à cultura. Essa é a proposta da Modelly, uma iniciativa inovadora que reúne o melhor da tecnologia para transformar a maneira como a arte é vivenciada. Para Artistas: Seu Atelier Online. Crie sua galeria imersiva, exponha e venda suas obras para o mundo, gerencie sua loja online com ferramentas intuitivas, acompanhe vendas e dados de performance, e impulsione sua carreira artística com nosso apoio.Para Amantes da Arte: Um Mundo de Possibilidades. Descubra obras originais e autênticas que se encaixam em seus gostos e orçamento. Conecte-se com os artistas, personalize sua experiência de compra, receba curadoria personalizada e explore a diversidade da arte brasileira e internacional.Mais do que uma Plataforma: Desenvolvimento Profissional. Aprimore suas habilidades artísticas e de gestão de negócios com cursos, workshops e conteúdos exclusivos.Comunidade Vibrante: Conecte-se com outros artistas, troque experiências, colabore em projetos e participe de eventos online e presenciais.Algoritmos Democráticos: Sua arte terá visibilidade justa e igualitária, sem necessidade de pagar por destaque. A plataforma valoriza a diversidade e promove a inclusão.Acessibilidade para Todos: Plataforma intuitiva, sem complicações, para que você possa criar, comprar e se conectar com a arte de forma simples e prazerosa.Juntos, Construímos um Futuro Radiante:Trabalho Decente e Crescimento Econômico: Geração de renda para artistas, formalização do trabalho e democratização do acesso ao mercado de arte. Indústria, Inovação e Infraestrutura:* Plataforma inovadora que utiliza tecnologia para conectar pessoas e promover o desenvolvimento cultural. Redução das Desigualdades: Acesso democrático à arte e à cultura, valorização da diversidade e combate à exclusão social. Cidades e Comunidades Sustentáveis:*Promoção da cultura local, valorização do patrimônio cultural e desenvolvimento de cidades criativas e inovadoras.']
                 // Adicione mais linhas conforme necessário
            ]
        },
        {
            title: 'Visão Futura',
            headers: ['Funcionalidade', 'Descrição'], // Adicione mais headers conforme necessário
            rows: [
                ['Seção Para venda de Áudio', 'Uma plataforma dedicada para artistas venderem seus áudios, incluindo beats de rap, músicas, podcasts, e outros formatos de áudio. Os compradores poderão ouvir trechos, comprar direitos de uso, e baixar os arquivos diretamente da plataforma.'],
                ['Seção Para venda de Arte Digital', 'Um espaço exclusivo para artistas digitais exibirem e venderem suas obras, como ilustrações, gráficos, animações e NFTs. Os compradores terão a possibilidade de visualizar, adquirir direitos de uso, e baixar as peças em alta resolução, com opções de certificação de autenticidade.'],
                ['Leilão de Arte', 'Leilões automáticos para a última peça de um artista, além de leilões organizados pela plataforma com a participação de múltiplos artistas. Os planos superiores incluem a opção de organizar leilões pessoais, oferecendo uma plataforma exclusiva para destacar e vender obras de arte com maior controle e personalização.'],
                ['Oficinas de Arte (Mentoria)', 'Oficinas de arte e mentorias oferecidas por artistas experientes. As opções variam desde oficinas gravadas disponíveis por um período determinado até oficinas ao vivo que oferecem interação direta. Os artistas podem melhorar suas habilidades e aprender novas técnicas, com acesso vitalício nos planos superiores.']
 
                // Adicione mais linhas conforme necessário
            ]
        }
        

        
    ];

    // Função para criar uma tabela
    const createTable = (tableData) => {
        const tableDiv = document.createElement('div');
        tableDiv.classList.add('table');

        const title = document.createElement('h2');
        title.textContent = tableData.title;
        tableDiv.appendChild(title);

        const table = document.createElement('table');

        // Adicionar cabeçalhos
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        tableData.headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Adicionar linhas de dados
        const tbody = document.createElement('tbody');
        tableData.rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);

        tableDiv.appendChild(table);
        return tableDiv;
    };

    // Adicionar todas as tabelas ao container
    tablesData.forEach(tableData => {
        const table = createTable(tableData);
        tableContainer.appendChild(table);
    });
});
