function Film({nazwa,rok,zdjecie}:Film){
  return (<div className="Film"><img src={zdjecie}></img><p>{rok}<br/>{nazwa}</p></div>
  );
}
function Muzyka({nazwaAlbumu,rok,nazwaZespolu,gatunek,okladka}:Muzyka){
  return (<div className="Muzyka"><img src={okladka}></img><p>{nazwaAlbumu}<br/>{nazwaZespolu}<br/>{rok}<br/>{gatunek}</p></div>
  );
}
function Ksiazki({nazwa,rok,liczbaStron,okladka}:Ksiazka){
  return (<div className="Ksiazki"><img src={okladka}></img><p>{rok}<br/>{nazwa}<br/>{liczbaStron}</p></div>
  );
}
function App(){
  return (
  <body>
    <h1>FILMY</h1>
    <div className="galeria">
      < Film nazwa="Zmierzch1" rok="2001" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Film nazwa="Zmierzch2" rok="2002" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Film nazwa="Zmierzch3" rok="2003" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
    </div><h1>ALBUMY</h1>
    <div className="galeria">
      < Muzyka nazwaAlbumu="Album1" rok="2001"  nazwaZespolu="Zespol1" gatunek="rock" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Muzyka nazwaAlbumu="Album2" rok="2002"  nazwaZespolu="Zespol2" gatunek="hip-hop" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Muzyka nazwaAlbumu="Album3" rok="2003"  nazwaZespolu="Zespol3" gatunek="disco-polo" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
    </div><h1>KSIAZKI</h1>
    <div className="galeria">
      < Ksiazki nazwa="ksiązka1" rok="2001" liczbaStron="123" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Ksiazki nazwa="ksiązka2" rok="2002" liczbaStron="456" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
      < Ksiazki nazwa="ksiązka3" rok="2003" liczbaStron="789" okladka="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
    </div>
    </body>
  );
}
interface Film{
  /**Nazwa filmu */
  nazwa:string;
  /**Rok wydania */
  rok: string;
  /**Opcjonalny link do zdjęcia */
  zdjecie?:string;
}
interface Muzyka{
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
interface Ksiazka{
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
