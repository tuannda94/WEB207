# Cách đặt tên trong json-server

### Bảng
    - tên đối tượng số nhiều: products, categories
    - Kiểu dữ liệu: dạng mảng []
    - Quan hệ: khoá ngoại dạng tên bảng số ít + Id: categoryId, userId,...
    - API http://localhost:3000/tên bảng trong file db.json
        http://localhost:3000/products
        http://localhost:3000/categories

### Truy vấn bằng url + tham số
    - với việc lấy thêm thông tin cha: _expand=tên bảng số ít
        VD từ product lấy ra categories theo categoryId: _expand=category
    - với việc lấy thêm thông tin con: _embed=tên bảng số nhiều
        VD từ categories lấy các product theo categoryId: _embed=products

### API endpoint
    - Danh sách: http://localhost:3000/tên_bảng
    - Chi tiết: http://localhost:3000/tên_bảng/:id
    * Các option ở trên đều có thể kết hợp ở đằng sau 2 loại API kia
