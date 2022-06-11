
import './App.css';
import Profile from './profile/Profile'
import img from './profile/1654033955121.jpg'

function App() {
    const fullname="ahmed"
    const bio=294
    const profession="etudiant"
    const objet={color:"purple",fontSize:17,border:"2px solid black"}
    const alert=()=>{alert("profile user name")}
  
  return (
    <div>
     <Profile fullname={fullname} bio={bio} profession={profession} object={img} style={objet} alert={alert}>
     
     <img src={img} alt='img'/>
    </Profile>
    </div>
  );
}

export default App;