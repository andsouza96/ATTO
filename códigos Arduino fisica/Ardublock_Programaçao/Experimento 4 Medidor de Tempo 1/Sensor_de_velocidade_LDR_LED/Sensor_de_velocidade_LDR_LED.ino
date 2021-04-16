

boolean ardublockDigitalRead_1(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return digitalRead(pinNumber);
}

int ardublockAnalogRead_1(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return analogRead(pinNumber);
}

bool Funcao_A= false;
bool Funcao_B= false;
bool Auxiliar_1= false;
bool MensagemFinal_1= false;
bool Ativador_Encerra = LOW;
int Estado_1 = 0;
int TempoAux_1 = 0;
int TempoFinal_1 = 0;
double LDR_1 = 0.0;


void setup()
{
  pinMode( 12, OUTPUT);
  Serial.begin(9600);
  Serial.println("Aperte no Botao para iniciar a obtencao dos dados"); 
  Serial.println();
}

void loop()
{
  digitalWrite(12 , HIGH );
  
  Funcao_A = ardublockDigitalRead_1(13) ;
  if (( ( ( Funcao_A ) == ( HIGH ) ) && ( ( Funcao_B ) == ( LOW ) ) ))
  {
    Estado_1 = ( 1 - Estado_1 ) ;
    delay( 500 );
    Auxiliar_1 = HIGH ;
  }
  Funcao_B = Funcao_A ;
  
  TempoAux_1 = millis() ;
   
  LDR_1 = ardublockAnalogRead_1(A0) ;
  if (( ( Estado_1 ) == ( 1 ) ))
  {
    TempoAux_1 = millis() ;
    TempoFinal_1 = 0 ;
    while ( ( ( Auxiliar_1 ) == ( HIGH ) ) )
    {
      Serial.print("Pronto para Iniciar...");
      Serial.print(" ");
      Serial.println();
      Ativador_Encerra = HIGH;
      Auxiliar_1 = LOW ;
      MensagemFinal_1 = LOW ;
    }

    while ( ( ( LDR_1 ) == ( 0 ) ) )
    {
      LDR_1 = ardublockAnalogRead_1(A0) ;
      TempoFinal_1 = ( millis() - TempoAux_1 ) ;
      MensagemFinal_1 = HIGH ;
    }

    delay( 20 );
    while ( ( ( MensagemFinal_1 ) == ( HIGH ) ) )
    {
      Serial.print("Carregando...\n\n");
      delay( 1000 );
      Serial.print("Tempo Final: ");
      Serial.print(( TempoFinal_1 / 1000.0 ));
      Serial.print(" Segundos \n\n");

      Auxiliar_1 = HIGH ;
      MensagemFinal_1 = LOW ;
      TempoFinal_1 = 0 ;
    }

  }

  if((Ativador_Encerra == HIGH) && (Estado_1 == 0)){
    Serial.println("\nFinalizado. \n");
    Ativador_Encerra = LOW;
    }
}
