$('.ui-btn__reset').click(function() {
    $(":input").val('');
});
$('.ui-btn__calculator').click(function() {
    function isNull() {
        var flag = true;
        if ($('#child-age').val() == '' || $('#years').val() == '' || $('#average_cost').val() == '' || $('#expected_annual_return').val() == '') flag = false;
        return flag;
    }
    if (!isNull()) {
        alert('请将数据填写完整');
        return false;
    }
    if ($('#child-age').val() <= 0 || $('#child-age').val() >= 99) {
        alert("请输入正确的年龄");
    }
    var A = Number($('#child-age').val());
    var B = Number($('#years').val());
    var average_cost = Number($('#average_cost').val());
    var M = Number($('#expected_annual_return').val());
    var C = average_cost * Math.pow((1 + 0.01 * 5), B);
    var temp = 1 + 0.01 * M;
    var sum = 0;
    for (var i = 1; i <= B; i++)
        sum += Math.pow(temp, i);
    var F = C / sum;
    var H = C / Math.pow(1 + 0.01 * M, B);
    var t = Math.round(B);
    var output = "按5%的学费增长率预期，" + Math.round(B) + "年后您的子女上大学时，需要的大学教育金总额为" + Math.round(C) + "元。</br></br>&nbsp假设预期年均回报率为" + Math.round(M) + "%，为准备充足的大学教育金，&nbsp您需要从现在起到第" + Math.round(B) + "年，</br>●&nbsp方案一：每年定额投资" + Math.round(F) + "元。</br>●&nbsp方案二：一次性投资" + Math.round(H) + "元。";
    var isResult = document.getElementById("isResult");
    isResult.innerHTML = output;
    var notResult = document.getElementById("notResult");
    notResult.innerHTML = "";
});
