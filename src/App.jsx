import TeamCarousel from './components/TeamCarousel/TeamCarousel';
import { 
  box1, 
  box2, 
  marketingTeam,
  salesTeam,
  productTeam,
  customerSupportTeam,
  lastone
} from './data/teamMembers';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <div className="teams-grid">
        <div className="team-section">
     
          <TeamCarousel members={box1} carouselId={1} />
        </div>
        
        <div className="team-section">
     
          <TeamCarousel members={box2} carouselId={2} />
        </div>
        
        <div className="team-section">
       
          <TeamCarousel members={marketingTeam} carouselId={3} />
        </div>

        <div className="team-section">
     
          <TeamCarousel members={salesTeam} carouselId={4} />
        </div>

        <div className="team-section">
          
          <TeamCarousel members={productTeam} carouselId={5} />
        </div>

        <div className="team-section">
          
          <TeamCarousel members={customerSupportTeam} carouselId={6} />
        </div>
        <div className="team-section">
          
          <TeamCarousel members={lastone} carouselId={6} />
        </div>
      </div>
    </div>
  );
}