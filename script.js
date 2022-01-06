var dataMap = [
    {
        Technologies: 'HTML, CSS e JAVASCRIPT',
        Nameprojects: 'Agência de Viagens',
        linkOfProject: 'https://rafael-doctom.github.io/agencia-de-viagens/',
        Namecourses: 'Crud',
        linkOfCourse: 'https://rafael-doctom.github.io/crud-js/',
    },
    {
        Technologies: 'HTML, CSS e JAVASCRIPT',
        Nameprojects: 'E-commerce product page ',
        linkOfProject: 'https://rafael-doctom.github.io/E-commerce-product-page-challenge-hub/',
        Namecourses: '',
        linkOfCourse: '',
    },
    {
        Technologies: 'HTML, CSS',
        Nameprojects: 'FlexBlog',
        linkOfProject: 'https://rafael-doctom.github.io/FlexBlog/',
        Namecourses: '',
        linkOfCourse: '',
    },
    {
        Technologies: 'React.js',
        Nameprojects: 'Search Cep API',
        linkOfProject: 'https://search-cep-api.netlify.app/',
        Namecourses: '',
        linkOfCourse: '',
    },
    {
        Technologies: 'HTML e JAVASCRIPT',
        Nameprojects: 'Chart.js ',
        linkOfProject: 'https://rafael-doctom.github.io/chart.js/',
        Namecourses: '',
        linkOfCourse: '',
    },
    {
        Technologies: 'HTML e CSS',
        Nameprojects: 'Caravan',
        linkOfProject: 'https://rafael-doctom.github.io/caravan/',
        Namecourses: '',
        linkOfCourse: '',
    },
    {
        Technologies: 'React.js, Hooks & Tailwind.css',
        Nameprojects: 'Login',
        linkOfProject: 'https://modalsrct.netlify.app/',
        Namecourses: '',
        linkOfCourse: '',
    }

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
                    <a href="${item.linkOfCourse}" target="_blank">
                        ${item.Namecourses}
                    </a>                
                </td>
            </tr>`;
});

document.querySelector("#result").innerHTML = describeMap.join("");