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
<br>
<b>12 de marzo, 2026</b>
<br>
En el momento en el que he eliminado las ACLs de esta fase, PC-A puede hacerle ping sin errores a Thingspeak-B. Trataré de seguir los pasos dados por Nasser y descubrir la causa de este error.
<br>
<img width="515" height="291" alt="imagen" src="https://github.com/user-attachments/assets/db67c186-7660-413e-af96-1552052c9796" />
<br>
El error parecía ser que faltaban por aplicar reglas en el enunciado original del ejercicio.
<h3>Hito 4.2 - Tabla de verificación obligatoria</h3>
Documentción de los pings:
<br>
<b>P1: Desde PC-A a Thingspeak-B (PASS)</b>
<br>
<img width="387" height="183" alt="imagen" src="https://github.com/user-attachments/assets/0de68d3a-4dbd-4229-b04d-8d5c8dfe01a4" />
<br>
<b>P2: Desde PC-A a Motion-B (FAIL)</b>
<br>
<img width="398" height="176" alt="imagen" src="https://github.com/user-attachments/assets/d89dcb4e-3499-4cf2-8787-f01aea16134a" />
<br>
<b>P3: Desde Motion-A a Siren-B (PASS)</b>
<br>
<img width="367" height="88" alt="imagen" src="https://github.com/user-attachments/assets/32bf02a8-80e7-4e23-bf7e-ccd2e212e56e" />
<br>
<b>P4: Desde Motion-A a PC-B (FAIL)</b>
<br>
<img width="367" height="88" alt="imagen" src="https://github.com/user-attachments/assets/7648308f-1dae-4589-8cfc-d0a408e28636" />
<br>
<b>P5: Desde Thingspeak-A a Thingspeak-B (PASS)</b>
<br>
<img width="377" height="195" alt="imagen" src="https://github.com/user-attachments/assets/febca298-30c1-47fa-ae28-1091ce787565" />
<br>
<b>P6: Desde PC-B a Thingspeak-A (PASS)</b>
<br>
<img width="377" height="195" alt="imagen" src="https://github.com/user-attachments/assets/cadf2993-da64-49ab-a76c-743a18f667ff" />
<br>
<b>P7: Desde PC-B a Siren-A (FAIL)</b>
<br>
<img width="394" height="158" alt="imagen" src="https://github.com/user-attachments/assets/47b331c1-0cd3-4cde-a9f3-e1179e929d13" />
<br>
<b>P8: Desde Siren-B a Motion-A (PASS)</b>
<br>
<img width="371" height="55" alt="imagen" src="https://github.com/user-attachments/assets/51f6fd4d-9377-44d0-993d-ead3b7f555ab" />
<h2>FASE 5 - Autorización IoT cruzada y reflexión crítica</h2>
<h3>Hito 5.1 - Crear cuenta en los servidores IoT</h3>
<img width="630" height="234" alt="imagen" src="https://github.com/user-attachments/assets/84c27034-4c81-4d2b-a9b5-beeb629a99d7" />
<h3>Hito 5.2 - Registrar los dispositivos con la estrategia sensores/actuadores</h3>
<img width="446" height="322" alt="imagen" src="https://github.com/user-attachments/assets/2a2cb868-e6fd-4beb-b4ce-b69522e55ced" />
<img width="446" height="322" alt="imagen" src="https://github.com/user-attachments/assets/1bafddfd-b630-4d59-81e2-830e990222c9" />
<br>
<img width="624" height="298" alt="imagen" src="https://github.com/user-attachments/assets/2096a934-3036-4ff3-95bf-3f73603d9844" />
<h3>Hito 5.3 - Configurar las condiciones de automatización</h3>
<img width="623" height="241" alt="imagen" src="https://github.com/user-attachments/assets/0a0d8dda-bed3-4dd8-af70-e9d2bc04ea5a" />
<br>
<img width="623" height="241" alt="imagen" src="https://github.com/user-attachments/assets/0066be9d-ffa2-422b-bb8b-4e1d000f7c14" />
<h3>Hito 5.4 - Verificar las condiciones</h3>
Motion-A activa Siren-B
<br>
<img width="1288" height="421" alt="imagen" src="https://github.com/user-attachments/assets/963d6c6c-7df8-43a0-ab87-0aac9b396573" />
<br>
Door-B activa Siren-A
<br>
<img width="1288" height="421" alt="imagen" src="https://github.com/user-attachments/assets/aa75e990-b581-448c-b152-4c5eb545a418" />
<h2>Preguntas de reflexión críticas</h2>
<h3>Pregunta A - El fallo silecioso</h3>
<b>La COND-1 depende de que Thingspeak-A pueda alcanzar en red a Siren-B. Describe exactamente la ruta de paquetes que sigue la orden de activación: interfaz de salida de Thingspeak-A, gateway, router-on-a-stick, subinterfaz de salida, ruta estática, nube multiusuario, router-B, y llegada a Siren-B. Identifica los dos puntos donde las ACLs de la Fase 4 podrían interrumpir esta comunicación y explica porqué no lo hacen (o si lo hacen, cómo lo arreglaste).</b>
<h3>Pregunta B - Asimetría del NAT</h3>
<b>Explicaste en la Fase 3 porqué la ACL de NAT debía ser más restrictiva de lo habitual. Ahora que tienes las ACLs de la Fase 4 activas también, ¿puede existir una condición en la que el tráfico de retorno de un ping inter-casa sea bloqueado por la ACL de NAT aunque la ACL de seguridad lo permitiría? Justifica con un ejemplo concreto usando IPs reales de tu configuración.</b>
<h3>Pregunta C- Redundancia sin hardware adicional</h3>
<b>Si el servidor Thingspeak-A cae, las condiciones COND-3 y COND-4 siguen funcionando, pero COND-1 y COND-2 dejan de hacerlo. Propone una arquitectura modificada usando ÚNICAMENTE los elementos ya disponibles en Packet Tracer (sin añadir servidores nuevos) que permita que TODAS las condiciones sigan funcionando si cualquiera de los dos servidores Thingspeak falla. Describe los cambios de configuración necesarios.</b>
<h3>Pregunta D - La pregunta trampa</h3>
<b>En el hito P8 de la Fase 4, el ping de Siren-B a Motion-A pasa. Pero si activas la condición COND-1 (que hace que Thingspeak-A mande una orden a Siren-B), el tráfico de orden va de 10.10.10.2 hacia 10.20.20.X. Comprueba si la ACL SALIDA-HACIA-B en Router-A permite este tráfico. Si no lo permite, la condición falla silenciosamente. Analiza la ACL línea a línea y determina si es necesario añadir un a regla adicional y cuál sería exactamente</b>
<b>13 de marzo, 2026</b>
<br>
Estuve estudiando usando un curso de JS en Codecademy, ya que tuve problemas para iniciar sesión en OpenWebinars.
<br>
<b>16 de marzo, 2026</b>
<br>
Pude iniciar sesión en OpenWebinars y comenzar el curso de fundamentos de JS. Una vez lo terminé, pasaré al de especialización sobre asincronía, prototipos y clases.
<br>
<b>17 de marzo, 2026</b>
<br>
Continué con el curso de fundamentos de JavaScript. Me queda la mitad del curso.
<br>
<b>18 de marzo, 2026</b>
<br>
Seguí hasta terminar el curso. Conseguí mi certificado y lo publiqué en mi perfil de LinkedIn.
<br>
<b>19 de marzo, 2026</b>
<br>
Empecé el curso de Especialización de JavaScript: Asincronía, Prototipos y Clases.
<br>
<b>20 de marzo, 2026</b>
<br>
Continué el curso hasta llegar al segundo tema.
<br>
<b>24 de marzo, 2026</b>
<br>
Seguí con el curso hasta que solo me quedaron dos tema. Me he marchado de la empresa una hora antes de lo previsto debido a la alerta por lluvias a petición de Nasser.
<br>
<b>25 de marzo, 2026</b>
<br>
Continué hasta llegar a la mitad del último tema del curso de especialización.
<br>
<b>26 de marzo, 2026</b>
<br>
Terminé el curso de especialización de JavaScript. Conseguí el certificado y lo publiqué en mi perfil de LinkedIn.
<br>
Hemos comenzado el planning del proyecto que vamos a realizar. Esto es lo que vamos a hacer:
<h2>Proyecto Coordicanarias</h2>
En el área de atención integral existe un proyecto de promoción de automonía integral.
<br>
<li>
  <ol>Asistencia personal</ol>
  <ol>Trabajo social</ol>
  <ol>Fisioterapia</ol>
  <ol>Apoyo psicológico</ol>
  <ol>Promoción de la salud</ol>
</li>
<br>
De esos servicios, los profesionales tiene que hacer unos registros de los usuarios que atienden a estos servicios y qué hacen. Han estado trabajando con hojas de cálculos hasta el momento, donde se anota qué servicio ha recibido y la fecha.
<br>
Lo que nos han pedido es:
<br>
<li>
  <ol>Registrar los datos del número de servicios que ha realizado cada profesional y el que ha recibido cada persona. Se necesita de manera rápida y eficiente consultar el número de horas mensuales.</ol>
  <ol>Registrar el número y el tipo de talleres, quién los impartió y quiénes lo recibieron del servicio de promoción de la salud</ol>
</li>
