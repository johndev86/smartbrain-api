const obj = {
    id: 5,
    email: 'test@email.com'
}

const createSession = (user) => {
    const { id } = user;
    const token = id + 'signed';
    return ({success: 'true', token});
}

console.log((obj.id && obj.email) ? createSession(obj) : "two");