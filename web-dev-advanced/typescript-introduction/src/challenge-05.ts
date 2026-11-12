interface User {
    id: number,
    name: string,
    email?: string,
}

const users: User[] = [
    { id: 1, name: 'Kim', email: 'kim@example.com' },
    { id: 2, name: 'Lee' },
];

function formatUser(user: User) {
    // LOGIC here for a format like: Kim <kim@example.com>
    if (user.email === undefined)
        return user.name
    return `${user.name} <${user.email}>`
}

users.forEach(user => console.log(formatUser(user)));

