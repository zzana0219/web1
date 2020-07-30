function regck1() {
   var reg_2 = document.getElementById(my_reg_2).value;
   if(reg_2 != ){
      regck();
   }
}
function regck() {
   var date = new Date();
   var reg = document.getElementById(my_reg).value;
   var reg_2 = document.getElementById(my_reg_2).value;
   var reggender = reg_2.substring(0,1)
   var regyear = reg.substring(0,2);
   var regmonth = reg.substring(2,4);
   var regday = reg.substring(4,6);
   var realyear = date.getFullYear();
   var realmonth = date.getMonth() + 1;  
   var realdate = date.getDate();
   if(realdate10){
      realdate = 0+realdate;
   }
   if(realmonth10){
      realmonth = 0+realmonth;
   }
   if(reg.length != 6  reg_2.length != 7){
      alert(주민번호 앞자리는 6글자,뒷자리는 7글자입니다.);
      regclear();
      return 0;
   }
   
   if(regmonth1  regmonth13  regday1  regday31){
      alert(월은 1-12월, 날짜는 1-31일 인지 체크해주세요);
      regclear();
      return 0;
   }
   
   if(isNaN(reg)  isNaN(reg_2)){
      alert(숫자만 입력해주세요);
      regclear();
      return 0;
   }
   
   if(isKorJumin(reg,reg_2) != true){
      alert(주민번호 유효성이 적합하지 않습니다.)
      regclear();
      return 0;
   }
   
   if(reggender == 1  reggender == 2){
      regyear = 19 + reg.substring(0,2);
   }else if(reggender == 3  reggender == 4){
      regyear = 20 + reg.substring(0,2);
   }else{
      alert(뒷자리 첫번째숫자는 1-4까지만 허용됩니다)
      regclear();
      return 0;
   }
   if(parseInt(regyear+regmonth+regday) = parseInt(realyear++realmonth+realdate)){
      alert(오늘날짜 또는 미래의 날짜는 입력할 수 없습니다.);
      regclear();
      return 0;
   }
   
   document.getElementById(my_year).value = regyear;
   document.getElementById(my_month).value = regmonth;
   document.getElementById(my_day).value = regday;
}
function isKorJumin(reg, reg_2) { 
   var n = 2;
   var sum = 0;
   for (var i = 0; i  reg.length; i++) {
      sum += parseInt(reg.substr(i, 1))  n++; 
      } 
   for (var i = 0; i  reg_2.length - 1; i++) {
      sum += parseInt(reg_2.substr(i, 1))  n++; if (n == 10) { n = 2; } 
      } 
   var checkSum = 11 - sum % 11; 
   if (checkSum == 11) { checkSum = 1; } 
   if (checkSum == 10) { checkSum = 0; } 
   if (checkSum != parseInt(reg_2.substr(6, 1))) {
      return false; 
      } 
   return true;
   }

function regclear(){
   document.getElementById(my_year).value = ;
   document.getElementById(my_month).value = ;
   document.getElementById(my_day).value = ;
   document.getElementById(my_reg).value = ;
   document.getElementById(my_reg_2).value = ;
   document.getElementById(my_reg).focus();
}