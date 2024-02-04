import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import TouchAppIcon from '@mui/icons-material/TouchApp';

const Header = ({ onStartNowClick, showGetInTouchButton }) => {
  return (
    <Navbar expand="lg" className="">
      <Container className='py-4'>
        <Navbar.Brand href="/">
          <img src="assets/img/logo_dark.png" alt="Logo" className='logoImg' />
        </Navbar.Brand>
        {showGetInTouchButton && <button className="btn rounded-5 fw-medium fs-4 px-5 py-2 btn-greenIsColor" onClick={() => onStartNowClick('GetInTouch')}>Get In Touch</button>}
        {showGetInTouchButton && <TouchAppIcon className="getInTouchIcon" onClick={() => onStartNowClick('GetInTouch')} />}
      </Container>
    </Navbar>
  );
};

export default Header;
