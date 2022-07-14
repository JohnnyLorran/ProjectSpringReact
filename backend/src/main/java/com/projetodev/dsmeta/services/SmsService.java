package com.projetodev.dsmeta.services;

import java.text.DecimalFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.projetodev.dsmeta.entities.Sale;
import com.projetodev.dsmeta.repositories.SaleRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.rest.media.v1.MediaRecording.Format;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private SaleRepository saleRepository;
	
	public void sendSms(Long saleId) {
		
		Sale sale = saleRepository.findById(saleId).get();
		;
		String mes = "0";
		int month =  sale.getDate().getMonthValue();
		if(month < 10 ) {
			mes += String.valueOf(month);
		}else {
			mes = String.valueOf(month);
		}
		
		String msg = "O vendedor " + sale.getSellerName()
				+ " foi destaque em " + mes + " / "
				+ sale.getDate().getYear() + " com um total de R$ " 
				+ String.format("%0.2f", sale.getAmount()) + " ." ;

		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println(message.getSid());
	}
}
