const entry: (route: string, args: object) => unknown = async (route, args) => {
    console.log(args);
    const response = await fetch(route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(args),
        credentials: 'include'
    });

    return await response.json();
};

export { entry };
