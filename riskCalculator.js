$('.ui-btn__reset').click(function() {
    $(":input").val('');
});
$('.ui-btn__calculator').click(function() {
    function isNull() {
        var flag = true;
        if($(":input").val() == '') flag = false;
        return flag;
    }
    if (!isNull()) {
        alert('请将数据填写完整');
        return false;
    }
    var A = Number($('#total_spending').val());
    var B = Number($('#living_expenses').val());
    var C = Number($('#safeguard_years').val());
    var Q = Number($('#annual_interest').val());
    var D = Number($('#housing_mortgage').val());
    var E = Number($('#borrowing').val());
    var F = Number($('#education_foundation').val());
    var H1 = Number($('#personal_life_insurance').val());
    var H2 = Number($('#group_life_insurance').val());
    var H3 = Number($('#property_investment').val());
    var H4 = Number($('#fund').val());
    var H5 = Number($('#savings').val());
    var H6 = Number($('#other_assets').val());
    var K1 = Number($('#medical_treatment_cost').val());
    var K2 = Number($('#maintenance').val());
    var K3 = Number($('#delays_loss').val());

    var M1 = 0;
    for (var i = 0; i < C; ++i)
        M1 += B * 12 * Math.pow(1 + 0.01 * Q, i);
    var M2 = D + E;
    var M3 = H1 + H2 + H3 + H4 + H5 + H6;
    var Y1 = M1 + M2 - M3 + F;
    var Y2 = K1 + K2 + K3;
    var output = "</br>&nbsp&#8730; 假设年均通胀率为" + Math.round(Q) + "%，若个人发生人身风险，应对家庭未来生活支出的资金准备为" + Math.round(M1) + "元，按揭和借贷为" + M2 + "元，预估需准备子女教育金为" + Math.round(F) + "元</br>&nbsp&#8730; 个人已拥有保障和应对风险愿意套现的资产为" + Math.round(M3) + "元</br>&nbsp&#8730; 发生重大疾病风险，预估医疗费自费支出" + Math.round(K1) + "元，养护及营养费" + Math.round(K2) + "元，误工损失" + Math.round(K3) + "元</br></br>为了应对风险给家庭带来的影响</br>&nbsp●&nbsp您所需的家庭保障额度约为" + (Y1 / 10000).toFixed(1) + "万元</br>&nbsp●&nbsp您所需的重大疾病保障额度约为" + (Y2 / 10000).toFixed(1) + "万元";
    var isResult = document.getElementById("isResult");
    isResult.innerHTML = output;
    var notResult = document.getElementById("notResult");
    notResult.innerHTML = "";
});
