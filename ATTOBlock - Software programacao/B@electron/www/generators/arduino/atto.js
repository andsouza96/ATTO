
//http://www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html

'use strict';

goog.provide('Blockly.Arduino.atto');

goog.require('Blockly.Arduino');

Blockly.Arduino.atto_led_red = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.atto_led_yellow = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.atto_led_green = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.atto_led_rgb = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};
Blockly.Arduino.atto_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.atto_ldr = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.atto_button = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_magnetico = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_LM35 = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+ dropdown_pin +')*(5.0/1023.)*100.)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_proximidade = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+ dropdown_pin +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_seguidor = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+ dropdown_pin +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_potenciometro = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead('+ dropdown_pin +')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_ultrassonico = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('var_ultrass');
  Blockly.Arduino.definitions_["atto"] = 'int ardublockUltrasonicPing(int trigPin, int echoPin)\n{\n   int duration;\n   pinMode(trigPin, OUTPUT);\n   pinMode(echoPin, INPUT);  \n   digitalWrite(trigPin, LOW);\n    delayMicroseconds(2);\n   digitalWrite(trigPin, HIGH);\n    delayMicroseconds(20);  \n  digitalWrite(trigPin, LOW); \n   duration = pulseIn(echoPin, HIGH);  \n   if ((duration < 2) || (duration > 50000)) return false;\n    return duration;\n  }\n    float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)\n  {  \n  if (mesure==0){  \n   int duration=ardublockUltrasonicPing(trigPin, echoPin); \n     return (1.0*duration)*0.01715;  \n  }\n    else if(mesure==1){  \n    float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7; \n     int t1=millis();  \n    delay(50);    \n  float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7; \n     int t2=millis();  \n    return (s2-s1)/(1.0*(t2-t1));   \n     }   \n else if(mesure==2){ \n     float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;  \n    int t1=millis();    \n  delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7; \n     int t2=millis();  \n    delay(50);  \n    float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;    \n  int t3=millis();   \n   return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));   \n    } \n   else {  \n    return false; \n   } \n }\n';
  
  var code = 'ardublockUltrasonicMesure('+ dropdown_pin +','+ dropdown_pin2+','+dropdown_stat+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.atto_servo = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'PIN2', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_["atto"] = '#include <Servo.h> \n  Servo servo_pin;';
  Blockly.Arduino.setups_["atto"] = 'servo_pin.attach('+dropdown_pin+');';
  var code = 'servo_pin.write('+ dropdown_pin2 + ');';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.atto_motor_dc = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_direita');
  var var_aux_dir ;
  if(dropdown_pin == 10){
    var_aux_dir = 5;
  }
  else if(dropdown_pin == 11){
    var_aux_dir = 6;
  }
  var dropdown_pin2 = this.getFieldValue('var_esquerda');
  var var_aux_esq;
  if(dropdown_pin2 == 10){
    var_aux_esq = 5;
  }
  else if(dropdown_pin2==11){
    var_aux_esq = 6;
  }
  var dropdown_pin3 = this.getFieldValue('var_movimento');
  var dropdown_pin4_aux = this.getFieldValue('var_tempo');
  var dropdown_pin4 = dropdown_pin4_aux*1000;


  Blockly.Arduino.definitions_["atto"] = 'int motor_dir ='+ dropdown_pin+';  \n int motor_esq ='+ dropdown_pin2 +';';
  Blockly.Arduino.setups_["atto"] = 'pinMode(motor_dir, OUTPUT); \n  pinMode(motor_esq, OUTPUT);';

  var code = 'digitalWrite(motor_dir, HIGH); \n  digitalWrite(motor_esq , HIGH); \n  analogWrite('+ var_aux_dir+ ',255); \n  analogWrite('+var_aux_esq+',255); \n  delay('+ dropdown_pin4+'); \n';

  if(dropdown_pin3 == 0){
    var code = 'digitalWrite(motor_dir, HIGH); \n  digitalWrite(motor_esq , HIGH); \n  analogWrite('+ var_aux_dir+ ',255); \n  analogWrite('+var_aux_esq+',255); \n  delay('+ dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 1){
    var code = 'digitalWrite(motor_dir, LOW); \n  digitalWrite(motor_esq , LOW); \n  analogWrite('+ var_aux_dir+ ',255); \n  analogWrite('+var_aux_esq+',255); \n  delay('+ dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 2){
    var code = 'digitalWrite(motor_dir, HIGH); \n  digitalWrite(motor_esq , HIGH); \n  analogWrite('+ var_aux_dir+ ',100); \n  analogWrite('+var_aux_esq+',255); \n  delay('+ dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 3){
    var code = 'digitalWrite(motor_dir, HIGH); \n  digitalWrite(motor_esq , HIGH); \n  analogWrite('+ var_aux_dir+ ',255); \n  analogWrite('+var_aux_esq+',100); \n  delay('+ dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 4){
    var code = 'digitalWrite(motor_dir, HIGH); \n  digitalWrite(motor_esq , HIGH); \n  analogWrite('+ var_aux_dir+ ',0); \n  analogWrite('+var_aux_esq+',0); \n  delay('+ dropdown_pin4+'); \n';
  }

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.atto_motor_dc_simples = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_pino');
  var var_aux_dir ;
  if(dropdown_pin == 10){
    var_aux_dir = 5;
  }
  else if(dropdown_pin == 11){
    var_aux_dir = 6;
  }
  
  var dropdown_pin3 = this.getFieldValue('var_veloc');
  var dropdown_pin4_aux = this.getFieldValue('var_tempo');
  var dropdown_pin4 = dropdown_pin4_aux*1000;


  Blockly.Arduino.definitions_["atto"] = "";
  Blockly.Arduino.setups_["atto"] = 'pinMode('+dropdown_pin+', OUTPUT);';

  var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';

  if(dropdown_pin3 > 0){
    var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 < 0){
    var code = ' digitalWrite('+dropdown_pin+', LOW);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 0){
    var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



/*Blockly.Arduino.robuno_led_blanche = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_green_led_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'digitalWrite('+dropdown_pin+','+dropdown_stat+');\n';
  return code;
};

Blockly.Arduino.robuno_buzzer = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  //var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var value_tps = Blockly.Arduino.valueToCode(this, 'TPS', Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_relay1'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'tone('+dropdown_pin+','+value_num+','+value_tps+');\n';
  return code;
};

Blockly.Arduino.robuno_capteur_collision_gauche = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC); //this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_btn1white_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robuno_capteur_collision_droite = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);;
  Blockly.Arduino.setups_['setup_switch1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'digitalRead('+dropdown_pin+')==1';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robuno_ldr_gauche = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robuno_ldr_droite = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_['setup_ldr1_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'round(1517.288685*exp(-64.822510*analogRead('+dropdown_pin+')/10000))';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.robuno_servomoteur_gauche = function() {
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+pin] = 'Servo servo_'+pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+pin] = 'servo_'+pin+'.attach('+pin+');\n';
  if (value_sens =="true")
		{
		//value_degree = 'map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+pin+'.write(90 + map('+value_degree+', 0, 255, 0 , 90));\n';
		}
		else
		{
		//value_degree = '90 - map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+pin+'.write(90 - map('+value_degree+', 0, 255, 0 , 90));\n';
		}
  // var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.robuno_servomoteur_droite = function() {
  var pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  
  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo'+pin] = 'Servo servo_'+pin+';\n';
  Blockly.Arduino.setups_['setup_servo_'+pin] = 'servo_'+pin+'.attach('+pin+');\n';
  if (value_sens =="true")
		{
		//value_degree = 'map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+pin+'.write(90 + map('+value_degree+', 0, 255, 0 , 90));\n';
		}
		else
		{
		//value_degree = '90 - map(value_degree, 0, 255, 0 , 90)' ;
		var code = 'servo_'+pin+'.write(90 - map('+value_degree+', 0, 255, 0 , 90));\n';
		}
  // var code = 'servo_'+dropdown_pin+'.write('+value_degree+');\n';
  return code;
};

Blockly.Arduino.robuno_moteurs_CC = function() {
  var dropdown_mot = this.getFieldValue('MOT');
  if (dropdown_mot == 'A') {
	  var pindir = 12;
	  var pinpwm = 10;
  }  else if (dropdown_mot == 'B') {
	  var pindir = 11;
	  var pinpwm = 9;
  };
  var value_sens = Blockly.Arduino.valueToCode(this, 'SENS', Blockly.Arduino.ORDER_ATOMIC);
  var value_vitesse = Blockly.Arduino.valueToCode(this, 'VITESSE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.setups_["setup_motShieldRobuno_"+pindir] = "pinMode("+pindir+",OUTPUT);\n"+
  "  pinMode("+pinpwm+",OUTPUT);\n";
  Blockly.Arduino.definitions_['define_cmd_mot'] = "void cmd_mot(byte dirpin,byte pwmpin,boolean sens,byte vitesse)\n"+
    "{\n"+
    "  digitalWrite(dirpin,sens);\n"+
    "  analogWrite(pwmpin,vitesse);\n"+
    "}\n";
  var code="cmd_mot("+pindir+","+pinpwm+","+value_sens+","+value_vitesse+");\n";
  return code;
};*/
