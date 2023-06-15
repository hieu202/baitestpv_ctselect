package hieu.com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student {
	@Id
    @Column(name = "ma_sv", length = 100)
    private String ma_sv;
	@Column(name = "hoten", length = 100, nullable = true)
	private String hoten;
	@Column(name = "ngaysinh", length = 100, nullable = true)
	private String ngaysinh;
	@Column(name = "quequan", length = 100, nullable = true)
	private String quequan;
	@Column(name = "email", length = 100, nullable = true)
	private String email;
	@Column(name = "sdt", length = 100, nullable = true)
	private String sdt;
	public String getMa_sv() {
		return ma_sv;
	}
	public void setMa_sv(String ma_sv) {
		this.ma_sv = ma_sv;
	}
	public String getHoten() {
		return hoten;
	}
	public void setHoten(String hoten) {
		this.hoten = hoten;
	}
	public String getNgaysinh() {
		return ngaysinh;
	}
	public void setNgaysinh(String ngaysinh) {
		this.ngaysinh = ngaysinh;
	}
	public String getQuequan() {
		return quequan;
	}
	public void setQuequan(String quequan) {
		this.quequan = quequan;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSdt() {
		return sdt;
	}
	public void setSdt(String sdt) {
		this.sdt = sdt;
	}
	
}	
