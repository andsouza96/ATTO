
//www.technologieservices.fr/fr/a-a1000022060-edc1000003/article/RUSA-Robot-RobUno-a-servomoteurs.html
'use strict';

goog.provide('Blockly.Blocks.atto');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

// define blocks

Blockly.Blocks['atto_lei_hooke'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Lei_de_hooke.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Lei de Hooke");
    this.appendDummyInput()
	      .appendField("Botão Zera")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D13", "13"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"],]), 'var_zera');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .appendField("Botão Liga")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D12", "12"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D13", "13"],]), 'var_liga');
        this.setInputsInline(false);
        		
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Ultrassonico")
        .appendField(new Blockly.FieldDropdown([["9", "9"]]), 'var_ultrassonico');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frequencia (Hz)")
        .appendField(new Blockly.FieldNumber("5"), 'var_frequencia');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a Lei de Hooke");
  }
};

Blockly.Blocks['atto_conservacao_ener'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Atto_Conserv_Energ.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Conservação de Energia");
    this.appendDummyInput()
	      .appendField("Botão Lig/Deslig.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3", "3"],["D2", "2"],]), 'var_lig');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .appendField("Led")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D12", "12"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D13", "13"],]), 'var_led');
        this.setInputsInline(false);
        		
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("LDR")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"],["A4", "A4"],["A5", "A5"],]), 'var_ldr');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Luminosidade do Sensor")
        .appendField(new Blockly.FieldNumber("10"), 'var_luminosidade');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a Lei de Hooke");
  }
};


Blockly.Blocks['atto_mru'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/MRU.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("MRU");

    this.appendDummyInput()
        .appendField("Botao Lig/Desl")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D12", "12"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D13", "13"],]), 'var_liga');
        this.setInputsInline(false);
    
    this.appendDummyInput()
	      .appendField("Motor Direita")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["5/10", "10"], ["6/11", "11"]]), 'var_direita');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .appendField("Motor Esquerda")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["6/11", "11"], ["5/10", "10"]]), 'var_esquerda');
        this.setInputsInline(false);

    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Potenciometro")
        .appendField(new Blockly.FieldDropdown([["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"],["A4", "A4"],["A5", "A5"],]), 'var_potenciometro');
        this.setInputsInline(false);

    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Ultrassonico")
        .appendField(new Blockly.FieldDropdown([["9", "9"]]), 'var_ultrassonico');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frequencia (Hz)")
        .appendField(new Blockly.FieldNumber("50"), 'var_frequencia');
        
    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');
            
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a Movimento Retilíneo Uniforme");
  }
};


Blockly.Blocks['atto_osci_blue'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Lei_de_hooke.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Oscilação Bluetooth");
    this.appendDummyInput()
	      .appendField("Botão Zera")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D13", "13"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"],]), 'var_zera');
        this.setInputsInline(false);
        
    this.appendDummyInput()
        .appendField("Botão Liga")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D12", "12"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D13", "13"],]), 'var_liga');
        this.setInputsInline(false);
        		
    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Ultrassonico")
        .appendField(new Blockly.FieldDropdown([["9", "9"]]), 'var_ultrassonico');

    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frequencia (Hz)")
        .appendField(new Blockly.FieldNumber("5"), 'var_frequencia');
    
    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a Oscilação");
  }
};


Blockly.Blocks['atto_lei_newton'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/segLeiNewton.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("2a Lei de Newton");
    this.appendDummyInput()
	      .appendField("Botão Lig/Deslig.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3", "3"],["D2", "2"],]), 'var_liga');
        this.setInputsInline(false);

    this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField("Ultrassonico")
        .appendField(new Blockly.FieldDropdown([["9", "9"]]), 'var_ultrassonico');
        
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Distância (cm)")
        .appendField(new Blockly.FieldNumber("30"), 'var_distancia');

    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D5/4", "5"],["D3/2", "3"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a 2a Lei de Newton");
  }
};



Blockly.Blocks['atto_forca_osci'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Atto_Osci_Forca.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Força Oscilação");
    this.appendDummyInput()
	      .appendField("Botão Liga")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D13", "13"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"],]), 'var_liga');
        this.setInputsInline(false);
        
    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D9/8", "9"],["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');

    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_forca');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a Oscilação através da Força");
  }
};


Blockly.Blocks['atto_forca_ang'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Atto_Forc_Ang.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Força em Ângulo");
    this.appendDummyInput()
	      .appendField("Botão Liga")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D13", "13"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"],]), 'var_liga');
        this.setInputsInline(false);
        
    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D9/8", "9"],["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');

    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_forca');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a força exercida quando um corpo varia o ângulo de tração");
  }
};

Blockly.Blocks['atto_forca_atrito'] = {
  init: function() {
    this.setColour(Blockly.Blocks.atto.HUE);
	this.setHelpUrl(Blockly.Msg.ROBUNO_HELPURL);
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/Atto/Imagens_Fisica/Atto_Atrito.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
        .appendField("Força Atrito");
    this.appendDummyInput()
	      .appendField("Botão Liga")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D13", "13"],["D1", "1"], ["D2", "2"], ["D3", "3"], ["D4", "4"], ["D5", "5"],["D6", "6"], ["D7", "7"], ["D8", "8"], ["D9", "9"], ["D10", "10"], ["D11", "11"], ["D12", "12"],]), 'var_liga');
        this.setInputsInline(false);
        
    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D9/8", "9"],["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D11/10", "11"],["D13/12", "13"],]), 'var_bluetooth');

    this.appendDummyInput()
	      .appendField("Bluetooth.")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["D3/2", "3"],["D5/4", "5"],["D7/6", "7"],["D9/8", "9"],["D11/10", "11"],["D13/12", "13"],]), 'var_forca');

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
        .appendField("Distância (cm)")
        .appendField(new Blockly.FieldNumber("160"), 'var_distancia');
        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Experimento sobre a força de atrito");
  }
};