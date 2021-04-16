int estado = 0 ;

/*############### FUNÇÕES #############*/
void interrupcao() {
  estado = ( 1 - estado ) ;
}

int __ardublockAnalogRead(int pinNumber)
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
  attachInterrupt(1, interrupcao, RISING);
}

void loop()
{

  bool auxiliarmsg = HIGH ;
  bool teste1 = HIGH ;
  bool mensagemfinal = LOW ;
  bool AtivadorEncerra = LOW;
  float tempoauxiliar = 0 ;
  int ativador = 0 ;
  int ativador2 = 0 ;
  int ativador3 = 0 ;
  float TempoFinal = 0 ;
  int AtivadorClaro = 0 ;
  int _AtivadorEscuro = 1 ;

  digitalWrite(12 , HIGH );


  while ( ( ( estado ) == ( 1 ) ) )
  {

    while ( ( ( auxiliarmsg ) == ( HIGH ) ) )
    {
      Serial.print("pronto para iniciar ...");
      Serial.print(" ");
      Serial.println();
      auxiliarmsg = LOW ;
      AtivadorEncerra = HIGH;
    }

    tempoauxiliar = millis() ;
    if (( ( ( __ardublockAnalogRead(A0) ) == ( 0 ) ) && ( ( teste1 ) == ( HIGH ) ) ))
    {
      ativador = ( ativador + 1 ) ;
    }
    while ( ( ( ativador ) == ( 1 ) ) )
    {
      ativador = ( ativador + 1 ) ;
      ativador2 = 1 ;
      teste1 = LOW ;
      delay( 500 );
    }

    if (( ( ( ativador2 ) == ( 1 ) ) && ( ( __ardublockAnalogRead(A0) ) >= ( 3 ) ) ))
    {
      ativador3 = 1 ;
      ativador2 = ( ativador2 + 1 ) ;
    }
    while ( ( ( ativador3 ) == ( 1 ) ) )
    {
      TempoFinal = ( millis() - tempoauxiliar ) ;
      _AtivadorEscuro = 1 ;
      while ( ( ( ( __ardublockAnalogRead(A0) ) == ( 0 ) ) && ( ( _AtivadorEscuro ) == ( 1 ) ) ) )
      {
        AtivadorClaro = 1 ;
        _AtivadorEscuro = ( _AtivadorEscuro + 1 ) ;
      }

      while ( ( ( ( __ardublockAnalogRead(A0) ) >= ( 3 ) ) && ( ( AtivadorClaro ) == ( 1 ) ) ) )
      {
        ativador2 = ( ativador2 + 1 ) ;
        AtivadorClaro = ( AtivadorClaro + 1 ) ;
        mensagemfinal = HIGH ;
      }

      if (( ( mensagemfinal ) == ( HIGH ) ))
      {
        Serial.print("Tempo:");
        Serial.print(" ");
        Serial.print(TempoFinal / 1000);
        Serial.print(" segundos");
        Serial.println();
        ativador3 = ( ativador3 + 1 ) ;
        mensagemfinal = LOW ;

      }
    }

  }

  if ( (AtivadorEncerra == HIGH) && ( estado == 0)) {
    Serial.println("Finalizado.");
  }
}
