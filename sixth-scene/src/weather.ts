let query = "https://api.open-meteo.com/v1/forecast?latitude=50.93&longitude=6.95&hourly=temperature_2m&current_weather=true&timezone=Europe%2FBerlin"

export async function setupWeather( entity: { entity: Entity; transform: Transform}){
    let resp = await fetch(query)
    let jsonData = await resp.json()

    log(jsonData.current_weather.temperature)
    

    entity.entity.addComponentOrReplace(new TextShape("Temperature in Cologne: "+jsonData.current_weather.temperature+jsonData.hourly_units.temperature_2m))
}