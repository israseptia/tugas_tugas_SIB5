function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = formd.hobby.value;
    let data = `Input data
    <br> Nama : ${nama}
    <br> Pekerjaan : ${pekerjaan}
    <br> Hoby : ${hobby}
    `;
    document.getElementById('hasil').innerHTML = data;
}