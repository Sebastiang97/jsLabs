let users = [
    {
        id: 1,
        name: "Marcela Carmano",
        team: "FRONT",
        edad: 25
    },
    {
        id: 2,
        name: "Laura Natalia",
        team: "FRONT",
        edad: 22
    },
    {
        id: 3,
        name: "Sebastian Sanabria",
        team: "FRONT",
        edad: 25
    }

]


// Metodos que posiblemente te puedan servir
// array.push()
// array.find()
// array.some()
// array.every()
// array.filter()
// array.unshift()



// callback; una funcion que se envia como parametro a otra funcion
// (()=> {

// })
const read = () => {
    console.log('read', users)
}



const createUser = () => {
    let newUser = {
        id: 4,
        name: "Richard",
        team: "FRONT",
        edad: 25
    }
    let u = [...users]
    u.push(newUser)

    // insertar un nuevo elemento en el arreglo users
    console.log({ u });
}

const edit = () => {
    // editar el nombre de uno de los elementos en el arreglo users
    let newUser = {
        id: 2,
        name: "Laura Natalia",
        team: "FRONT",
        edad: 22
    }
    let u = [...users]
    u.map((user) => {
        if (user.id === newUser.id) {
            user.name = "Laura Lamprea"
        }
    })

    //cuando el elemento este editado descomenta esta linea asi te vas a dar cuenta de si se edito o no
    console.log(u);
}

const eliminate = () => {
    let newUser = {
        id: 2,
        name: "Laura Natalia",
        team: "FRONT",
        edad: 22
    }
    let u = [...users]
    u = u.filter((user) => {
        if (user.id !== newUser.id) {
            return (user)
        }
    })
    console.log(u)
    // eliminar uno de los elementos del arreglo users

    //cuando elimines el elemento descomenta esta linea asi te vas a dar cuenta de si se edito o no
    //=> read()
}



read()
createUser()
edit()
eliminate()