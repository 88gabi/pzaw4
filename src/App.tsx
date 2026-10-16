function Film({nazwa,rok,zdjecie}:Filmy){
  return (<div ><img src={zdjecie}></img><p>Tytuł: {nazwa}<br/>Rok: {rok}</p></div>
  );
}
function Muzyka({nazwaAlbumu,rok,nazwaZespolu,gatunek,okladka}:Album){
  return (<div ><img src={okladka}></img><p>Nazwa albumu: {nazwaAlbumu}<br/>Nazwa zespołu: {nazwaZespolu}<br/>Rok: {rok}<br/>Gatunek: {gatunek}</p></div>
  );
}
function Ksiazki({nazwa,rok,liczbaStron,okladka}:Ksiazki){
  return (<div><img src={okladka}></img><p>Tytuł: {nazwa}<br/>Liczba stron: {liczbaStron}<br/>Rok: {rok}</p></div>
  );
}
function App(){
  let filmy:Filmy []=[];
  filmy.push({nazwa:"Zmierzch 1", rok:"2001" ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  filmy.push({nazwa:"Zmierzch 2", rok:"2002" ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  filmy.push({nazwa:"Zmierzch 3", rok:"2002" ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  let albumy:Album []=[];
  albumy.push({nazwaAlbumu:"Album 1", rok:"2001" ,nazwaZespolu:"Zespół 1",gatunek:"Rock",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  albumy.push({nazwaAlbumu:"Album 1", rok:"2001" ,nazwaZespolu:"Zespół 1",gatunek:"Rock",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  albumy.push({nazwaAlbumu:"Album 1", rok:"2001" ,nazwaZespolu:"Zespół 1",gatunek:"Rock",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"});
  let ksiazki:Ksiazki[]=[];
  ksiazki.push({nazwa:"Ksiązka 1", rok:"2001", liczbaStron:"123", okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  ksiazki.push({nazwa:"Ksiązka 2", rok:"2002", liczbaStron:"234", okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  ksiazki.push({nazwa:"Ksiązka 3", rok:"2003", liczbaStron:"456", okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  return (
  <body>
    <h1>FILMY</h1>
    <div className="galeria">
      {filmy.map((o) => (
        <Film nazwa={o.nazwa} rok={o.rok} zdjecie={o.zdjecie}/>
      ))}
    </div><h1>ALBUMY</h1>
    <div className="galeria">
      {albumy.map((o) => (
        <Muzyka nazwaAlbumu={o.nazwaAlbumu} rok={o.rok} okladka={o.okladka}  gatunek={o.gatunek} nazwaZespolu={o.nazwaZespolu}/>
      ))}</div><h1>KSIĄŻKI</h1>
    <div className="galeria">
      {ksiazki.map((o) => (
        <Ksiazki nazwa={o.nazwa} rok={o.rok} okladka={o.okladka} liczbaStron={o.liczbaStron}/>
      ))}</div>

    </body>
  );
}
interface Filmy{
  /**Nazwa filmu */
  nazwa:string;
  /**Rok wydania */
  rok: string;
  /**Opcjonalny link do zdjęcia */
  zdjecie?:string;
}
interface Album{
/**Nazwa albumu */
  nazwaAlbumu:string;
  /**Rok wydania */
  rok: string;
  /**Nazwa zespolu */
  nazwaZespolu:string;
  /**Gatunek */
  gatunek: string;
  /**LInk do okladki */
  okladka?:string;
  
}
interface Ksiazki{
/**tytul ksiazki */
  nazwa:string;
  /**Rok wydania */
  rok: string;
  /**Liczba stron */
  liczbaStron:string;
  /**LInk do okladki */
  okladka?:string;
}

export default App
