const validateForm = () => {

    return {

        isSearchValid: (param) => {

            if (param === undefined) {
                return false;
            }

            if (param.length < 3) {
                return false;
            }

            return true;

        }

    };

};