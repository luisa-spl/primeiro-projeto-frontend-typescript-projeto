import './styles.css';

type Props = {
    teacher: {
        id: number;
        avatar: string;
        name: string;
    }
}
function TeacherCard({ teacher }: Props) {
    return (
        <div className='teacher-card'>
            <img src={teacher.avatar} alt="avatar" className='avatar'/>
            <h1>{teacher.name}</h1>
        </div>
    )
}

export default TeacherCard;