var LabController = function ($scope) {
    // Thuoc tinh luu trang thai hien thi cua form
    $scope.isShowForm = false;
    // Phuong thuc de chuyen trang thai hien thi form
    $scope.setShowForm = function (status) {
        $scope.isShowForm = status;
    }
    $scope.danhsach = [
        {id: 1, name: 'PT 1', desc: 'Mo ta PT1'},
        {id: 2, name: 'PT 2', desc: 'Mo ta PT2'},
    ];
    // Quan ly input
    $scope.input = {
        name: 'Nguyen Van A',
        desc: ''
    };
    $scope.onClose = function () {
        $scope.input = {
            name: '',
            desc: ''
        };
        $scope.isShowForm = false;
        $scope.editId = 0;
    };
    $scope.onSave = function () {
        var editId = $scope.editId;
        // Kiểm tra isEdit xem là sửa hay thêm
        if (editId) {
            for (i = 0; i < $scope.danhsach.length; i++) {
                if ($scope.danhsach[i].id == editId) {
                    $scope.danhsach[i].name = $scope.input.name;
                    $scope.danhsach[i].desc = $scope.input.desc;
                }
            }
            $scope.onClose();
            return;
        }
        var ds = $scope.danhsach;
        var newId = ds.length > 0
            ? ds[ds.length - 1].id + 1
            : 1;
        var newItem = {
            ...$scope.input,
            id: newId
        };
        $scope.danhsach.push(newItem);
        $scope.onClose();
    };
    $scope.onDelete = function (deleteId) {
        var confirm = window.confirm('Ban co muon xoa khong?');
        if (confirm) {
            $scope.danhsach = $scope.danhsach.filter(function (item) {
                return item.id !== deleteId;
            })
        }
    };

    $scope.editId = 0;
    $scope.onEdit = function (editId) {
        $scope.editId = editId;
        $scope.isShowForm = true;
        // 1. Tìm kiếm phần tử theo id
        var editItem = $scope.danhsach
            .find(function(item) {
                return item.id == editId;
        });
        // 2. Hiển thị thông tin cần sửa lên form
        $scope.input = {
            name: editItem.name,
            desc: editItem.desc
        };
    };
};
