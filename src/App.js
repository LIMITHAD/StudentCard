import logo from './logo.svg';
import './App.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
      <div style={{ padding: "20px" }}>
      <StudentCard
        name="Limitha"
        department="Biotechnology"
        cgpa={8.5}
      />
      <StudentCard
         name="Dhanusha"
        department="Computer Science"
        cgpa={7.2}
      />
    </div>
  );
}

export default App;
