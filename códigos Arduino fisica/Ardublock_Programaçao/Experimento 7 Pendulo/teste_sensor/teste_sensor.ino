int estado_3 = 0 ;
int contador = 3; 

/*############### FUNÇÕES #############*/
void interrupcao_3() {
  estado_3 = ( 1 - estado_3 ) ;
}

int ardublockAnalogRead_3(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return analogRead(pinNumber);
}

/*####################################*/

void setup()
{
  Serial.begin(9600);
  pinMode( 12, OUTPUT);
  pinMode(1, INPUT_PULLUP);
  attachInterrupt(1, interrupcao_3, RISING);
  Serial.println("Aperte no Botão para iniciar o experimento");
  Serial.println();
}

void loop()
{

  bool auxiliarmsg_3 = HIGH ;
  bool teste1_3 = HIGH ;
  bool mensagemfinal_3 = LOW ;
  bool ativador_3Encerral_3 = LOW;
  float tempoauxiliar_3 = 0 ;
  int ativador_3 = 0 ;
  int ativador2_3 = 0 ;
  int ativador3_3 = 0 ;
  float TempoFinal_3 = 0 ;
  int ativadorClaro_3 = 0 ;
  int ativadorEscuro_3 = 1 ;
  int auxconta = 0;

  digitalWrite(12 , HIGH );


  while ( ( ( estado_3 ) == ( 1 ) ) )
  {

    while ( ( ( auxiliarmsg_3 ) == ( HIGH ) ) )
    {
      Serial.print("pronto para iniciar ...");
      Serial.println();
      Serial.println();
      auxiliarmsg_3 = LOW ;
      ativador_3Encerral_3 = HIGH;
    }

    tempoauxiliar_3 = millis() ;
    if (( ( ( ardublockAnalogRead_3(A0) ) == ( 0 ) ) && ( ( teste1_3 ) == ( HIGH ) ) ))
    {
      ativador_3 = ( ativador_3 + 1 ) ;
    }
    while ( ( ( ativador_3 ) == ( 1 ) ) )
    {
      ativador_3 = ( ativador_3 + 1 ) ;
      ativador2_3 = 1 ;
      teste1_3 = LOW ;
      delay( 500 );
    }

    if (( ( ( ativador2_3 ) == ( 1 ) ) && ( ( ardublockAnalogRead_3(A0) ) >= ( 3 ) ) ))
    {
      ativador3_3 = 1 ;
      ativador2_3 = ( ativador2_3 + 1 ) ;
    }
    while ( ( ( ativador3_3 ) == ( 1 ) )  && ( ( auxconta < contador) ) )
    {
      TempoFinal_3 = ( millis() - tempoauxiliar_3 ) ;
      ativadorEscuro_3 = 1 ;
      while ( ( ( ( ardublockAnalogRead_3(A0) ) == ( 0 ) ) && ( ( ativadorEscuro_3 ) == ( 1 ) ) ) )
      {
        ativadorClaro_3 = 1 ;
        ativadorEscuro_3 = ( ativadorEscuro_3 + 1 ) ;
      }

      while ( ( ( ( ardublockAnalogRead_3(A0) ) >= ( 3 ) ) && ( ( ativadorClaro_3 ) == ( 1 ) ) ) )
      {
        ativador2_3 = ( ativador2_3 + 1 ) ;
        ativadorClaro_3 = ( ativadorClaro_3 + 1 ) ;
        mensagemfinal_3 = HIGH ;
      }

      if (( ( mensagemfinal_3 ) == ( HIGH ) ))
      {
        Serial.print("Tempo ");
        Serial.print(auxconta + 1);
        Serial.print(":");
        Serial.print(" ");
        Serial.print(TempoFinal_3 / 1000);
        Serial.print(" segundos");
        Serial.println();
        auxconta = ( auxconta + 1 ) ;
        mensagemfinal_3 = LOW ;
        if (auxconta == contador){
          Serial.println();
          Serial.println("Concluido");
          Serial.println("Aperte no Botão para finalizar essa contagem");
           
          }
       }
    }

  }

  if ( (ativador_3Encerral_3 == HIGH) && ( estado_3 == 0)) {
    Serial.println("Finalizado.");
  }
}
