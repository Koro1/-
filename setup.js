(function (global) {
    //debug();
    //Creating our presentation and global namespace "app"
    global.app = new Presentation({
        type: 'json',
        wrapSlides: true
    });
    // Initiate modules
    app.scroller = new Slidescroller();
    app.loader = new Loader({
        delay: 1600,
        type: "text",
        text: "加载中"
    });
    app.slidePopup = new SlidePopup('slidePopup', 'popupCloseBtn');
    app.menu.setCollectionList(["play", "da1", "da2", "scenario1", "scenario2",
        "story1", "story2", "story3", "story4", "story500", "story66" ,"story77" ,"story80" ,"story90" ,"story100"]);
    // Initialize presentation
    //
    //app.init("play", "home");
    app.init("start");
    app.overlay = new Overlay();
    app.navigationToolbar.init();
    //	app.analytics.init({
    //		version: '1.0'
    //	});
})(window);


var customEvent = function (category, categoryId, label, labelId, value, valueId, valueType) {
    var vt = valueType || 'text';
    ag.submit.event({
        unique: false,
        category: 'questionResponse',
        categoryId: 'questionResponse',
        valueType: vt,
        value: value,
        valueId: valueId,
        label: "CN.ce." + label,
        labelId: "CN.ce." + labelId,
        path: app.getPath()
    });
}
var uniqueCustomEvent = function (category, categoryId, label, labelId, value, valueId, valueType) {
    var vt = valueType || 'text';
    ag.submit.event({
        unique: true,
        category: 'questionResponse',
        categoryId: 'questionResponse',
        valueType: vt,
        value: value,
        valueId: valueId,
        label: "CN.uce." + label,
        labelId: "CN.uce." + labelId,
        path: app.getPath()
    });
}

// Prevent vertical bouncing of slides
document.ontouchmove = function (e) {
    e.preventDefault();
};
var pdfs = [['1|2010|2010年版中国2型糖尿病防治指南',
'2|2005|2005年IDF全球指南',
'3|2006|2006年EASD-ADA专家共识',
'4|2007|2007年IDF 2型糖尿病预防指南',
'5|2008|2008年ACE-AACE糖尿病前期治疗共识',
'6|Blood glucose guide|2007年版IDF餐后血糖管理指南',
'7|Lancet. 2002 Jun 15|Chiasson JL, et al. Lancet. 2002 Jun 15;359(9323):2072-7.',
'8|Clin Ther. 2010 Aug|Koyasu M, et al. Clin Ther. 2010 Aug;32(9):1610-7.',
'9|Eur J Clin Invest. 1994 Aug|Lefebvre PJ, et al. Eur J Clin Invest. 1994 Aug;24 Suppl 3:40-4.',
'10|JAMA. 2003 Jul 23|Chiasson JL, et al. JAMA. 2003 Jul 23;290(4):486-94.',
'11|Eur Heart J. 2004 Jan|Hanefeld M, et al. Eur Heart J. 2004 Jan;25(1):10-6.',
'12|Glucophage500mg|格华止®盐酸二甲双胍片说明书',
'13|N Engl J Med. 2010 Apr 22|NAVIGATOR Study Group. N Engl J Med. 2010 Apr 22;362(16):1463-76.',

'14|N Engl J Med. 2008 Jun 12|ADVANCE Collaborative Group. N Engl J Med. 2008 Jun 12;358(24):2560-72.',
'15|Diabetes Res Clin Pract. 2000 Sep|Halimi S, et al. Diabetes Res Clin Pract. 2000 Sep;50(1):49-56.',
'16|Curr Med Res Opin. 2001|Salman S, et al. Curr Med Res Opin. 2001;16(4):296-306.',
'17|Lancet. 1998 Sep 12|UKPDS Group. Lancet. 1998 Sep 12;352(9131):854-65.',
'18|Diabetes Nutr Metab. 2002 Jun|Rosak C, et al. Diabetes Nutr Metab. 2002 Jun;15(3):143-51.',
'19|International Journal of Endocrinology and metabolism2009|冯凭. 国际内分泌代谢杂志. 2009;29(2):77-81.',
'20|J Atheroscler Thromb. 2008 Jun|Oyama T, et al. J Atheroscler Thromb. 2008 Jun;15(3):154-9.',
'21|Cardiovasc Diabetol. 2010 Mar 24|Kato T, et al. Cardiovasc Diabetol. 2010 Mar 24;9:12.',
'22|Lancet. 2005 Oct 8|PROactive investigators. Lancet. 2005 Oct 8;366(9493):1279-89.',
'23|J Natl Cancer Inst. 2012 Sep 19|Mamtani R, et al. J Natl Cancer Inst. 2012 Sep 19;104(18):1411-21.',
'24|Am J Ophthalmol. 2009 Apr|Fong DS, et al. Am J Ophthalmol. 2009 Apr;147(4):583-586.e1.',

'25|Standards of Medical Care in Diabetes-2010. Diabetes Care. 2010 Jan|ADA. Standards of Medical Care in Diabetes—2010. Diabetes Care. 2010 Jan;33 Suppl 1:S11-61.',
'26|Expert consensus of HbA1C control target for Chineses adult with type 2 diabetes 2011|中国成人2型糖尿病HbA1c控制目标的专家共识.中华内分泌代谢杂志.2011,27(5):371-374',
'27|Chin Med J (Engl). 2011 Jan|Su JB, et al. Chin Med J (Engl). 2011 Jan;124(1):144-7.',
'28|Chinese Journal of Endocrinology and metabolism 2009|马艳荣等. 中华内分泌代谢杂志. 2009;25(5):512-4.',
'29|Diabetes Care. 1995 Jul|Coniff RF, et al. Diabetes Care. 1995 Jul;18(7):928-32.',
'30|Diabetes Obes Metab. 2007 Nov|Schnell O, et al. Diabetes Obes Metab. 2007 Nov;9(6):853-8.',
'31|Lancet. 1998 Sep 12 837-53|UKPDS Group. Lancet. 1998 Sep 12;352(9131):837-53.',

'32|CHINESE JOURNAL OF INTERNAL MEDICINE 2012|心血管内科糖代谢异常早期筛查及管理专家共识. 中华内科杂志. 2012;51(7):574-8.',
'33|Eur Heart J. 2004 Nov|Bartnik M, et al. Eur Heart J. 2004 Nov;25(21):1880-90.',
'34|Eur Heart J. 2006 Nov|Hu DY, et al. Eur Heart J. 2006 Nov;27(21):2573-9.',
'35|Diabetologia. 2004 Mar|Nakagami T. Diabetologia. 2004 Mar;47(3):385-94.',
'36|Diabetes Care. 2009 Jan|ADA/EASD. Diabetes Care. 2009 Jan;32(1):193-203.',
'37|Clin Drug Invest 2007|Pan CY, et al. Clin Drug Invest 2007;27(6):397-405.',
'38|Diabetes Complications. 2011|Lin SD, et al. J Diabetes Complications. 2011 Sep-Oct;25(5):332-8.'
]];
function setupPDF(flow, num) {
    if (flow >= 0) {
        $(".literature-show").show();
        $("#literature-shadow").attr("class", "literature-shadow");
        var arr = "";
        for (var i = 0; i < num.length; i++) {
            var infos = pdfs[flow][num[i]].split('|');
            arr += "<li><a data-ag-editable=\"" + infos[2] + "\"><span>" + infos[0] + ".</span> " + infos[2] + "</a></li>"; //data-pdf=\"" + infos[1] + ".pdf\" 
        }
        $("#literature-shadow .wrapper ul").html(arr);
    }
    else {
        $(".literature-show").hide();
        $("#literature-shadow").attr("class", "literature-shadow");
    }
}
$(".literature-show").live("click touchstart", function () {
    $('#literature-shadow').addClass('show-refs');
    var aobj = $('#literature-shadow').find("a");
    aobj.each(function (index) {
        // console.log('input %d is: %o', index, this)
        this.addEventListener("click", function () {
            var pdf = $(this).attr('data-pdf'),
            pdfFullName = $(this).attr('data-ag-editable');
            console.log(pdf);
            if (pdf) {
                ag.openPDF('content/pdf/' + pdf, pdfFullName);
            }
        });
    });
})
$('.literature-close').live("click touchstart", function () { $(this).parent().removeClass('show-refs') });
