boolean __ardublockDigitalRead(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return digitalRead(pinNumber);
}


double _ABVAR_1_Zerado = 0.0 ;
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


void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if (__ardublockDigitalRead(12))
  {
    _ABVAR_1_Zerado = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
  }
  if (__ardublockDigitalRead(11))
  {
    while ( ( ( ardublockUltrasonicMesure( 8 , 9 , 0 )  ) <= ( 50 ) ) )
    {
      Serial.print("message");
      Serial.print(" ");
      Serial.print(( _ABVAR_1_Zerado - ardublockUltrasonicMesure( 8 , 9 , 0 )  ));
      Serial.print(" ");
      Serial.println();
    }

  }
}


