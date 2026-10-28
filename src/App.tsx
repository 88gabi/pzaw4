import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Film({ nazwa, rok, zdjecie, ocena }: Filmy) {
  return (
    <div className="col-12 col-md-4" onClick={(event) => {
    console.log("wyswietlono film: "+nazwa);
  }}>
      <div className="card text-bg-danger mb-3 ">
        <img className="card-img-top" src={zdjecie}></img>
        <div className="card-body">
          <h3 className="card-title">Tytuł: {nazwa}</h3>
          <p className="card-text">
            Rok: {rok}
            <br />
            <button onClick={(event) => {
    console.log("wyswietlono  szczegóły filmu: "+nazwa); event.stopPropagation();
  }}>Sprawdz szczegóły</button>
    <br />
            Ocena: {ocena}
            <br />
          </p>
          {ocena >= 8 && (
            <span className="card-footer text-body-secondary">
              POLECANY
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Muzyka({
  nazwaAlbumu,
  rok,
  nazwaZespolu,
  gatunek,
  okladka,
  listaUtworow,
}: Album) {
  return (
    <div className="col-12 col-md-4">
      <div className="card  text-bg-danger mb-3">
        <img className="card-img-top" src={okladka}></img>
        <div className="card-body">
          <h3 className="card-title">Nazwa albumu: {nazwaAlbumu}</h3>
          <p className="card-text">
            Nazwa zespołu: {nazwaZespolu}
            <br />
            Rok: {rok}
            <br />
            Gatunek: {gatunek}
            <br />
          </p>
          {listaUtworow.length <= 0 && (
            <span className="alert alert-secondary" role="alert">
              BEZ UTWORÓW
            </span>
          )}
          <table className="table table-striped table-hover">
            <tbody>
              {listaUtworow.map((o) => (
                <ListaUtworow
              
                  nazwa={o.nazwa}
                  czas={o.czas}
                  nr={o.nr}
                  nazwaAlbumu={nazwaAlbumu}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function handleSongClick( event: React.MouseEvent<HTMLTableRowElement>,nazwa:string,album:string){
console.log("wybrano utwor: "+nazwa+ "Z albumu: "+album); 
}
function Ksiazki({ nazwa, rok, liczbaStron, okladka }: Ksiazki) {
  return (
    <div className="col-12 col-md-4">
    <div className="card  text-bg-danger mb-3">
      <img className="card-img-top" src={okladka}></img>
      <div className="card-body">
        <h3 className="card-title">Tytuł: {nazwa}</h3>
        Liczba stron: {liczbaStron}
        <br />
        Rok: {rok}
        <br />
        {rok <= 2000 && (
          <span className="card-footer text-body-secondary">KLASYKA</span>
        )}
      </div>
    </div>
    </div>
  );
}

function ListaUtworow({ nr, nazwa, czas,nazwaAlbumu}: Utwor) {
  return (
    <tr onClick={(event) => handleSongClick(event, nazwa, nazwaAlbumu)}>
      <td>{nr}</td>
      <td>{nazwa}</td>
      <td className="text-end"> {czas}</td>
    </tr>
  );
}

function App() {
  const [czyFilmOtwarty, ustawFilmOtwarty] = useState(true);
  const [czyAlbumOtwarty, ustawAlbumOtwarty] = useState(true);
  const [czyKsiazkiOtwarty, ustawKsiazkiOtwarty] = useState(true);
  const[filmyTekst,zmienFTekst]=useState("");
  function wyswietlFTekst(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value; 
    zmienFTekst(value);
    console.log(value);
  }
  const[ksiazkiTekst,zmienKTekst]=useState("");
  function wyswietlKTekst(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value; 
    zmienKTekst(value);
    console.log(value);
  }
  const[albumyTekst,zmienATekst]=useState("");
  function wyswietlATekst(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value; 
    zmienATekst(value);
    console.log(value);
  }
  let filmy: Filmy[] = [];
  filmy.push({
    nazwa: "CZmierzch 1",
    rok: 2001,
    zdjecie: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    ocena: 10,
  });
  filmy.push({
    nazwa: "BZmierzch 2",
    rok: 2010,
    zdjecie: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    ocena: 5,
  });
  filmy.push({
    nazwa: "AZmierzch 3",
    rok: 2011,
    zdjecie: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    ocena: 1,
  });

  let albumy: Album[] = [];
  albumy.push({
    nazwaAlbumu: "Album 1",
    rok: 2001,
    nazwaZespolu: "Zespół 1",
    gatunek: "Rock",
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    listaUtworow: [
      { nr: 1, nazwa: "Nazwa 1", czas: "1:00" ,nazwaAlbumu: "Album 1"},
      { nr: 2, nazwa: "Nazwa 3", czas: "2:00"  ,nazwaAlbumu: "Album 1"},
      { nr: 3, nazwa: "Nazwa 2", czas: "3:00" ,nazwaAlbumu: "Album 1" },
      { nr: 4, nazwa: "Nazwa 4", czas: "5:00" ,nazwaAlbumu: "Album 1" },
    ],
  });
  albumy.push({
    nazwaAlbumu: "CAlbum 1",
    rok: 2001,
    nazwaZespolu: "Zespół 2",
    gatunek: "Disco Polo",
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    listaUtworow: [
      { nr: 1, nazwa: "Nazwa 1", czas: "1:00"  ,nazwaAlbumu:"CAlbum 1"},
      { nr: 2, nazwa: "Nazwa 3", czas: "2:00"  ,nazwaAlbumu:"CAlbum 1"},
      { nr: 3, nazwa: "Nazwa 2", czas: "3:00"  ,nazwaAlbumu:"CAlbum 1"},
    ],
  });
  albumy.push({
    nazwaAlbumu: "BAlbum 1",
    rok: 2001,
    nazwaZespolu: "Zespół 3",
    gatunek: "Hip-Hop",
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
    listaUtworow: [],
  });

  let ksiazki: Ksiazki[] = [];
  ksiazki.push({
    nazwa: "BKsiązka 1",
    rok: 2010,
    liczbaStron: 123,
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
  });
  ksiazki.push({
    nazwa: "CKsiązka 2",
    rok: 2011,
    liczbaStron: 234,
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
  });
  ksiazki.push({
    nazwa: "AKsiązka 3",
    rok: 2003,
    liczbaStron: 456,
    okladka: "https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp",
  });

const posortowaneFilmy = [...filmy].sort((a, b) => a.nazwa.localeCompare(b.nazwa));
const posortowaneAlbumy = [...albumy].sort((a, b) => a.nazwaAlbumu.localeCompare(b.nazwaAlbumu));
const posortowaneKsiazki = [...ksiazki].sort((a, b) => a.nazwa.localeCompare(b.nazwa));

  const filmyPo2010 = filmy.filter((n) => n.rok > 2010);

  const ksiazkiRokWydania = [...ksiazki].sort(
    (a, b) => b.rok - a.rok
  );

  const najwiekszaIloscUtworow = [...albumy].sort(
    (a, b) => b.listaUtworow.length - a.listaUtworow.length
  );

  return (
    <div className="container text-center">
      <input
  type="text"
  className="form-control"
  placeholder="Wpisz tytuł"
  id="filmy-szuk"
  onChange={wyswietlFTekst}
/>
<span> {filmyTekst}</span>
      <h1 onClick={() => ustawFilmOtwarty(!czyFilmOtwarty)}>
        FILMY {czyFilmOtwarty ? <span>▾</span> : <span>▸</span>}
      </h1>
      {czyFilmOtwarty && (
        <div>
          <h2>WSZYSTKIE</h2>

            <div className="row">
            {posortowaneFilmy.map((o) => (
              <Film
            
                nazwa={o.nazwa}
                rok={o.rok}
                zdjecie={o.zdjecie}
                ocena={o.ocena}
              />
            ))}
          </div>
        

          <h2>PO 2010</h2>
   
            <div className="row">
            {filmyPo2010.map((o) => (
              <Film
             
                nazwa={o.nazwa}
                rok={o.rok}
                zdjecie={o.zdjecie}
                ocena={o.ocena}
              />
            ))}
          </div>
   
      </div>
      )}
<input
  type="text"
  className="form-control"
  placeholder="Wpisz tytuł"
  id="albumy-szuk"
  onChange={wyswietlATekst}
/>
<span>{albumyTekst}</span>
      <h1 onClick={() => ustawAlbumOtwarty(!czyAlbumOtwarty)}>
        ALBUMY{czyAlbumOtwarty ? <span>▾</span> : <span>▸</span>}
      </h1>

      {czyAlbumOtwarty && (
        <div>
          <h2>NAJWIEKSZA ILOSC UTWOROW</h2>
            <div className="row">
            <Muzyka
              nazwaAlbumu={najwiekszaIloscUtworow[0].nazwaAlbumu}
              rok={najwiekszaIloscUtworow[0].rok}
              okladka={najwiekszaIloscUtworow[0].okladka}
              gatunek={najwiekszaIloscUtworow[0].gatunek}
              nazwaZespolu={najwiekszaIloscUtworow[0].nazwaZespolu}
              listaUtworow={najwiekszaIloscUtworow[0].listaUtworow}
            />
        </div>
          <h2>WSZYSTKIE </h2>
            <div className="row">
            {posortowaneAlbumy.map((o) => (
              <Muzyka
          
                nazwaAlbumu={o.nazwaAlbumu}
                rok={o.rok}
                okladka={o.okladka}
                gatunek={o.gatunek}
                nazwaZespolu={o.nazwaZespolu}
                listaUtworow={o.listaUtworow}
              />
            ))}
        </div>
        </div>
      )}
<input
  type="text"
  className="form-control"
  placeholder="Wpisz tytuł"
  id="ksiaz-szuk"
  onChange={wyswietlKTekst}
/>
<span>{ksiazkiTekst}</span>
      <h1 onClick={() => ustawKsiazkiOtwarty(!czyKsiazkiOtwarty)}>
        KSIĄŻKI{czyKsiazkiOtwarty ? <span>▾</span> : <span>▸</span>}
      </h1>

      {czyKsiazkiOtwarty && (
        <div>
          <h2>WSZYSTKIE </h2>
          <div className="card-group">
            {posortowaneKsiazki.map((o) => (
              <Ksiazki
          
                nazwa={o.nazwa}
                rok={o.rok}
                okladka={o.okladka}
                liczbaStron={o.liczbaStron}
              />
            ))}
          </div>

          <h2>OD NAJNOWSZEJ</h2>
          <div className="card-group">
            {ksiazkiRokWydania.map((o) => (
              <Ksiazki
                nazwa={o.nazwa}
                rok={o.rok}
                okladka={o.okladka}
                liczbaStron={o.liczbaStron}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface Filmy {
  /**Nazwa filmu */
  nazwa: string;
  /**Rok wydania */
  rok: number;
  /**Opcjonalny link do zdjęcia */
  zdjecie?: string;
  /**Ocena filmu */
  ocena: number;
}

interface Album {
  /**Nazwa albumu */
  nazwaAlbumu: string;
  /**Rok wydania */
  rok: number;
  /**Nazwa zespolu */
  nazwaZespolu: string;
  /**Gatunek */
  gatunek: string;
  /**LInk do okladki */
  okladka?: string;
  listaUtworow: Utwor[];
}

interface Ksiazki {
  /**tytul ksiazki */
  nazwa: string;
  /**Rok wydania */
  rok: number;
  /**Liczba stron */
  liczbaStron: number;
  /**LInk do okladki */
  okladka?: string;
}

interface Utwor {
  /**Nuer porządkowy */
  nr: number;
  /**tytul */
  nazwa: string;
  /**czas wydania */
  czas: string;
   /**czas wydania */
  nazwaAlbumu: string;
}

export default App;