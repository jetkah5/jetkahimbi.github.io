import Entete from '../components/Entete';
import {FaTwitter,FaFacebook,FaGithub,FaPhone,FaGoogle,FaDownload,FaLinkedinIn} from 'react-icons/fa';
import ProgressBar from '../components/ProgressBar';

function Home() {
  let symbol = "</>";

  return (
    <div className="Home">
      <Entete />
      <div className='container dflex'>
          <div className='gauche'>
            <h1>Salut !</h1>
            <h2 className='present'>Je suis <span>Jet Kahimbi</span> <s>Jetkah</s></h2>
            <h2 className='dev'>{symbol}Développeur Web</h2>
            <p><img src={require('../img/quote-sign-left.png')} alt="img"/> je suis un développeur web independant et actuellement je bosse sur le developpement mobile et le UI/UX design. Suis pationné 
              par les nouvelles technos et je fais donc de mon mieux pour en apprendre autant que je peux.</p>
            <div className='boutons'>
              <button className='btncontact'><FaPhone style={{rotate:'90deg'}}/> Contactez-moi</button>
              <button className='btnCV'><FaDownload /> Télecharger mon CV</button>
            </div>
            <div className='reseaux'>
              <h3><FaPhone style={{rotate:'90deg'}}/> <span>Tél: +243 971 401 245</span></h3>
              <h3><FaGoogle /> <span>jetkah5@gmail.com</span></h3>
              <h3><FaLinkedinIn/> <span>https://www.linkedin.com/in/jet-kahimbi-0979a325b</span></h3>
              <h3><FaGithub /> <span>https://github.com/jetkah5</span></h3>
              <h3><FaTwitter /> <span>@jetkahimbi5</span></h3>
              <h3><FaFacebook /> <span>Jet Kahimbi</span></h3>
            </div>
          </div>
          <div className='droite'>
            <img src={require('../img/0jk.png')} alt="img"/>
          </div>

        <div className="compentences">
          <h2 className='title'>Compéntences</h2>
          <div className='dflex'>
            <div className='left'>
              <img src={require("../img/undraw_Programming_re_kg9v.png")} alt="svg" />
            </div>
            <div className='right dflex'>
              <div className='l'>
                <h2>Web design</h2>
                <ul>
                  <li>HTM <div className='progress'><ProgressBar level="90"/></div></li>
                  <li>CSS <div className='progress'><ProgressBar level="70"/></div></li>
                  <li>JavaScript <div className='progress'><ProgressBar level="40"/></div></li>
                  <li>React <div className='progress'><ProgressBar level="60"/></div></li>
                  <li>BootStrap <div className='progress'><ProgressBar level="90"/></div></li>
                  <li>Tailwind <div className='progress'><ProgressBar level="50"/></div></li>
                  <li>Architecture MVC <div className='progress'><ProgressBar level="50"/></div></li>
                </ul>
                <h2>Web back-end</h2>
                <ul>
                  <li>PHP <div className='progress'><ProgressBar level="80"/></div></li>
                  <li>Sql <div className='progress'><ProgressBar level="75"/></div></li>
                  <li>Intégration d'API-REST</li>
                </ul>
                <h2>Développement mobile</h2>
                <ul>
                  <li>ReactNative <div className='progress'><ProgressBar level="40"/></div></li>
                </ul>
              </div>
              <div className='r'>
                <h2>Autres</h2>
                <ul>
                  <li>Python <div className='progress'><ProgressBar level="40"/></div></li>
                </ul>
                <h2>Logiciels</h2>
                <ul>
                  <li>Photoshop <div className='progress'><ProgressBar level="80"/></div></li>
                  <li>Word <div className='progress'><ProgressBar level="97"/></div></li>
                  <li>Excel <div className='progress'><ProgressBar level="40"/></div></li>
                  <li>PowerPoint <div className='progress'><ProgressBar level="67"/></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='Projets'>
          <h2 className='title'>Projets réalisés</h2>
          <div className='dflex space-between'>
            <div className='bloc'><div className='hover'></div></div>
            <div className='bloc'><div className='hover'></div></div>
            <div className='bloc'><div className='hover'></div></div>
            <div className='bloc'><div className='hover'></div></div>
          </div>
        </div>

        <div className="Ecrire">
          <h2 className="title">Nous écrire</h2>
          
        </div>

      </div>
    </div>
  );
}

export default Home;
