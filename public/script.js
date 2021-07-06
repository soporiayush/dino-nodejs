console.log('Script .js loaded');

getDinoName()
async function getDinoName(){
    const response = await fetch('/dinoname')
    const data  = response.json()
    console.log(data)
}