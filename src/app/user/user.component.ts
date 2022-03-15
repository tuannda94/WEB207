import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    {
      id: 1,
      name: 'tuannda3',
      age: 20,
      phone: '0392871868',
      avatar: "https://iap.poly.edu.vn/user/ph/PH18314.jpg"
    },
    {
      id: 2,
      name: 'tuannda4',
      age: 22,
      phone: '0392871868',
      avatar: "https://iap.poly.edu.vn/user/ph/PH18314.jpg"
    },
    {
      id: 3,
      name: 'tuannda5',
      age: 24,
      phone: '0392871868',
      avatar: "https://iap.poly.edu.vn/user/ph/PH18314.jpg"
    },
  ];

  // Dinh nghia 1 mang trung gian luu ket qua search
  // De khong bi anh huong den gia tri cua mang users goc
  usersFilter = this.users;

  // Dinh nghia ham xoa khi click nut Delete
  remove(userId: number) {
    // this.users ~ thuoc tinh users cua class UserComponent
    this.usersFilter = this.usersFilter.filter(function (user) {
      return user.id !== userId
    });
  }

  // Mo rong, cho phep tim kiem bang tieng viet
  convertVietnameseToUnicode(value: string) {
    const a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;'
    const b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g');

    return value.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
      .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
      .replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
      .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
      .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
      .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
      .replace(/đ/gi, 'd')
      .replace(/\s+/g, '-')
      .replace(p, c => b.charAt(a.indexOf(c)))
      .replace(/&/g, '-and-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  // Dinh nghia ham search sau khi nhap vao o input
  onSearch(event: any) {
    // 1. Xu ly viec tim kiem chu hoa chu thuong
    // Dua ca value va name ve dang chu thuong
    // 2. Khoang trang dau va cuoi value cua input
    // su dung phuong thuc .trim()
    const value = event.target.value;
    const lowerCaseInputValue = value.toLowerCase();
    const lowerCaseTrimInputValue = lowerCaseInputValue.trim();
    const unicodeValue = this.convertVietnameseToUnicode(lowerCaseTrimInputValue);
    // Gan cho usersFilter de khong thay doi users goc nua
    // Doi hien thi danh sach theo usersFilter
    this.usersFilter = this.users.filter(function (user) {
      const lowerCaseUserName = user.name.toLowerCase();

      return lowerCaseUserName.indexOf(unicodeValue) !== -1;
    });
  }

  // Them moi user
  // 1. Dinh nghia 1 obj newUser trung gian
  // Nhan gia tri input dau vao, sau khi submit se gan ve gia tri goc
  newUser = {
    id: 0,
    name: '',
    age: 0,
    phone: '',
    avatar: ''
  };

  onChange(event: any, key: string) {
    // this.newUser.id = this.users.length + 1; // de lai khi submit moi lam
    // js spread operator ...
    this.newUser = {
      ...this.newUser,
      [key]: event.target.value // gia tri cua key se phai trung voi thuoc tinh cua object
    };
    // Neu key = 'name'
    // this.newUser = {
    //   id: 0,
    //   name: '',
    //   age: 0,
    //   phone: '',
    //   avatar: '',
    //   name: event.target.value // Do su dung ... nen name se duoc ghi de
    // }
    console.log(this.newUser);
  }

  onSubmit() {
    // 0. Validate
    if (!this.onValidate(this.newUser)) {
      // Thong bao
      return;
    }

    // 1.1 Kiem tra xem co phai dang sua khong
    if (this.isEdit) {
      // gan gia tri moi cho mang
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id === this.newUser.id) {
          this.users[i] = this.newUser;
        }
      }
      // Dua isEdit ve gia tri goc la false de co the them moi
      this.isEdit = false;
    } else {
      // 1.2. Gan them id bang do dai mang + 1
      this.newUser.id = this.users.length + 1;
      // 2. Push phan tu moi vao mang users
      this.users.push(this.newUser);
    }

    // 3. Gan lai gia tri goc cho newUser
    this.newUser = {
      id: 0,
      name: '',
      age: 0,
      phone: '',
      avatar: ''
    };
  }

  onValidate(obj: any) {
    // 1 trong so cac truong chua duoc nhap
    // Hoac gia tri cua age <= 0
    if (!obj.name || !obj.age || obj.age <= '0' || !obj.phone || !obj.avatar) {
      // if (obj.name !== '' || obj.age !== '' || obj.age != '0' .........)
      return false;
    }

    return true;
  }

  // Sua
  // Mac dinh se khong phai dang sua
  isEdit = false;

  onEdit(obj :any) {
    // Gan du lieu can sua vao newUser
    this.newUser = obj;
    // Chuyen trang thai dang sua thanh true
    this.isEdit = true;
    // Sau do se xu ly tiep o onSubmit neu isEdit true
  }


}
