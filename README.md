# ATTO
Arquivos produzidos para ATTO Educacional

Este README será explicado sobre como criar um bloco no ATTOBlock que tem como nome original "blocklyArduino_AIO".

######################################################################################################

                              1. ARQUIVO PARA CRIAR AS ENTRADAS DE UM BLOCO
                             
######################################################################################################                             


Acesse a pasta "B@electron" -> "www" -> "blocks" 

Entrar na pasta "atto" ou criar uma nova pasta para um novo projeto de blocos.

Acessar o arquivo atto.js -> este arquivo é para criação das conexões do bloco, com definição dos nomes de cada INPUT e também da imagem que irá aparecer dentro do bloco.

Código de exemplo para criação de um bloco de motor dc simples


```javascript
Blockly.Blocks['atto_motor_dc_simples'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_M2.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Motor DC");
    this.appendDummyInput()
	      .appendField("Pino")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["5/10", "10"], ["6/11", "11"]]), 'var_pino');
        this.setInputsInline(false);
        		
        this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tempo (s)")
        .appendField(new Blockly.FieldNumber("255"), 'var_veloc');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tempo (s)")
        .appendField(new Blockly.FieldNumber("1"), 'var_tempo');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Carrinho com movimentos pré-determinados");
  }
};
```

O nome deste bloco é definido na primeira linha como 'atto_motor_dc_simples'

Para criar uma entrada neste bloco é utilizado a linha

>this.appendDummyInput()

e dentro dessa entrada é definido um nome que irá aparecer no bloco com o seguinte código

>.appendField("Pino")

Posteriormente é definido o alinhamento desta entrada dentro do bloco, podendo ser a esquerda, centralizado ou a direita utilizando:

>.setAlign(Blockly.ALIGN_RIGHT)

depois vem o valor de entrada deste pino que também será apresentado no bloco:

>.appendField(new Blockly.FieldDropdown([["5/10", "10"], ["6/11", "11"]]), 'var_pino');

onde é criado um novo tipo de bloco dentro desta entrada. Este novo bloco tem várias opções de escolha do valor de entrada, porém neste caso é apenas duas opções de entrada,
onde a primeira delas é representada por dois valores também, sendo o primeiro "5/10" e este valor é mostrado visualmente no bloco, e o segundo valor de "10" é o que é passado
para a variável final chamada de 'var_pino'. 
Esta variável final será utilizada no próximo arquivo que iremos analisar logo adiante para implementar o código do arduino.

######################################################################################################

                          2. ARQUIVO PARA COLOCAR O CÓDIGO DO ARDUINO

######################################################################################################

Entrar na pasta "generators" -> "arduino"

Acessar o arquivo "atto.js" 


``` javascript
Blockly.Arduino.atto_motor_dc_simples = function() {

  var dropdown_pin = this.getFieldValue('var_pino');
  var var_aux_dir ;
  if(dropdown_pin == 10){
    var_aux_dir = 5;
  }
  else if(dropdown_pin == 11){
    var_aux_dir = 6;
  }
  
  var dropdown_pin3 = this.getFieldValue('var_veloc');
  var dropdown_pin4_aux = this.getFieldValue('var_tempo');
  var dropdown_pin4 = dropdown_pin4_aux*1000;


  Blockly.Arduino.definitions_["atto"] = "";
  Blockly.Arduino.setups_["atto"] = 'pinMode('+dropdown_pin+', OUTPUT);';

  var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';

  if(dropdown_pin3 > 0){
    var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 < 0){
    var code = ' digitalWrite('+dropdown_pin+', LOW);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  else if(dropdown_pin3 == 0){
    var code = ' digitalWrite('+dropdown_pin+', HIGH);  \n  analogWrite( '+var_aux_dir+' ,255); \n  delay('+dropdown_pin4+'); \n';
  }
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

```
Na primeira linha é utilizado o código abaixo onde tem o mesmo nome que foi dado para o bloco no primeiro arquivo.

>Blockly.Arduino.atto_motor_dc_simples = function() {

Na segunda linha de código podemos perceber que o nome que foi dado no primeiro arquivo de 'var_pino' para armazenar o valor de "10" está relacionado nesta linha 
>  var dropdown_pin = this.getFieldValue('var_pino');

E o valor de 10 ou outro valor que é colocado no primeiro arquivo, agora é passado para a variavel "dropdown_pin", e essa variável é utilizado no código de arduino.

Esse mesmo raciocínio segue para as outras entradas que são criadas no bloco.

* Ainda na pasta "generators"

abra o arquivo 'arduino_resume.js' e coloque em o caminho do arquivo criado anteriormente:

```javascript
head.load(
"generators/arduino/atto.js",
...
```

######################################################################################################

                   3. ARQUIVO PARA QUE OS BLOCOS FIQUEM VISÍVEIS NO PROGRAMA

######################################################################################################

Acesse a pasta "toolbox" 

Abra inicialmente o arquivo "toolbox_none.xml" e no parametro id insira a palavra 'Atto'

><parametre id="defaultCategories">CAT_LOGIC,CAT_LOOPS,CAT_MATH,CAT_ARRAY,CAT_TEXT,CAT_VARIABLES,CAT_FUNCTIONS,Atto</parametre>

no final do código crie uma categoria com o mesmo nome mencionado acima. Essa categoria irá criar um espaço no programa para inserir os blocos criados anteriormente. Segue o exemplo:

```javascript
<category name="Atto" colour="#00979D">
		<category name="Atto Saida" colour="#00979D">
        <block type="atto_motor_dc_simples">
            <value name="var_direita">
              <shadow type="math_number">
                <field name="NUM">6</field>
              </shadow>
            </value>
        </block>
    </category>
 </category>
```

Aconselho que todos os blocos sejam criados inicialmente neste arquivo "toolbox_none.xml" e depois de todos prontos copiar e colar para os arquivos

- tootlbox_arduino_1
- tootlbox_arduino_2
- tootlbox_arduino_3
- tootlbox_arduino_3_functions
- tootlbox_arduino_4
- tootlbox_arduino_4_functions
- tootlbox_arduino_all

e todos os outros arquivos que queira que os blocos fiquem visíveis.





