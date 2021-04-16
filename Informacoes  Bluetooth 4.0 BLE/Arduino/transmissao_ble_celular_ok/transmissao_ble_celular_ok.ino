//  SerialIn_SerialOut_HM-10_01
//

#include <SoftwareSerial.h>
SoftwareSerial mySerial(2, 3); //RX,TX

void setup()
{
  Serial.begin(9600);

  mySerial.begin(9600);
}

void loop()
{
  // Read from the Bluetooth module and send to the Arduino Serial Monitor
     if (mySerial.available())
     {
         c = mySerial.read();
         Serial.write(c);
     }


     // Read from the Serial Monitor and send to the Bluetooth module
     if (Serial.available())
     {
         c = Serial.read();

         // do not send line end characters to the HM-10
         if (c!=10 & c!=13 )
         {
              mySerial.write(c);
         }

         // Echo the user input to the main window.

         if (NL) { Serial.print("\r\n>");  NL = false; }
         Serial.write(c);
         if (c==10) { NL = true; }
     }
 /* int teste = 10;

  for (teste; teste < 200; teste = teste + 10) {
    // String Xteste = String(teste, HEX);
    //mySerial.write(teste);
    // mySerial.write(0x00);
    mySerial.println(teste);
    delay(500);*/

  }
}
