$('.ui-btn__reset').click(function() {
    $(":input").val('');
});
$('.ui-btn__calculator').click(function() {
    function isNull() {
        var flag = true;
        if ($('#years').val() == '') flag = false;
        return flag;
    }
    if (!isNull()) {
        alert('请将数据填写完整');
        return false;
    }
    var T1 = Number($('#T1').val());
    var T2 = Number($('#T2').val());
    var T3 = Number($('#T3').val());
    var T4 = Number($('#T4').val());
    var T5 = Number($('#T5').val());
    var C1 = Number($('#C1').val());
    var C2 = Number($('#C2').val());
    var C3 = Number($('#C3').val());
    var C4 = Number($('#C4').val());
    var C5 = Number($('#C5').val());
    var M = $('#years').val();
    var T = T1 + T2 + T3 + T4 + T5;
    var C = 0.01 * (T1 * C1 + T2 * C2 + T3 * C3 + T4 * C4 + T5 * C5) / T;
    var A = T * Math.pow((1 + C), M);
    C = C * 100;
    var output = "&nbsp&nbsp您现有的资产总值为" + Math.round(T) + "元。</br>&nbsp&nbsp资产年平均收益率为" + Math.round(C * 10) / 10.0 + "%</br>&nbsp&nbsp" + Math.round(M) + "年后，资产总值将增值至" + Math.round(A) + "元。";
    var isResult = document.getElementById("isResult");
    isResult.innerHTML = output;
    var notResult = document.getElementById("notResult");
    notResult.innerHTML = "";
});
