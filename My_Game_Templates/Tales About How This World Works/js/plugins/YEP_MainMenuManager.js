//=============================================================================
// Yanfly Engine Plugins - Main Menu Core
// YEP_MainMenuManager.js
// Traducción al español: Rekiem
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MainMenuManager = true;

var Yanfly = Yanfly || {};
Yanfly.MMM = Yanfly.MMM || {};

//=============================================================================
 /*:
 * @plugindesc v1.02 Este plugin le permite administrar los diversos 
 * aspectos de su menú principal.
 * @author Yanfly Engine Plugins (Es)
 *
 * @param ---Command---
 * @default
 *
 * @param Command Alignment
 * @desc Esta es la alineación del texto de la ventana de comandos.
 * left(Izquierda)     center(Centro)     right(Derecha)
 * @default left
 *
 * @param Command Position
 * @desc Determina la posición de la ventana de comandos.
 * left(Izquierda)     right(Derecha)
 * @default left
 *
 * @param Command Columns
 * @desc Cantidad de columnas que se mostrarán en la ventana de 
 * comandos.  Por defecto: 1
 * @default 1
 *
 * @param Command Rows
 * @desc El número de filas visibles de la ventana de comandos.
 * @default Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))
 *
 * @param Command Width
 * @desc Este es el ancho de la ventana de comandos en píxeles.
 * Por defecto: 240
 * @default 240
 *
 * @param Hide Actor Window
 * @desc ¿Quiere ocultar la ventana del actor principal ?
 * NO - false     SI - true
 * @default false
 *
 * @param Hide Gold Window
 * @desc ¿Quiere ocultar la ventana de oro?
 * NO - false     SI - true
 * @default false
 *
 * @param Blurry Background
 * @desc ¿Usted desea tener un fondo borroso?
 * NO - false     SI - true     Por defecto: true
 * @default true
 *
 * @param ---Menu 1---
 * @default
 *
 * @param Menu 1 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval. 
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 1 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 1 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 1 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 1 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 1 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 1 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 2---
 * @default
 *
 * @param Menu 2 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 2 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 2 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 2 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 2 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 2 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 2 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 3---
 * @default
 *
 * @param Menu 3 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 3 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 3 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 3 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 3 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 3 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 3 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 4---
 * @default
 *
 * @param Menu 4 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 4 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 4 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 4 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 4 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 4 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 4 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 5---
 * @default
 *
 * @param Menu 5 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 5 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 5 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 5 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 5 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 5 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 5 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 6---
 * @default
 *
 * @param Menu 6 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 6 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 6 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 6 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 6 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 6 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 6 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 7---
 * @default
 *
 * @param Menu 7 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 7 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 7 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 7 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 7 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 7 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 7 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 8---
 * @default
 *
 * @param Menu 8 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 8 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 8 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 8 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 8 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 8 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 8 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 9---
 * @default
 *
 * @param Menu 9 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 9 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 9 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 9 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 9 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 9 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 9 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 10---
 * @default
 *
 * @param Menu 10 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.item
 *
 * @param Menu 10 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default item
 *
 * @param Menu 10 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('item')
 *
 * @param Menu 10 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 10 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 10 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandItem.bind(this)
 *
 * @param Menu 10 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 11---
 * @default
 *
 * @param Menu 11 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 11 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 11 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 11 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 11 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 11 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 11 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 12---
 * @default
 *
 * @param Menu 12 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 12 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 12 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 12 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 12 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 12 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 12 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 13---
 * @default
 *
 * @param Menu 13 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 13 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 13 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 13 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 13 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 13 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 13 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 14---
 * @default
 *
 * @param Menu 14 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 14 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 14 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 14 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 14 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 14 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 14 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 15---
 * @default
 *
 * @param Menu 15 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.skill
 *
 * @param Menu 15 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default skill
 *
 * @param Menu 15 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('skill')
 *
 * @param Menu 15 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 15 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 15 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 15 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default SceneManager.push(Scene_Skill)
 *
 * @param ---Menu 16---
 * @default
 *
 * @param Menu 16 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 16 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 16 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 16 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 16 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 16 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 16 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 17---
 * @default
 *
 * @param Menu 17 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 17 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 17 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 17 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 17 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 17 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 17 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 18---
 * @default
 *
 * @param Menu 18 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 18 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 18 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 18 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 18 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 18 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 18 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 19---
 * @default
 *
 * @param Menu 19 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 19 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 19 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 19 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 19 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 19 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 19 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 20---
 * @default
 *
 * @param Menu 20 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.equip
 *
 * @param Menu 20 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default equip
 *
 * @param Menu 20 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('equip')
 *
 * @param Menu 20 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 20 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 20 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 20 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default SceneManager.push(Scene_Equip)
 *
 * @param ---Menu 21---
 * @default
 *
 * @param Menu 21 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 21 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 21 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 21 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 21 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 21 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 21 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 22---
 * @default
 *
 * @param Menu 22 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 22 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 22 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 22 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 22 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 22 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 22 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 23---
 * @default
 *
 * @param Menu 23 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 23 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 23 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 23 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 23 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 23 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 23 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 24---
 * @default
 *
 * @param Menu 24 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 24 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 24 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 24 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 24 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 24 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 24 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 25---
 * @default
 *
 * @param Menu 25 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default Yanfly.Param.CCCCmdName
 *
 * @param Menu 25 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default class
 *
 * @param Menu 25 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()
 *
 * @param Menu 25 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default $gameSystem.isEnableClass() && this.areMainCommandsEnabled()
 *
 * @param Menu 25 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 25 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 25 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default SceneManager.push(Scene_Class)
 *
 * @param ---Menu 26---
 * @default
 *
 * @param Menu 26 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 26 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 26 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 26 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 26 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 26 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 26 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 27---
 * @default
 *
 * @param Menu 27 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 27 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 27 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 27 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 27 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 27 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 27 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 28---
 * @default
 *
 * @param Menu 28 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 28 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 28 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 28 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 28 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 28 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 28 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 29---
 * @default
 *
 * @param Menu 29 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 29 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 29 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 29 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 29 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 29 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 29 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 30---
 * @default
 *
 * @param Menu 30 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 30 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 30 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 30 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 30 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 30 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 30 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 31---
 * @default
 *
 * @param Menu 31 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 31 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 31 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 31 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 31 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 31 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 31 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 32---
 * @default
 *
 * @param Menu 32 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 32 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 32 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 32 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 32 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 32 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 32 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 33---
 * @default
 *
 * @param Menu 33 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 33 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 33 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 33 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 33 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 33 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 33 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 34---
 * @default
 *
 * @param Menu 34 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 34 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 34 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 34 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 34 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 34 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 34 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 35---
 * @default
 *
 * @param Menu 35 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 35 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 35 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 35 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 35 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 35 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 35 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 36---
 * @default
 *
 * @param Menu 36 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 36 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 36 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 36 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 36 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 36 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 36 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 37---
 * @default
 *
 * @param Menu 37 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 37 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 37 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 37 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 37 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 37 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 37 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 38---
 * @default
 *
 * @param Menu 38 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 38 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 38 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 38 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 38 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 38 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 38 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 39---
 * @default
 *
 * @param Menu 39 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 39 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 39 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 39 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 39 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 39 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 39 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 40---
 * @default
 *
 * @param Menu 40 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 40 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 40 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 40 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 40 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 40 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 40 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 41---
 * @default
 *
 * @param Menu 41 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 41 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 41 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 41 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 41 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 41 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 41 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 42---
 * @default
 *
 * @param Menu 42 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 42 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 42 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 42 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 42 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 42 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 42 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 43---
 * @default
 *
 * @param Menu 43 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 43 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 43 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 43 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 43 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 43 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 43 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 44---
 * @default
 *
 * @param Menu 44 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 44 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 44 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 44 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 44 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 44 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 44 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 45---
 * @default
 *
 * @param Menu 45 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 45 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 45 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 45 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 45 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 45 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 45 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 46---
 * @default
 *
 * @param Menu 46 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 46 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 46 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 46 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 46 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 46 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 46 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 47---
 * @default
 *
 * @param Menu 47 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 47 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 47 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 47 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 47 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 47 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 47 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 48---
 * @default
 *
 * @param Menu 48 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 48 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 48 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 48 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 48 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 48 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 48 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 49---
 * @default
 *
 * @param Menu 49 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 49 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 49 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 49 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 49 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 49 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 49 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 50---
 * @default
 *
 * @param Menu 50 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.status
 *
 * @param Menu 50 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default status
 *
 * @param Menu 50 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('status')
 *
 * @param Menu 50 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 50 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 50 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 50 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default SceneManager.push(Scene_Status)
 *
 * @param ---Menu 51---
 * @default
 *
 * @param Menu 51 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 51 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 51 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 51 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 51 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 51 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 51 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 52---
 * @default
 *
 * @param Menu 52 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 52 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 52 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 52 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 52 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 52 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 52 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 53---
 * @default
 *
 * @param Menu 53 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 53 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 53 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 53 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 53 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 53 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 53 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 54---
 * @default
 *
 * @param Menu 54 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 54 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 54 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 54 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 54 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 54 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 54 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 55---
 * @default
 *
 * @param Menu 55 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.formation
 *
 * @param Menu 55 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default formation
 *
 * @param Menu 55 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('formation')
 *
 * @param Menu 55 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.isFormationEnabled()
 *
 * @param Menu 55 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 55 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandFormation.bind(this)
 *
 * @param Menu 55 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 56---
 * @default
 *
 * @param Menu 56 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 56 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 56 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 56 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 56 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 56 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 56 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 57---
 * @default
 *
 * @param Menu 57 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 57 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 57 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 57 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 57 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 57 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 57 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 58---
 * @default
 *
 * @param Menu 58 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 58 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 58 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 58 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 58 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 58 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 58 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 59---
 * @default
 *
 * @param Menu 59 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 59 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 59 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 59 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 59 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 59 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 59 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 60---
 * @default
 *
 * @param Menu 60 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 60 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 60 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 60 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 60 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 60 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 60 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 61---
 * @default
 *
 * @param Menu 61 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 61 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 61 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 61 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 61 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 61 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 61 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 62---
 * @default
 *
 * @param Menu 62 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 62 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 62 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 62 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 62 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 62 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 62 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 63---
 * @default
 *
 * @param Menu 63 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 63 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 63 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 63 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 63 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 63 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 63 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 64---
 * @default
 *
 * @param Menu 64 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 64 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 64 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 64 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 64 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 64 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 64 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 65---
 * @default
 *
 * @param Menu 65 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 65 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 65 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 65 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 65 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 65 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 65 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 66---
 * @default
 *
 * @param Menu 66 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 66 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 66 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 66 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 66 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 66 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 66 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 67---
 * @default
 *
 * @param Menu 67 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 67 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 67 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 67 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 67 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 67 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 67 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 68---
 * @default
 *
 * @param Menu 68 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 68 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 68 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 68 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 68 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 68 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 68 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 69---
 * @default
 *
 * @param Menu 69 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 69 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 69 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 69 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 69 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 69 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 69 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 70---
 * @default
 *
 * @param Menu 70 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 70 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 70 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 70 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 70 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 70 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 70 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 71---
 * @default
 *
 * @param Menu 71 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 71 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 71 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 71 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 71 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 71 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 71 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 72---
 * @default
 *
 * @param Menu 72 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 72 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 72 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 72 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 72 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 72 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 72 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 73---
 * @default
 *
 * @param Menu 73 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 73 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 73 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 73 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 73 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 73 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 73 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 74---
 * @default
 *
 * @param Menu 74 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 74 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 74 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 74 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 74 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 74 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 74 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 75---
 * @default
 *
 * @param Menu 75 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 75 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 75 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 75 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 75 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 75 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 75 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 76---
 * @default
 *
 * @param Menu 76 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 76 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 76 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 76 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 76 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 76 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 76 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 77---
 * @default
 *
 * @param Menu 77 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 77 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 77 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 77 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 77 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 77 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 77 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 78---
 * @default
 *
 * @param Menu 78 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 78 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 78 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 78 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 78 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 78 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 78 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 79---
 * @default
 *
 * @param Menu 79 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 79 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 79 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 79 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 79 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 79 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 79 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 80---
 * @default
 *
 * @param Menu 80 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 80 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 80 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 80 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 80 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 80 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 80 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 81---
 * @default
 *
 * @param Menu 81 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default 'Common Event 1'
 *
 * @param Menu 81 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default common event
 *
 * @param Menu 81 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default false
 *
 * @param Menu 81 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default true
 *
 * @param Menu 81 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default 1
 *
 * @param Menu 81 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 81 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 82---
 * @default
 *
 * @param Menu 82 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default 'Common Event 2'
 *
 * @param Menu 82 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default common event
 *
 * @param Menu 82 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default false
 *
 * @param Menu 82 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default true
 *
 * @param Menu 82 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default 2
 *
 * @param Menu 82 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 82 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 83---
 * @default
 *
 * @param Menu 83 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default 'Common Event 3'
 *
 * @param Menu 83 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default common event
 *
 * @param Menu 83 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default false
 *
 * @param Menu 83 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default true
 *
 * @param Menu 83 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default 3
 *
 * @param Menu 83 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 83 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 84---
 * @default
 *
 * @param Menu 84 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 84 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 84 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 84 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 84 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 84 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 84 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 85---
 * @default
 *
 * @param Menu 85 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 85 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 85 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 85 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 85 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 85 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 85 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 86---
 * @default
 *
 * @param Menu 86 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 86 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 86 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 86 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 86 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 86 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 86 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 87---
 * @default
 *
 * @param Menu 87 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 87 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 87 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 87 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 87 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 87 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 87 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 88---
 * @default
 *
 * @param Menu 88 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 88 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 88 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 88 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 88 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 88 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 88 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 89---
 * @default
 *
 * @param Menu 89 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 89 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 89 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 89 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 89 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 89 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 89 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 90---
 * @default
 *
 * @param Menu 90 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.options
 *
 * @param Menu 90 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default options
 *
 * @param Menu 90 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('options')
 *
 * @param Menu 90 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.isOptionsEnabled()
 *
 * @param Menu 90 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 90 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandOptions.bind(this)
 *
 * @param Menu 90 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 91---
 * @default
 *
 * @param Menu 91 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 91 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 91 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 91 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 91 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 91 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 91 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 92---
 * @default
 *
 * @param Menu 92 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 92 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 92 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 92 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 92 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 92 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 92 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 93---
 * @default
 *
 * @param Menu 93 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 93 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 93 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 93 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 93 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 93 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 93 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 94---
 * @default
 *
 * @param Menu 94 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 94 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 94 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 94 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 94 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 94 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 94 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 95---
 * @default
 *
 * @param Menu 95 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.save
 *
 * @param Menu 95 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default save
 *
 * @param Menu 95 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default this.needsCommand('save')
 *
 * @param Menu 95 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.isSaveEnabled()
 *
 * @param Menu 95 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 95 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandSave.bind(this)
 *
 * @param Menu 95 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 96---
 * @default
 *
 * @param Menu 96 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 96 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 96 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 96 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 96 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 96 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 96 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 97---
 * @default
 *
 * @param Menu 97 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 97 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 97 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 97 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 97 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 97 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 97 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 98---
 * @default
 *
 * @param Menu 98 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default
 *
 * @param Menu 98 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default
 *
 * @param Menu 98 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default
 *
 * @param Menu 98 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default
 *
 * @param Menu 98 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 98 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default
 *
 * @param Menu 98 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 99---
 * @default
 *
 * @param Menu 99 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default 'Debug'
 *
 * @param Menu 99 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default debug
 *
 * @param Menu 99 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default $gameTemp.isPlaytest()
 *
 * @param Menu 99 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default true
 *
 * @param Menu 99 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 99 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandDebug.bind(this)
 *
 * @param Menu 99 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @param ---Menu 100---
 * @default
 *
 * @param Menu 100 Name
 * @desc Este es el nombre para el comando de menú. Este es un eval.
 * Para hacerlo en string, use 'quotes' alrededor del nombre.
 * @default TextManager.gameEnd
 *
 * @param Menu 100 Symbol
 * @desc Este es el símbolo para el comando de menú. Esto tiene que
 * ser único para cada comando de menú.
 * @default gameEnd
 *
 * @param Menu 100 Show
 * @desc Esta es la condición eval para que este comando de menú aparezca.
 * @default true
 *
 * @param Menu 100 Enabled
 * @desc Este comando de menú está habilitado? Este es un eval.
 * @default this.isGameEndEnabled()
 *
 * @param Menu 100 Ext
 * @desc Esta es la extensión de comando de menú. Este es un eval.
 * @default
 *
 * @param Menu 100 Main Bind
 * @desc Esta es la función activada por este comando de menú.
 * Este es un eval.
 * @default this.commandGameEnd.bind(this)
 *
 * @param Menu 100 Actor Bind
 * @desc Si el comando de menú conduce a seleccionar un actor, esta
 * es la función activada después de seleccionar un actor.
 * @default
 *
 * @help
 * ============================================================================
 * Introducción
 * ============================================================================
 *
 * Para aquellos que quieran alterar los varios aspectos de los comandos del
 * menú principal sin necesitar tocar el código fuente, pueden usar este plugin
 * para hacer eso. Aunque este plugin principalmente transporta el proceso de
 * creación de menú para los parámetros del Pugin Manager, que le permite una
 * forma más limpia de manejar el proceso de controlar el comando de menú.
 *
 * ============================================================================
 * Como usar este Plugin
 * ============================================================================
 *
 * Cada sección en los parámetros está dividida en varias partes. Cada una de
 * esas partes desempeña un papel en cómo funciona el comando de menú. Aquí
 * esta lo que cada parte hace:
 *
 * Name
 * - Este es el comando que aparece visualmente en el menú principal. Esto es
 * un eval, lo que significa, es dirigido por código, Si usted quiere hacer
 * que el comando aparezca como el es, use 'aspas' a su alrededor.
 *
 * Symbol
 * - Este es el identificador para el comando. Cada comando debe tener un 
 * símbolo único, para no causar conflictos con cada comando. Sin embargo, los 
 * símbolos compartidos son perfectamente aceptables desde que usted no le 
 * importe que ellos realicen la misma función cuando son seleccionados.
 *
 * Show
 * - Esta es una condición eval por si el comando aparece en el menú principal
 * o no. Si usted quiere que esto siempre aparezca, simplemente use 'true' sin
 * las comillas.
 *
 * Enabled
 * - Esto es una condición eval por si el comando está habilitado o no. La
 * diferencia entre mostrar un comando y habilitar un comando es que un comando
 * puede mostrar, mas el no puede ser seleccionado porque el no está habilitado
 * Si usted quiere que este comando siempre este habilitado, use 'true' sin las
 * comillas.
 *
 * Ext
 * - Significa extensión. Esto sirve como un símbolo secundario para el comando
 * y el puede ser usado para prácticamente todo. El no tiene ningún impacto 
 * directo en el comando a no ser que el objetivo del comando es relacionado a
 * el valor de extensión. La mayoría de los comandos no precisan hacer uso del
 * del valor Ext.
 *
 * Main Bind
 * - Esta es una función eval es para ser ejecutada cuando este comando es
 * seleccionado directamente desde el menú principal. La función que se va a 
 * enlazar a este comando tiene que ser accesible desde el Scene_Menu de una
 * forma u otra. Para comandos que tienen el propósito de seleccionar un 
 * personaje primero, use 'this.commandItem.bind(this)' sin comillas.
 *
 * Actor Bind
 * - Esta es una función eval que es para ser ejecutada cuando el personaje es
 * seleccionado después de escoger este comando, normalmente para empujar una
 * escena Esta función no es necesaria para ningún comando de menú que no
 * requiera seleccionar un personaje.
 *
 * ============================================================================
 * Ejemplos
 * ============================================================================
 *
 * Los siguientes son algunos ejemplos para ayudarle a añadir/alterar/cambiar
 * la forma con que los comandos aparecen en el menú principal.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.item
 *     Symbol: item
 *       Show: this.needsCommand('item')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandItem.bind(this)
 * Actor Bind:
 *
 * El comando de item se hace usando el ejemplo anterior. 'TextManager.item' es
 * como aparecerá el nombre del comando. El llama la información del nombre de
 * entrada del Text Manager en el banco de datos para 'Item' el usa cualquier
 * cosa que usted ponga allí en la base de datos. El símbolo 'item' es usado 
 * para hacer al identificador único del comando de item. Para mostrar el
 * comando, el va a ejecutar una función 'needsCommand' para comprobar si va
 * a aparecer. Esta función 'needsCommand' es relacionada a su banco de datos 
 * sobre si desea o no que el item parezca allí. Para habilitar este comando,
 * se comprobara si los comandos principales están o no habilitados, lo cual
 * esta relacionado con que si hay o no personajes en el grupo actual. Y
 * finalmente, la línea de código 'this.commandItem.bind(this)' es el comando
 * que va a ejecutar después de que la entrada de item sea seleccionada.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.skill
 *     Symbol: skill
 *       Show: this.needsCommand('skill')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandPersonal.bind(this)
 * Actor Bind: SceneManager.push(Scene_Skill)
 *
 * El comando de habilidad se hace usando el ejemplo anterior. 
 * 'TextManger.skill' es como el nombre del comando va a aparecerá. Se señala 
 * la información del nombre de entrada del Text Manager en el banco de datos 
 * por 'Skill' y usa cualquier cosa que pongas en el banco de datos allí. El 
 * símbolo 'skill' es usado para hacer el identificador único del comando de
 * habilidad. Para mostrar el comando, el ejecutara una función 'needsCommand'
 * para comprobar si va a aparecer. Esta función 'needsCommand' se relaciona
 * con su base de datos y si usted quiere o no que la opción de habilidad
 * aparezca allí, Para habilitar este comando se comprobara si los comandos
 * principales están habilitados o no, el cual está relacionado con si hay o no
 * personajes en el grupo actual. Esta vez, el comando main bind enviara al
 * jugador para el proceso de selección usando 'this.commandPersonal.bind(this)'
 * en lugar. Una vez que el jugador selecciona un personaje, 
 * 'SceneManager.push(Scene_Skill)' es entonces ejecutado para mandar a el
 * jugador a Scene_Skill para controlar las habilidades del personaje.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: 'Common Event 1'
 *     Symbol: common event
 *       Show: false
 *    Enabled: true
 *        Ext: 1
 *  Main Bind: this.callCommonEvent.bind(this)
 * Actor Bind:
 *
 * Este es el comando personalizado que se incluye por defecto con el plugin.
 * El nombre de este comando es 'Common Event 1', pero puede ser cambiado para
 * el que desee simplemente cambiando el que está en medio de las 'comillas'
 * en las configuraciones de los parámetros. El símbolo es el identificador
 * para todos los eventos comunes. Sin embargo, por defecto este item de evento
 * común no aparece en el menú principal. Si desea que aparezca, establezca la
 * opción Show en 'true' sin las comillas y este va a aparecer. Debido a que la
 * opción habilitada es 'true', el comando puede ser siempre seleccionado por el
 * jugador. El Ext tiene un desempeño en este comando. El Ext determina cual 
 * evento común va a ser ejecutado. En este ejemplo, el valor de Ext es 1,
 * lo que significa que el evento común 1 será ajecutado cuando este comando
 * sea seleccionado. Si el valor de Ext es 25, va a ser el evento común 25 el
 * que será ejecutado cuando este comando sea seleccionado. El motivo es por
 * que el Main Bind da esa opción de comando es 'this.callCommonEvent.bind(this)'
 * que es una función incluida en este plugin para permitir que los eventos
 * comunes sean ejecutados.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.02:
 * - The gold window will now match the command window's width.
 *
 * Version 1.01:
 * - Added 'Hide Actor Window', 'Hide Gold Window', 'Blurry Background'
 * parameters for the plugin settings.
 *
 * Version 1.00:
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MainMenuManager');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MMMCmdAlign = String(Yanfly.Parameters['Command Alignment']);
Yanfly.Param.MMMCmdPosition = String(Yanfly.Parameters['Command Position']);
Yanfly.Param.MMMCmdCols = String(Yanfly.Parameters['Command Columns']);
Yanfly.Param.MMMCmdRows = String(Yanfly.Parameters['Command Rows']);
Yanfly.Param.MMMCmdWidth = String(Yanfly.Parameters['Command Width']);
Yanfly.Param.MMMHideActorWin = String(Yanfly.Parameters['Hide Actor Window']);
Yanfly.Param.MMMHideGoldWin = String(Yanfly.Parameters['Hide Gold Window']);
Yanfly.Param.MMMBlurryBG = String(Yanfly.Parameters['Blurry Background']);
Yanfly.MMM.Name = {};
Yanfly.MMM.Symbol = {};
Yanfly.MMM.Show = {};
Yanfly.MMM.Enabled = {};
Yanfly.MMM.Ext = {};
Yanfly.MMM.MainBind = {};
Yanfly.MMM.ActorBind = {};
for (Yanfly.i = 1; Yanfly.i <= 100; ++Yanfly.i) {
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Name'])";
  Yanfly.MMM.Name[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Symbol'])";
  Yanfly.MMM.Symbol[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Show'])";
  Yanfly.MMM.Show[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Enabled'])";
  Yanfly.MMM.Enabled[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Ext'])";
  Yanfly.MMM.Ext[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Main Bind'])";
  Yanfly.MMM.MainBind[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Actor Bind'])";
  Yanfly.MMM.ActorBind[Yanfly.i] = eval(Yanfly.line);
};

//=============================================================================
// SceneManager
//=============================================================================

Yanfly.MMM.SceneManager_snapForBackground = SceneManager.snapForBackground;
SceneManager.snapForBackground = function() {
    if (eval(Yanfly.Param.MMMBlurryBG)) {
      Yanfly.MMM.SceneManager_snapForBackground.call(this);
    } else {
      this._backgroundBitmap = this.snap();
    }
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Window_MenuCommand.prototype.makeCommandList = function() {
    for (var i = 1; i <= 100; ++i) {
      this.createCommand(i);
    }
};

Window_MenuCommand.prototype.addMainCommands = function() {
};

Window_MenuCommand.prototype.addFormationCommand = function() {
};

Window_MenuCommand.prototype.addOriginalCommands = function() {
};

Window_MenuCommand.prototype.addOptionsCommand = function() {
};

Window_MenuCommand.prototype.addSaveCommand = function() {
};

Window_MenuCommand.prototype.addGameEndCommand = function() {
};

Window_MenuCommand.prototype.createCommand = function(i) {
    var show = Yanfly.MMM.Show[i];
    if (show === '') return;
    if (!eval(show)) return;
    var name = Yanfly.MMM.Name[i];
    if (name === '') return;
    name = eval(name);
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') return;
    var enabled = eval(Yanfly.MMM.Enabled[i]);
    if (enabled === '') enabled = true;
    var ext = eval(Yanfly.MMM.Ext[i]);
    this.addCommand(name, symbol, enabled, ext);
    this.addSymbolBridge(symbol);
};

Window_MenuCommand.prototype.addSymbolBridge = function(symbol) {
    if (symbol === 'item') this.addMainCommands();
    if (symbol === 'formation') this.addFormationCommand();
    if (symbol === 'formation') this.addOriginalCommands();
    if (symbol === 'options') this.addOptionsCommand();
    if (symbol === 'save') this.addSaveCommand();
    if (symbol === 'gameEnd') this.addGameEndCommand();
};

Window_MenuCommand.prototype.itemTextAlign = function() {
    return Yanfly.Param.MMMCmdAlign;
};

Window_MenuCommand.prototype.windowWidth = function() {
    return eval(Yanfly.Param.MMMCmdWidth);
};

Window_MenuCommand.prototype.maxCols = function() {
    return eval(Yanfly.Param.MMMCmdCols);
};

Window_MenuCommand.prototype.numVisibleRows = function() {
    return eval(Yanfly.Param.MMMCmdRows);
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Yanfly.MMM.Window_MenuStatus_initialize =
    Window_MenuStatus.prototype.initialize;
Window_MenuStatus.prototype.initialize = function(wx, wy) {
    this._initX = wx;
    Yanfly.MMM.Window_MenuStatus_initialize.call(this, wx, wy);
};

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - this._initX;
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.MMM.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    Yanfly.MMM.Scene_Menu_create.call(this);
    this.repositionWindows();
};

Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this.createCommandWindowBinds();
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Yanfly.MMM.Scene_Menu_createGoldWindow =
    Scene_Menu.prototype.createGoldWindow;
Scene_Menu.prototype.createGoldWindow = function() {
    Yanfly.MMM.Scene_Menu_createGoldWindow.call(this);
    if (eval(Yanfly.Param.MMMHideGoldWin)) this._goldWindow.hide();
};

Yanfly.MMM.Scene_Menu_createStatusWindow =
    Scene_Menu.prototype.createStatusWindow;
Scene_Menu.prototype.createStatusWindow = function() {
    Yanfly.MMM.Scene_Menu_createStatusWindow.call(this);
    if (eval(Yanfly.Param.MMMHideActorWin)) this._statusWindow.hide();
};

Scene_Menu.prototype.createCommandWindowBinds = function() {
  this._actorBinds = {};
  for (var i = 1; i <= 100; ++i) {
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') continue;
    var bind = Yanfly.MMM.MainBind[i];
    if (bind === '') continue;
    eval("this._commandWindow.setHandler('" + symbol + "', " + bind + ")");
    var actorBind = Yanfly.MMM.ActorBind[i];
    if (actorBind === '') continue;
    this._actorBinds[symbol] = actorBind;
  }
};

Scene_Menu.prototype.resizeGoldWindow = function() {
    this._goldWindow.width = this._commandWindow.width;
    this._goldWindow.createContents();
    this._goldWindow.refresh();
};

Scene_Menu.prototype.repositionWindows = function() {
    this.resizeGoldWindow();
    if (Yanfly.Param.MMMCmdPosition === 'right') {
      this._commandWindow.x = Graphics.boxWidth - this._commandWindow.width;
      this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
      this._statusWindow.x = 0;
    } else if (Yanfly.Param.MMMCmdPosition === 'left') {
      this._commandWindow.x = 0;
      this._goldWindow.x = 0;
      this._statusWindow.x = this._commandWindow.width;
    }
};

Yanfly.MMM.Scene_Menu_commandPersonal = Scene_Menu.prototype.commandPersonal;
Scene_Menu.prototype.commandPersonal = function() {
    Yanfly.MMM.Scene_Menu_commandPersonal.call(this);
    this._statusWindow.show();
};

Scene_Menu.prototype.onPersonalOk = function() {
    var symbol = this._commandWindow.currentSymbol();
    var actorBind = this._actorBinds[symbol];
    if (!actorBind) return;
    eval(actorBind);
};

Yanfly.MMM.Scene_Menu_onPersonalCancel = Scene_Menu.prototype.onPersonalCancel;
Scene_Menu.prototype.onPersonalCancel = function() {
    Yanfly.MMM.Scene_Menu_onPersonalCancel.call(this);
    if (eval(Yanfly.Param.MMMHideActorWin)) this._statusWindow.hide();
};

Scene_Menu.prototype.callCommonEvent = function() {
    var ext = this._commandWindow.currentExt();
    $gameTemp.reserveCommonEvent(parseInt(ext));
    this.popScene();
};

Scene_Menu.prototype.commandDebug = function() {
    SceneManager.push(Scene_Debug);
};

//=============================================================================
// End of File
//=============================================================================