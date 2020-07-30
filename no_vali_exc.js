function validate(x) {
				var alphaDigit= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
				var alphaDigit_domain= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.@"
				var double_dat=".."

				//아이디의 입력 타당성 검사
    				if (x.my_id.value=="") {
    					alert("ID를 입력해 주세요.");
    					x.my_id.focus();
    					return; 
    				}
    				if (x.my_id.value.length < 4 || x.my_id.value.length > 12){
    					alert("ID는 4~12자 이내여야 합니다.");
    					x.my_id.focus();
    					return;
    				}
    				if (x.my_id.value.indexOf(" ") >= 0) {
    					alert("ID에는 공백이 들어가면 안됩니다.");
    					x.my_id.focus();
    					return;
    				}
    				for (i=0; i<x.my_id.value.length; i++) {
      					if (alphaDigit.indexOf(x.my_id.value.substring(i, i+1)) == -1) {
      						alert("ID는 영문과 숫자의 조합만 사용할 수 있습니다.");
      						x.my_id.focus();
      						return;
      					}
    				}

				// 비밀번호의  타당성 검사
    				if (x.my_pwd.value=="") {
    					alert("비밀번호를 입력하셔야 합니다.")
    					x.my_pwd.focus();
    					return;
    				}
				if (x.my_pwd.value.length < 4 || x.my_pwd.value.length > 12) {
    					alert("비밀번호는 4~12자 이내여야 합니다.");
    					x.my_pwd.value="";
    					x.my_pwd.focus();
    					return;
    				}
				if (x.my_pwd_ok.value==""){
    					alert("비밀번호를 확인 입력해 주셔야 합니다.")
    					x.my_pwd_ok.focus();
    					return;
    				}
				if (x.my_pwd.value != x.my_pwd_ok.value) {
    					alert("비밀번호가 서로 일치하지 않습니다.");
    					x.my_pwd.value=x.my_pwd_ok.value="";
    					x.my_pwd.focus();
    					return;
    				} 
				if (x.my_pwd.value.indexOf(" ") >= 0) {
    					alert("비밀번호에는 공백이 들어가면 안됩니다.");
    					x.my_pwd.value=x.my_pwd_ok.value="";
    					x.my_pwd.focus();
    					return;
    				}
				for (i=0; i<x.my_pwd.value.length; i++) {
      					if (alphaDigit.indexOf(x.my_pwd.value.substring(i, i+1)) < 0) {
      						alert("비밀번호는 영문과 숫자의 조합만 사용할 수 있습니다.");
     						x.my_pwd.value=x.my_pwd_ok.value="";
      						x.my_pwd.focus();
      						return;
      					} 
    				}
				// 이메일의 타당성 검사
				var mail = document.getElementById("my_mail");
				var mail_count = 0;
				var mail_count_id = 0;
				var mail_count_domain = 0;
				var mail_txt = mail.value;
				if ( mail_txt == "" )
				{
					alert("메일 주소를 입력하세요.");
				}
				for(var i=0; i < mail_txt.length;i++)
				{
					if(mail_txt[i] == "@")
					{
						break;
					}
					mail_count_id++;
				}
				for(var i=0; i < mail_txt.length;i++) 
				{ 
					if(mail_txt[i] == "@")
					{
						mail_count++;
					}
				}
				if(mail_count == 1)
				{
					alert(mail_count_id);
					if(mail_txt[0] == "@")
					{	
						alert("이메일 아이디를 입력하세요.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if(mail_txt[mail_txt.length - 1] == "@")
					{	
						alert("이메일 도메인을 입력하세요.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					for(var i=0; i < mail_txt.length;i++)
					{
						if(mail_txt[i] == ".")
						{
							mail_count_domain++;
						}
					}
					if(mail_count_domain == 2 || mail_count_domain == 1)
					{ 
					}
					else
					{
						alert("이메일 형식이 아닙니다.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if(mail_txt[mail_txt.length - 1] == ".")
					{	
						alert("이메일 도메인을 입력하세요.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if (x.my_mail.value.indexOf(" ") >= 0) {
    						alert("이메일 ID에는 공백이 들어가면 안됩니다.");
    						x.my_mail.focus();
    						return;
    					}
    					for (i=0; i < mail_count_id; i++) {
      						if (alphaDigit.indexOf(x.my_mail.value.substring(i, i+1)) == -1) {
      							alert("이메일 ID는 영문과 숫자의 조합만 사용할 수 있습니다.");
      							x.my_mail.focus();
      							return;
      						}
    					}
					var j = "";
					for(i = mail_count_id + 1; i < mail_txt.length; i++)
					{
						if(i == (mail_count_id+1) && mail_txt[i] == ".")
						{
							alert("도메인 형식이 틀렸습니다.");
      							x.my_mail.focus();
							x.my_mail.value = "";
							return;
						}	
						if (alphaDigit_domain.indexOf(x.my_mail.value.substring(i, i+1)) == -1) {
      							alert("이메일 도메인은 영어만 가능합니다.");
      							x.my_mail.focus();
      							return;
      						}
					}
					for(i = mail_count_id + 1; i < mail_txt.length; i++)
					{ if(mail_txt[i] == mail_txt[i-1]) { if(mail_txt[i] == ".")
						{alert(".은 연속으로 사용 불가능합니다.");
      						x.my_mail.focus();
      						return;
						
					} } }
				}
				else
				{
					alert("이메일 형식이 아닙니다.");
					x.my_mail.focus();
					x.my_mail.value = "";
				}
				// 이름 타당성 검사
    				if (x.my_name.value=="") {
    					alert("이름을 입력해주세요")
    					x.my_name.focus();
    					return;
    				}
				
			}
