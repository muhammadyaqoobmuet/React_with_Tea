const dummyApiResponse = {
    showColorGenrator: true,
    showSearching: true,
};

function dummyApiCallService() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) {
            setTimeout(() => resolve(dummyApiResponse), 500);
        } else {
            reject("something bad happened");
        }
    });
}

export default dummyApiCallService;
