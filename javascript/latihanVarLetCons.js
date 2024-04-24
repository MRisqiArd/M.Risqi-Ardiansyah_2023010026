// Program menggunakan var
var nilaiVar = 10;
function tambahVar() {
    var nilaiVar = 5;
    console.log("Nilai di dalam fungsi (var):", nilaiVar);
}
tambahVar();
console.log("Nilai di luar fungsi (var):", nilaiVar);
