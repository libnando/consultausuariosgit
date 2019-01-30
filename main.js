const main = () => {

    const _viewMany = (data) => {

        htmlBuilder().drawUsers(data, _showModal);

    };

    const _viewRepos = (data) => {

        htmlBuilder().drawRepos(data);

    };

    const _showModal = (login) => {

        searchApi(login).findDetailUser(_viewDetail);

        //todo: evemt loading...

    };

    const _viewDetail = (data) => {

        document.getElementById("drepo-tab").setAttribute("data-user", data.login);
        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("followers").innerHTML = data.followers;
        document.getElementById("following").innerHTML = data.following;
        document.getElementById("email").innerHTML = data.email;
        document.getElementById("bio").innerHTML = data.bio;

        document.getElementById("ddetail-tab").click();
        $("#userDetailModal").modal("show");

    };

    const _btnsEv = () => {

        const btn = document.getElementById("go");
        const search = document.getElementById("finduser");
        const btnRepos = document.getElementById("drepo-tab");

        btn.addEventListener('click', () => {

            if (validateForm().isSearchValid(search.value)) {
                searchApi(search.value).findUsersByNameOrLogin(_viewMany);
            } else {
                htmlBuilder().drawEmptyUsers();
            }

        }, false);

        search.addEventListener("keydown", (evt) => {

            if (evt.keyCode === 13) {
                evt.preventDefault();
                btn.click();
                return false;
            }            

        });

        btnRepos.addEventListener('click', () => {

            let userLogin = document.getElementById("drepo-tab").getAttribute("data-user");
            searchApi(userLogin).findRepos(_viewRepos);

        }, false);

    };

    return {

        init: _btnsEv()

    };

};

main().init;
htmlBuilder().drawEmptyUsers();