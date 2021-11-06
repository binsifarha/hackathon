import { Typography ,Button, AppBar, Toolbar} from '@material-ui/core'
import React,{useState} from  'react'
import Modal from 'react-modal'
import SignUP from './SignUP'



const Header = () => {

    var [modalopen,setModalOpen]=useState(false)

     const modalIsOpen=()=>{
        setModalOpen(true)
     }

     
     const modalIsClose=()=>{
        setModalOpen(false)
     }


    return (
        <div>
        
        <AppBar>
            <Toolbar>
                    <Typography>Movie Review </Typography>
                    <Button color="secondary" onClick={modalIsOpen}>login</Button>
                 

                    
                    <Modal open={modalopen} onRequestClose={()=>setModalOpen(false)}>
                    <Button color="primary" onClick={modalIsClose}>x</Button>
                    <SignUP/>
                    
                    </Modal>
            </Toolbar>
        </AppBar>
                    
        </div>
    )
}

export default Header