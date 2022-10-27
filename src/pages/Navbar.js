import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  function menuClick() {
    // find nav tag
    var navTag = document.getElementById('navbarNav');

    // open & close menu on click
    navTag.classList.contains('collapse') ? navTag.classList.remove('collapse') : navTag.classList.add('collapse')

  }
  return (
    <>
      <ul style={{
        padding: '10px 0px 10px 10px', borderBottom: '1px solid #fff', backgroundColor: '#163587'
        , position: 'fixed', width: '100%'
        , zIndex: '2'
      }}>
        <li>
          <table style={{ textAlign: 'center' }}>
            <tbody>
              <tr>
                <td style={{ fontSize: '35px', paddingLeft: '15px' }}>
                  <Link to="/mission"><span title="Mission" >🎯</span></Link>
                </td>
                <td style={{ fontSize: '35px', paddingLeft: '25px' }}>
                  <Link to="/petition"><span title="Petition" >🖊️</span></Link>
                </td>
                <td style={{ fontSize: '35px', paddingLeft: '25px' }}>
                  <Link to="/share"><span title="Share" >🤳</span></Link>
                </td>
              </tr>
              <tr>
                <td style={{ fontSize: '12px', paddingLeft: '15px' }}>
                  MISSION
                </td>
                <td style={{ fontSize: '12px', paddingLeft: '25px' }}>
                  PETITION
                </td>
                <td style={{ fontSize: '12px', paddingLeft: '25px' }}>
                  SHARE
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>





      {/* <ul  style={{padding: '10px 0px 10px 25px', borderBottom:'1px solid #fff', backgroundColor:'#163587'
        ,position: 'fixed',width: '100%'
        ,zIndex:'2'
        }}>
          <li><Link to="/mission"><span title="Mission" style={{ fontSize: '35px' }}>🎯</span></Link></li>
          <li><Link to="/petition"><span title="Petition" style={{ fontSize: '35px', paddingLeft:'10px' }}>🖊️</span></Link></li>
          <li><Link to="/share"><span title="Share" style={{ fontSize: '35px', paddingLeft:'10px' }}>🤳</span></Link></li>
        </ul> */}


      {/* <div className="container-fluid">
          <button
            className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" onClick={menuClick}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/mission">
                  Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/petition">
                  Petition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/share">
                  Share
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

    </>
  );
};

export default Navbar;