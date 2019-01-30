const searchApi = (search) => {

    const _finder = 'x';
    const _urlUsers = 'https://api.github.com/search/users?q='.concat(_finder);
    const _urlUserDetail = 'https://api.github.com/users/'.concat(_finder);
    const _urlUserRepos = 'https://api.github.com/users/'.concat(_finder, '/repos');
    const _urlReposDetail = 'https://api.github.com/repos/'.concat(_finder);

    const _query = (url, evt) => {

        fetch(url.replace(_finder, search))
            .then(response => response.json())
            .then(result => {
                return evt(result);
            })
            .catch(err => {
                return evt(err);
            });

    };

    return {

        findUsersByNameOrLogin: (evtCallback) => {
            _query(_urlUsers, evtCallback)
        },
        findDetailUser: (evtCallback) => {
            _query(_urlUserDetail, evtCallback)
        },
        findRepos: (evtCallback) => {
            _query(_urlUserRepos, evtCallback)
        }

    };

};