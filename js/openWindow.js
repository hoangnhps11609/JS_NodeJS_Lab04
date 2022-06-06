let windowId

function openWindow(){
    let options;

    let ua = navigator.userAgent;
    if(ua.indexOf('Trident')){
        options = 'menubar=yes, toolbar=yes, width=100, height=100'
    }else{
        options = 'menubar=yes, toolbar=yes, width=150, height=150'
    }

    windowId = window.open('http://google.com', 'Tiem kiem', options);
}

function closeWindow(){
    if(windowId){
        windowId.close()
        alert('Đã đóng cửa sổ')
    }else{
        alert('Cửa sổ chưa dc mở')
    }
}

function checkWindowClosed(){
    if(windowId.closed){
        alert('Đã đóng cửa sổ')
    }else{
        alert('Cửa sổ đang mở')
    }
}