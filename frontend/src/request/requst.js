export function get(url) {
    return fetch(url, {
        crossDomain:true,
        xhrFields:{withCredentials:true},
        beforeSend:function(xhr){
            xhr.withCredentials=true;
        },
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: "Request failed."}};
    })
}

export function post(url, data) {
    return fetch(url, {
        crossDomain:true,
        xhrFields:{withCredentials:true},
        beforeSend:function(xhr){
            xhr.withCredentials=true;
        },
        method: "POST",
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: "Request failed."}};
    })
}

export function put(url, data) {
    return fetch(url, {
        crossDomain:true,
        xhrFields:{withCredentials:true},
        beforeSend:function(xhr){
            xhr.withCredentials=true;
        },
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: "Request failed."}};
    })
}

export function deleteFunction(url, data) {
    return fetch(url, {
        crossDomain:true,
        xhrFields:{withCredentials:true},
        beforeSend:function(xhr){
            xhr.withCredentials=true;
        },
        method: "DELETE",
        dataType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err => {
        console.error(`Request failed. Url = ${url} . Message = ${err}`);
        return {error: {message: "Request failed."}};
    })
}

function handleResponse(url, response) {
    if(response.status < 500){
        return response.json();
    }else{
        console.error(`Request failed. Url = ${url} . Message = ${response.statusText}`);
        return {error: {message: "Request failed due to server error "}};
    }
}