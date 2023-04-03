
// var formEl = document.forms.BookPackageForm;
// var formData = new FormData(formEl);

// const formJSON = Object.fromEntries(formData.entries());

// render data json
function changeTreeObject2Object(data, json) {
	result = {};
	for (const property in json) {
    if ("object" === typeof json[property]) {
    	var rs = changeTreeObject2Object(result, json[property]);
      result = rs.data;
      for (const p in rs.result) {
      	result[property + "_" + p] = rs.result[p];
      }
    } else {
    	result[property] = json[property];
    }
  }
  var finalResult = {
  	data: data,
    result: result
  }
	return finalResult;
}

function importData(json) {
    for (const property in json) {
          let elements = document.getElementsByName(property);
      if (elements[0]) {
          if (elements[0].matches('[type="checkbox"]')) {
            elements[0].checked =  json[property];
        }else if (elements[0].matches('[type="radio"]')) {
            elements[0].checked =  json[property];
        }else {
          elements[0].value = json[property];
        }
      }
    }
  }
function exportChildObject(object) {
	let result = {};
	for (const property in object) {
  	if (property.includes("_")) {
    	let strArr = property.split("_");
      let key = strArr[0];
      let childJson = {};
      for (const p in object) {
      	if (0 === p.indexOf(key + "_")) {
        	childJson[p.replace(key + '_','')] = object[p];
        }
      }
     	result[key] = exportChildObject(childJson);
    }else {
    	result[property] = object[property];
    }
  }
	return result;
}
function exportData(formId) {
	var result = {};
  var formEl = document.forms[formId];
  const formData = new FormData(formEl);
  const value = Object.fromEntries(formData.entries());
    console.log(1, formEl);
  console.log(value);
  var result = exportChildObject(value);
	return result;
}

var json = {
    "benhVien": "Đa Khoa Sài Gòn",
    "khoa": "tai mũi họng",
    "buong": 105,
    "soVaoVien": 25,
    'soLuuTru': 10236,
    "maYT": 215636,
    "chuKy": {
        "ngay": 5,
        "thang":2,
        "nam": 2022
    },
    "phanChung": {
      "hanhChinh": {
        "hoVaTen": "Nguyen Van A",
        "ngayThangNamSinh": {1: "1",
    2:"0",
3:"0",
4:"2",
5:"2",
6:"0",
7:"0",
8:"0"},
        "tuoi": 23,
        "tuoi1": 2,
        "tuoi2": 3,
        "gioi": {
          "nam": true,
          "nu": false
        },
        "ngheNghiep": "sinh vien",
        "danToc": "kinh",
        "quocTich": "VN",
        "diaChiHienTai": {
          "soNha": 20,
          "thon": 2,
          "phuong": 10,
          "huyen": "Di Linh",
          "tinh": "Lâm Đồng"
        },
        "noiLamViec": "Lâm Đồng",
        "doiTuong": {"BHYT": true,
        "thuPhi": false,
        "mien": false,
        "khac": false},
        "BHYTGiaTriTu": {
          "ngay": 20,
          "thang": 12,
          "nam": 2020
        },
        "hoTenDiaChiNguoiNha": "Nguyễn Thị Mầu, 265 thôn 2 phường 10 Lâm Đồng",
        "soDienThoai": 123456789
      },
      "quanLyBenhNhan": {
        "vaoVien": {
          "ngay": "5",
          "gio": "10",
          "phut": "30"
        },
        "trucTiepVaoKhoaKhamBenh": 5,
        "noiGioiThieu": {
          "coQuanYTe": true,
          "tuDen": false,
          "khac": false
        },
        "vaoKhoa": "5/2",
        "chuyenVien": {
          "tuyenTren": true,
          "tuyenDuoi": false,
          "CK": false
        },
        "ngayRaVien": {
          "ngay": 10,
          "gio": 10,
          "phut": 30
        },
        "raVien": {
          "coQuanYTe": true,
          "tronVien": false,
          "xinRaVien": false
        },
        "tongSoNgayDieuTri": 1
      },
      "chanDoan": {
        "chanDoanTheoYHHD": {
          "noiChuyenDen": "tp.HCM",
          "khoaKhamBenh": {
            "benhChinh": "viem hong",
            "benhKemTheo": "sốt",
            "thuThuat": 0
          },
          "raVien": {
            "benhChinh": "viem hong",
            "benhKemTheo": "sốt",
            "taiBien": 0,
            "bienChung": 0
          }
        },
        "chanDoanTheoYHCT": {
          "noiChuyenDen": "tp.HCM",
          "khoaKhamBenh": {
            "benhChinh": "viem hong",
            "benhKemTheo": "mất nước",
            "thuThuat": 0
          },
          "raVien": {
            "benhChinh": "viem hong",
            "benhKemTheo": "mất nước",
            "taiBien": 0,
            "bienChung": 0
          }
        },
       
      },
      "chanDoanTinhTrang": {
        "khoi": true,
        "do": false,
        "khongThayDoi": false,
        "nangHon": false,
        "tuVong": false
      } },
    
    "benhAn": {
      "yHocHienDai": {
        "lyDoVaoVien": "viem sung vom hong",
        "benhSu": "binh thuong",
        "tienSu": {
            "banThan": "bình thường",
            
        },
        "khamBenh": {
          "khamToanThan": "binh thuong",
          "khamBoPhan": {
            "tuanHoan": "binh thuong",
            "hoHap": "viêm sưng ",
            "tieuHoa": "binh thuong",
            "tietNieuSinhDuc": "binh thuong",
            "thanKinh": "binh thuong",
            "coXuongKhop": "binh thuong",
            "taiMuiHong": "viêm họng",
            "rangHamMat": "binh thuong",
            "mat": "binh thuong",
            "noiTiet": "binh thuong"
          }
        },
        "tomTatKetQuaLamSan": "",
        "chanDoan": {
          "benhChinh": "viêm sưng vòm họng",
          "benhKemTheo": "",
          "phanBiet": ""
        }
      },
      "yHocHCoTruyen": {},
      "dieuTri": {
        "yHocHienDai": {
          "huongDieuTri": "uống thuốc"
        },
        "yHocHCoTruyen": {
          "phuongPhapDieuTri": "",
          "phuong": {
            "phuongDuoc": "paraceltamon",
            "phuongPhapDieuTriKhongDungThuoc": "không"
          }
        },
        "duHau": {}
      }
    },
    "tongKetBenhAnRaVien": {
      "lyDoVaoVien": "viêm sưng vòm họng",
      "quaTrinhBenhLyVaDienBienLamSan": "phục hồi tốt",
      "ketQuaXetNghiemCanLamSan": "bình thường",
      "ketQuaDieuTri": 1
    },
    "phieuDieuTri":{
        "benhVien": "Đa Khoa Sài Gòn",
        "khoa": "tai mũi họng",
        "buong": 105,
        "soVaoVien": 25,
        "giuong": 12,
        "hoTenNguoiBenh": " Nguyễn Văn A",
        "tuoi": 23,
        "gioi": "nam",
        "chanDoan": "bệnh nghèo",
        "ngayGio": "20/12/2000",
        "dienBienBenh": "mỏi tay vì code quá nhiều ",
        "yLenhTriLieu": "1 chai rượu đế"
    
    }
  }

//NHẬP DATA
var jsonParsed = changeTreeObject2Object({}, json);
importData(jsonParsed.result);

//XUẤT DATA
console.log("tét");
var exportData = exportData("yHocCoTruyenForm");
console.log(exportData);
