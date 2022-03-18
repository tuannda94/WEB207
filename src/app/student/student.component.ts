import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// Định nghĩa 1 mảng các phần tử user, gồm các thuộc tính:
  // tên, cân nặng, chiều cao, ảnh, id
  // Thực hiện việc hiển thị danh sách user ra bảng
  // Thực hiện xoá user, kiểm tra nếu cân nặng < 30 thì không cho xoá

  title = 'WEB207 - WE16303 - tuannda3';
  subTitle = 'Bang du lieu';

  student = {
    name: 'Tuannda3',
    age: 30,
    phone: '0392871868',
    email: 'tuannda3@fe.edu.vn',
    img: 'https://iap.poly.edu.vn/user/ph/PH16698.jpg'
  };

  students = [
    {
      id: 1,
      name: 'Tuannda3',
      age: 30,
      phone: '0392871868',
      email: 'tuannda3@fe.edu.vn',
      img: 'https://iap.poly.edu.vn/user/ph/PH16698.jpg'
    },
    {
      id: 2,
      name: 'Tuannda4',
      age: 30,
      phone: '0392871868',
      email: 'tuannda3@fe.edu.vn',
      img: 'https://iap.poly.edu.vn/user/ph/PH16698.jpg'
    },
    {
      id: 3,
      name: 'Tuannda5',
      age: 30,
      phone: '0392871868',
      email: 'tuannda3@fe.edu.vn',
      img: 'https://iap.poly.edu.vn/user/ph/PH16698.jpg'
    },
  ];

  remove(id: number) {
    // Cap nhat gan this.filterStudents thay vi gan cho this.students
    this.filterStudents = this.filterStudents.filter(student => student.id !== id);
  }

  // Buoi 3
  // Search
  searchValue = '';
  // spread, lay tat ca phan tu cua student dua
  // gan cho filterStudents bang gia tri cua this.students
  filterStudents = this.students;

  onSearch(event: any) {
    this.searchValue = event.target.value;

    // Neu gan cho chinh this.student
    // thi sau khi filter mang goc se thay doi
    // xoa filter se khong tra ve kq nua

    // Gan phan hien thi cho 1 mang moi
    // Su dung mang goc de filter
    this.filterStudents = this.students.filter(student => {
      // 1. Chuyen ca name va searchValue ve dang viet thuong bang toLowerCase
      // 2. voi searchValue tien hanh .trim() de loai bo khoang trang o 2 dau
      const studentNameLowerCase = student.name.toLowerCase();
      const searchValueLowerCase = this.searchValue.toLowerCase().trim();

      return studentNameLowerCase.indexOf(searchValueLowerCase) !== -1;
    }
    );
  }

  // Form input
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    email: '',
    img: ''
  };

  onChangeInput(event: any, key: string) {
    const inputValue = event.target.value;
    // spread operator
    this.newUser = {
      ...this.newUser,
      [key]: inputValue
    };

    console.log(this.newUser);
    /*
        ~ tao object moi ben trong co cac cap key value cua object this.newUser
        {
          name: '',
          age: null,
          phone: '',
          email: '',
          img: '',

          [key]: inputValue, neu key la 'name' tuong duong voi name: inputValue
          Voi cu phap spread ... thi name se bi ghi de gia tri moi tu '' => inputValue
        } */
  }


  onSubmit() {
    // Validate truoc khi cap nhat du lieu
    if (!this.onValidate(this.newUser)) {
      // Neu k pass qua dieu kien validate, thi se return ra khoi ham submit luon
      return;
    }

    // Kiem tra xem this.newUser co id hay khong
    if (this.newUser.id) {
      // Neu co id thi se la cong viec chinh sua
      // Tim xem dau la phan tu co id la id dang duoc chinh sua
      for (let i = 0; i < this.students.length; i++) {
        // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
        if (this.students[i].id === this.newUser.id) {
          // Khi tim thay thi gan gia tri cho phan tu do
          this.students[i] = this.newUser;
        }
      }
    } else {
      // Cong viec tao moi
      // Nhet thang newUser vao mang this.student
      this.newUser = {
        ...this.newUser,
        id: this.students.length + 1,
        age: Number(this.newUser.age)
      };

      this.students.push(this.newUser);
      // Van de gap phai: neu filterStudents = [...this.students]
      // thi se khong cap nhat moi duoc

      console.log(this.students, this.filterStudents)
    }

    // Cap nhat du lieu default cho newUser de hien thi ben view
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      email: '',
      img: ''
    }
  }

  // Validate
  onValidate(obj: any) {
    if (!obj.name || !obj.age || !obj.phone || !obj.img || !obj.email) {
      // ~ if(obj.name !== '' || obj.age !== '' ......)
      return false;
    }

    return true;
  }

  // Chinh sua
  onEdit(student: any) {
    this.newUser = student;
  }
}
