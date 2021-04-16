int __ardublockAnalogRead(int pinNumber)
{
  pinMode(pinNumber, INPUT);
  return analogRead(pinNumber);
}



void setup()
{
  pinMode( 9, OUTPUT);
  Serial.begin(9600);
}

void loop()
{
  digitalWrite(9 , HIGH ); 
  Serial.print("mensagem");
  Serial.print(" ");
  Serial.print(__ardublockAnalogRead(A0));
  Serial.print(" ");
  Serial.println();
  delay( 100 );
}


