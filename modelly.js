
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
            headers: ['Equipe', 'Funções', 'Contrato', 'Salário'], // Adicione mais headers conforme necessário
            rows: [
                ['Pamela Miranda(Pamy)', 'Product Owner - UI Designer/Desenvolvedora Front End','PJ','R$4.254'],
                ['Gabriel Santos(Gabs)', 'Scrum Master - Desenvolvedor Full-Stack','PJ','R$4.254'],
                ['Gabriel Valentin(Redd)', 'Financeiro - UX Designer/ Desenvolvedor Full-Stack','PJ','R$4.254'],
                ['Matheus Santos(Matt)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['Giovanna Tavares(Gio)', 'UI Designer/Desenvolvedora de Banco de Dados','PJ','R$4.254'],
                ['Ben-Hur(Ben)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['João Lucas(Guiado por Deus)', 'Desenvolvedor Back End','PJ','R$4.254'],
                ['Jhonnatan Gomes(Jhow)', 'Desenvolvedor Front End','PJ','R$4.254']
            ]
        },
        
        {
            title: 'Proposta de Valor',
            headers: ['Problemas Encontrados(Artistas)','Soluções Encontradas(Artistas)','Problemas Encontrados(Consumidores)','Soluções Encontradas(Consumidores)'], // Adicione mais headers conforme necessário
            rows: [
                ['Construir uma carreira sustentável na Arte', 'Seção de "Freelancer Artesanal"/','Dificuldade em encontrar produtos artesanais específicos',''],
                ['Ambiente Adaptado para Exposição e Venda', 'Feira de Arte Online Imersiva/Personalização de Stands Virtuais','Dificuldade em localizar artistas especializados em artesanatos personalizados.',''],
                ['Disputa por espaço físico no Mercado Artistico', 'Feira de Arte Online Imersiva/Algoritimo de Visualização igual para todos','Ausência de informações essenciais sobre o produto artesanal (material, procedência, tamanho, etc.).',''],
                ['Falta de Acessibilidade nas Plataformas', 'Ferramentas de Criação de Portfólio/Espaço visualmente pensado para acessibilidade','Falta de interatividade e suporte com o vendedor/artesão',''],
                ['Dificuldade em Divulgação', 0,'Impossibilidade de visualizar o produto artesanal em detalhes ou com qualidade devido às fotos fornecidas.',''],
                ['Alguns Artistas evitam vender online pelo risco de plágio', 0,'Garantia ao cliente de que o produto será recebido com segurança após o pagamento',''],
                ['Dificuldade dos artistas em encontrar o público-alvo', 0,'O problema é a devolução do produto',''],
                ['Problemas na devolução do produto, independentemente do motivo, podendo causar danos e prejuízos ao artista.', 0,'',''],
                ['Falta de transparência nas taxas cobradas aos vendedores para utilizar as funcionalidades e vendas na plataforma', 0,'','']
            
               
                // Adicione mais linhas conforme necessário
            ]
        },
        {
            title:  'Projeção Financeira',
            headers: ['Monetização', 'Descrição','Custo','Renda','Lucro'], // Adicione mais headers conforme necessário
            rows: [
                ['inserir linha', 0],
                ['Inserir linha', 0],
                // Adicione mais linhas conforme necessário
            ]
        },
        {
            title:  'Modelo de Negócio',
            headers: ['O que é a Modelly'], // Adicione mais headers conforme necessário
            rows: [ ['O que é a Modelly? Imagine um universo onde artistas e amantes da arte se conectam de forma fluida e enriquecedora. Um espaço virtual onde a criatividade encontra seu público, impulsionando carreiras e democratizando o acesso à cultura. Essa é a proposta da Modelly, uma iniciativa inovadora que reúne o melhor da tecnologia para transformar a maneira como a arte é vivenciada. '],

            ['Para Artistas: Seu Atelier Online. Crie sua galeria imersiva, exponha e venda suas obras para o mundo, gerencie sua loja online com ferramentas intuitivas, acompanhe vendas e dados de performance, e impulsione sua carreira artística com nosso apoio.'],

            ['Para Amantes da Arte: Um Mundo de Possibilidades. Descubra obras originais e autênticas que se encaixam em seus gostos e orçamento. Conecte-se com os artistas, personalize sua experiência de compra, receba curadoria personalizada e explore a diversidade da arte brasileira e internacional.'],

            ['Mais do que uma Plataforma: Desenvolvimento Profissional. Aprimore suas habilidades artísticas e de gestão de negócios com cursos, workshops e conteúdos exclusivos.Comunidade Vibrante: Conecte-se com outros artistas, troque experiências, colabore em projetos e participe de eventos online e presenciais.Algoritmos Democráticos: Sua arte terá visibilidade justa e igualitária, sem necessidade de pagar por destaque. A plataforma valoriza a diversidade e promove a inclusão.Acessibilidade para Todos: Plataforma intuitiva, sem complicações, para que você possa criar, comprar e se conectar com a arte de forma simples e prazerosa.'],
            
            ['Juntos, Construímos um Futuro Radiante:Trabalho Decente e Crescimento Econômico: Geração de renda para artistas, formalização do trabalho e democratização do acesso ao mercado de arte. Indústria, Inovação e Infraestrutura:* Plataforma inovadora que utiliza tecnologia para conectar pessoas e promover o desenvolvimento cultural. Redução das Desigualdades: Acesso democrático à arte e à cultura, valorização da diversidade e combate à exclusão social. Cidades e Comunidades Sustentáveis:*Promoção da cultura local, valorização do patrimônio cultural e desenvolvimento de cidades criativas e inovadoras.']
                
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
