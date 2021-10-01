/* Para executar
    npm install -g typescript
    npm link typescript
    npx ts-node ./src/introducaoTypescript.ts
*/

type User = {
    name: string,
    email: string,
    adress:{
        city: string,
        state?: string
    }
}
function showWelcomeMessage(user: User): string{
    return `Welcome ${user.name}, your e-mail address is ${user.email}. 
    Your city is ${user.adress?.city} and your state is ${user.adress?.state}.`
}

const retorno = showWelcomeMessage({
    name: 'Julia',
    email: 'julian@gmail.com',
    adress:{
        city: 'San Francisco',
        state: 'CA'
    }
});
console.log(retorno);