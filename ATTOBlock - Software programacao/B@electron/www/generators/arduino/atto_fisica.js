
'use strict';

goog.provide('Blockly.Arduino.atto_fisica');

goog.require('Blockly.Arduino');

Blockly.Arduino.atto_lei_hooke = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_zera');
  var dropdown_pin2 = this.getFieldValue('var_liga');
  var dropdown_pin3 = this.getFieldValue('var_ultrassonico');
  var dropdown_pin4_aux = this.getFieldValue('var_frequencia');
  var dropdown_pin4 = 1/(dropdown_pin4_aux/1000);


  Blockly.Arduino.definitions_["atto"] = 'boolean __ardublockDigitalReadHooke(int pinNumber)\n   {\n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber);\n  }\n  double _ABVAR_1_Zerado = 0.0 ;\n  double _ABVAR_2_Double = 0.0 ;\n  \n  int ardublockUltrasonicPing(int trigPin, int echoPin) \n  { \n    int duration;\n    pinMode(trigPin, OUTPUT);\n    pinMode(echoPin, INPUT); \n    digitalWrite(trigPin, LOW);\n    delayMicroseconds(2); \n    digitalWrite(trigPin, HIGH); \n    delayMicroseconds(20);\n    digitalWrite(trigPin, LOW);\n    duration = pulseIn(echoPin, HIGH); \n    if ((duration < 2) || (duration > 50000)) return false;\n    return duration;\n  } \n  \n  float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)\n  {\n    if (mesure==0){ \n      int duration=ardublockUltrasonicPing(trigPin, echoPin);\n      return (1.0*duration)*0.01715;\n    }\n    else if(mesure==1){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      return (s2-s1)/(1.0*(t2-t1)); \n    }\n    else if(mesure==2){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      delay(50);\n      float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t3=millis();\n      return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));\n     }\n    else {\n      return false;\n    }\n  }\n';
  Blockly.Arduino.setups_["atto"] = 'Serial.begin(9600);';

  var code = 'if (__ardublockDigitalReadHooke('+dropdown_pin+'))\n  {\n    _ABVAR_1_Zerado = ardublockUltrasonicMesure( 8 , '+dropdown_pin3+' , 0 )  ;\n    Serial.print("Ajustado");\n    Serial.print(" "); \n    Serial.print(( _ABVAR_1_Zerado - _ABVAR_1_Zerado ));\n    Serial.print(" ");\n    Serial.println();\n    delay('+dropdown_pin4+');\n  }\n  if (__ardublockDigitalReadHooke('+dropdown_pin2+')) \n  {\n    _ABVAR_2_Double = ( _ABVAR_1_Zerado - ardublockUltrasonicMesure( 8 , '+dropdown_pin3+' , 0 )  ) ; \n    Serial.print(_ABVAR_2_Double);\n    Serial.print("");\n    Serial.print("cm");\n    Serial.print("");\n    Serial.println("");\n    delay( '+dropdown_pin4+' );\n  }\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.atto_conservacao_ener = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_lig');
  var dropdown_pin2 = this.getFieldValue('var_led');
  var dropdown_pin3 = this.getFieldValue('var_ldr');
  var dropdown_pin4 = this.getFieldValue('var_luminosidade');
  
  Blockly.Arduino.definitions_["atto"] = 'bool _ABVAR_1_funcaoA= false ; \n  bool _ABVAR_2_funcaoB= false ; \n   int _ABVAR_3_estado = 0 ; \n  bool _ABVAR_4_Auxiliar= false ; \n  int _ABVAR_5_TempoAux = 0 ; \n  double _ABVAR_6_LDR = 0.0; \n  int _ABVAR_7_TempoFinal = 0; \n  bool _ABVAR_8_MensagemFinal= false; \n  bool Ativador_Encerra = LOW;\n  boolean __ardublockDigitalReadTempo(int pinNumber) \n  {\n    pinMode(pinNumber, INPUT);\n    return \n      digitalRead(pinNumber); \n  }\n  \n  int __ardublockAnalogReadTempo(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return \n      analogRead(pinNumber);\n  } \n ';
  Blockly.Arduino.setups_["atto"] = 'pinMode( '+dropdown_pin2+', OUTPUT); \n  Serial.begin(9600);\n  Serial.println("Aperte no Botao para iniciar a obtencao dos dados");   \n Serial.println();\n';

  var code = ' _ABVAR_1_funcaoA = __ardublockDigitalReadTempo('+dropdown_pin+');\n  if (( ( ( _ABVAR_1_funcaoA ) == ( HIGH ) ) && ( ( _ABVAR_2_funcaoB ) == ( LOW ) ) ))\n  {\n    _ABVAR_3_estado = ( 1 - _ABVAR_3_estado ) ;\n    delay( 500 );\n    _ABVAR_4_Auxiliar = HIGH ;\n  }\n  _ABVAR_2_funcaoB = _ABVAR_1_funcaoA ;\n  _ABVAR_5_TempoAux = millis() ;\n  digitalWrite('+dropdown_pin2+ ' , HIGH ); \n  _ABVAR_6_LDR = __ardublockAnalogReadTempo('+dropdown_pin3+') ;\n  if (( ( _ABVAR_3_estado ) == ( 1 ) )) \n  { \n    _ABVAR_5_TempoAux = millis() ;\n    _ABVAR_7_TempoFinal = 0 ;\n    while ( ( ( _ABVAR_4_Auxiliar ) == ( HIGH ) ) ) \n    { \n      Serial.print("Pronto para Iniciar...");\n      Serial.print("");\n      Serial.println();\n      _ABVAR_4_Auxiliar = LOW;\n      _ABVAR_8_MensagemFinal = LOW;\n      Ativador_Encerra = HIGH; \n    }\n    while ( ( ( _ABVAR_6_LDR ) < ( '+ dropdown_pin4 +' ) ) )\n    {\n      _ABVAR_6_LDR = __ardublockAnalogReadTempo('+dropdown_pin3+');\n      _ABVAR_7_TempoFinal = ( millis() - _ABVAR_5_TempoAux );\n      _ABVAR_8_MensagemFinal = HIGH;\n    }\n\n    delay( 20 );\n    while ( ( ( _ABVAR_8_MensagemFinal ) == ( HIGH ) ) )\n    {\n      Serial.print("Carregando...");\n      Serial.print(" ");\n      Serial.println();\n      Serial.print(".");\n      Serial.print(" ");\n      Serial.println();\n      Serial.print(".");\n      Serial.print(" ");\n      Serial.println();\n      delay( 1000 );\n      Serial.print("Tempo Final:");\n      Serial.print("");\n      Serial.print(( _ABVAR_7_TempoFinal));\n      Serial.print(" ");\n      Serial.print("Milisegundos");\n      Serial.print("");\n      Serial.println();\n      Serial.print(".");\n      Serial.print(" ");\n      Serial.println();\n      Serial.print(".");\n      Serial.print("");\n      Serial.println();\n      _ABVAR_4_Auxiliar = HIGH;\n      _ABVAR_8_MensagemFinal = LOW;\n      _ABVAR_7_TempoFinal = 0;\n    }\n  } \n  if((Ativador_Encerra == HIGH) && (_ABVAR_3_estado== 0)){ \n    Serial.println(); \n    Serial.println("Finalizado.  ");\n    Serial.println(); \n    Ativador_Encerra = LOW; \n  }';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.atto_mru = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_liga');

  var dropdown_pin2 = this.getFieldValue('var_direita');
  var var_aux_dir ;
    if(dropdown_pin2 == 10){
      var_aux_dir = 5;
    }
    else if(dropdown_pin2 == 11){
      var_aux_dir = 6;
    }

  var dropdown_pin3 = this.getFieldValue('var_esquerda');
  var var_aux_esq;
    if(dropdown_pin3 == 10){
      var_aux_esq = 5;
    }
    else if(dropdown_pin3==11){
      var_aux_esq = 6;
    }
  
  var dropdown_pin4 = this.getFieldValue('var_potenciometro');
  var dropdown_pin5 = this.getFieldValue('var_ultrassonico');
  var dropdown_pin6_aux = this.getFieldValue('var_frequencia');
  var dropdown_pin6 = 1/(dropdown_pin6_aux/1000);
  
  var dropdown_pin7_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin7;
    if(dropdown_pin7_aux == 3){
      dropdown_pin7 = 2;
    }
    else if(dropdown_pin7_aux == 5){
      dropdown_pin7 = 4;
    }
    else if(dropdown_pin7_aux == 7){
      dropdown_pin7 = 6;
    }
    else if(dropdown_pin7_aux == 9){
      dropdown_pin7 = 8;
    }
    else if(dropdown_pin7_aux == 11){
      dropdown_pin7 = 10;
    }
    else if(dropdown_pin7_aux == 13){
      dropdown_pin7 = 12;
    }
  
  Blockly.Arduino.definitions_["atto"] = '#include<SoftwareSerial.h> \n  SoftwareSerial mySerial('+dropdown_pin7+','+dropdown_pin7_aux+'); \n  double _ABVAR_1_Double = 0.0 ; \n  bool _ABVAR_2_funcaoA= false; \n  double _ABVAR_2_Distancia = 0.0;\n   \n  boolean __ardublockDigitalReadMRU(int pinNumber)\n  { \n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber); \n  }\n  \n  bool _ABVAR_3_funcaoB= false ;\n  int _ABVAR_4_estado = 0 ; \n  double _ABVAR_5_Zerado = 0.0 ;\n  \n  int ardublockUltrasonicPing(int trigPin, int echoPin) \n  { \n    int duration;\n    pinMode(trigPin, OUTPUT);\n    pinMode(echoPin, INPUT); \n    digitalWrite(trigPin, LOW);\n    delayMicroseconds(2); \n    digitalWrite(trigPin, HIGH); \n    delayMicroseconds(20);\n    digitalWrite(trigPin, LOW);\n    duration = pulseIn(echoPin, HIGH); \n    if ((duration < 2) || (duration > 50000)) return false;\n    return duration;\n  } \n  \n  float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)\n  {\n    if (mesure==0){ \n      int duration=ardublockUltrasonicPing(trigPin, echoPin);\n      return (1.0*duration)*0.01715;\n    }\n    else if(mesure==1){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      return (s2-s1)/(1.0*(t2-t1)); \n    }\n    else if(mesure==2){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      delay(50);\n      float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t3=millis();\n      return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));\n    }\n    else {\n      return false;\n    }\n  }\n  \n  double _ABVAR_6_Tempo = 0.0 ;\n  \n  int __ardublockAnalogReadMRU(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return analogRead(pinNumber);\n  }\n  \n  int motor_dir ='+dropdown_pin2+';\n  int motor_esq ='+dropdown_pin3+';\n';
  Blockly.Arduino.setups_["atto"] = 'Serial.begin(9600);\n   mySerial.begin(9600); \n  pinMode(motor_dir, OUTPUT);\n  pinMode(motor_esq, OUTPUT);\n';

  var code = ' _ABVAR_1_Double = 0.0 ; \n  _ABVAR_2_Distancia = ardublockUltrasonicMesure( 8 , '+dropdown_pin5+' , 0 ); \n  _ABVAR_2_funcaoA = __ardublockDigitalReadMRU('+dropdown_pin+');\n  if (( ( ( _ABVAR_2_funcaoA ) == ( HIGH ) ) && ( ( _ABVAR_3_funcaoB ) == ( LOW ) ) ))\n  {\n    _ABVAR_4_estado = ( 1 - _ABVAR_4_estado ) ;\n    delay(500);\n  }\n  _ABVAR_3_funcaoB = _ABVAR_2_funcaoA ;\n  if (( ( ( _ABVAR_4_estado ) == ( 1 ) ) && ( ( _ABVAR_2_Distancia ) > ( 10 ) ) )) \n  { \n    _ABVAR_5_Zerado = ardublockUltrasonicMesure( 8 ,'+dropdown_pin5+', 0);\n    Serial.println();\n    Serial.println();\n    Serial.print("Ajustado"); \n    Serial.print(""); \n    Serial.print(( _ABVAR_5_Zerado - _ABVAR_5_Zerado ));\n    Serial.print("");\n    Serial.println();\n    _ABVAR_1_Double = 0.0 ;\n    _ABVAR_6_Tempo = millis();\n    Serial.print("Tempo (ms)");\n    Serial.print("    ;    ");\n    Serial.print("Distancia (cm)");\n    Serial.print("");\n    Serial.println();\n    while ( ( ( ( _ABVAR_4_estado ) == ( 1 ) ) && ( ( _ABVAR_2_Distancia ) > ( 10 ) ) ) )\n    {\n      if (__ardublockDigitalReadMRU('+dropdown_pin+'))\n      {\n        _ABVAR_4_estado = 0;\n      }\n      _ABVAR_2_Distancia = ardublockUltrasonicMesure( 8 , '+dropdown_pin5+' , 0 ); \n      _ABVAR_1_Double = ( _ABVAR_5_Zerado - ardublockUltrasonicMesure( 8 ,'+dropdown_pin5+', 0 ));\n      Serial.print(( millis() - _ABVAR_6_Tempo ));\n      Serial.print("        ;         ");\n      Serial.print(_ABVAR_1_Double);\n      mySerial.println(_ABVAR_1_Double);  \n      Serial.print("");\n      Serial.println();\n      digitalWrite(motor_dir,HIGH);\n      digitalWrite(motor_esq,HIGH);\n      analogWrite('+var_aux_dir+',map ( __ardublockAnalogReadMRU('+dropdown_pin4+') , 0 , 1023 , 0 , 255 ) );\n      analogWrite('+var_aux_esq+',map ( __ardublockAnalogReadMRU('+dropdown_pin4+') , 0 , 1023 , 0 , 255 ) );\n      delay('+dropdown_pin6+');\n    }\n  }\n  _ABVAR_4_estado = 0.0 ;\n  digitalWrite(motor_dir,HIGH);\n  digitalWrite(motor_esq,HIGH);\n  analogWrite('+var_aux_dir+', 0 ); \n  analogWrite('+var_aux_esq+', 0 );\n  delay(1);\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.atto_osci_blue = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_zera');
  var dropdown_pin2 = this.getFieldValue('var_liga');
  var dropdown_pin3 = this.getFieldValue('var_ultrassonico');
  var dropdown_pin4_aux = this.getFieldValue('var_frequencia');
  var dropdown_pin4 = 1/(dropdown_pin4_aux/1000);
  var dropdown_pin7_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin7;
    if(dropdown_pin7_aux == 3){
      dropdown_pin7 = 2;
    }
    else if(dropdown_pin7_aux == 5){
      dropdown_pin7 = 4;
    }
    else if(dropdown_pin7_aux == 7){
      dropdown_pin7 = 6;
    }
    else if(dropdown_pin7_aux == 9){
      dropdown_pin7 = 8;
    }
    else if(dropdown_pin7_aux == 11){
      dropdown_pin7 = 10;
    }
    else if(dropdown_pin7_aux == 13){
      dropdown_pin7 = 12;
    }


  Blockly.Arduino.definitions_["atto"] = '#include <SoftwareSerial.h> \n  SoftwareSerial mySerial('+dropdown_pin7+','+dropdown_pin7_aux+'); \n  double _ABVAR_1_Decimal = 0.0 ; \n  bool _ABVAR_2_funcaoA= false;\n  bool botao_zera = LOW;\n  boolean __ardublockDigitalRead(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber);\n  }\n  \n  bool _ABVAR_3_funcaoB= false ;\n  int _ABVAR_4_estado = 0 ;\n  double _ABVAR_5_Zerado = 0.0;\n  double _ABVAR_6_Tempo = 0.0 ;\n  int ardublockUltrasonicPing(int trigPin, int echoPin) \n  { \n    int duration;\n    pinMode(trigPin, OUTPUT);\n    pinMode(echoPin, INPUT); \n    digitalWrite(trigPin, LOW);\n    delayMicroseconds(2); \n    digitalWrite(trigPin, HIGH); \n    delayMicroseconds(20);\n    digitalWrite(trigPin, LOW);\n    duration = pulseIn(echoPin, HIGH); \n    if ((duration < 2) || (duration > 50000)) return false;\n    return duration;\n  } \n  \n  float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)\n  {\n    if (mesure==0){ \n      int duration=ardublockUltrasonicPing(trigPin, echoPin);\n      return (1.0*duration)*0.01715;\n    }\n    else if(mesure==1){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      return (s2-s1)/(1.0*(t2-t1));\n    }\n    else if(mesure==2){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      delay(50);\n      float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t3=millis();\n      return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));\n    }\n    else {\n      return false;\n    }\n  }\n  ';
  Blockly.Arduino.setups_["atto"] = 'Serial.begin(9600); \n  mySerial.begin(9600);';

  var code = '_ABVAR_1_Decimal = 0.0 ;\n  _ABVAR_2_funcaoA = __ardublockDigitalRead('+dropdown_pin2+') ;\n  botao_zera = __ardublockDigitalRead('+dropdown_pin+') ;\n  if (( ( ( _ABVAR_2_funcaoA ) == ( HIGH ) ) && ( ( _ABVAR_3_funcaoB ) == ( LOW ) ) ))\n  {\n    _ABVAR_4_estado = ( 1 - _ABVAR_4_estado ) ;\n    delay( 500 );\n  }\n  _ABVAR_3_funcaoB = _ABVAR_2_funcaoA ;\n  if (botao_zera == HIGH)\n  {\n    _ABVAR_5_Zerado = ardublockUltrasonicMesure( 8 , '+dropdown_pin3+' , 0 )  ;\n    Serial.print("Ajustado");\n    Serial.print(" ");\n    Serial.print(( _ABVAR_5_Zerado - _ABVAR_5_Zerado ));\n    Serial.print("");\n    Serial.println("");\n    _ABVAR_1_Decimal = 0.0 ;\n    _ABVAR_6_Tempo = millis() ;\n    Serial.print("Tempo (ms)");\n    Serial.print(" ");\n    Serial.print("Distancia (cm)");\n    Serial.print("");\n    Serial.println();\n    delay( 1000 );\n  }\n  while ( ( ( _ABVAR_4_estado ) == ( 1 ) ) )\n  {\n    if (__ardublockDigitalRead('+dropdown_pin2+'))\n    {\n      _ABVAR_4_estado = 0 ;\n    }\n    _ABVAR_1_Decimal = ( _ABVAR_5_Zerado - ardublockUltrasonicMesure( 8 , '+dropdown_pin3+' , 0 )  ) ;\n    Serial.print(( millis() - _ABVAR_6_Tempo ));\n    Serial.print(" ");\n    Serial.print(_ABVAR_1_Decimal);\n    mySerial.println(_ABVAR_1_Decimal);\n    Serial.print(" ");\n    Serial.println("");\n    delay('+dropdown_pin4+');\n  }\n\n  _ABVAR_4_estado = 0.0 ;\n';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.atto_lei_newton = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_liga');
  var dropdown_pin2 = this.getFieldValue('var_ultrassonico');
  var dropdown_pin3 = this.getFieldValue('var_distancia');
  var dropdown_pin7_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin7;
    if(dropdown_pin7_aux == 3){
      dropdown_pin7 = 2;
    }
    else if(dropdown_pin7_aux == 5){
      dropdown_pin7 = 4;
    }
    else if(dropdown_pin7_aux == 7){
      dropdown_pin7 = 6;
    }
    else if(dropdown_pin7_aux == 9){
      dropdown_pin7 = 8;
    }
    else if(dropdown_pin7_aux == 11){
      dropdown_pin7 = 10;
    }
    else if(dropdown_pin7_aux == 13){
      dropdown_pin7 = 12;
    }


  Blockly.Arduino.definitions_["atto"] = '#include<SoftwareSerial.h> \n  SoftwareSerial mySerial('+dropdown_pin7+','+dropdown_pin7_aux+'); \n  double Decimal = 0.0; \n  bool funcaoA_newton= false ; \n  \n  boolean botao_Digital(int pinNumber)\n  { \n    pinMode(pinNumber, INPUT); \n    return digitalRead(pinNumber);\n   } \n  \n  bool funcaoB_Newton= false ; \n  int estado_newton = 0 ; \n  double zerado_newton = 0.0 ;\n   \n  int ardublockUltrasonicPing(int trigPin, int echoPin) \n  { \n    int duration;\n    pinMode(trigPin, OUTPUT);\n    pinMode(echoPin, INPUT); \n    digitalWrite(trigPin, LOW);\n    delayMicroseconds(2); \n    digitalWrite(trigPin, HIGH); \n    delayMicroseconds(20);\n    digitalWrite(trigPin, LOW);\n    duration = pulseIn(echoPin, HIGH); \n    if ((duration < 2) || (duration > 50000)) return false;\n    return duration;\n  } \n  \n  float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)\n  {\n    if (mesure==0){ \n      int duration=ardublockUltrasonicPing(trigPin, echoPin);\n      return (1.0*duration)*0.01715;\n    }\n    else if(mesure==1){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      return (s2-s1)/(1.0*(t2-t1)); \n    }\n    else if(mesure==2){\n      float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t1=millis();\n      delay(50);\n      float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t2=millis();\n      delay(50);\n      float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;\n      int t3=millis();\n      return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));\n    }\n    else {\n      return false;\n    }\n  }\n  \n  double _ABVAR_6_Tempo = 0.0 ;\n';
  Blockly.Arduino.setups_["atto"] = 'Serial.begin(9600);\n  mySerial.begin(9600); \n  Serial.println("Aperte o Botão para iniciar a obtencao de dados");\n';

  var code = 'Decimal = 0.0 ;\n  funcaoA_newton = botao_Digital('+dropdown_pin+') ;\n  if (( ( ( funcaoA_newton ) == ( HIGH ) ) && ( ( funcaoB_Newton ) == ( LOW ) ) ))\n  {\n    estado_newton = ( 1 - estado_newton ) ;\n    delay( 500 );\n  }\n  funcaoB_Newton = funcaoA_newton ;\n  if (( ( ( estado_newton ) == ( 1 ) ) && ( ( Decimal ) < ( '+dropdown_pin3+' ) ) ))\n  {\n    zerado_newton = ardublockUltrasonicMesure( 8 , '+dropdown_pin2+' , 0 )  ;\n    Serial.print("Ajustado");\n    Serial.print(" ");\n    Serial.print(( zerado_newton - zerado_newton ));\n    Serial.print(" ");\n    Serial.println();\n    Decimal = 0.0 ;\n    _ABVAR_6_Tempo = millis() ;\n    Serial.print("Tempo (s)");\n    Serial.print(" ");\n    Serial.print("Distancia (cm)");\n    Serial.print(" ");\n    Serial.println();\n    while ( ( ( ( estado_newton ) == ( 1 ) ) && ( ( Decimal ) < ( '+dropdown_pin3+' ) ) ) )\n    {\n      if (botao_Digital('+dropdown_pin+'))\n      {\n        estado_newton = 0 ;\n      }\n      Decimal = ( ardublockUltrasonicMesure( 8 , '+dropdown_pin2+' , 0 )  - zerado_newton ) ;\n      if ((Decimal > 1) && (Decimal < '+dropdown_pin3+'  )) { \n        Serial.print(( millis() - _ABVAR_6_Tempo )/1000);\n        Serial.print(" ");\n        Serial.print("  ;  ");\n        Serial.print(Decimal);\n        mySerial.println(Decimal);\n        Serial.print(" ");\n        Serial.println();\n      } \n    }\n\n  }\n  estado_newton = 0.0 ;\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.atto_forca_osci = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_liga');
  var dropdown_pin7_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin7;
    if(dropdown_pin7_aux == 3){
      dropdown_pin7 = 2;
    }
    else if(dropdown_pin7_aux == 5){
      dropdown_pin7 = 4;
    }
    else if(dropdown_pin7_aux == 7){
      dropdown_pin7 = 6;
    }
    else if(dropdown_pin7_aux == 9){
      dropdown_pin7 = 8;
    }
    else if(dropdown_pin7_aux == 11){
      dropdown_pin7 = 10;
    }
    else if(dropdown_pin7_aux == 13){
      dropdown_pin7 = 12;
    }

    var dropdown_pin2_aux = this.getFieldValue('var_forca');
  var dropdown_pin2;
    if(dropdown_pin2_aux == 3){
      dropdown_pin2 = 2;
    }
    else if(dropdown_pin2_aux == 5){
      dropdown_pin2 = 4;
    }
    else if(dropdown_pin2_aux == 7){
      dropdown_pin2 = 6;
    }
    else if(dropdown_pin2_aux == 9){
      dropdown_pin2 = 8;
    }
    else if(dropdown_pin2_aux == 11){
      dropdown_pin2 = 10;
    }
    else if(dropdown_pin2_aux == 13){
      dropdown_pin2 = 12;
    }


  Blockly.Arduino.definitions_["atto"] = '#include<SoftwareSerial.h> \n  #include "HX711.h" \n  #define DT '+dropdown_pin2_aux+'\n  #define SCK '+dropdown_pin2+'\n  \n  SoftwareSerial mySerial('+dropdown_pin7+', '+dropdown_pin7_aux+');\n  \n  bool funcaoA_newton = false; \n  bool funcaoB_Newton = false;\n  double zerado_newton = 0.0;\n  int estado_newton = 0;\n  double inicio = 0; \n  double contador = 0.0;\n  HX711 escala; \n  \n  //####### Função do botão de Liga/Desliga ########\n  \n  boolean botao_Digital(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber);\n  }\n ';
  Blockly.Arduino.setups_["atto"] = '//Inicialização do monitor Serial \n  Serial.begin(9600);\n  mySerial.begin(9600);\n  //Balança\n  escala.begin (DT, SCK);\n  // Serial.print("Leitura do Valor ADC:  ");\n  // Serial.println(escala.read());   // Aguada até o dispositivo estar pronto\n  Serial.println("Nao coloque nada na balanca!");\n  Serial.println("Iniciando...");\n  escala.set_scale(392429.5871);     // Substituir o valor encontrado para escala\n  escala.tare(20);                // O peso é chamado de Tare.\n  Serial.println("Insira o item para Pesar");\n';

  var code = ' funcaoA_newton = botao_Digital('+dropdown_pin+'); \n  if ((funcaoA_newton == HIGH)  &&  ( funcaoB_Newton  ==  LOW ))\n  {\n    estado_newton = ( 1 - estado_newton ) ;\n    delay( 500 );\n  }\n  funcaoB_Newton = funcaoA_newton ;\n\n  if (estado_newton  ==  1) {\n    //Balança\n    contador = escala.get_units();\n    mySerial.println(contador,3);\n    if (botao_Digital('+dropdown_pin+'))\n    {\n      estado_newton = 0;\n    }\n  }\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.atto_forca_ang = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_liga');
  var dropdown_pin7_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin7;
    if(dropdown_pin7_aux == 3){
      dropdown_pin7 = 2;
    }
    else if(dropdown_pin7_aux == 5){
      dropdown_pin7 = 4;
    }
    else if(dropdown_pin7_aux == 7){
      dropdown_pin7 = 6;
    }
    else if(dropdown_pin7_aux == 9){
      dropdown_pin7 = 8;
    }
    else if(dropdown_pin7_aux == 11){
      dropdown_pin7 = 10;
    }
    else if(dropdown_pin7_aux == 13){
      dropdown_pin7 = 12;
    }

    var dropdown_pin2_aux = this.getFieldValue('var_forca');
  var dropdown_pin2;
    if(dropdown_pin2_aux == 3){
      dropdown_pin2 = 2;
    }
    else if(dropdown_pin2_aux == 5){
      dropdown_pin2 = 4;
    }
    else if(dropdown_pin2_aux == 7){
      dropdown_pin2 = 6;
    }
    else if(dropdown_pin2_aux == 9){
      dropdown_pin2 = 8;
    }
    else if(dropdown_pin2_aux == 11){
      dropdown_pin2 = 10;
    }
    else if(dropdown_pin2_aux == 13){
      dropdown_pin2 = 12;
    }


  Blockly.Arduino.definitions_["atto"] = '#include<SoftwareSerial.h> \n  #include "HX711.h" \n  #define DT '+dropdown_pin2_aux+'\n  #define SCK '+dropdown_pin2+'\n  \n  SoftwareSerial mySerial('+dropdown_pin7+', '+dropdown_pin7_aux+');\n  \n  bool funcaoA_newton = false; \n  bool funcaoB_Newton = false;\n  double zerado_newton = 0.0;\n  int estado_newton = 0;\n  double inicio = 0; \n  double contador = 0.0;\n  HX711 escala; \n  \n  //####### Função do botão de Liga/Desliga ########\n  \n  boolean botao_Digital(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber);\n  }\n';
  
  Blockly.Arduino.setups_["atto"] = '//Inicialização do monitor Serial \n  Serial.begin(9600);\n  mySerial.begin(9600);\n  //Balança\n  escala.begin (DT, SCK);\n  // Serial.print("Leitura do Valor ADC:  ");\n  // Serial.println(escala.read());   // Aguada até o dispositivo estar pronto\n  Serial.println("Nao coloque nada na balanca!");\n  Serial.println("Iniciando...");\n  escala.set_scale(392429.5871);     // Substituir o valor encontrado para escala\n  escala.tare(20); // O peso é chamado de Tare.\n  Serial.println("Insira o item para Pesar");\n ';

  var code = ' funcaoA_newton = botao_Digital('+dropdown_pin+');\n  if ((funcaoA_newton == HIGH)  &&  ( funcaoB_Newton  ==  LOW ))\n  {\n    estado_newton = ( 1 - estado_newton ) ;\n    delay( 500 );\n  }\n  funcaoB_Newton = funcaoA_newton ;\n\n  if (estado_newton  ==  1) {\n    //Balança\n    contador = escala.get_units();\n    mySerial.println(contador,3);\n    if (botao_Digital('+dropdown_pin+'))\n    {\n      estado_newton = 0;\n    }\n  }\n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.atto_forca_atrito = function() {
  // var dropdown_pin = Blockly.Arduino.valueToCode(this, 'var_direita', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_pin = this.getFieldValue('var_liga');
  var dropdown_pin2_aux = this.getFieldValue('var_bluetooth');
  var dropdown_pin2;
    if(dropdown_pin2_aux == 3){
      dropdown_pin2 = 2;
    }
    else if(dropdown_pin2_aux == 5){
      dropdown_pin2 = 4;
    }
    else if(dropdown_pin2_aux == 7){
      dropdown_pin2 = 6;
    }
    else if(dropdown_pin2_aux == 9){
      dropdown_pin2 = 8;
    }
    else if(dropdown_pin2_aux == 11){
      dropdown_pin2 = 10;
    }
    else if(dropdown_pin2_aux == 13){
      dropdown_pin2 = 12;
    }

    var dropdown_pin3_aux = this.getFieldValue('var_forca');
  var dropdown_pin3;
    if(dropdown_pin3_aux == 3){
      dropdown_pin3 = 2;
    }
    else if(dropdown_pin3_aux == 5){
      dropdown_pin3 = 4;
    }
    else if(dropdown_pin3_aux == 7){
      dropdown_pin3 = 6;
    }
    else if(dropdown_pin3_aux == 9){
      dropdown_pin3 = 8;
    }
    else if(dropdown_pin3_aux == 11){
      dropdown_pin3 = 10;
    }
    else if(dropdown_pin3_aux == 13){
      dropdown_pin3 = 12;
    }

  var dropdown_pin_dir = this.getFieldValue('var_direita');
  var var_aux_dir ;
  if(dropdown_pin_dir == 10){
    var_aux_dir = 5;
  }
  else if(dropdown_pin_dir == 11){
    var_aux_dir = 6;
  }
  var dropdown_pin_esq = this.getFieldValue('var_esquerda');
  var var_aux_esq;
  if(dropdown_pin_esq == 10){
    var_aux_esq = 5;
  }
  else if(dropdown_pin_esq==11){
    var_aux_esq = 6;
  }

  var dropdown_pin6 = this.getFieldValue('var_distancia');

  Blockly.Arduino.definitions_["atto"] = '#include<SoftwareSerial.h>\n  #include "HX711.h"\n  #define DT '+dropdown_pin3_aux+'\n  #define SCK '+dropdown_pin3+'\n  \n  SoftwareSerial mySerial('+dropdown_pin2+', '+dropdown_pin2_aux+');\n  \n  bool funcaoA_newton = false;\n  bool funcaoB_Newton = false;\n  double zerado_newton = 0.0;\n  int estado_newton = 0;\n  int motor_dir = '+dropdown_pin_dir+';\n  int motor_esq = '+dropdown_pin_esq+';\n  double velocidade = '+dropdown_pin6+';\n  double inicio = 0;\n  double contador = 0.0;\n  \n  HX711 escala;\n  \n  //####### Função do botão de Liga/Desliga ########\n  boolean botao_Digital(int pinNumber)\n  {\n    pinMode(pinNumber, INPUT);\n    return digitalRead(pinNumber);\n  }\n';
  
  Blockly.Arduino.setups_["atto"] = ' //Inicialização do monitor Serial \n  Serial.begin(9600);\n  mySerial.begin(9600);\n  //Motores\n  pinMode(motor_dir, OUTPUT);\n  pinMode(motor_esq, OUTPUT);\n\n  //Balança\n  escala.begin (DT, SCK);\n  escala.set_scale(392429.5871);     // Substituir o valor encontrado para escala\n  escala.tare(20);                // O peso é chamado de Tare.\n';

  var code = 'funcaoA_newton = botao_Digital('+dropdown_pin+'); \n  if ((funcaoA_newton == HIGH)  &&  ( funcaoB_Newton  ==  LOW ))\n  {\n    estado_newton = ( 1 - estado_newton ) ;\n    delay( 500 );\n  }\n  funcaoB_Newton = funcaoA_newton ;\n\n  if (estado_newton  ==  1) {\n    // Motores\n    digitalWrite(motor_dir, HIGH);\n    digitalWrite(motor_esq, HIGH);\n    analogWrite('+var_aux_dir+', velocidade);\n    analogWrite('+var_aux_esq+', velocidade);\n\n    //Balança\n    contador = abs(escala.get_units());\n    mySerial.println(contador);\n\n    if (botao_Digital('+dropdown_pin+'))\n    {\n      estado_newton = 0;\n      return;\n    }\n  }\n  digitalWrite(motor_dir, HIGH);\n  digitalWrite(motor_esq, HIGH);\n  analogWrite('+var_aux_dir+', 0);\n  analogWrite('+var_aux_esq+', 0); \n';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};





