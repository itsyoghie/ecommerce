$(document).ready(function(){
    //ini diisi dengan fungsi yag langsung
    //dibaca ketika web jalankan
})

function pencet() {
    var nis = $("#nis").val()
    var nis = $("#name").val()
    var nis = $("#password").val()
    var nis = $("#born").val()
    
    $.ajax({
        url: 'http;//localhost:3000/user',
        method: 'POST',
        data: {
            nis: nis,
            name: name,
            password: password,
            born: born

        }
    })
    .done(function(berhasil){
        nis.val() = ''
        alert("Anda berhasil mendaftar")

    })
    .fail(function(gagal){
        alert("Ma'af Anda Gagal Mendaftar")

    })
}