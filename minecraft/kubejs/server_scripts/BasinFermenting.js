ServerEvents.recipes(e => {
    global.fluidIds.forEach(i => {
        e.recipes.create.filling(`brewinandchewin:${i}`, [Fluid.of(`kubejs:${i}`, 250), 'brewinandchewin:tankard']).id(`kubejs:filling/brewinandchewin/${i}`)
        e.recipes.create.emptying([Fluid.of(`kubejs:${i}`, 250), 'brewinandchewin:tankard'], `brewinandchewin:${i}`).id(`kubejs:emptying/brewinandchewin/${i}`)
    })
    e.forEachRecipe({ type: 'brewinandchewin:fermenting' }, r => {
        if (global.fluidIds.includes(JSON.parse(r.json.get('result')).item.split(':')[1])) {
            let ingredients = JSON.parse(r.json.get('ingredients'))
            if (JSON.parse(r.json.get('fluiditem')).item.split(':')[1].indexOf('bucket') > -1) ingredients.push(Fluid.of(JSON.parse(r.json.get('fluiditem')).item.split(':')[1].replace('_bucket', ''), 250).toJson())
            if (JSON.parse(r.json.get('fluiditem')).item.split(':')[1].indexOf('tea') > -1) ingredients.push(Fluid.of('create_central_kitchen:green_tea', 250).toJson())
            if (global.fluidIds.includes(JSON.parse(r.json.get('fluiditem')).item.split(':')[1])) ingredients.push(Fluid.of(`kubejs:${JSON.parse(r.json.get('fluiditem')).item.split(':')[1]}`, 250).toJson())
            for (let i = 0; i < ingredients.length; i++) if (ingredients[i].item != undefined) if (ingredients[i].item.indexOf('honey') > -1) ingredients[i] = Fluid.of('create:honey', 250).toJson()
            e.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: ingredients,
                processingTime: r.json.get('fermentingtime'),
                results: [Fluid.of(`kubejs:${JSON.parse(r.json.get('result')).item.split(':')[1]}`, 250).toJson()]
            }).id(`kubejs:basin_fermenting/${JSON.parse(r.json.get('result')).item.split(':')[1]}`)
        } else {
            e.custom({
                type: 'createdieselgenerators:basin_fermenting',
                ingredients: r.json.get('ingredients'),
                processingTime: r.json.get('fermentingtime'),
                results: [r.json.get('result')]
            })
                .id(`kubejs:basin_fermenting/${r.json.get('result').get('item').toString().replace(':', '/').replace('"', '')}`)
        }
    })
})