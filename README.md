# pr_aria
<h1>Coordicanarias repo</h1>
<br>
<b>3 de marzo, 2026</b>
<br>
<ol>
  <li>He formateado el PC de la empresa e instalado Ubuntu como sistema operativo. Acto seguido, he instalado Packet Tracer.</li>
  <li>Vamos a realizar un reto competitivo individual llamado Operación Doble Nodo en el que simularemos dos instancias conectadas.</li>
  <li>
He creado esta repo para ir documentando lo que haremos a modo de diario.</li>
</ol>
<br>
Procedo a la documentación de la Operación Doble Nodo
<h1>Operación Doble Nodo</h1>
<h2>FASE 1 - Infraestructura base y multiusuario
<h3>Hito 1.1 - Arrange de instancias</h3>
<img width="340" height="192" alt="imagen" src="https://github.com/user-attachments/assets/325bfdf4-f671-4b56-a7e2-121faf75f4c2"/>
<h3>Hito 1.2 - Topología física completa</h3>
<img width="1063" height="456" alt="imagen" src="https://github.com/user-attachments/assets/2de329dc-3ea5-446f-a8bb-3c2087f8a72d"/>
<h3>Hito 1.3 - Verificación de conexiones físicas</h3>
<img width="982" height="415" alt="imagen" src="https://github.com/user-attachments/assets/3e60c0b1-50b3-4b4f-9421-ee1c2bf308d5" />
<h2>FASE 2 - VLANs, DHCP por VLAN y Router-on-a-Stick</h2>
<h3>Hito 2.1 - Configuración del Switch 2960</h3>

<h3>Hito 2.2 - Router-on-a-Stick</h3>
<img width="604" height="398" alt="imagen" src="https://github.com/user-attachments/assets/7adf722f-d5a3-4993-8fad-4d7c61acc4c6" />
<br>
Fue preciso cambiar el puerto de FastEthernet0/0/0 a GigabitEthernet0/0 para que pudiera hacer 'no ip address'.
<br>
<h3>Hito 2.3 - DHCP por VLAN en el router</h3>
<img width="421" height="275" alt="imagen" src="https://github.com/user-attachments/assets/84821756-2d02-47b4-aa7a-90ecdfadeb5b" />
<h3>Hito 2.4 - Pruebas de conectividad intra-VLAN</h3>
Desde PC-A hacia Gateway 10.10.30.1
<br>
<img width="420" height="174" alt="imagen" src="https://github.com/user-attachments/assets/2dd060ec-ccb1-4c01-897c-05a416fa0239" />
<br>
Desde PC-A hacia Thingspeak-A
<br>
<img width="420" height="174" alt="imagen" src="https://github.com/user-attachments/assets/71e78e70-1ae1-4484-a613-23916a983b86" />
<br>
Desde Motion Detector hacia Gateway 10.10.20.1
<br>
<img width="369" height="69" alt="imagen" src="https://github.com/user-attachments/assets/518702d5-0df5-4b0e-8ead-d6ea9d3b7508" />
<br>
Desde Motion Detector hacia Thingspeak-A
<br>
<img width="319" height="62" alt="imagen" src="https://github.com/user-attachments/assets/7aa15fc8-3e56-4f31-b843-c12b8840cc0a" />
<br>
<h2>FASE 3 - NAT, DNS cruzado y conectividad inter-red</h2>
<h3>Hito 3.1 - Configuración NAT en ambos routers</h3>
<img width="596" height="412" alt="imagen" src="https://github.com/user-attachments/assets/eb42dab7-a63c-4bc3-997f-843ac87cdc2e" />
<br>
Fue necesario cambiar el puerto de FastEthernet0/0/1 a GigabitEthernet0/1 para poder hacer 'ip nat outside'.
<br>
<img width="436" height="235" alt="imagen" src="https://github.com/user-attachments/assets/64b4af11-5c82-4ce3-b09b-e8fa92ba372d" />
<h3>Hito 3.2 - Rutas estáticas inter-red</h3>
<img width="454" height="273" alt="imagen" src="https://github.com/user-attachments/assets/9d584e5a-75ce-4c5e-a87a-0806c5ea90b0" />
<br>
<img width="368" height="29" alt="imagen" src="https://github.com/user-attachments/assets/25e5dd14-4753-41e6-a3cf-a611a5ff0a47" />
<br>
Fue necesario darle una IP estática a GigabitEthernet0/2 en ambas instancias para que pudiera realizar el enrutamiento estático.
<h3>Hito 3.3 - DNS cruzado</h3>
<img width="463" height="285" alt="imagen" src="https://github.com/user-attachments/assets/2fb4dc23-70ac-4607-9348-4b0d43ec0211" />
<br>
<img width="659" height="397" alt="imagen" src="https://github.com/user-attachments/assets/0d660167-dc21-4fe7-afa1-f94c84961948" />
<br>
<b>5 de marzo, 2026</b>
<br>
Hizo falta que volviera a empezar el ejercicio para poder tener las ideas más claras y ordenadas. El PC de la isntancia A finalmente puede establecer conexión con el servidor de la instancia B.
<br>
<img width="711" height="340" alt="imagen" src="https://github.com/user-attachments/assets/62f4a424-eb17-4047-b172-be1e72aa1d9e" />
<h2>FASE 4 - ACLs extendidas y seguridad perimetral</h2>
<b>10 de marzo, 2026</b>
<h3>Hito 4.1 - Implementación de ACLs</h3>
<img width="516" height="168" alt="image" src="https://github.com/user-attachments/assets/c11e91c3-2738-4c8b-a3a7-74db05c09537" />
<h3>Hito 4.2 - Tabla de verificación obligatoria</h3>
