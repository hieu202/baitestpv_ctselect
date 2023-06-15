import React, { useState, useEffect } from 'react'
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom'
const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getAllStudent();
    }, [])

    const getAllStudent = () => {
        StudentService.getAllStudent().then((response) => {
            setStudents(response.data)

        }).catch(error => {
            console.log(error);
        })
    }
    const deleteStudent = (id) => {
        StudentService.deleteStudent(id).then((response) => {
            getAllStudent();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div className='container'>
            <h2 className='text-center'>Danh sách sinh viên</h2>
            <Link to="/add-student" className="btn btn-primary mb-2" > Thêm sinh viên </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student =>
                            <tr key={student.ma_sv}>
                                <td>{student.ma_sv}</td>
                                <td>{student.hoten}</td>
                                <td>{student.sdt}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/add-student/${student.ma_sv}`} >Sửa</Link>
                                    <button className="btn btn-danger" onClick={() => deleteStudent(student.ma_sv)}
                                        style={{ marginLeft: "10px" }}> Xóa</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListStudentComponent