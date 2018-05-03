#include <SoftwareSerial.h>

int bluetoothTx = 6;  // TX-O pin of bluetooth mate, Arduino D2
int bluetoothRx = 7;  // RX-I pin of bluetooth mate, Arduino D3
int vitesse, regime, tempH, tempA, carb, carbConso = 0;
int mode = 0;
int i = 1;
char inMode = 'a';
String errorCode;
SoftwareSerial bluetooth(bluetoothTx, bluetoothRx);


void setup() {
  Serial.begin(115200);  // Begin the serial monitor at 9600bps
  bluetooth.begin(115200);  // Start bluetooth serial at 9600
  Serial.println("Taper 1 , 2 ou 3 pour choisir  un exemple");

}

void loop() {

  mode = demoModeSwtich();
  switch (mode) {
    case 1:
      vitesse = random(40, 50);
      regime = random(1500, 1700);
      tempH = random(80, 90);
      tempA = random(30, 45);
      carb = random(50, 60);
      carbConso = random(3, 6);
      errorCode = "0%0%0%0%0%0%0%" ;
      break;
    case 2:
      vitesse = canRequestsRT(1);
      regime = canRequestsRT(2);
      tempH = canRequestsRT(3);
      tempA = canRequestsRT(4);
      carb = canRequestsRT(5);
      carbConso = canRequestsRT(6);
      errorCode = "0%0%0%0%0%0%0%" ;
      break;
    case 3:
      vitesse = random(40, 50);
      regime = random(1500, 1700);
      tempH = random(80, 90);
      tempA = random(30, 45);
      carb = random(50, 60);
      carbConso = random(3, 6);
      errorCode = canRequestsECode();
      break;
    default:
      vitesse = random(40, 50);
      regime = random(1500, 1700);
      tempH = random(80, 90);
      tempA = random(30, 45);
      carb = random(50, 60);
      carbConso = random(3, 6);
      errorCode = "0%0%0%0%0%0%0%" ;
      break;
  }


  Serial.println(errorCode);
  if (i == 1) {
    i = 2;
    bluetooth.print((String)vitesse + "%" + (String)regime + "%" + (String)tempH + "%" );
  }
  if (i == 2) {
    i = 3;
    bluetooth.print((String)tempA + "%" + (String)carb + "%" + (String)carbConso+ "%" );
  }
  if (i == 3) {
    i = 1;
    bluetooth.print(errorCode + "\n");
  }

  //
  delay(1000);

}


int demoModeSwtich() {
  static int mode;
  if (Serial.available() > 0) {
    char inMode = Serial.read();
    switch (inMode) {
      case '1':
        Serial.println("**Exemple démo 1**");
        mode = 1;
        break;
      case '2':
        Serial.println("**Exemple démo 2**");
        mode = 2;
        break;
      case '3':
        Serial.println("**Exemple démo 3**");
        mode = 3;
        break;
      default:
        Serial.println("Taper 1 , 2 ou 3 pour choisir  un exemple");
        mode = 1;
        break;
    }
  }
  return mode;
}




int canRequestsRT(int pid) {
  uint8_t can_msg[8];
  int value;
  switch (pid) {
    case 1: //vitesse (65 Km/h)
      can_msg[0] = 0x01; //nombre d'octets de DATA
      can_msg[1] = 0x41; //Mode de la trame réponse (65 => Mode 1)
      can_msg[2] = 0x0D; // PID
      can_msg[3] = 0x41; //DATA
      can_msg[4] = 0;    //DATA
      can_msg[5] = 0;    //DATA
      can_msg[6] = 0;    //DATA
      can_msg[7] = 0;    //DATA
      value = can_msg[3];
      break;
    case 2: //regime moteur (1200Tr/min)
      can_msg[0] = 0x02;
      can_msg[1] = 0x41;
      can_msg[2] = 0x0C;
      can_msg[3] = 0x12;
      can_msg[4] = 0xC0;
      can_msg[5] = 0;
      can_msg[6] = 0;
      can_msg[7] = 0;
      value = ((can_msg[3] * 256) +  can_msg[4]) / 4;
      break;
    case 3: //temp huile (40°)
      can_msg[0] = 0x01;
      can_msg[1] = 0x41;
      can_msg[2] = 0x05;
      can_msg[3] = 0x50;
      can_msg[4] = 0;
      can_msg[5] = 0;
      can_msg[6] = 0;
      can_msg[7] = 0;
      value = can_msg[3] - 40;
      break;
    case 4: //temp air (55°)
      can_msg[0] = 0x01;
      can_msg[1] = 0x41;
      can_msg[2] = 0x0C;
      can_msg[3] = 0x5A;
      can_msg[4] = 0;
      can_msg[5] = 0;
      can_msg[6] = 0;
      can_msg[7] = 0;
      value = can_msg[3] - 40;
      break;
    case 5: //resevoir (36%)
      can_msg[0] = 0x01;
      can_msg[1] = 0x41;
      can_msg[2] = 0x2F;
      can_msg[3] = 0x5D;
      can_msg[4] = 0;
      can_msg[5] = 0;
      can_msg[6] = 0;
      can_msg[7] = 0;
      value = can_msg[3];
      break;
    case 6: //consomation
      can_msg[0] = 0x02;
      can_msg[1] = 0x41;
      can_msg[2] = 0x5E;
      can_msg[3] = 0x0;
      can_msg[4] = 0x8C;
      can_msg[5] = 0;
      can_msg[6] = 0;
      can_msg[7] = 0;
      value = ((can_msg[3] * 256) + can_msg[4]) / 4;
      break;
    default:
      value = 0;
      break;
  }
  return value;
}


String canRequestsECode() {
  String values;
  uint8_t can_msg[8];
  int a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0;
  can_msg[0] = 0x02;
  can_msg[1] = 0x43;
  can_msg[2] = 0x01;
  can_msg[3] = 0x03;
  can_msg[4] = 0x03;
  can_msg[5] = 0;
  can_msg[6] = 0;
  can_msg[7] = 0;

  for (int i = 0; i < can_msg[2]; i++) {
    int count = 3;

    if (can_msg[count] == 0x00 | can_msg[count] == 0x01 | can_msg[count] == 0x02 ) { // contrôle du dosage air/carburant
      a = 1;
    }
    if (can_msg[count] == 0x03) { //système d'allumage
      b = 1;
    }
    if (can_msg[count] == 0x04) { //contrôle des émissions auxiliaires
      c = 1;
    }
    if (can_msg[count] == 0x05) { //contrôle du ralenti moteur
      d = 1;
    }
    if (can_msg[count] == 0x06) { //ordinateur de bord et les sorties auxiliaires
      e = 1;
    }
    if (can_msg[count] == 0x07 | can_msg[count] == 0x08 | can_msg[count] == 0x09 ) { //contrôle de la transmission (boîte de vitesses)
      f = 1;
    }
    if (can_msg[count] == 0x0A | can_msg[count] == 0x0B | can_msg[count] == 0x0C ) { //propulsion hydride
      g = 1;
    }

    count = count + 2;
  }

  values = (String)a + "%" + (String)b + "%" + (String)c + "%" + (String)d + "%" + (String)e + "%" + (String)f + "%" + (String)g+ "%";
  return values;
}



