var dataMap = [
    {
        Technologies: 'HTML, CSS e JAVASCRIPT',
        Nameprojects: 'Agência de Viagens',
        linkOfProject: 'https://rafael-doctom.github.io/agencia-de-viagens/',
        linkOfRepo: 'https://github.com/Rafael-doctom/agencia-de-viagens',
        NameRepo: 'agencia-de-viagens',
    },
    {
        Technologies: 'HTML, CSS e JAVASCRIPT',
        Nameprojects: 'E-commerce product page ',
        linkOfProject: 'https://rafael-doctom.github.io/E-commerce-product-page-challenge-hub/',
        linkOfRepo: 'https://github.com/Rafael-doctom/E-commerce-product-page-challenge-hub',
        NameRepo: 'E-commerce-product-page-challenge-hub',

    },
    {
        Technologies: 'HTML, CSS',
        Nameprojects: 'FlexBlog',
        linkOfProject: 'https://rafael-doctom.github.io/FlexBlog/',
        linkOfRepo: 'https://github.com/Rafael-doctom/FlexBlog',
        NameRepo: 'FlexBlog',
    },
    {
        Technologies: 'React.js',
        Nameprojects: 'Search Cep API',
        linkOfProject: 'https://search-cep-api.netlify.app/',
        linkOfRepo: 'https://github.com/Rafael-doctom/search-cep-api',
        NameRepo: 'search-cep-api',
    },
    {
        Technologies: 'HTML e JAVASCRIPT',
        Nameprojects: 'Chart.js ',
        linkOfProject: 'https://rafael-doctom.github.io/chart.js/',
        linkOfRepo: 'https://github.com/Rafael-doctom/chart.js',
        NameRepo: 'chart.js',
    },
    {
        Technologies: 'HTML e CSS',
        Nameprojects: 'Caravan',
        linkOfProject: 'https://rafael-doctom.github.io/caravan/',
        linkOfRepo: 'https://github.com/Rafael-doctom/caravan',
        NameRepo: 'caravan',
    },
    {
        Technologies: 'React.js, Hooks & Tailwind.css',
        Nameprojects: 'Login',
        linkOfProject: 'https://modalsrct.netlify.app/',
        linkOfRepo: 'https://github.com/Rafael-doctom/modals',
        NameRepo: 'login',
    },

];

var describeMap = dataMap.map(function (item, indice) {
    return `
            <tr>
                <td>
                    ${item.Technologies}
                </td>
                <td>
                    <a href="${item.linkOfProject}" target="_blank">
                        ${item.Nameprojects}
                    </a>                
                </td>
                <td>
                    <a href="${item.linkOfRepo}" target="_blank">
                        ${item.NameRepo}
                    </a>                
                </td>
            </tr>`;
});

document.querySelector("#result").innerHTML = describeMap.join("");