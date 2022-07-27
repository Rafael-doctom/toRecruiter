const handleClickBackToTop = () => {
    window.scrollTo(0, 0);
};

const SearchDatasInput = () => {

    let inputValue = document.getElementById('inputValue').value;
    let dataItems = document.getElementsByClassName("dataItems");

    let i = 0;
    for (i = 0; i < dataItems.length; i++) {
        if (!dataItems[i].innerHTML.includes(inputValue)) {
            dataItems[i].style.display = "none";
        } else {
            dataItems[i].style.display = "block";
        };
    };
};

const removeModal = () => {

    let modal = document.getElementById("modal");

    if (modal.style.display === 'block') {
        modal.style.display = 'none'
    } {
        modal.style.display = 'none'
    };
};

const getDataFavorites = () => {

    fetch("https://api.github.com/users/Rafael-doctom/starred?per_page=100")
        .then(response => response.json())
        .then(json => {
            var listItems = json.map(function (item) {
                return `
                <tr class="dataItems">
                    <td class="describe1"> 
                        ${item.topics.join(', ')}
                    </td>
                    <td  class="describe2">
                        <a href="${item.homepage}" target="_blank">
                            ${item.name}
                        </a>                
                    </td>
                    <td  class="describe3">
                        <a href="${item.html_url}"  target="_blank">
                            ${item.name}
                        </a>                
                    </td>
                    <td class="describe4">
                        ${item.description}
                     </td>
                </tr>
                `
            })

            document.querySelector('#result').innerHTML += listItems.join("")
        })
        .catch(error => console.log(error))
}

getDataFavorites();