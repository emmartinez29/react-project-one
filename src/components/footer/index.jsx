import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../../containers/CartWidget';
import  {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './style.css'


const FooterComponent = () => {


    return(
      <>
        
        <div className="intro ">
        </div>
        <div className="center colorBrown2">
            <div className="container container2 col-md-8" style={{padding: "20px 0px 0px 0px"}}>
            <div className="row">
                <div className="col-md-4 col-md-4 d-flex justify-content-center align-items-end">
                <h6>SoyGlucosaProject</h6>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-end">
                <h4>Contacto</h4>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-end">
                <h4>Sobre Nosotros</h4>
                </div>
            </div>
            <hr style={{backgroundColor: "rgb(221, 140, 221)"}}/>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                <p style={{textAlign: "center"}}><a href="https://github.com/emmartinez29/react-project-one" target="_blank"><i class="fa fa-github colorIcon"></i></a> GitHub</p>
                </div>
                <div className="col-md-4 d-flex justify-content-start flex-column ">
                <p style={{textAlign: "center"}}><a href="#" target="_blank" className="prevent"><i className="fa fa-phone colorIcon"></i></a> 11-11123331</p>
                <p style={{textAlign: "center"}}><a href="#" target="_blank" className="prevent"><i className="fa fa-envelope-o colorIcon"></i></a> comingSoon@example.com</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit culpa cumque facilis nulla, eum accusamus magni animi doloremque alias distinctio molestiae quaerat vero libero aliquid, nostrum commodi quia cupiditate sapiente.</p>
                </div>
            </div>
            </div>
            <div className="container container2" style={{padding: "0px 0px 20px 0px"}}>
            <div className="row d-flex justify-content-center">
                <p>Siguenos en nuestras redes</p>
            </div>
            <div className="redes">
                <div className="social-menu2">
                <div className="social-menu22"><a href="https://www.instagram.com/soyglucosa/?igshid=1skr6orrocz5" target="_blank"><i className="fa fa-instagram"></i></a></div>
                <div className="social-menu22"><a href="#" target="_blank" className="prevent"><i className="fa fa-facebook"></i></a></div>
                <div className="social-menu22"><a href="#" target="_blank" className="prevent"><i className="fa fa-twitter"></i></a></div>
            </div>
            </div>
            </div>
        </div>
        <div className="gb  d-flex align-items-center">
            <div className="container">
            <div className="row d-flex justify-content-center">
                <p>© 2021 | Powered by <strong><a href="https://www.linkedin.com/in/emilio-martinez-gonzalez-0b0195165/" target="_blank">Emilio Martinez</a></strong></p>
            </div>
            </div>
        </div>
      
      </>
    )
  
  }
  
  
  export default FooterComponent;