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

  ]

}
