import Entete from '../components/Entete';
import {FaTwitter,FaFacebook,FaGithub,FaPhone,FaGoogle,FaDownload} from 'react-icons/fa';

function Home() {
  let symbol = "</>";

  return (
    <div className="Home">
      <Entete />
      <div className='corps'>
          <div className='gauche'>
            <h1>Salut !</h1>
            <h2 className='present'>Je suis <span>Jet Kahimbi</span> <s>J34kah</s></h2>
            <h2 className='dev'>{symbol}Développeur Web</h2>
            <p><img src={require('../img/quote-sign-left.png')} alt="img"/> je suis un développeur web independant et actuellement je bosse sur le developpement mobile et le UI/UX design. Suis pationné 
              par les nouvelles technos et je fais donc de mon mieux pour en apprendre autant que je peux.</p>
            <div className='boutons'>
              <button className='btncontact'><FaPhone style={{rotate:'90deg'}}/> Contactez-moi</button>
              <button className='btnCV'><FaDownload /> Telecharger mon CV</button>
            </div>
            <div className='reseaux'>
              <h3><FaPhone style={{rotate:'90deg'}}/> Tél: +243 971 401 245</h3>
              <h3><FaFacebook /> Facebook</h3>
              <h3><FaGoogle /> Gmail</h3>
              <h3><FaGithub /> Github</h3>
              <h3><FaTwitter /> Twitter</h3>
            </div>
          </div>
          <div className='droite'>
            <img src={require('../img/0jj.png')} alt="img"/>
          </div>
      </div>
    </div>
  );
}

export default Home;
