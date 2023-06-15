import axios from 'axios'

const STUDENT_BASE_REST_API_URL = 'http://localhost:8080/api/v1/student';

class StudentService {
    getAllStudent() {
        return axios.get(STUDENT_BASE_REST_API_URL);
    }
    createStudent(student){
        return axios.post(STUDENT_BASE_REST_API_URL, student)
    }

    getStudentById(masv){
        return axios.get(STUDENT_BASE_REST_API_URL + '/' + masv);
    }

    updateStudent(masv, student){
        return axios.put(STUDENT_BASE_REST_API_URL + '/' +masv, student);
    }
    deleteStudent(masv){
        return axios.delete(STUDENT_BASE_REST_API_URL + '/' + masv);
    }
}
export default new StudentService();