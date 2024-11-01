let lijst = [];

lijst = voegItemToe(lijst, 'Melk');
lijst = voegItemToe(lijst, 'Brood');
lijst = voegItemToe(lijst, 'Choco');

toonLijst(lijst);

lijst = maakLijstLeeg(lijst);
toonLijst(lijst);


function voegItemToe(lijst, item)
{
    lijst.push(item);
    return lijst;
}

function toonLijst(lijst)
{
    if (lijst.length == 0)
    {
        console.log('Momenteel is mijn lijst leeg.');
    }
    else
    {
        console.log('Er staat het volgende op mijn lijstje:');
        for (let i = 0; i < lijst.length; i++)
        {
            console.log(lijst[i]);
        }
    }
}

function maakLijstLeeg(lijst)
{
    return [];
}