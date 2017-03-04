$('.ui-btn__reset').click(function() {
    $(":input").val('');
});
$('.ui-btn__calculator').click(function() {
    function isNull() {
        var flag = true;
        if ($('#now_age').val() == '') flag = false;
        if ($('#retirement_age').val() == '') flag = false;
        if ($('#average_inflation').val() == '') flag = false;
        if ($('#month_avg_wage').val() == '') flag = false;
        if ($('#annual_interest').val() == '') flag = false;
        if ($('#next_annual_interest').val() == '') flag = false;
        if ($('#pension_annual_interest').val() == '') flag = false;
        if ($('#expected_retirement_age').val() == '') flag = false;
        return flag;
    }
    if (!isNull()) {
        alert('请将数据填写完整');
        return false;
    }
    if ($('#now_age').val() <= 0 || $('#now_age').val() >= 99) {
        alert("请输入正确的年龄");
    }
    var N1 = Number($('#now_age').val());
    var N2 = Number($('#retirement_age').val());
    var E = Number($('#average_inflation').val());
    var M = Number($('#month_avg_wage').val());
    var H = Number($('#annual_interest').val());
    var P = Number($('#next_annual_interest').val());
    var D = Number($('#pension_annual_interest').val());
    var A = N2 - N1;
    var C = M * Math.pow((1 + 0.01 * E), A) * 12;
    var B = Number($('#expected_retirement_age').val());
    var F = f(1) + C;

    function f(my_year) {
        if (my_year == B - 1) //第B年
            return C * Math.pow((1 + 0.01 * E), my_year) / (1 + 0.01 * D);
        else
            return (f(my_year + 1) + C * Math.pow((1 + 0.01 * E), my_year)) / (1 + 0.01 * D);
    }
    var temp = 1 + 0.01 * H;
    var sum = 0;
    for (var i = 1; i <= A; i++)
        sum += Math.pow(temp, i);
    var K = F / sum;
    var Y = F / Math.pow((1 + 0.01 * P), A);
    var output = "</br>&nbsp;假设年均通胀率为 " + Math.round(E) + "%，您" + N2 + "岁退休时，</br>&nbsp;满足理想退休生活每月所需为 " + Math.round(C / 12) + " 元。</br>" + "&nbsp假设退休时您已准备的退休金总额以年复利" + Math.round(D) + "%增长，为保证理想退休生活，每年退休金以 " + Math.round(E) + "%年复利增长（抵御" + Math.round(E) + "%通胀率）——</br>&nbsp则满足您" + Math.round(B) + "年理想退休生活，所需退休金总额为" + Math.round(F) + "元。</br></br>&nbsp;为实现理想退休生活，您需要从现在起：</br>●&nbsp;方案一：每年投资" + Math.round(K) + "元，投资" + Math.round(A) + "年。</br>&nbsp;（假设平均年复利为" + Math.round(H) + "%）</br>●&nbsp方案二：一次性准备" + Math.round(Y) + "元，投资" + Math.round(A) + "年。</br>&nbsp（假设平均年复利" + Math.round(P) + "%）";
    var isResult = document.getElementById("isResult");
    isResult.innerHTML = output;
    var notResult = document.getElementById("notResult");
    notResult.innerHTML = "";
});
