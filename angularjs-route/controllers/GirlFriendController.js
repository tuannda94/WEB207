var GirlFriendController = function ($scope) {
    $scope.thong_tin_ca_nhan = {
        ten: 'Nguyen Van A',
        tuoi: 30,
        dia_chi: 'Ha Noi'
    };
    $scope.ds_nguoi_yeu = [
        {
            id: 1,
            ten: 'Nguyen Thi B',
            biet_danh: 'Meo meo',
            tuoi: 40,
            dia_chi: 'Royal city',
            sdt: '0392888888',
            so_thich: 'Phi cong',
            trang_thai: 1 // 0 hoac 1
        },
        {
            id: 2,
            ten: 'Nguyen Thi B',
            biet_danh: 'Meo meo',
            tuoi: 40,
            dia_chi: 'Royal city',
            sdt: '0392888888',
            so_thich: 'Phi cong',
            trang_thai: 1 // 0 hoac 1
        }
    ];

    var luu_tru_tuoi = 0;
    $scope.tangTuoi = function () {
        $scope.thong_tin_ca_nhan.tuoi = luu_tru_tuoi;
    };
    $scope.layTuoi = function (e) {
        luu_tru_tuoi = e.target.value;
    };

    // Biến isShowForm thể hiện trạng thái hiển thị của form
    $scope.isShowForm = false;
    // Khi bấm thêm mới thì sẽ cập nhật giá trị cho isShowForm = true
    $scope.showForm = function () {
        $scope.isShowForm = true;
    }
    $scope.hideForm = function () {
        $scope.isShowForm = false;
    }
    // Chỉ cần thay đổi nd input có ng-model
    // thì sẽ tự động gán luôn
    $scope.inputs = {
        ten: '',
        tuoi: 0,
        // Những thông tin bên dưới mặc định và chưa có ng-model lắng nghe
        biet_danh: '',
        dia_chi: '',
        sdt: '',
        so_thich: '',
        trang_thai: 0
    };
    // Khi bấm lưu sẽ gọi vào onSave()
    $scope.onSave = function () {
        // Tạo phần tử mới có id tăng dần
        var newObj = {
            ...$scope.inputs, // Lấy toàn bộ thuộc tính của obj nhét vào đây
            tuoi: +$scope.inputs.tuoi, // ép kiểu từ chuỗi về số
            id: $scope.ds_nguoi_yeu.length + 1 // lấy độ dài mảng + 1
        };
        if ($scope.editId == 0) {
            // Thêm phần tử mới vào danh sách
            $scope.ds_nguoi_yeu.push(newObj);
        } else {
            // Thêm giá trị id vào cho bản ghi đang muốn sửa
            newObj.id = $scope.editId;
            // Tìm phần tử có id đang được sửa và gán giá trị mới
            for (i = 0; i < $scope.ds_nguoi_yeu.length; i++) {
                if ($scope.ds_nguoi_yeu[i].id == $scope.editId) {
                    $scope.ds_nguoi_yeu[i] = newObj;
                    break;
                }
            }
        }
        // Bỏ giá trị đang có ở input về mặc định
        $scope.inputs.ten = '';
        $scope.inputs.tuoi = 0;
        // Ẩn form thêm mới đi
        $scope.hideForm();
    };

    // Xác định trạng thái chỉnh sửa dựa theo editId
    $scope.editId = 0;

    // Lấy dữ liệu cần chỉnh sửa
    $scope.onEdit = function (editId) {
        $scope.editId = editId;
        // Tìm ra thông tin của bản ghi đang được chỉnh sửa
        // find chỉ trả về 1 phần tử duy nhất nếu thoả mãn điều kiện
        var editData = $scope.ds_nguoi_yeu.find(function (item) {
            return item.id == editId;
        });
        if (!editData) {
            // Nếu không tồn tại thì báo lỗi và thoát hàm
            return alert('Bản ghi không tồn tại');
        }
        // Hiển thị form lên
        $scope.showForm();
        // Gán giá trị mới cho các ô input
        $scope.inputs.ten = editData.ten;
        $scope.inputs.tuoi = editData.tuoi;
    };

    // Xoá
    $scope.onDelete = function(deleteId) {
        console.log(deleteId)
        // Xác nhận chắc chắn xoá
        var isConfirm = confirm('Bạn có muốn xoá không');
        if (!isConfirm) {
            return;
        }
        // Tạo ds mới loại bỏ phần tử cần xoá
        // Filter sẽ lọc phần tử thoả mãn đk là có id khác id cần xoá
        var newList = $scope.ds_nguoi_yeu.filter(function (item) {
            return item.id != deleteId;
        });
        // Gán ds bằng ds mới đã loại bỏ phần tử
        $scope.ds_nguoi_yeu = newList;
    }
};
