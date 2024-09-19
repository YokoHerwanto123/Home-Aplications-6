
#include <WiFi.h>
#include <WebServer.h>

WebServer server(80);

const int ESPLED = 2;
const int LAMPRELAYDAPUR = 15;
const int LAMPRELAYTERAS = 4;
const int LAMPRELAYKAMAR = 5;

const char* ssid = "Yoko";
const char* password = "satusatu";

bool DapurLampState = false;
bool TerasLampState = false;
bool KamarLampState = false;

void setup() {
  Serial.begin(300);

  pinMode(ESPLED, OUTPUT);
  pinMode(LAMPRELAYDAPUR, OUTPUT);
  pinMode(LAMPRELAYTERAS, OUTPUT);
  pinMode(LAMPRELAYKAMAR, OUTPUT);

  digitalWrite(LAMPRELAYDAPUR, LOW);
  digitalWrite(LAMPRELAYTERAS, LOW);
  digitalWrite(LAMPRELAYKAMAR, LOW);

  WiFi.begin(ssid, password);
  Serial.println("Connect to WiFi: ");
  Serial.print(ssid);

  while (WiFi.status() != WL_CONNECTED) {
    digitalWrite(ESPLED, LOW);
    delay(1000);
    Serial.print(".");
  }

  digitalWrite(ESPLED, HIGH);
  Serial.println(" ");
  Serial.println("Connected to WiFi network!");
  Serial.println(WiFi.localIP());

  server.on("/Dapur", HTTP_GET, getDapurLed);
  server.on("/Teras", HTTP_GET, getTerasLed);
  server.on("/Kamar", HTTP_GET, getKamarLed);

  server.on("/Dapur", HTTP_POST, setDapurLed);
  server.on("/Teras", HTTP_POST, setTerasLed);
  server.on("/Kamar", HTTP_POST, setKamarLed);

  server.begin();
  Serial.println("Server Started..");
}

void loop() {
  // put your main code here, to run repeatedly:
  server.handleClient();
}

void setDapurLed() {
  DapurLampState = !DapurLampState;
  digitalWrite(LAMPRELAYDAPUR, DapurLampState ? HIGH : LOW );
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", DapurLampState ? "ON" : "OFF");
}

void setTerasLed() {
  TerasLampState = !TerasLampState;
  digitalWrite(LAMPRELAYTERAS, TerasLampState ? HIGH : LOW );
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", TerasLampState ? "ON" : "OFF");
}

void setKamarLed() {
  KamarLampState = !KamarLampState;
  digitalWrite(LAMPRELAYKAMAR, KamarLampState ? HIGH : LOW );
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", KamarLampState ? "ON" : "OFF");
}

void getDapurLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", DapurLampState ? "ON" : "OFF");
}

void getTerasLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", TerasLampState ? "ON" : "OFF");
}

void getKamarLed() {
  server.sendHeader("Access-Control-Allow-Origin", "*");
  server.send(200, "text/plain", KamarLampState ? "ON" : "OFF");
}