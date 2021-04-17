'use strict';

goog.provide('Blockly.Blocks.atto');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['atto_led_red'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_LED_Vm.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("LED Vermelho");
     this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino");		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Estado")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Led cor vermelho");
  }
};

Blockly.Blocks['atto_led_yellow'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_LED_A.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("LED Amarelo");
     this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino");		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Estado")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Led cor amarelo");
  }
};

Blockly.Blocks['atto_led_green'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/atto_led_vd.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("LED Verde");
     this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino");		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Estado")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Led cor verde");
  }
};

Blockly.Blocks['atto_led_rgb'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_LED_RGB.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("LED RGB");
     this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino");		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Estado")
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Led de 3 cores com portas de atuação 3, 10 e 11");
  }
};

Blockly.Blocks['atto_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);	
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
		
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Buzzer.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField('Atto Buzzer');
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino");	
    this.appendValueInput("NUM")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frequencia")
        .setCheck('Number');
    this.appendValueInput("TPS")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tempo")
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Emissor de sons");
  }
};

Blockly.Blocks['atto_servo'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Servo Motor");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Servo.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Servo Motor");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Digital");
  this.appendValueInput("PIN2")
  .setCheck('Number')
  .setAlign(Blockly.ALIGN_RIGHT)
  .appendField("ângulo");
  this.setInputsInline(false);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
  this.setTooltip("Potênciometro");
  }
};

Blockly.Blocks['atto_motor_dc'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_M1.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Motor DC");
    this.appendDummyInput()
	      .appendField("Direita")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["5/10", "10"], ["6/11", "11"]]), 'var_direita');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .appendField("Esquerda")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["6/11", "11"], ["5/10", "10"]]), 'var_esquerda');
        this.setInputsInline(false);
        		
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Movimento")
        .appendField(new Blockly.FieldDropdown([["Frente", "0"],["Trás", "1"],["Direita", "2"],["Esquerda", "3"],["Parado", "4"]]), 'var_movimento');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Tempo (s)")
        .appendField(new Blockly.FieldNumber("1"), 'var_tempo');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Carrinho com movimentos pré-determinados");
  }
};

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



Blockly.Blocks['atto_ldr'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_LDR.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto LDR");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Analógico");
    this.setOutput(true, 'Number');
    this.setTooltip("Sensor de Luminosidade");
  }
};

Blockly.Blocks['atto_button'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Button.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Botão");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Digital");
    this.setOutput(true, 'Number');
    this.setTooltip("Botão Chave táctil");
  }
};
Blockly.Blocks['atto_magnetico'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/atto_magnetico.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Magnético");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Digital");
    this.setOutput(true, 'Number');
    this.setTooltip("Sensor Magnético");
  }
};

Blockly.Blocks['atto_LM35'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Sensor de Temperatura");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_LM35.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto LM35");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Analógico");
    this.setOutput(true, 'Number');
    this.setTooltip("Sensor de Temperatura");
  }
};

Blockly.Blocks['atto_proximidade'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Sensor de Proximidade");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/atto_proximidade.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Proximidade");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Analógico");
    this.setOutput(true, 'Number');
    this.setTooltip("Sensor de proximidade");
  }
};

Blockly.Blocks['atto_seguidor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Sensor Seguidor de Linha");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Linha.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Seguidor de Linha");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Analógico");
    this.setOutput(true, 'Number');
    this.setTooltip("Sensor Seguidor de Linha com LDR");
  }
};

Blockly.Blocks['atto_potenciometro'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Potenciômetro");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Pot.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Potenciômetro");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Pino Analógico");
    this.setOutput(true, 'Number');
    this.setTooltip("Potênciometro");
  }
};

Blockly.Blocks['atto_ultrassonico'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl("Ultrassonico");
    this.appendDummyInput("")
        
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens/Atto_Ultrassonico.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Atto Ultrassônico");
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("trigger #");
  this.appendValueInput("PIN2")
  .setCheck('Number')
  .setAlign(Blockly.ALIGN_RIGHT)
  .appendField("echo #");
  this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Posição", "0"], ["Velocidade", "1"], ["Aceleração", "2"]]), "var_ultrass");
    this.setInputsInline(false);
    this.setOutput(true, 'Number');
    this.setTooltip("Potênciometro");
  }
};


/*Blockly.Blocks['robuno_led_blanche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_INOUT_LED_INPUT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LED_Blanche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT2);		
    this.setInputsInline(false);
	this.appendDummyInput()
		.setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.GROVE_INOUT_LED_INPUT3)
		.appendField(new Blockly.FieldDropdown(Blockly.Msg.FIELDDROPDOWN), 'STAT')
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_LED1_TOOLTIP);
  }
};

Blockly.Blocks['robuno_buzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);	
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
		.appendField(Blockly.Msg.ROBUNO_TEXT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Buzzer.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.BQ_PIN);	
    this.appendValueInput("NUM")
        .appendField(Blockly.Msg.ROBUNO_TEXT2)
        .setCheck('Number');
    this.appendValueInput("TPS")
        .appendField(Blockly.Msg.ROBUNO_TEXT3)
        .setCheck('Number');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_BUZZER1_TOOLTIP);
  }
};

Blockly.Blocks['robuno_servomoteur_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEA)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Servomoteur_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_PWM);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB);
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks['robuno_servomoteur_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLED)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Servomoteur_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_PWM);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEB);
	this.appendValueInput("VITESSE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_SERVO2_TITLEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_SERVO2_TOOLTIP);
  }
};

Blockly.Blocks['robuno_capteur_collision_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT4)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Capteur_Collision_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT5);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT7);
  }
};

Blockly.Blocks['robuno_capteur_collision_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT8)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/Capteur_Collision_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT5);
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT6);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT7);
  }
};

Blockly.Blocks['robuno_ldr_gauche'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_LUX_TITLE1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LDR_Gauche.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
	this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBUNO_LUX_TOOLTIP);
  }
};

Blockly.Blocks['robuno_ldr_droite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_LUX_TITLE2)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/robuno/LDR_Droite.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("PIN")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_PIN_ANALOG);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.ROBUNO_LUX_TOOLTIP);
  }
};

Blockly.Blocks['robuno_moteurs_CC'] = {
  init: function() {
    this.setColour(Blockly.Blocks.robuno.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.ROBUNO_TEXT9)
        .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "MOT")
        .appendField(Blockly.Msg.ROBUNO_TEXT10)
        .appendField(new Blockly.FieldImage("blocks/robuno/Shield_moteurs_CC.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
        //.appendField(Blockly.Msg.ROBUNO_TEXT11);
    this.appendValueInput("SENS")
		.setCheck('Boolean')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT14);  // inversion TEXT 14 -15 
    this.appendValueInput("VITESSE")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ROBUNO_TEXT15);  // inversion TEXT 14 -15         
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ROBUNO_TEXT16);
  }
};
*/
