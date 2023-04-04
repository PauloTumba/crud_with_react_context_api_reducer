import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContosContext } from "../../contexts/ContosProvider/context";
import { useContext } from "react";
import { Menu } from "../../components/menu";
import { Contos } from "../../pages/Contos";
import { ContosProvider } from "../../contexts/ContosProvider";
import { User } from "../../pages/Users";
import { UpdateUser } from "../../pages/Users/update";

const App = () => {
  // const {state, dispatch}=useContext(Context);

  const handleSwitchTheme=()=>{

    


    // if(state.theme.status==='light')
    // {
    //   dispatch({
    //     type:'CHANGE_STATUS',
    //     payload:{
    //       status:'dark'
    //     }
    //   })
    // }
    // else{
    //   dispatch({
    //     type:'CHANGE_STATUS',
    //     payload:{
    //       status:'light'
    //     }
    //   })
    // } 
  }
  return (
    // <ContosProvider>
      <BrowserRouter>
       <Menu></Menu>
          

        <h1>Titulo pagina</h1>
        
        <br />
       
        <hr />
        {/* <Routes>          */}
        <Routes>
          <Route>
          <Route path="/contos" element={<Contos/>}></Route>
          <Route path="/users" element={<User/>}></Route>
          <Route path="/users/update" element={<UpdateUser/>}></Route>
          </Route>
        </Routes>
          
        {/* </Routes> */}

       
      </BrowserRouter>
    // </ContosProvider>
  )
}
export default App;