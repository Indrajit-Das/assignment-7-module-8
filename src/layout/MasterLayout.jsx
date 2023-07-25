import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MasterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MasterLayout;
