function Film({nazwa,rok,zdjecie}:Props){
  return (<div ><img src={zdjecie}></img><p>{rok}<br/>{nazwa}</p></div>
  );
}
function App(){
  return (<body>
  < Film nazwa="Zmierzch1" rok="2001" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
    < Film nazwa="Zmierzch2" rok="2002" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" />
    < Film nazwa="Zmierzch3" rok="2003" zdjecie="https://fwcdn.pl/fpo/24/41/462441/7210352_1.10.webp" /></body>
  );
}
interface Props{
  /**Nazwa filmu */
  nazwa:string;
  /**Rok wydania */
  rok: string;
  /**Opcjonalny link do zdjęcia */
  zdjecie?:string;
}

export default App
