bool funcaoA = false ;
bool funcaoB = false ;
int estado_botao = 0 ;
bool Auxiliar_LDR1 = LOW ;
int TempoAux1 = 0 ;
int TempoAux2 = 0;
double LDR_1 = 0.0;
double LDR_2 = 0.0;
int TempoFinal_1 = 0;
int TempoFinal_2 = 0;
bool MensagemFinal_1 = LOW;
bool MensagemFinal_2 = LOW;
bool Ativador_Encerra = LOW;
bool LDR_2aux = LOW;

boolean __ardublockDigitalReadTempo(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return
    digitalRead(pinNumber);
}

int __ardublockAnalogReadTempo(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return
    analogRead(pinNumber);
}


void setup()
{
  pinMode( 13, OUTPUT);
  pinMode( 12, OUTPUT);
  Serial.begin(9600);
  Serial.println("Aperte no Botao para iniciar a obtencao dos dados");
  Serial.println();
}

void loop()
{
  funcaoA = __ardublockDigitalReadTempo(2);
  if (( ( ( funcaoA ) == ( HIGH ) ) && ( ( funcaoB ) == ( LOW ) ) ))
  {
    estado_botao = ( 1 - estado_botao ) ;
    delay( 500 );
    Auxiliar_LDR1 = HIGH ;
  }
  funcaoB = funcaoA ;
  TempoAux1 = millis() ;
  digitalWrite(13 , HIGH );
  digitalWrite(12 , HIGH );
  LDR_1 = __ardublockAnalogReadTempo(A0) ;
  LDR_2 = __ardublockAnalogReadTempo(A1) ;
  if (( ( estado_botao ) == ( 1 ) ))
  {
    TempoAux1 = millis() ;
    
    TempoFinal_1 = 0 ;
    while ( ( ( Auxiliar_LDR1 ) == ( HIGH ) ) )
    {
      Serial.print("Pronto para Iniciar...");
      Serial.print("");
      Serial.println();
      Auxiliar_LDR1 = LOW;
      MensagemFinal_1 = LOW;
      Ativador_Encerra = HIGH;
    }
    while ( ( ( LDR_1 ) <= ( 7 ) ) )
    {
      LDR_1 = __ardublockAnalogReadTempo(A0);
      TempoFinal_1 = ( millis() - TempoAux1 );
      MensagemFinal_1 = HIGH;
    }

    delay( 20 );
    while ( ( ( MensagemFinal_1 ) == ( HIGH ) ) )
    {
      Serial.print("Carregando...");
      Serial.println();
      Serial.print("Tempo (ms) - Carrinho 1      ;     Tempo (ms) - Carrinho 2");
      Serial.println();
      Serial.print(( TempoFinal_1  ));
      Serial.print("    ");
      Serial.print("                     ;              ");


      MensagemFinal_1 = LOW;
      LDR_2aux = HIGH;
      TempoFinal_1 = 0;
    }
    while (LDR_2aux == HIGH) {
      LDR_2 = __ardublockAnalogReadTempo(A1) ;
      TempoAux2 = millis();
      
      while ( ( ( LDR_2 ) <= ( 5 ) ) )
      {
        LDR_2 = __ardublockAnalogReadTempo(A1);
        TempoFinal_2 = ( millis() - TempoAux2 );
        MensagemFinal_2 = HIGH;
      }
      delay(20);
      while ( ( ( MensagemFinal_2 ) == ( HIGH ) ) )
      {
        Serial.print(( TempoFinal_2  ));
        Serial.print(" ");
        Serial.println();
        Serial.println();
        Auxiliar_LDR1 = HIGH;
        LDR_2aux = LOW;
        TempoFinal_2 = 0;
        MensagemFinal_2 = LOW;
      }
    }
  }
  if ((Ativador_Encerra == HIGH) && (estado_botao == 0)) {
    Serial.println();
    Serial.println("Finalizado.  ");
    Serial.println();
    Ativador_Encerra = LOW;
  }
}
