let student = new Object()

student.hoTen = prompt('Nhập họ tên: ')
student.dtb = prompt('Nhập diểm Tb: ')

student. hienThi = function(){
    document.writeln(`<h1>${this.hoTen}</h1>`)
    document.writeln(`<h1>${this.dtb}</h1>`)

    if(this.dtb < 5){
        document.writeln(`<h1>Rớt</h1>`)
    }else{
        document.writeln(`<h1>Đậu</h1>`)    
    }
}

student.hienThi();