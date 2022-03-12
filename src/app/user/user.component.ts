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
    this.users = this.users.filter(function (user) {
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

}
