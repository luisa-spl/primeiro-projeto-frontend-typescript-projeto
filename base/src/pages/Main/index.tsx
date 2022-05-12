import './styles.css';
import Header from '../../components/header';
import TeacherCard from '../../components/TeacherCard';

function Main() {
  return (
    <div className="container">
      <Header showBackArrow />

      <div>
        <TeacherCard  teacher={{ id: 1, name: 'Daniel', avatar: 'https://i.ibb.co/P4ytHtY/joseph-gonzalez-i-Fg-Rcq-Hznqg-unsplash.jpg'}}/>
      </div>
    </div>
  );
}

export default Main;
