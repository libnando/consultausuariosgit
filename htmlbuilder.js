const htmlBuilder = () => {

    const _contentView = document.getElementById("aKindOfMagic");
    const _contentViewRepos = document.getElementById("drepo");

    const _createTableUsers = (info) => {

        let htmlContent = '';

        info.forEach(function (item) {
            htmlContent += '<tr><th scope="row">'.concat('<img src="', item.avatar, '" class="img-fluid img-thumbnail" alt=".">', '</th>', '<td>', item.login, '</td><td>', '<button type="button" rel="asdf" data-login="', item.login, '" class="btn-detail-user btn btn-outline-dark">Detalhes</button>', '</td></tr>');
        });

        if (htmlContent.length === 0) {
            htmlContent = '<tr><td colspan="3"><i>Nenhum usuário encontrado.</i></td></tr>';
        }

        return '<table class="table table-striped"><thead><tr><th scope="col">Avatar</th><th scope="col">Login</th><th scope="col">#</th></tr></thead><tbody>'.concat(htmlContent, '</tbody></table>');

    };

    const _createTableRepos = (info) => {

        let htmlContent = '';

        info.forEach(function (item) {
            htmlContent += '<tr>'.concat('<td>', item.name, '</td>', '<td>', item.desc, '</td>', '<td>', item.stars, '</td>', '<td>', item.language, '</td>', '<td><a target="_blank" href="', item.url, '" class="btn btn-outline-dark">Github</a>', '</td></tr>');
        });

        if (htmlContent.length === 0) {
            htmlContent = '<tr><td colspan="5"><i>Nenhum repositório encontrado.</i></td></tr>';
        }

        return '<table class="table table-striped"><thead><tr><th scope="col">Nome</th><th scope="col">Descricao</th><th scope="col">Estrelas</th><th scope="col">Linguagem</th><th scope="col">#</th></tr></thead><tbody>'.concat(htmlContent, '</tbody></table>');

    };

    const _drawUsers = (data, evtDetailCallback) => {

        let info = [];

        if (data.items !== undefined) {

            data.items.forEach(function (item) {
                info.push({
                    login: item.login,
                    avatar: item.avatar_url,
                    url: item.url
                })
            });

        }

        _contentView.innerHTML = _createTableUsers(info);

        const btns = document.getElementsByClassName("btn-detail-user");

        for (i = 0; i < btns.length; i++) {

            btns[i].addEventListener('click', function () {

                evtDetailCallback(this.getAttribute("data-login"));

            }, false);

        }

    };

    const _drawRepos = (data) => {

        let info = [];

        if (data.length > 0) {

            data.forEach(function (item) {
                info.push({
                    name: item.name,
                    desc: item.description,
                    stars: item.stargazers_count,
                    language: item.language,
                    url: item.html_url
                })
            });

        }

        _contentViewRepos.innerHTML = _createTableRepos(info);

    };

    return {

        drawUsers: _drawUsers,
        drawRepos: _drawRepos,
        drawEmptyUsers: () => {
            _contentView.innerHTML = _createTableUsers([]);
        }

    };

};