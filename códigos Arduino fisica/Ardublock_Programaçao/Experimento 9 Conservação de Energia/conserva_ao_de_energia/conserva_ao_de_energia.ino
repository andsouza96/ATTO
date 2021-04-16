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
  if (mesure == 0) {
    int duration = ardublockUltrasonicPing(trigPin, echoPin);
    return (1.0 * duration) * 0.01715;
  }
  else if (mesure == 1) {
    float s1 = (1.0 * ardublockUltrasonicPing(trigPin, echoPin)) / 5.7;
    int t1 = millis();
    delay(50);
    float s2 = (1.0 * ardublockUltrasonicPing(trigPin, echoPin)) / 5.7;
    int t2 = millis();
    return (s2 - s1) / (1.0 * (t2 - t1));
  }
  else if (mesure == 2) {
    float s1 = (1.0 * ardublockUltrasonicPing(trigPin, echoPin)) / 5.7;
    int t1 = millis();
    delay(50);
    float s2 = (1.0 * ardublockUltrasonicPing(trigPin, echoPin)) / 5.7;
    int t2 = millis();
    delay(50);
    float s3 = (1.0 * ardublockUltrasonicPing(trigPin, echoPin)) / 5.7;
    int t3 = millis();
    return (1.0 * (s3 - 2.0 * s2 + s1)) / ((t3 - t2) * (t2 - t1));
  }
  else {
    return false;
  }
}

int estado_new = 0;

void interrupcao_3() {
  estado_new = ( 1 - estado_new ) ;
}

void setup()
{
  Serial.begin(9600);
  pinMode(3, INPUT_PULLUP);
  attachInterrupt(1, interrupcao_3, RISING);
  Serial.println("Aperte no Botão para iniciar o experimento");
  Serial.println();
}

float tempo_auxiliar = 0;
float Decimal_new = 10;;
float sensor_zerado = 0;
bool auxiliar_desl = HIGH;

void loop()
{

  tempo_auxiliar = millis();
  auxiliar_desl = HIGH;
  
  while (estado_new == 1 && auxiliar_desl == HIGH) {
    sensor_zerado = ardublockUltrasonicMesure( 8 , 9 , 0 );
    
    while (estado_new == 1 && Decimal_new > 5) {
      Decimal_new = ardublockUltrasonicMesure( 8 , 9 , 0 ) - sensor_zerado;
      delay(5);
      Serial.println("Tempo (s)   ;   Distancia (cm)   ;   Velocidade (cm/s)  ;   Aceleração(cm/s²) ");
      Serial.print((millis() - tempo_auxiliar ) / 1000);
      Serial.print("        ;      ");
      Serial.print(Decimal_new);
      Serial.print("        ;      ");
      Serial.print(ardublockUltrasonicMesure( 8 , 9 , 1 ) );
      Serial.print("        ;      ");
      Serial.print(ardublockUltrasonicMesure( 8 , 9 , 2 ) );
      Serial.println();
    }
    if (Decimal_new <= 5.0) {
      auxiliar_desl = LOW;
      estado_new = 0;
    }

  }
}
