function validate(x) {
				var alphaDigit= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"

				//���̵��� �Է� Ÿ�缺 �˻�
    				if (x.my_id.value=="") {
    					alert("ID�� �Է��� �ּ���.");
    					x.my_id.focus();
    					return; 
    				}
    				if (x.my_id.value.length < 4 || x.my_id.value.length > 12){
    					alert("ID�� 4~12�� �̳����� �մϴ�.");
    					x.my_id.focus();
    					return;
    				}
    				if (x.my_id.value.indexOf(" ") >= 0) {
    					alert("ID���� ������ ���� �ȵ˴ϴ�.");
    					x.my_id.focus();
    					return;
    				}
    				for (i=0; i<x.my_id.value.length; i++) {
      					if (alphaDigit.indexOf(x.my_id.value.substring(i, i+1)) == -1) {
      						alert("ID�� ������ ������ ���ո� ����� �� �ֽ��ϴ�.");
      						x.my_id.focus();
      						return;
      					}
    				}

				// ��й�ȣ��  Ÿ�缺 �˻�
    				if (x.my_pwd.value=="") {
    					alert("��й�ȣ�� �Է��ϼž� �մϴ�.")
    					x.my_pwd.focus();
    					return;
    				}
				if (x.my_pwd.value.length < 4 || x.my_pwd.value.length > 12) {
    					alert("��й�ȣ�� 4~12�� �̳����� �մϴ�.");
    					x.my_pwd.value="";
    					x.my_pwd.focus();
    					return;
    				}
				if (x.my_pwd_ok.value==""){
    					alert("��й�ȣ�� Ȯ�� �Է��� �ּž� �մϴ�.")
    					x.my_pwd_ok.focus();
    					return;
    				}
				if (x.my_pwd.value != x.my_pwd_ok.value) {
    					alert("��й�ȣ�� ���� ��ġ���� �ʽ��ϴ�.");
    					x.my_pwd.value=x.my_pwd_ok.value="";
    					x.my_pwd.focus();
    					return;
    				} 
				if (x.my_pwd.value.indexOf(" ") >= 0) {
    					alert("��й�ȣ���� ������ ���� �ȵ˴ϴ�.");
    					x.my_pwd.value=x.my_pwd_ok.value="";
    					x.my_pwd.focus();
    					return;
    				}
				for (i=0; i<x.my_pwd.value.length; i++) {
      					if (alphaDigit.indexOf(x.my_pwd.value.substring(i, i+1)) < 0) {
      						alert("��й�ȣ�� ������ ������ ���ո� ����� �� �ֽ��ϴ�.");
     						x.my_pwd.value=x.my_pwd_ok.value="";
      						x.my_pwd.focus();
      						return;
      					} 
    				}
				// �̸����� Ÿ�缺 �˻�
				var mail = document.getElementById("my_mail");
				var mail_count = 0;
				var mail_count_id = 0;
				var mail_count_domain = 0;
				var mail_txt = mail.value;
				if ( mail_txt == "" )
				{
					alert("���� �ּҸ� �Է��ϼ���.");
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
						alert("�̸��� ���̵� �Է��ϼ���.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if(mail_txt[mail_txt.length - 1] == "@")
					{	
						alert("�̸��� �������� �Է��ϼ���.");
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
						alert("�̸��� ������ �ƴմϴ�.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if(mail_txt[mail_txt.length - 1] == ".")
					{	
						alert("�̸��� �������� �Է��ϼ���.");
						x.my_mail.focus();
						x.my_mail.value = "";
					}
					if (x.my_mail.value.indexOf(" ") >= 0) {
    						alert("�̸��� ID���� ������ ���� �ȵ˴ϴ�.");
    						x.my_mail.focus();
    						return;
    					}
    					for (i=0; i < mail_count_id; i++) {
      						if (alphaDigit.indexOf(x.my_mail.value.substring(i, i+1)) == -1) {
      							alert("�̸��� ID�� ������ ������ ���ո� ����� �� �ֽ��ϴ�.");
      							x.my_mail.focus();
      							return;
      						}
    					}
				}
				else
				{
					alert("�̸��� ������ �ƴմϴ�.");
					x.my_mail.focus();
					x.my_mail.value = "";
				}
				// �̸� Ÿ�缺 �˻�
    				if (x.my_name.value=="") {
    					alert("�̸��� �Է����ּ���")
    					x.my_name.focus();
    					return;
    				}
				
			}