#include<SoftwareSerial.h>
SoftwareSerial mySerial(6, 7);
double Decimal = 0.0;
bool funcaoA_newton = false ;

boolean botao_Digital(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return digitalRead(pinNumber);
}

bool funcaoB_Newton = false ;
int estado_newton = 0 ;
double zerado_newton = 0.0 ;
float resul_aux = 0;
float total_aux = 0; 

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

double _ABVAR_6_Tempo = 0.0 ;


void setup()
{
  Serial.begin(9600);
  mySerial.begin(9600);
  Serial.println("Aperte o Botão para iniciar a obtencao de dados");

}

void loop()
{
  Decimal = 0.0 ;
  funcaoA_newton = botao_Digital(2) ;
  if (( ( ( funcaoA_newton ) == ( HIGH ) ) && ( ( funcaoB_Newton ) == ( LOW ) ) ))
  {
    estado_newton = ( 1 - estado_newton ) ;
    delay( 500 );
  }
  funcaoB_Newton = funcaoA_newton ;
  if (( ( ( estado_newton ) == ( 1 ) ) && ( ( Decimal ) < ( 30 ) ) ))
  {
    zerado_newton = ardublockUltrasonicMesure( 8 , 9 , 0 )  ;
    Serial.print("Ajustado");
    Serial.print(" ");
    Serial.print(( zerado_newton - zerado_newton ));
    Serial.print(" ");
    Serial.println();
    Decimal = 0.0 ;
    _ABVAR_6_Tempo = millis() ;
    Serial.print("Tempo (s)");
    Serial.print(" ");
    Serial.print("Distancia (cm)");
    Serial.print(" ");
    Serial.println();
    while ( ( ( ( estado_newton ) == ( 1 ) ) && ( ( Decimal ) < ( 30 ) ) ) )
    {
      if (botao_Digital(2))
      {
        estado_newton = 0 ;
      }
      Decimal = ( ardublockUltrasonicMesure( 8 , 9 , 0 )  - zerado_newton ) ;
      if ((Decimal > 1) && (total_aux < 30  )) {
        resul_aux = Decimal;
        for (int cont = 0; cont < 5; cont++) {
          Decimal = ( ardublockUltrasonicMesure( 8 , 9 , 0 )  - zerado_newton ) ;
          resul_aux = resul_aux + Decimal;
          Serial.print("Valor recebido");
          Serial.println(Decimal);
          Serial.print("Valor somado:");
          Serial.println(resul_aux);
          delay(5);
        }
        total_aux = resul_aux / 5;
        Serial.print("Total media: ");
        Serial.println(total_aux);
        mySerial.println(total_aux);
       /* Serial.print(( millis() - _ABVAR_6_Tempo ) / 1000);
        Serial.print(" ");
        Serial.print("  ;  ");
        Serial.print(Decimal);
        mySerial.println(Decimal);
        Serial.print(" ");
        Serial.println();*/

      }
    }

  }
  estado_newton = 0.0 ;
}
