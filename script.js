var dataMap = [
    {
        Technologies: 'Html, Css e Js',
        Nameprojects: 'Agência de Viagens',
        linkOfProject: 'https://rafael-doctom.github.io/agencia-de-viagens/',
        linkOfRepo: 'https://github.com/Rafael-doctom/agencia-de-viagens',
        NameRepo: 'agencia-de-viagens',
    },
    {
        Technologies: 'Html, Css e Js',
        Nameprojects: 'E-commerce product page ',
        linkOfProject: 'https://rafael-doctom.github.io/E-commerce-product-page-challenge-hub/',
        linkOfRepo: 'https://github.com/Rafael-doctom/E-commerce-product-page-challenge-hub',
        NameRepo: 'E-commerce-product-page-challenge-hub',

    },
    {
        Technologies: 'Html e Css',
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
        Technologies: 'Html e JavaScript',
        Nameprojects: 'Chart.js ',
        linkOfProject: 'https://rafael-doctom.github.io/chart.js/',
        linkOfRepo: 'https://github.com/Rafael-doctom/chart.js',
        NameRepo: 'chart.js',
    },
    {
        Technologies: 'Html e Css',
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
    {
        Technologies: 'Html, Css e Js',
        Nameprojects: 'acender-lampada',
        linkOfProject: 'https://rafael-doctom.github.io/acender-lampada/',
        linkOfRepo: 'https://github.com/Rafael-doctom/acender-lampada',
        NameRepo: 'acender-lampada',
    },
    {
        Technologies: 'React Native',
        Nameprojects: 'calcImc',
        linkOfProject: 'https://github.com/Rafael-doctom/calcImcReactNative',
        linkOfRepo: 'https://github.com/Rafael-doctom/calcImcReactNative',
        NameRepo: 'calcImc',
    },
    {
        Technologies: 'Python3',
        Nameprojects: 'api-cotação',
        linkOfProject: 'https://github.com/Rafael-doctom/apiPython',
        linkOfRepo: 'https://github.com/Rafael-doctom/apiPython',
        NameRepo: 'api-cotação',
    },
    {
        Technologies: 'Html, Css e Js',
        Nameprojects: 'sistema-de-multas',
        linkOfProject: 'https://rafael-doctom.github.io/sistema-de-multas/',
        linkOfRepo: 'https://github.com/Rafael-doctom/sistema-de-multas',
        NameRepo: 'sistema-de-multas',
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