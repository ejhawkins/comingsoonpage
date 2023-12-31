jQuery(document).ready(function($) {
	var contactFormDefaults=new Array();
	contactFormDefaults['contactName']=udt_global_vars.contactFormDefaults_name;
	contactFormDefaults['contactEmail']=udt_global_vars.contactFormDefaults_email;
	contactFormDefaults['contactSubject']=udt_global_vars.contactFormDefaults_subject;
	contactFormDefaults['contactMessage']=udt_global_vars.contactFormDefaults_message;
	contactFormDefaults['msg']=$('#contact-form span#msg').html();
	
	$('#contact-form input[type="text"], #contact-form textarea').focus(function() {
		$(this).addClass('inputHighlight').removeClass('errorOutline');
		if($(this).hasClass('required')) {
			$('#contact-form span#msg').html(udt_global_vars.contact_form_required_fields_label_ajax).removeClass('errorMsg successMsg');
		} else {
			$('#contact-form span#msg').html(contactFormDefaults['msg']).removeClass('errorMsg successMsg');
		}
		if($(this).val()==contactFormDefaults[$(this).attr('id')]) {
			$(this).val('');
		}
	});
	$('#contact-form input[type="text"], #contact-form textarea').blur(function() {
		$(this).removeClass('inputHighlight');
		$('#contact-form span#msg').html(contactFormDefaults['msg']).removeClass('errorMsg successMsg');
		if($(this).val()=='') {
			$(this).val(contactFormDefaults[$(this).attr('id')]);
		}
	});
	
	$('#contact-form input[type="text"], #contact-form textarea').hover(function() {
			$(this).addClass('inputHighlight');
		},
		function() {	
			$(this).not(':focus').removeClass('inputHighlight');
		}
	);
	
	$('#contact-form').submit(function() {
		$('#contact-form .submit').attr("disabled", "disabled");
		$('#msg').html('<span class="loading-animation"></span>').removeClass('errorMsg successMsg');
		var isError=false;
		$('#contact-form input, #contact-form textarea').each(function() {
			if($(this).hasClass('required') && ($.trim($(this).val())==contactFormDefaults[$(this).attr('id')] || $.trim($(this).val())=='')) {
				$(this).addClass('errorOutline');
				$('#msg').html(udt_global_vars.contact_form_warning).addClass('errorMsg');
				isError=true;
			}
			if($(this).attr('id')=='contactEmail') {
				var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				if(reg.test($(this).val())==false) {
					$(this).addClass('errorOutline');
					if(!isError) {
						$('#msg').html(udt_global_vars.contact_form_email_warning).addClass('errorMsg');
					}
					isError=true;
				}
			}
		});
		if(isError) {
			$('#contact-form .submit').removeAttr("disabled");
			return false;
		} else {
			var name = $('#contactName').val(), email = $('#contactEmail').val(), subject = $('#contactSubject').val(), message = $('#contactMessage').val();
			$.ajaxSetup ({
				cache: false
			});
			var dataString = 'contactName='+ name + '&contactEmail=' + email + '&contactSubject=' + subject + '&contactMessage=' + message + '&submitted=true&udt_contact_honeypot=&ajax=1';
			$.ajax({
				type: "POST",
				url: $('#contact-form').attr('action'),
				data: dataString,
				success: function(msg) {
					// Check to see if the mail was successfully sent
					if(msg=='Mail sent') {
						// Update the progress bar
						$('#msg').html(udt_global_vars.contact_form_success_message).addClass('successMsg');
						// Reset the subject field and message textbox
						if(contactFormDefaults['contactSubject']) {
							$('#contactSubject').val(contactFormDefaults['contactSubject']);
						} else {
							$('#contactSubject').val('');
						}
						if(contactFormDefaults['contactMessage']) {
							$('#contactMessage').val(contactFormDefaults['contactMessage']);
						} else {
							$('#contactMessage').val('');
						}
					} else {
						$('#msg').html(udt_global_vars.contact_form_error).addClass('errorMsg');
						$('#contact-form .submit').attr("disabled", "");
					}
					// Activate the submit button
					$('#contact-form .submit').removeAttr("disabled");
				},
				error: function(ob,errStr) {
					$('#msg').html(udt_global_vars.contact_form_error).addClass('errorMsg');
					//Activate the submit button
					$('#contact-form .submit').removeAttr("disabled");
				}
			});
			return false;
		}
	});
});