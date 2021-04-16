#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); //RX,TX

double _ABVAR_1_Decimal = 0.0 ;
bool _ABVAR_2_funcaoA= false ;
bool botao_zera = LOW;
boolean __ardublockDigitalRead(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return digitalRead(pinNumber);
}


bool _ABVAR_3_funcaoB= false ;
int _ABVAR_4_estado = 0 ;
double _ABVAR_5_Zerado = 0.0 ;
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

double _ABVAR_6_Tempo = 0.0 ;

void setup()
{
  Serial.begin(9600);
  mySerial.begin(9600);
}

void loop()
{
  _ABVAR_1_Decimal = 0.0 ;
  _ABVAR_2_funcaoA = __ardublockDigitalRead(13) ;
  botao_zera = __ardublockDigitalRead(12) ;
  if (( ( ( _ABVAR_2_funcaoA ) == ( HIGH ) ) && ( ( _ABVAR_3_funcaoB ) == ( LOW ) ) ))
  {
    _ABVAR_4_estado = ( 1 - _ABVAR_4_estado ) ;
    delay( 500 );
  }
  _ABVAR_3_funcaoB = _ABVAR_2_funcaoA ;
  if (botao_zera == HIGH)
  {
    _ABVAR_5_Zerado = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
    Serial.print("Ajustado");
    Serial.print(" ");
    Serial.print(( _ABVAR_5_Zerado - _ABVAR_5_Zerado ));
    Serial.print(" ");
    Serial.println();
    _ABVAR_1_Decimal = 0.0 ;
    _ABVAR_6_Tempo = millis() ;
    Serial.print("Tempo (ms)");
    Serial.print(" ");
    Serial.print("Distancia (cm)");
    Serial.print(" ");
    Serial.println();
    delay( 2000 );
  }
    while ( ( ( _ABVAR_4_estado ) == ( 1 ) ) )
    {
      if (__ardublockDigitalRead(13))
      {
        _ABVAR_4_estado = 0 ;
      }
      _ABVAR_1_Decimal = ( _ABVAR_5_Zerado - ardublockUltrasonicMesure( 8 , 9 , 0 )  ) ;
      Serial.print(( millis() - _ABVAR_6_Tempo ));
      Serial.print(" ");
      Serial.print(_ABVAR_1_Decimal);
      mySerial.print("A");
      mySerial.println(_ABVAR_1_Decimal);
      Serial.print(" ");
      Serial.println();
      delay( 30 );
    }

  
  _ABVAR_4_estado = 0.0 ;
}


