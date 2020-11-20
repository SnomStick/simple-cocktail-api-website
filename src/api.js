function OpenAPIRequest(url) {
    this.url = url;
    this.sendRequest = async function () {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        const request = new Request(this.url, { method: 'GET', headers: { /*headers*/ }});
        let response = await fetch(request)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong, aborting...');
                }
            }).then(response => {
                return response
            }).catch(error => {
                console.error(error.stack);
            });
        return await response;
    }
}