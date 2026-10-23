function Film({nazwa,rok,zdjecie,ocena}:Filmy){
  return (<div ><img src={zdjecie}></img><p>Tytuł: {nazwa}<br/>Rok: {rok}<br/>Ocena: {ocena}</p></div>
  );
}
function Muzyka({nazwaAlbumu,rok,nazwaZespolu,gatunek,okladka,listaUtworow}:Album){
  return (<div ><img src={okladka}></img><p>Nazwa albumu: {nazwaAlbumu}<br/>Nazwa zespołu: {nazwaZespolu}<br/>Rok: {rok}<br/>Gatunek: {gatunek}
  {listaUtworow.map((o) => (
        <ListaUtworow nazwa={o.nazwa} czas={o.czas}/>))}</p>
      </div>
  );
}
function Ksiazki({nazwa,rok,liczbaStron,okladka}:Ksiazki){
  return (<div><img src={okladka}></img><p>Tytuł: {nazwa}<br/>Liczba stron: {liczbaStron}<br/>Rok: {rok}</p></div>
  );
}
function ListaUtworow({nazwa,czas}:Utwor){
  return(
  <tr>
      <td>{nazwa}|</td>
      <td>{czas}</td>
    </tr>);
}
function App(){
  let filmy:Filmy []=[];
  filmy.push({nazwa:"CZmierzch 1", rok:2001 ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",ocena:10});
  filmy.push({nazwa:"BZmierzch 2", rok:2010 ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",ocena:5});
  filmy.push({nazwa:"AZmierzch 3", rok:2011 ,zdjecie:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",ocena:1});
  let albumy:Album []=[];
  albumy.push({nazwaAlbumu:"Album 1", rok:2001 ,nazwaZespolu:"Zespół 1",gatunek:"Rock",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp", listaUtworow:[{nazwa:"Nazwa 1",czas:"1:00"},{nazwa:"Nazwa 3",czas:"2:00"},{nazwa:"Nazwa 2",czas:"3:00"},{nazwa:"Nazwa 4",czas:"5:00"}]});
  albumy.push({nazwaAlbumu:"CAlbum 1", rok:2001 ,nazwaZespolu:"Zespół 2",gatunek:"Disco Polo",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",listaUtworow:[{nazwa:"Nazwa 1",czas:"1:00"},{nazwa:"Nazwa 3",czas:"2:00"},{nazwa:"Nazwa 2",czas:"3:00"}]});
  albumy.push({nazwaAlbumu:"BAlbum 1", rok:2001 ,nazwaZespolu:"Zespół 3",gatunek:"Hip-Hop",okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",listaUtworow:[{nazwa:"Nazwa 1",czas:"1:00"},{nazwa:"Nazwa 3",czas:"2:00"},{nazwa:"Nazwa 2",czas:"3:00"}]});
  let ksiazki:Ksiazki[]=[];
  ksiazki.push({nazwa:"BKsiązka 1", rok:2010, liczbaStron:123, okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  ksiazki.push({nazwa:"CKsiązka 2", rok:2011, liczbaStron:234, okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  ksiazki.push({nazwa:"AKsiązka 3", rok:2003, liczbaStron:456, okladka:"https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp"})
  filmy.sort(
  (a, b) => a.nazwa.localeCompare(b.nazwa) );
   albumy.sort(
  (a, b) => a.nazwaAlbumu.localeCompare(b.nazwaAlbumu) );
   ksiazki.sort(
  (a, b) => a.nazwa.localeCompare(b.nazwa) );

  const filmyPo2010 = filmy.filter((n) => n.rok > 2010);
  const ksiazkiRokWydania = [...ksiazki].sort(
  (a, b) => b.rok - a.rok
);
const najwiekszaIloscUtworow = [...albumy].sort(
  (a, b) => b.listaUtworow.length - a.listaUtworow.length
);
  return (
  <body>
    <h1>FILMY</h1>
      <h2>WSZYSTKIE</h2>
        <div className="galeria">
            {filmy.map((o) => (<Film nazwa={o.nazwa} rok={o.rok} zdjecie={o.zdjecie} ocena={o.ocena}/>))}
        </div>
      <h2>PO 2010</h2>
        <div className="galeria">
              {filmyPo2010.map((o) => (<Film nazwa={o.nazwa} rok={o.rok} zdjecie={o.zdjecie} ocena={o.ocena}/>))}
          </div>
    <h1>ALBUMY</h1>
      <h2>NAJWIEKSZA ILOSC UTWOROW</h2>
        <div className="galeria">
            <Muzyka nazwaAlbumu={najwiekszaIloscUtworow[0].nazwaAlbumu} rok={najwiekszaIloscUtworow[0].rok} okladka={najwiekszaIloscUtworow[0].okladka}  gatunek={najwiekszaIloscUtworow[0].gatunek} nazwaZespolu={najwiekszaIloscUtworow[0].nazwaZespolu} listaUtworow={najwiekszaIloscUtworow[0].listaUtworow}/>
        </div>
      <h2>WSZYSTKIE </h2>
        <div className="galeria">
            {albumy.map((o) => (<Muzyka nazwaAlbumu={o.nazwaAlbumu} rok={o.rok} okladka={o.okladka}  gatunek={o.gatunek} nazwaZespolu={o.nazwaZespolu} listaUtworow={o.listaUtworow}/>))}
        </div>
    <h1>KSIĄŻKI</h1>
        <h2>WSZYSTKIE </h2>
          <div className="galeria">
            {ksiazki.map((o) => (<Ksiazki nazwa={o.nazwa} rok={o.rok} okladka={o.okladka} liczbaStron={o.liczbaStron}/>))}
          </div>
          <h2>OD NAJNOWSZEJ</h2>
          <div className="galeria">
            {ksiazkiRokWydania.map((o) => (<Ksiazki nazwa={o.nazwa} rok={o.rok} okladka={o.okladka} liczbaStron={o.liczbaStron}/>))}
          </div>

          

    </body>
  );
}
interface Filmy{
  /**Nazwa filmu */
  nazwa:string;
  /**Rok wydania */
  rok: number;
  /**Opcjonalny link do zdjęcia */
  zdjecie?:string;
   /**Ocena filmu */
   ocena:number;

}
interface Album{
/**Nazwa albumu */
  nazwaAlbumu:string;
  /**Rok wydania */
  rok: number;
  /**Nazwa zespolu */
  nazwaZespolu:string;
  /**Gatunek */
  gatunek: string;
  /**LInk do okladki */
  okladka?:string;
  listaUtworow:Utwor[];
  
}
interface Ksiazki{
/**tytul ksiazki */
  nazwa:string;
  /**Rok wydania */
  rok: number;
  /**Liczba stron */
  liczbaStron:number;
  /**LInk do okladki */
  okladka?:string;
}
interface Utwor{
  /**tytul */
  nazwa:string;
  /**czas wydania */
  czas: string;
}

export default App
