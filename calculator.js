function Rechner()
{
//
var oIframe=document.getElementById("Iframe");
oIframe.src="Rechner/Rechner.html";
}
// обработчик нажатия цифровой кнопки
function NumPressed(Num)
{
if (FlagNewNum)
{
Fcalc.ReadOut.value = Num;
FlagNewNum = false;
}
else
{
if (Fcalc.ReadOut.value == "0")
Fcalc.ReadOut.value = Num;
else
Fcalc.ReadOut.value += Num;
}
}
// обработчик нажатия кнопки действия
function Operation (Op)
{
var Readout = Fcalc.ReadOut.value;
if (FlagNewNum && PendingOp != "=")
{
Fcalc.ReadOut.value = Currents;
}
else
{
FlagNewNum = true;
if ( '+' == PendingOp )
Currents += parseFloat(Readout);
else if ( '-' == PendingOp )
Currents -= parseFloat(Readout);
else if ( '/' == PendingOp )
Currents /= parseFloat(Readout);
else if ( '*' == PendingOp )
Currents *= parseFloat(Readout);
else
Currents = parseFloat(Readout);
Fcalc.ReadOut.value = Currents;
PendingOp = Op;
}
}
// добавление десятичной точки с числу
function Decimal()
{
var curReadOut = Fcalc.ReadOut.value;
if (FlagNewNum) {
curReadOut = "0.";
FlagNewNum = false;
}
else
{
if (curReadOut.indexOf(".") == -1)
curReadOut += ".";
}
Fcalc.ReadOut.value = curReadOut;
}
// меняем знак текущего результата
function Neg()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * -1;}
// вычисляем значение процентов
function Percent()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) / 100;}
// Умножить на E
function MultiplyE()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * Math.E;}
// Умножить на Pi
function MultiplyPi()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * Math.PI;}
// меняем знак текущего результата
function Qs()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * parseFloat(Fcalc.ReadOut.value);}
function Qsq()
{Fcalc.ReadOut.value = parseFloat(Fcalc.ReadOut.value) * parseFloat(Fcalc.ReadOut.value) * parseFloat(Fcalc.ReadOut.value);}
// Очистка текущего результата
function ClearEntry()
{
Fcalc.ReadOut.value = "0";
FlagNewNum = true;
}
// Полная очистка всех результатов
function Clear()
{
Currents = 0;
PendingOp = "";
ClearEntry();//
}
// Таблица
function TabRehne()
{
TabReh.style['position'] = 'absolute';
TabReh.style['top'] = '2px';
TabReh.style['left'] = '3px';
TabReh.style['width'] = '410px';
TabReh.style['height'] = '280px';
TabReh.style['text-align'] = 'center';
TabReh.style['border'] = '3px double #777';
TabReh.style['backgroundColor'] = 'PaleGreen';
for (i=0;i<=4;i++)
TabReh.rows[i].style.backgroundColor = 'AliceBlue';
}

