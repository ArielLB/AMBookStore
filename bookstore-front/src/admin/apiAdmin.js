

export const createCategory = (userId, token, category) => {
    return fetch(`/api/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err)
    })
};

export const createProduct = (userId, token, product) => {
    return fetch(`/api/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
        return response.json();
    }).catch(err => {
        console.log(err)
    })
};

export const getCategories = () => {
    return fetch(`/api/categories`, {
        method: "GET"
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

export const listOrders = (userId, token) => {
    return fetch(`/api/orders/list/${userId}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

