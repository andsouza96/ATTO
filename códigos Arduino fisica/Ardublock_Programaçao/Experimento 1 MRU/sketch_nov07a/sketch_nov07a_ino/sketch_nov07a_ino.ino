double _ABVAR_1_Double = 0.0 ;
double _ABVAR_2_Distancia = 0.0 ;
int ardublockUltrasonicPing(int trigPin, int echoPin)
{
  int duration;
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(20);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  if ((duration < 2) || (duration > 50000)) return false;
  return duration;
}
float ardublockUltrasonicMesure(int trigPin, int echoPin, int mesure)
{
  if (mesure==0){
    int duration=ardublockUltrasonicPing(trigPin, echoPin);
    return (1.0*duration)*0.01715;
  }
  else if(mesure==1){
    float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;
    int t1=millis();
    delay(50);
    float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;
    int t2=millis();
    return (s2-s1)/(1.0*(t2-t1));    
  }
  else if(mesure==2){
    float s1=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;
    int t1=millis();
    delay(50);
    float s2=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;
    int t2=millis();
    delay(50);
    float s3=(1.0*ardublockUltrasonicPing(trigPin, echoPin))/5.7;
    int t3=millis();
    return (1.0*(s3-2.0*s2+s1))/((t3-t2)*(t2-t1));   
  }
  else {
    return false;
  }
}

bool _ABVAR_3_funcaoA= false ;
boolean __ardublockDigitalRead(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return digitalRead(pinNumber);
}


bool _ABVAR_4_funcaoB= false ;
int _ABVAR_5_estado = 0 ;
double _ABVAR_6_Zerado = 0.0 ;
double _ABVAR_7_Tempo = 0.0 ;
int __ardublockAnalogRead(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return analogRead(pinNumber);
}


int motor_dir =10;
int motor_esq =11;

void setup()
{
  Serial.begin(9600);
  pinMode(motor_dir, OUTPUT);
  pinMode(motor_esq, OUTPUT);
}

void loop()
{
  _ABVAR_1_Double = 0.0 ;
  _ABVAR_2_Distancia = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
  _ABVAR_3_funcaoA = __ardublockDigitalRead(13) ;
  if (( ( ( _ABVAR_3_funcaoA ) == ( HIGH ) ) && ( ( _ABVAR_4_funcaoB ) == ( LOW ) ) ))
  {
    _ABVAR_5_estado = ( 1 - _ABVAR_5_estado ) ;
    delay( 500 );
  }
  _ABVAR_4_funcaoB = _ABVAR_3_funcaoA ;
  if (( ( ( _ABVAR_5_estado ) == ( 1 ) ) && ( ( _ABVAR_2_Distancia ) > ( 10 ) ) ))
  {
    _ABVAR_6_Zerado = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
    Serial.print("Ajustado");
    Serial.print(" ");
    Serial.print(( _ABVAR_6_Zerado - _ABVAR_6_Zerado ));
    Serial.print(" ");
    Serial.println();
    _ABVAR_1_Double = 0.0 ;
    _ABVAR_7_Tempo = millis() ;
    Serial.print("Tempo (ms)");
    Serial.print(" ");
    Serial.print("Distancia (cm)");
    Serial.print(" ");
    Serial.println();
    while ( ( ( ( _ABVAR_5_estado ) == ( 1 ) ) && ( ( _ABVAR_2_Distancia ) > ( 10 ) ) ) )
    {
      if (__ardublockDigitalRead(13))
      {
        _ABVAR_5_estado = 0 ;
      }
      _ABVAR_2_Distancia = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
      _ABVAR_1_Double = ( _ABVAR_6_Zerado - ardublockUltrasonicMesure( 8 , 9 , 0 )  ) ;
      Serial.print(( millis() - _ABVAR_7_Tempo ));
      Serial.print(" ");
      Serial.print(_ABVAR_1_Double);
      Serial.print(" ");
      Serial.println();
      digitalWrite(motor_dir,HIGH);
      digitalWrite(motor_esq,HIGH);
      analogWrite(5,map ( __ardublockAnalogRead(A0) , 0 , 1023 , 0 , 255 ) );
      analogWrite(6,map ( __ardublockAnalogRead(A0) , 0 , 1023 , 0 , 255 ) );
      delay(100);	
    }

  }
  _ABVAR_5_estado = 0.0 ;
  digitalWrite(motor_dir,HIGH);
  digitalWrite(motor_esq,HIGH);
  analogWrite(5, 0 );
  analogWrite(6, 0 );
  delay(1);
}


