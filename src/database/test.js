const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
    //inserir dados
    await saveOrphanage(db, {
        lat: '-27.222633',
        lng: '-49.6455874',
        name: 'Lar dos meninos',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.',
        whatsapp: '55555555',
        images: [
            'https://images.unsplash.com/photo-1535726858289-9ffe2dff6f52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60',
            'https://images.unsplash.com/photo-1599140781147-e9a53c8cdd03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        ].toString(),
        instructions: 'Venha quando se sentir a vontade e traga muito amor e paciência para dar.',
        opening_hours: 'Horário de visitas Das 8h até 18h.',
        open_on_weekends: '1'
    })

    //consulta todos os dados
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato pelo id
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //DELETAR DADO DA TABELA
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
})