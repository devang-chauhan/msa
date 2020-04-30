// Number to floor value
function toInteger(number) {
  var floorValue = Math.floor(number);
  return floorValue;
};

// Functions for Length Converter

function inchTo() {
  // Taking input
  var a = document.getElementById('inputInch').valueAsNumber;

  // inch to ft-in

  var inFt = Math.floor(a / 12);
  var inIn = (a % 12);
  // Appending result
  document.getElementById('inputFt').value = inFt;
  document.getElementById('inputFtIn').value = inIn.toFixed(5);

  // inch to mm

  var inMm = (a * 25.4);
  var inchToMm = Math.abs(inMm);
  document.getElementById('inputMm').value = inchToMm.toFixed(5);

  // inch to cm

  var inCm = (a * 2.54);
  var inchToCm = Math.abs(inCm);
  document.getElementById('inputCm').value = inchToCm.toFixed(5);

  // inch to m

  var inM = (a * 0.0254);
  var inchToM = Math.abs(inM);
  document.getElementById('inputM').value = inchToM.toFixed(5);

};

function ftInchTo() {
  // Taking input
  var a = document.getElementById('inputFt').valueAsNumber;
  var b = document.getElementById('inputFtIn').valueAsNumber;

  // ft-in to inch

  var ftToIn = Math.abs(a * 12);
  var inToIn = Math.abs(b);
  var ftInToIn = ftToIn + inToIn;
  document.getElementById('inputInch').value = ftInToIn.toFixed(5);

  // ft-in to mm

  var ftToMm = Math.abs(a * 304.8);
  var inToMm = Math.abs(b * 25.4);
  var ftInToMm = ftToMm + inToMm;
  document.getElementById('inputMm').value = ftInToMm.toFixed(5);

  // ft-in to cm

  var ftToCm = Math.abs(a * 30.48);
  var inToCm = Math.abs(b * 2.54);
  var ftInToCm = ftToCm + inToCm;
  document.getElementById('inputCm').value = ftInToCm.toFixed(5);

  // ft-in to m

  var ftToM = Math.abs(a * 0.3048);
  var inToM = Math.abs(b * 0.0254);
  var ftInToM = ftToM + inToM;
  document.getElementById('inputM').value = ftInToM.toFixed(5);

};


function mmTo() {
  // Taking input
  var a = document.getElementById('inputMm').valueAsNumber;

  // mm to in

  var mmIn = (a * 0.0393701);
  var mmToIn = Math.abs(mmIn);
  document.getElementById('inputInch').value = mmToIn.toFixed(5);

  // mm to ft-in

  var mmFt = Math.floor(a / 304.8); // 1 ft = 304.8 mm
  var mmFtIn = (a * 0.0393701) % 12; // 1 mm = 0.0393701 inch
  // Appending result
  document.getElementById('inputFt').value = mmFt;
  document.getElementById('inputFtIn').value = mmFtIn.toFixed(5);

  // mm to cm

  var mmCm = (a * 0.1);
  var mmToCm = Math.abs(mmCm);
  document.getElementById('inputCm').value = mmToCm.toFixed(5);

  // mm to m

  var mmM = (a * 0.001);
  var mmToM = Math.abs(mmM);
  document.getElementById('inputM').value = mmToM.toFixed(5);

};


function cmTo() {
  // Taking input
  var a = document.getElementById('inputCm').valueAsNumber;

  // cm to in

  var cmIn = (a * 0.393701);
  var cmToIn = Math.abs(cmIn);
  document.getElementById('inputInch').value = cmToIn.toFixed(5);

  // cm to ft-in

  var cmFt = Math.floor(a / 30.48);
  var cmFtIn = (a * 0.393701) % 12;
  // Appending result
  document.getElementById('inputFt').value = cmFt;
  document.getElementById('inputFtIn').value = cmFtIn.toFixed(5);

  // cm to mm

  var cmMm = (a * 10);
  var cmToMm = Math.abs(cmMm);
  document.getElementById('inputMm').value = cmToMm.toFixed(5);

  // cm to m

  var cmM = (a * 0.01);
  var cmToM = Math.abs(cmM);
  document.getElementById('inputM').value = cmToM.toFixed(5);

};


function mTo() {
  // Taking input
  var a = document.getElementById('inputM').valueAsNumber;

  // m to in

  var mIn = (a * 39.3701);
  var mToIn = Math.abs(mIn);
  document.getElementById('inputInch').value = mToIn.toFixed(5);

  // m to ft-in

  var mFt = Math.floor(a / 0.3048);
  var mFtIn = (a * 39.3701) % 12;
  // Appending result
  document.getElementById('inputFt').value = mFt;
  document.getElementById('inputFtIn').value = mFtIn.toFixed(5);

  // m to mm

  var mMm = (a * 1000);
  var mToMm = Math.abs(mMm);
  document.getElementById('inputMm').value = mToMm.toFixed(5);

  // m to cm

  var mCm = (a * 100);
  var mToCm = Math.abs(mCm);
  document.getElementById('inputCm').value = mToCm.toFixed(5);

};

// Functions for Area Converter

function SqInchTo() {
  // Taking input
  var a = document.getElementById('inputSqInch').valueAsNumber;

  // SqIn to SqFt

  var SqInFt = (a * 0.00694444);
  var SqInToSqFt = Math.abs(SqInFt);
  document.getElementById('inputSqFt').value = SqInToSqFt.toFixed(5);

  // SqIn to SqMm

  var SqInMm = (a * 645.16);
  var SqInToSqMm = Math.abs(SqInMm);
  document.getElementById('inputSqMm').value = SqInToSqMm.toFixed(5);

  // SqIn to SqCm

  var SqInCm = (a * 6.4516);
  var SqInToSqCm = Math.abs(SqInCm);
  document.getElementById('inputSqCm').value = SqInToSqCm.toFixed(5);
    
  // SqIn to SqM

  var SqInM = (a * 0.00064516);
  var SqInToSqM = Math.abs(SqInM);
  document.getElementById('inputSqM').value = SqInToSqM.toFixed(5);
    
  // SqIn to Acre

  var SqInAcre = (a * 1.59423e-7);
  var SqInToAcre = Math.abs(SqInAcre);
  document.getElementById('inputAcre').value = SqInToAcre.toFixed(5);
    
  // SqIn to Hectare

  var SqInHectare = (a * 6.4516e-8);
  var SqInToHectare = Math.abs(SqInHectare);
  document.getElementById('inputHectare').value = SqInToHectare.toFixed(5);

};


function SqFtTo() {
  // Taking input
  var a = document.getElementById('inputSqFt').valueAsNumber;

  // SqFt to SqIn

  var SqFtIn = (a * 144);
  var SqFtToSqIn = Math.abs(SqFtIn);
  document.getElementById('inputSqInch').value = SqFtToSqIn.toFixed(5);

  // SqFt to SqMm

  var SqFtMm = (a * 92903);
  var SqFtToSqMm = Math.abs(SqFtMm);
  document.getElementById('inputSqMm').value = SqFtToSqMm.toFixed(5);

  // SqFt to SqCm

  var SqFtCm = (a * 929.03);
  var SqFtToSqCm = Math.abs(SqFtCm);
  document.getElementById('inputSqCm').value = SqFtToSqCm.toFixed(5);
    
  // SqFt to SqM

  var SqFtM = (a * 0.092903);
  var SqFtToSqM = Math.abs(SqFtM);
  document.getElementById('inputSqM').value = SqFtToSqM.toFixed(5);
    
  // SqFt to Acre

  var SqFtAcre = (a * 2.29568e-5);
  var SqFtToAcre = Math.abs(SqFtAcre);
  document.getElementById('inputAcre').value = SqFtToAcre.toFixed(5);
    
  // SqFt to Hectare

  var SqFtHectare = (a * 9.2903e-6);
  var SqFtToHectare = Math.abs(SqFtHectare);
  document.getElementById('inputHectare').value = SqFtToHectare.toFixed(5);
};


function SqMmTo() {
  // Taking input
  var a = document.getElementById('inputSqMm').valueAsNumber;

  // SqMm to SqIn

  var SqMmIn = (a * 0.00155);
  var SqMmToSqIn = Math.abs(SqMmIn);
  document.getElementById('inputSqInch').value = SqMmToSqIn.toFixed(5);

  // SqMm to SqFt

  var SqMmFt = (a * 0.000010764);
  var SqMmToSqFt = Math.abs(SqMmFt);
  document.getElementById('inputSqFt').value = SqMmToSqFt.toFixed(5);

  // SqMm to SqCm

  var SqMmCm = (a * 0.01);
  var SqMmToSqCm = Math.abs(SqMmCm);
  document.getElementById('inputSqCm').value = SqMmToSqCm.toFixed(5);
    
  // SqMm to SqM

  var SqMmM = (a * 0.000001);
  var SqMmToSqM = Math.abs(SqMmM);
  document.getElementById('inputSqM').value = SqMmToSqM.toFixed(5);
    
  // SqMm to Acre

  var SqMmAcre = (a * 2.4711e-10);
  var SqMmToAcre = Math.abs(SqMmAcre);
  document.getElementById('inputAcre').value = SqMmToAcre.toFixed(5);
    
  // SqMm to Hectare

  var SqMmHectare = (a * 1e-10);
  var SqMmToHectare = Math.abs(SqMmHectare);
  document.getElementById('inputHectare').value = SqMmToHectare.toFixed(5); 

};


function SqCmTo() {
  // Taking input
  var a = document.getElementById('inputSqCm').valueAsNumber;

  // SqCm to SqIn

  var SqCmIn = (a * 0.155);
  var SqCmToSqIn = Math.abs(SqCmIn);
  document.getElementById('inputSqInch').value = SqCmToSqIn.toFixed(5);

  // SqCm to SqFt

  var SqCmFt = (a * 0.00107639);
  var SqCmToSqFt = Math.abs(SqCmFt);
  document.getElementById('inputSqFt').value = SqCmToSqFt.toFixed(5);

  // SqCm to Sqmm

  var SqCmMm = (a * 100);
  var SqCmToSqMm = Math.abs(SqCmMm);
  document.getElementById('inputSqMm').value = SqCmToSqMm.toFixed(5);
    
  // SqCm to SqM

  var SqCmM = (a * 0.0001);
  var SqCmToSqM = Math.abs(SqCmM);
  document.getElementById('inputSqM').value = SqCmToSqM.toFixed(5);
    
  // SqCm to Acre

  var SqCmAcre = (a * 2.47105e-8);
  var SqCmToAcre = Math.abs(SqCmAcre);
  document.getElementById('inputAcre').value = SqCmToAcre.toFixed(5);
    
  // SqCm to Hectare

  var SqCmHectare = (a * 1e-8);
  var SqCmToHectare = Math.abs(SqCmHectare);
  document.getElementById('inputHectare').value = SqCmToHectare.toFixed(5);

};


function SqMTo() {
  // Taking input
  var a = document.getElementById('inputSqM').valueAsNumber;

  // SqM to SqIn

  var SqMIn = (a * 1550);
  var SqMToSqIn = Math.abs(SqMIn);
  document.getElementById('inputSqInch').value = SqMToSqIn.toFixed(5);

  // SqM to SqFt

  var SqMFt = (a * 10.7639);
  var SqMToSqFt = Math.abs(SqMFt);
  document.getElementById('inputSqFt').value = SqMToSqFt.toFixed(5);

  // SqM to Sqmm

  var SqMMm = (a * 1000000);
  var SqMToSqMm = Math.abs(SqMMm);
  document.getElementById('inputSqMm').value = SqMToSqMm.toFixed(5);
    
  // SqM to SqCm

  var SqMCm = (a * 10000);
  var SqMToSqCm = Math.abs(SqMCm);
  document.getElementById('inputSqCm').value = SqMToSqCm.toFixed(5);
    
  // SqM to Acre

  var SqMAcre = (a * 0.000247105);
  var SqMToAcre = Math.abs(SqMAcre);
  document.getElementById('inputAcre').value = SqMToAcre.toFixed(5);
    
  // SqM to Hectare

  var SqMHectare = (a * 1e-4);
  var SqMToHectare = Math.abs(SqMHectare);
  document.getElementById('inputHectare').value = SqMToHectare.toFixed(5);

};

function AcreTo() {
  // Taking input
  var a = document.getElementById('inputAcre').valueAsNumber;

  // Acre to SqIn

  var AcreIn = (a * 6.273e+6);
  var AcreToSqIn = Math.abs(AcreIn);
  document.getElementById('inputSqInch').value = AcreToSqIn.toFixed(5);

  // Acre to SqFt

  var AcreFt = (a * 43560);
  var AcreToSqFt = Math.abs(AcreFt);
  document.getElementById('inputSqFt').value = AcreToSqFt.toFixed(5);

  // Acre to Sqmm

  var AcreMm = (a * 4.047e+9);
  var AcreToSqMm = Math.abs(AcreMm);
  document.getElementById('inputSqMm').value = AcreToSqMm.toFixed(5);
    
  // Acre to SqCm

  var AcreCm = (a * 4.047e+7);
  var AcreToSqCm = Math.abs(AcreCm);
  document.getElementById('inputSqCm').value = AcreToSqCm.toFixed(5);
    
  // Acre to SqM

  var AcreM = (a * 4046.86);
  var AcreToSqM = Math.abs(AcreM);
  document.getElementById('inputSqM').value = AcreToSqM.toFixed(5);    
    
  // Acre to Hectare

  var AcreHec = (a * 0.404686);
  var AcreToHec = Math.abs(AcreHec);
  document.getElementById('inputHectare').value = AcreToHec.toFixed(5);

};

function HectareTo() {
  // Taking input
  var a = document.getElementById('inputHectare').valueAsNumber;

  // Acre to SqIn

  var HectareIn = (a * 1.55e+7);
  var HectareToSqIn = Math.abs(HectareIn);
  document.getElementById('inputSqInch').value = HectareToSqIn.toFixed(5);

  // Acre to SqFt

  var HectareFt = (a * 107639);
  var HectareToSqFt = Math.abs(HectareFt);
  document.getElementById('inputSqFt').value = HectareToSqFt.toFixed(5);

  // Acre to Sqmm

  var HectareMm = (a * 1e+10);
  var HectareToSqMm = Math.abs(HectareMm);
  document.getElementById('inputSqMm').value = HectareToSqMm.toFixed(5);
    
  // Acre to SqCm

  var HectareCm = (a * 1e+8);
  var HectareToSqCm = Math.abs(HectareCm);
  document.getElementById('inputSqCm').value = HectareToSqCm.toFixed(5);
    
  // Acre to SqM

  var HectareM = (a * 10000);
  var HectareToSqM = Math.abs(HectareM);
  document.getElementById('inputSqM').value = HectareToSqM.toFixed(5);    
    
  // Acre to Hectare

  var HectareAcre = (a * 2.47105);
  var HectareToAcre = Math.abs(HectareAcre);
  document.getElementById('inputAcre').value = HectareToAcre.toFixed(5);

};

// Functions for Volume Converter

function CuInchTo() {
  // Taking input
  var a = document.getElementById('inputCuInch').valueAsNumber;

  // CuIn to CuFt

  var CuInFt = (a * 0.000578704);
  var CuInToCuFt = Math.abs(CuInFt);
  document.getElementById('inputCuFt').value = CuInToCuFt.toFixed(5);

  // CuIn to CuMm

  var CuInMm = (a * 16387.1);
  var CuInToCuMm = Math.abs(CuInMm);
  document.getElementById('inputCuMm').value = CuInToCuMm.toFixed(5);

  // CuIn to CuCm

  var CuInCm = (a * 16.3871);
  var CuInToCuCm = Math.abs(CuInCm);
  document.getElementById('inputCuCm').value = CuInToCuCm.toFixed(5);
    
  // CuIn to CuM

  var CuInM = (a * 0.00001638706);
  var CuInToCuM = Math.abs(CuInM);
  document.getElementById('inputCuM').value = CuInToCuM.toFixed(5);
    
 // CuIn to Litre

  var CuInLtr = (a * 0.0163871);
  var CuInToLtr = Math.abs(CuInLtr);
  document.getElementById('inputLtr').value = CuInToLtr.toFixed(5);

};


function CuFtTo() {
  // Taking input
  var a = document.getElementById('inputCuFt').valueAsNumber;

  // CuFt to CuIn

  var CuFtIn = (a * 1728);
  var CuFtToCuIn = Math.abs(CuFtIn);
  document.getElementById('inputCuInch').value = CuFtToCuIn.toFixed(5);

  // CuFt to CuMm

  var CuFtMm = (a * 28316846.59);
  var CuFtToCuMm = Math.abs(CuFtMm);
  document.getElementById('inputCuMm').value = CuFtToCuMm.toFixed(5);

  // CuFt to CuCm

  var CuFtCm = (a * 28316.8);
  var CuFtToCuCm = Math.abs(CuFtCm);
  document.getElementById('inputCuCm').value = CuFtToCuCm.toFixed(5);
    
  // CuFt to CuM

  var CuFtM = (a * 0.0283168);
  var CuFtToCuM = Math.abs(CuFtM);
  document.getElementById('inputCuM').value = CuFtToCuM.toFixed(5);
    
  // CuFt to Litre

  var CuFtLtr = (a * 28.3168);
  var CuFtToLtr = Math.abs(CuFtLtr);
  document.getElementById('inputLtr').value = CuFtToLtr.toFixed(5);

};


function CuMmTo() {
  // Taking input
  var a = document.getElementById('inputCuMm').valueAsNumber;

  // CuMm to CuIn

  var CuMmIn = (a * 0.000061024);
  var CuMmToCuIn = Math.abs(CuMmIn);
  document.getElementById('inputCuInch').value = CuMmToCuIn.toFixed(5);

  // CuMm to CuFt

  var CuMmFt = (a * 0.000000035);
  var CuMmToCuFt = Math.abs(CuMmFt);
  document.getElementById('inputCuFt').value = CuMmToCuFt.toFixed(5);

  // CuIn to CuCm

  var CuMmCm = (a * 0.001);
  var CuMmToCuCm = Math.abs(CuMmCm);
  document.getElementById('inputCuCm').value = CuMmToCuCm.toFixed(5);
    
  // CuIn to CuM

  var CuMmM = (a * 0.000000001);
  var CuMmToCuM = Math.abs(CuMmM);
  document.getElementById('inputCuM').value = CuMmToCuM.toFixed(5);
    
  // CuMm to Litre

  var CuMmLtr = (a * 0.000001000);
  var CuMmToLtr = Math.abs(CuMmLtr);
  document.getElementById('inputLtr').value = CuMmToLtr.toFixed(5);

};


function CuCmTo() {
  // Taking input
  var a = document.getElementById('inputCuCm').valueAsNumber;

  // CuCm to CuIn

  var CuCmIn = (a * 0.0610237);
  var CuCmToCuIn = Math.abs(CuCmIn);
  document.getElementById('inputCuInch').value = CuCmToCuIn.toFixed(5);

  // CuCm to CuFt

  var CuCmFt = (a * 0.00003531466672);
  var CuCmToCuFt = Math.abs(CuCmFt);
  document.getElementById('inputCuFt').value = CuCmToCuFt.toFixed(5);

  // CuCm to Cumm

  var CuCmMm = (a * 1000);
  var CuCmToCuMm = Math.abs(CuCmMm);
  document.getElementById('inputCuMm').value = CuCmToCuMm.toFixed(5);
    
  // CuCm to CuM

  var CuCmM = (a * 0.000001);
  var CuCmToCuM = Math.abs(CuCmM);
  document.getElementById('inputCuM').value = CuCmToCuM.toFixed(5);
    
  // CuCm to Litre

  var CuCmLtr = (a * 0.001);
  var CuCmToLtr = Math.abs(CuCmLtr);
  document.getElementById('inputLtr').value = CuCmToLtr.toFixed(5);

};


function CuMTo() {
  // Taking input
  var a = document.getElementById('inputCuM').valueAsNumber;

  // CuCm to CuIn

  var CuMIn = (a * 61023.7);
  var CuMToCuIn = Math.abs(CuMIn);
  document.getElementById('inputCuInch').value = CuMToCuIn.toFixed(5);

  // CuCm to CuFt

  var CuMFt = (a * 35.3147);
  var CuMToCuFt = Math.abs(CuMFt);
  document.getElementById('inputCuFt').value = CuMToCuFt.toFixed(5);

  // CuCm to Cumm

  var CuMMm = (a * 1000000000);
  var CuMToCuMm = Math.abs(CuMMm);
  document.getElementById('inputCuMm').value = CuMToCuMm.toFixed(5);
    
  // CuIn to CuM

  var CuMCm = (a * 1000000);
  var CuMToCuCm = Math.abs(CuMCm);
  document.getElementById('inputCuCm').value = CuMToCuCm.toFixed(5);
    
  // CuM to Litre

  var CuMLtr = (a * 1000);
  var CuMToLtr = Math.abs(CuMLtr);
  document.getElementById('inputLtr').value = CuMToLtr.toFixed(5);

};


function LtrTo() {
  // Taking input
  var a = document.getElementById('inputLtr').valueAsNumber;

  // Litre to CuIn

  var LtrIn = (a * 61.0237);
  var LtrToCuIn = Math.abs(LtrIn);
  document.getElementById('inputCuInch').value = LtrToCuIn.toFixed(5);

  // Litre to CuFt

  var LtrFt = (a * 0.0353147);
  var LtrToCuFt = Math.abs(LtrFt);
  document.getElementById('inputCuFt').value = LtrToCuFt.toFixed(5);

  // Litre to Cumm

  var LtrMm = (a * 1000000);
  var LtrToCuMm = Math.abs(LtrMm);
  document.getElementById('inputCuMm').value = LtrToCuMm.toFixed(5);
    
  // Litre to CuCm

  var LtrCm = (a * 1000);
  var LtrToCuCm = Math.abs(LtrCm);
  document.getElementById('inputCuCm').value = LtrToCuCm.toFixed(5);
    
  // Litre to CuM

  var LtrM = (a * 0.001);
  var LtrToCuM = Math.abs(LtrM);
  document.getElementById('inputCuM').value = LtrToCuM.toFixed(5);

};