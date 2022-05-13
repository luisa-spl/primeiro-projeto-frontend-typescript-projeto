import { useState } from "react";
import Teacher from "../types/teacher";

function useTeacherDetail() {
    const [currentTeacherDetail, setCurrentTeacherDetail] = useState<Teacher>(
        localStorage.getItem('current-teacher')
            ? JSON.parse(localStorage.getItem('current-teacher')!)
            : { id: 0, name: '', avatar: '', bio: '', stack: ''}
        );

    function handleInsertTeacher(teacher: Teacher) {
        localStorage.setItem('current-teacher', JSON.stringify(teacher))
        setCurrentTeacherDetail(teacher);
    }

    return {
        currentTeacherDetail,
        handleInsertTeacher
    }
}

export default useTeacherDetail;