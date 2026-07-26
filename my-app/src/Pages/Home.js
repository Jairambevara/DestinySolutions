import { useNavigate } from 'react-router-dom';
import '../App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-shell">
      <section className="clock-card dark-card">
        <img src="/DSLog.png" alt="DS logo" style={{ width: '450px' }} />
      </section>

      <button className="join-button" type="button" onClick={() => navigate('/dashboard')}>
        Begin Your Journey
      </button>

      <section className="clock-card light-card">
        <h4>Transforming Ideas into Digital Success.</h4>
        <p style={{ width: '800px' }}>
          Every great business deserves a powerful digital presence. From stunning websites and mobile applications to complete digital solutions, we help businesses build trust, connect with more customers, and achieve sustainable growth. Together, we'll turn your vision into a thriving digital reality.
        </p>
      </section>
    </div>
  );
}

export default Home;