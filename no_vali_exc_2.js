function regck1() {
   var reg_2 = document.getElementById("my_reg_2").value;
   if(reg_2 != ""){
      regck();
   }
}
function regck() {
   var date = new Date();
   var reg = document.getElementById("my_reg").value;
   var reg_2 = document.getElementById("my_reg_2").value;
   var reggender = reg_2.substring(0,1)
   var regyear = reg.substring(0,2);
   var regmonth = reg.substring(2,4);
   var regday = reg.substring(4,6);
   var realyear = date.getFullYear();
   var realmonth = date.getMonth() + 1;  
   var realdate = date.getDate();
   if(realdate<10){
      realdate = "0"+realdate;
   }
   if(realmonth<10){
      realmonth = "0"+realmonth;
   }
   if(reg.length != 6 || reg_2.length != 7){
      alert("�ֹι�ȣ ���ڸ��� 6����,���ڸ��� 7�����Դϴ�.");
      regclear();
      return 0;
   }
   
   if(regmonth<1 || regmonth>13 || regday<1 || regday>31){
      alert("���� 1-12��, ��¥�� 1-31�� ���� üũ���ּ���");
      regclear();
      return 0;
   }
   
   if(isNaN(reg) || isNaN(reg_2)){
      alert("���ڸ� �Է����ּ���");
      regclear();
      return 0;
   }
   
   if(isKorJumin(reg,reg_2) != true){
      alert("�ֹι�ȣ ��ȿ���� �������� �ʽ��ϴ�.")
      regclear();
      return 0;
   }
   
   if(reggender == 1 || reggender == 2){
      regyear = 19 + reg.substring(0,2);
   }else if(reggender == 3 || reggender == 4){
      regyear = 20 + reg.substring(0,2);
   }else{
      alert("���ڸ� ù��°���ڴ� 1-4������ ���˴ϴ�")
      regclear();
      return 0;
   }
   if(parseInt(regyear+regmonth+regday) >= parseInt(realyear+""+realmonth+realdate)){
      alert("���ó�¥ �Ǵ� �̷��� ��¥�� �Է��� �� �����ϴ�.");
      regclear();
      return 0;
   }
   
   document.getElementById("my_year").value = regyear;
   document.getElementById("my_month").value = regmonth;
   document.getElementById("my_day").value = regday;
}
function isKorJumin(reg, reg_2) { 
   var n = 2;
   var sum = 0;
   for (var i = 0; i < reg.length; i++) {
      sum += parseInt(reg.substr(i, 1)) * n++; 
      } 
   for (var i = 0; i < reg_2.length - 1; i++) {
      sum += parseInt(reg_2.substr(i, 1)) * n++; if (n == 10) { n = 2; } 
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
   document.getElementById("my_year").value = "";
   document.getElementById("my_month").value = "";
   document.getElementById("my_day").value = "";
   document.getElementById("my_reg").value = "";
   document.getElementById("my_reg_2").value = "";
   document.getElementById("my_reg").focus();
}