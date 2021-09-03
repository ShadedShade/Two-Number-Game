
function ParseToObject(stringData)
{
    let strData = JSON.stringify(stringData);
    return JSON.parse(strData); 
}
function ParseToJSON(stringDate)
{
    return JSON.stringify(stringDate)
}

module.exports = {ParseToObject,ParseToJSON}