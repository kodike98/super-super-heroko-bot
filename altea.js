const Discord = require("discord.js");
const  client = new Discord.Client();
client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return; 

  if(message.content.startsWith(prefix + 'loflo' )){
    const content = message.content.split(' ').slice(1);
    const args = content.join(' ');     
    let user = message.mentions.users.first();
    let razon = args.split(' ').slice(1).join(' ');
              
    if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('Escriba una razón, `-kick @username [razón]`');
    if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');           
    message.guild.member(user).kick(razon);
    message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);      
          } 
 
  if(message.content.startsWith(prefix + 'Random')){
    var rpts = [1,2,3,4,5,6,7,8,9,10];
    message.channel.send(message.member.user+'Tu numero es:'+ rpts[Math.floor(Math.random() * rpts.length)]);
  }        
  if(message.content.startsWith(prefix + 'Profe como te va')){   
  const content = message.content.split(' ').slice(1);
  const args = content.join(' ');  
  var rpts = ["ves una montaña de papeles que se sacude ligeramente- a--ayuda...","Ayud--SHDFBUWDJNS","Oh, bi- ruidos de avalancha de papeles","No os veo desde mi montaña de trabajo","Maldito amazon"];
  if (!args) return message.reply(``);
  message.channel.send(message.member.user+ rpts[Math.floor(Math.random() * rpts.length)]+'`');
  }   
  if(message.content.startsWith(prefix +'dance')){
    message.channel.send('I like to move it, move it ~ I like to move it, move it ~ I like to move it, move it ~ You like to...?');
  }  
  if(message.content.startsWith(prefix +'Te quiero Prof')){
    message.channel.send('Yo quiero a todos mis niños');
  }  
  if(message.content.startsWith(prefix +'Profe, ¿Porqué molestas tanto a Chomp?')){
    message.channel.send('Digamos que le tengo especial aprecio');
  } 
  if(message.content.startsWith(prefix +'Prof, ¿Do u kno da wae')){
    message.channel.send('I shall guide u my kiddos, I kno da wae');
  } 
  if(message.content.startsWith(prefix +'Prof, puntuame')){
    message.channel.send('Tienes mis dieses');
  } 
  if(message.content.startsWith(prefix +'Buenas profe')){
    message.channel.send('Hola, que tengas un reluxciente dia');
  }   
  if(message.content.startsWith(prefix +'Buenas noches profe')){
    message.channel.send('Que duermas bien, cuidado con las Nightmares');
  }  
  if(message.content.startsWith(prefix +'Cual es tu color favorito prof?')){
    message.channel.send('Abre los brazos para enseñar su ropa');
  }    
  if(message.content.startsWith(prefix +'Prof, ¿que opinas de amazon?')){
    message.channel.send('¿Que que opino de amazon? ¿QUE QUE OPINO DE AMA--');
  }     
  if(message.content.startsWith(prefix +'Profe casate conmigo')){
    message.channel.send('Quiero a todos mis niños pero no de esa forma');
  } 
  if(message.content.startsWith(prefix +'Prof, r u da true queen?')){
    message.channel.send('-starts clucking-');
  }       
  if(message.content.startsWith(prefix +'Profe puedes ayudarme')){
    message.channel.send('Lo siento, tu profesor está en otro montón de trabajo.');
  } 
  if(message.content.startsWith(prefix +'Profe te ves bien hoy')){
    message.channel.send('Pues me he puesto lo unico-digo primero, que tenía en el armario...');
  }  
  if(message.content.startsWith(prefix +'Profe que hace?')){
    message.channel.send('Trabajar obviamente -apaga la telenovela precipitadamente-.');
  }   
  if(message.content.startsWith(prefix +'Prof, ¿conseguiste ser Prime ya?')){
    message.channel.send('-llantos incontrolables de fondo-');
  }     
  if(message.content.startsWith(prefix +'Profe, es usted gay?')){
    message.channel.send('Digamos que en mi casa no había armarios');
  }
  if(message.content.startsWith(prefix +'Profe le gusta alguien?')){
    message.channel.send('¿Qué te hace pensar eso? -esconde algo en el cajón de su escritorio-');
  }  
  if(message.content.startsWith(prefix +'Prof, eres el mejor')){
    message.channel.send('-blushes-');
  }  
  if(message.content.startsWith(prefix +'Prof es usted precioso')){
    message.channel.send('Mis niños si que son preciosos, y haré cuanto esté en mis manos para que estén bien.');
  }  
  if(message.content.startsWith(prefix +'Prof, ¿me puedo comer los shiny powder?')){
    message.channel.send('ESO NO ESTÁ HECHO PARA EL CONSUMO HUMANO, NO LO HAGAS,** NONONON---**');
  }  
  if(message.content.startsWith(prefix +'Prof, ¿que shampoo usas para tu pelo?')){
    message.channel.send('Herbal Essence, el del dibujito del hibisco');
  }  
  if (message.content.startsWith(prefix +"Tipos Interacciones")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Interacciones",
      fields: [{
        name: "-Prof es usted precioso",
        value:"________________",
      },
      {
          name: "-Te quiero Prof",
          value:"________________",
        },
        {
          name: "-Prof, ¿Do u kno da wae?",
          value:"________________",
        },
        {
          name: "-Prof, r u da true queen?",
          value:"________________",
        },
        {
          name: "-Profe, ¿Porqué molestas tanto a Chomp?",
          value:"________________",
        },
        {
          name: "-Prof,¿que shampoo usas para tu pelo?",
          value:"________________",
        },
        {
          name: "-Prof, ¿me puedo comer los shiny powder?",
          value:"________________",
        },
        {
        name: "-Profe como te va",
        value:"________________",
        },
        {
          name: "-Prof, puntuame",
          value:"________________",
        },
        {
          name: "-Buenas profe",
          value:"________________",
        }, 
        {
          name: "-Buenas noches profe",
          value:"________________",
        }, 
        {
          name: "-Cual es tu color favorito prof?",
          value:"________________",
        },  
        {
          name: "-Prof, ¿que opinas de amazon?",
          value:"________________",
        },  
        {
          name: "-Profe casate conmigo",
          value:"________________",
        },  
        {
          name: "-Profe puedes ayudarme",
          value:"________________",
        },  
        {
          name: "-Profe te ves bien hoy",
          value:"________________",
        }, 
        {
          name: "-Profe que hace?",
          value:"________________",
        },   
        {
          name: "-Prof, ¿conseguiste ser Prime ya?",
          value:"________________",
        },
        {
          name: "-Profe, es usted gay?",
          value:"________________",
        },
        {
          name: "-Profe le gusta alguien?",
          value:"________________",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }

  if (message.content.startsWith(prefix +"help Profe")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Help",
      fields: [{
          name: "Normas",
          value:"-Tipos Normas",
        },
        {
        name: "Preguntas frecuentes",
        value:"-Tipos Preguntas",
        },
        {
          name: "Interacciones Profe",
          value:"-Tipos Interacciones",
          },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }

  if (message.content.startsWith(prefix +"Tipos Normas")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Normas",
      fields: [{
          name: "Normas básicas",
          value:"-Normas básicas",
        },
        {
        name: "Normas del arte",
        value:"-Normas del arte",
        },
        {
          name: "Normas del registro de pokémons recién obtenidos",
          value:"-Normas registro",
        },
        {
          name: "Sistema de avisos y penalizaciones",
          value:"-Sistema de avisos",
        },
  
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Sistema de avisos")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Sistema de avisos y penalizaciones",
      fields: [{
          name: "Por cada comunicado que reciba el staff del mal comportamiento de un usuario, se mandará un aviso al usuario en questión. Cuando se acumulen un cierto numero de avisos, se le hará llegar un comunicado de strike o falta al usuario. ",
          value:"**__1er strike__** - **3 avisos** **__2do strike__** - **2 avisos** **__3er strike__** - **1 aviso**",
        },
        {
          name: "Al recibir el 3er strike, el usuario será expulsado del grupo y se le denegará el acceso de nuevo.",
          value:"____",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Normas registro")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Normas del registro de pokémons recién obtenidos",
      fields: [{
          name: "Norma 1",
          value:"**Todo pokémon recién adquirido los datos del cual no se comuniquen al staff, no será tomado como oficial.** Lo que conlleva, que **no podrá ser usado para capturas, combates/concursos ni dibujos libres.**",
        },
        {
        name: "Norma 2",
          value:"**En caso de no poder actualizar los datos del pokémon recién obtenido inmediatamente, será puesto en cola. Solo se pueden tener 3 pokémon sin registrar en cola**, en caso de llegar a tener un **4º pokémon sin datos**, éste **SERÁ LIBERADO AUTOMÁTICAMENTE.**",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  } 
  if (message.content.startsWith(prefix +"Normas del arte")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Normas del arte",
      fields: [{
          name: "Norma 1",
          value:"**Se prefiere que los dibujos sean própios del usuario**, aun así **aceptamos las ayudas que brindan las bases siempre y cuando se dé crédito al autor** de la base, haciendo mención de éste con el código **\":dev[deviantart del autor]:\"**. Del mismo modo, **si se hace una comission de vuestro personaje y deseais subirla** al grupo, **debe estar mencionado el autor** con el mismo código ya mencionado en la descripción. Cualquier arte robado será penalizado con un aviso, entrando en el sistema de avisos y penalizaciones",
        },
        {
        name: "Norma 2",
          value:"* Se ruega que subais los dibujos en su carpeta correspondiente.** Si se selecciona la carpeta equivocada, el staff se lo hará saber al usuario en la \"deviation submit proces\".",
        },
        {
          name: "Nomra 3",
          value:"**En caso de querer subir una deviation +18, es obligatorio que lleve los filtros pertinentes.** Una deviation +18 sin filtros, será denegada automaticamente. Recordamos también que esa clase de deviations **deben ser subidas a su respectiva carpeta (Mature content).**",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Rolear de manera justa")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Cosas que NO hacer",
      fields: [{
          name: "Retconning",
          value:"El retconning es la decisión de un usuario de \"eliminar\" un suceso que le ha ocurrido a su personaje, esto puede causar que si dicho suceso ha afectado o involucrado a otros personajes de otros usuarios, se genere una confusión en la línea temporal de los sucesos. ",
        },
        {
        name: "Metagaming",
          value:"El metagaming es el uso deliberado de conocimiento sobre un personaje ajeno, que nuestro personaje no debería tener, ya que B no se lo ha contado a A pero el usuario de A lo dejó anotado en la ficha como dato curioso para llamar la atención a usuarios que quieran rolear.",
        },
        {
          name: "Powerplay",
          value:" El Powerplay son todas esas acciones que obliguen al otro jugador a seguir tu linea de rol única y exclusivamente sin tener oportunidad de evitarlo.",
        },
        {
        name: "Godmodding",
          value: "El Godmodding son todos aquellos boosts que se le dan al personaje y que lo pueden volver un ente invencible, y se genera en la própia creación del personaje.",
        },
  
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Normas básicas")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Normas básicas",
      fields: [{
          name: "Norma 1",
          value:"**_Respetar_** a todos y cada uno de los miembros del grupo y su staff",
        },
        {
        name: "Norma 2",
          value:"**No acosar al staff** directamente. **Cualquier duda** (por repetitiva que sea) **debe ser mandada al Profesor Altea** y el staff se encargará de atenderos tan pronto les sea posible.",
        },
        {
          name: "Norma 3",
          value:"**El idioma oficial del grupo es el Español** contando cualquiera de sus variantes dialectales del mundo. Se pide a los **interesados a unirse que sepan defenderse con el idioma**, pues no queremos malentendidos.",
        },
        {
        name: "Norma 4",
          value: "No exigimos una actividad constante con las actividades del grupo, los dibujos libres, o las capturas, batallas y concursos, pero sí **pedimos que deis señales de vida** en alguno de los numerosos chats del grupo de vez en cuando, y que **si vais a estar inactivos una temporada** (hiatus) por algún problema personal, **se notifique al staff**. De este modo, si durante el período de hiatus llevamos a cabo una limpieza de usuarios inactivos que ya no tienen interés en el grupo, no se os expulsará.",
        },
        {
        name: "Norma 5",
          value: "**Rolear de manera justa. El Retconning, Metagaming, Powerplay, y Godmodding, se penalizarán con un aviso** y se le abrirá el seguimiento del **sistema de avisos y penalizaciones**. Para mas informacion -Rolear de manera justa",
        },
        {
          name: "Norma 6",
          value: "Si por algún motivo se **pierde el interés por el grupo o el usuario cree no tener tiempo suficiente** para mantenerse activo, y por lo tanto desea abandonarlo,** se ruega notificarlo al staff mediante una nota** al grupo o directamente al profesor, avisandonos de su decisión.  **__Por favor, pedimos expresamente que esa clase de mensajes no se hagan en la página principal de Lux.__**",
        },
        {
        name: "Norma 7",
          value: "**__Si un usuario echa en falta algo o a alguien, culpen a Momo. Él come todo lo que desaparece.__**",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Tipos Preguntas")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas",
      fields: [{
          name: "Preguntas básicas",
          value:"-Preguntas básicas",
        },
        {
        name: "Preguntas céntro pokémon",
        value:"-Preguntas céntro",
        },
        {
          name: "Preguntas capturas",
          value:"-Preguntas capturas",
        },
        {
          name: "Preguntas réltos",
          value:"-Preguntas réltos",
        },
        {
          name: "Preguntas aniversarios luxienses",
          value:"-Preguntas aniversarios",
        },
        {
          name: "Preguntas eventos",
          value:"-Preguntas eventos",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas básicas")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas básicas",
      fields: [{
          name: "¿Puedo tener cualquier pokémon como inicial?",
          value:"No. Los pokémons iniciales están restringidos a ser única y exclusivamente los mencionados en el **journal de convocatorias**. No obstante, el entrenador puede haber tratado con pokémons con anterioridad, simplemente no se le permitirá incorporar pokémons de la história del personaje al equipo.",
        },
        {
        name: "¿Puede mi entrenador haber conocido a mi pokémon inicial antes de su llegada a Lux?",
        value:"No. El profesor Altea encarga, a los profesores de otras regiones, los pokémons que más adelante entregará a los entrenadores que los han solicitado y reservado. Por tanto, no puede haber contacto previo a la entrega.",
        },
        {
          name: "¿Qué hago si un usuario ha hecho Metagaming/Godmodding/Powerplay/Retconning?",
          value:"Primero valora si ha sido algo grave en el rol y si quieres pasarlo por alto o no. Si se da el caso de que lo consideras grave, envía una nota al **Profesor Altea** informando del usuario que debería recibir una penalización y deja capturas de pantalla como pruebas. El staff valorará las pruebas de cara a la aplicación de la penalización. El resultado será comunicado a los respectivos miembros mediante nota privada a cada uno.",
        },
        {
          name: "¿Mi pokémon inicial puede conocer movimientos huevo o tener habilidad oculta?",
          value:"No. Puesto que como ya se ha mencionado, los pokémon iniciales son entregados por el profesor. Son pokémons que han sido atrapados del estado salvaje desde sus regiones de origen, y han sido enviados al profesor Altea. Por lo tanto, no proceden de ningún método de crianza que les otorgue ninguna ventaja ya sea de habilidad oculta o movimientos huevo.",
        },
        {
          name: "¿Cuándo tengo que entregar el journal de la mochila del entrenador, antes o después de ser aceptado en el grupo?",
          value:"El journal debe ser entregado antes del día en el que finalizan las convocatórias, pues se necesita para que el profesor haga entrega de los pokémon y el kit oficial para cada entrenador. Además, será en ese mismo journal, donde se hará entrega de las recompensas que obtenga el entrenador, por lo tanto es imprescindible para poder entrar en el grupo.",
        },
        {
          name: "¿Porqué mi dibujo no aparece en el grupo si lo he subido?",
          value:"Pokémon Lux usa un sistema de revisiones de los dibujos. Cuando un usuario envía un dibujo al grupo, este se pone en espera para ser revisado y recibir su recompensa correspondiente. Actualmente los administradores que se encargan de los trabajos con recompensas própias, son **EdoNyan** que se encarga de los Réltos y Trabajos libres, y **MomoTaroWorld** Que se encarga de capturas pokémon, eclosiones de huevos, recompensas de eventos, y otras recompensas fijas.",
        },
        {
          name: "¿Hay alguna restricción para el medio con el que completar los distintos tipos de actividades?",
          value:"No hay restricción en cuanto al método que escoja el artista. Se puede dibujar tanto a tradicional como a digital como hacer un escrito. Sin embargo, sí existen restricciones para ciertas actividades como por ejemplo, combates pokémon, eventos u otras actividades en las que se especifiquen requisitos en concreto como coloreado, sombreado y fondos en caso de dibujos o superar un número determinado de palabras en caso de escritos.",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas céntro")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas básicas",
      fields: [{
          name: "¿Cuál es el máximo numero de pokémon que puedo almacenar?",
          value:" Sin contar los 6 pokémon que pueden acompañar a tu entrenador, cada caja de PC que obtengas te permite almacenar 30 pokémon extra. Los entrenadores principiantes reciben la primera caja de manera completamente gratuita, y la segunda está a la venta en la tienda pokémon. Para las demás cajas de almacenamiento, se deben ir cumpliendo objetivos con tal de que se pongan a la venta para cada entrenador que haya completado dichos objetivos. Por ejemplo, si Tamaki consigue la primera medalla, podrá comprar la caja 3, pero Diane que aun no ha vencido el gimnasio, aun no podrá comprarla.",
        },
        {
        name: "¿Es necesario cambiar pokémons que estén en el PC antes de poder usarlos para cualquier actividad, evento o combate?",
        value:"Sí. Es necesario pasar por el centro pokémon para incluir un pokémon del PC a tu equipo para poderlo usar en capturas, actividades, eventos, combates, o para dejarlos en la guardería. Por otra parte, no es necesario incluir al equipo activo un pokémon que se quiera intercambiar, ya que desde el mismo PC se pueden enviar al otro entrenador.",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas capturas")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas capturas",
      fields: [{
          name: "¿Tiene alguna función la opción de huida de las capturas pokémon?",
          value:" Más allá de utilidad de desarrollo de los actos de tu entrenador, no, no tiene demasiada utilidad. Básicamente, sabemos que hay entrenadores que se sienten incapaces de herir a un tipo o especie determinada de pokémon y que prefieren huir y dejarlos tranquilos a entablar combate con ellos. Por otra parte, desde el momento en el que un administrador te notifica los resultados de tus búsquedas, el entrenador tiene una semana para responder con sus elecciones para cada encuentro, de no responder en ese plazo de tiempo, se hará una huida forzosa de los 3 encuentros sin tener opción.",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas réltos")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas réltos",
      fields: [{
          name: "¿Puedo completar Réltos que hayan sido cerrados?",
          value:"Poder se pueden completar en cualquier momento, estén abiertos o cerrados, y seguirán teniendo recompensa normal, sin embargo si están cerrados no serán contados en la racha de Réltos seguidos y por lo tanto, no contarán para recibir los objetos especiales que el entrañable NPC regala como premio por el esfuerzo.",
        },
        {
        name: "¿Qué pasa si mi entrenador no quiere hacer alguna de las acciones que Rél propone?",
        value:"No hay problema con que el entrenador no quiera completar la acción. Con dibujarlo indignado y explicar el porqué no quiere saltar o caminar o alguna otra cosa es válido igual.Los Réltos no son de si el entrenador logra llevar a cabo las cosas que el NPC propone, sinó de que el usuario haga semanalmente los dibujos para recibir las recompensas. Por ello, incluso con dibujarlo completamente quieto o reaccionando mal a la propuesta es contado como válido.",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas aniversarios")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas aniversarios",
      fields: [{
          name: "¿Los bonus de las recompensas de dibujos de aniversario son acumulativos?",
          value:"No. Por cada dibujo de regalo a un entrenador cumpleañero tan solo se le multiplicará la recompensa x2. Por ejemplo, si **EdoNyan** le hace un dibujo a Tamaki el día de su cumpleaños, ganará el bonus monetario x2, y si hace un nuevo dibujo, la bonificación seguirá siendo x2.Aclaramos que el bonus es solo por dibujos de regalo, lo que significa que no recibirás bonificación por dibujar el cumpleaños de tu propio personaje. ",
        },
        {
        name: "¿Los aniversarios de los NPC también cuentan?",
        value:"Sí, también se pueden celebrar los aniversarios de los NPCs, oficiales o no, y funcionan del mismo modo que con los entrenadores.",
        },
        {
          name: "¿Tiene limite el tiempo en el que disponemos del bonus x2 de los aniversarios?",
          value:"Sí. Las bonificaciones x2 solo se aplican si el dibujo ha sido publicado el día del cumpleaños del entrenador al que se regala el dibujo.",
          },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content.startsWith(prefix +"Preguntas eventos")){
    message.channel.send({embed: {
      color: 10181046,
      author: {
          name: client.user.username,         
      },
      description: "Preguntas eventos",
      fields: [{
          name: "En las normas solo se especifica un dibujo completamente terminado y con fondo, ¿hacer viñetas también vale?",
          value:"¡Por supuesto que sí! Sin embargo contarán como un mismo dibujo y no darán ningún tipo de bonificación extra por viñeta. Si aun así tu deseo es hacer cómics, ¡tan solo coge el lápiz y da rienda suelta a tu imaginación! -arcoíris-.",
        },
      ],
      timestamp: new Date(),
      footer: {
        text: "_____________"
      }
    }
  });
  }
  if (message.content. startsWith(prefix + 'join')) { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
} 
if (message.content.startsWith(prefix + 'leave')) { 
  let Canalvoz = message.member.voiceChannel;
  if (!Canalvoz) {
      message.channel.send('No estoy en un canal de voz.');
  } else {
      message.channel.send('Dejando el canal de voz.').then(() => {
      Canalvoz.leave();
      }).catch(error => message.channel.send(error));
  }   
}
if (message.content.startsWith(prefix + 'play musica pokemon1')) {
  if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
  const dispatcher = message.guild.voiceConnection.playFile(`D:/MusicaBOT/101 - opening.mp3`);
}
if (message.content.startsWith(prefix + 'play ost ttgl')) {
  if (!message.guild.voiceConnection) return message.channel.send('¡No estoy en un canal de voz!, use `-join` para unirme a un canal.').catch(error => message.channel.send(error));
  const dispatcher = message.guild.voiceConnection.playFile(`D:/MusicaBOT/101 - opening.mp3`);
}
client.on("guildMemberAdd", (member) => {
  console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
  var canal = client.channels.get('279328544579125271'); 
  canal.send(`${member.user}, bienvenido al servidor pasala bien.`);
}); 
});
client.login(process.env.BOT_TOKEN);   
