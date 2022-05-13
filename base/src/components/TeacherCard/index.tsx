import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';
import useTeacherDetail from '../../hooks/useTeacherDetail';
import './styles.css';
import Teacher from '../../types/teacher';

type Props = {
    teacher: Teacher;
}

function TeacherCard({ teacher }: Props) {
    const navigate = useNavigate();
    const { handleInsertTeacher } = useTeacherDetail();

    function handleTeacherDetail(){
        handleInsertTeacher(teacher)
       return navigate('/teacher-detail');
    }

    return (
        <div className='teacher-card' onClick={handleTeacherDetail}>
            <Avatar image={teacher.avatar} />
            <h1>{teacher.name}</h1>
        </div>
    )
}

export default TeacherCard;