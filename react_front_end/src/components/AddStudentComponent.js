import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import StudentService from '../services/StudentService';
const AddStudentComponent = () => {
    const [ma_sv, setMaSV] = useState('')
    const [hoten, setHoten] = useState('')
    const [ngaysinh, setNgaysinh] = useState('')
    const [quequan, setQuequan] = useState('')
    const [email, setEmail] = useState('')
    const [sdt, setSDT] = useState('')
    const navigate = useNavigate();
    const params = useParams();
    const { id } = params;

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();

        const student = id ? { hoten, ngaysinh, quequan, email, sdt } : { ma_sv, hoten, ngaysinh, quequan, email, sdt }

        if (id) {
            StudentService.updateStudent(id, student).then((response) => {
                navigate("/students")
            }).catch(error => {
                console.log(error)
            })

        } else {
            StudentService.createStudent(student).then((response) => {

                console.log(response.data)

                navigate("/students")

            }).catch(error => {
                alert("Mã sinh viên đã tồn tại" );
                console.log(error)
            })
        }

    }

    useEffect(() => {

        StudentService.getStudentById(id).then((response) => {
            setMaSV(id)
            setHoten(response.data.hoten)
            setNgaysinh(response.data.ngaysinh);
            setQuequan(response.data.quequan);
            setEmail(response.data.email);
            setSDT(response.data.sdt);
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if (id) {
            return <h2 className="text-center">Sửa sinh viên</h2>
        } else {
            return <h2 className="text-center">Thêm sinh viên</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Mã sinh viên :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập mã sinh viên"
                                        name="masv"
                                        className="form-control"
                                        value={ma_sv}
                                        onChange={(e) => setMaSV(e.target.value)}
                                    >
                                    </input>
                                    <label className="form-label"> Họ tên :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập họ tên"
                                        name="hoten"
                                        className="form-control"
                                        value={hoten}
                                        onChange={(e) => setHoten(e.target.value)}
                                    >
                                    </input>
                                    <label className="form-label"> Ngày sinh :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập ngày sinh"
                                        name="ngaysinh"
                                        className="form-control"
                                        value={ngaysinh}
                                        onChange={(e) => setNgaysinh(e.target.value)}
                                    >
                                    </input>
                                    <label className="form-label"> Quê quán :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập quê quán"
                                        name="quequan"
                                        className="form-control"
                                        value={quequan}
                                        onChange={(e) => setQuequan(e.target.value)}
                                    >
                                    </input>
                                    <label className="form-label"> Email :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                    <label className="form-label"> Số điện thoại :</label>
                                    <input
                                        type="text"
                                        placeholder="Nhập số điện thoại"
                                        name="sdt"
                                        className="form-control"
                                        value={sdt}
                                        onChange={(e) => setSDT(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <button className="btn btn-success" onClick={(e) => saveOrUpdateStudent(e)} >Submit </button>
                                <Link to="/students" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddStudentComponent