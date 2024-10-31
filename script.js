async function getMatchData()
{
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=445f17c8-14b0-4294-a0f4-f632c74883f7&offset=0")
    .then(data=>data.json())
    .then(data=>{
        if(data.status!="success")return;
        const matchesList=data.data;
        if(!matchesList)return [];
        const relevantData=matchesList.filter(match=>match.matchType=="odi").map(match=> `${match.name},${match.status}`);
        console.log({relevantData});
        document.getElementById("matches").innerHTML=relevantData.map(match=>`<li> ${match} </li>`).join('');
        return relevantData;
    })
    .catch(e=>console.log(e));
}
getMatchData();