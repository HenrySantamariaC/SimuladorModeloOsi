<template>
    <div class="container">
        <div class="row">
            <h2>Simulador modelo OSI</h2>
        </div>
        <div class="row">
            <div class="row">
                <div class="col-4">
                    <div class="row">
                        <div class="col-6 my-2 mx-auto">
                            <label for="IpLocal" class="form-label">IP Local</label>
                            <input type="text" class="form-control form-control-sm" id="IpLocal" placeholder="192.168.1.1" v-model="usuarioOrigen.ip">
                        </div>
                        <div class="col-6 my-2 mx-auto">
                            <label for="MacAdress" class="form-label">MAC Local</label>
                            <input type="text" class="form-control form-control-sm" id="MacAdress" placeholder="00:1B:44:11:3A:B7" v-model="usuarioOrigen.mac">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row">
                        <div class="col-6 my-2 mx-auto">
                            <label for="IpLocal" class="form-label">IP Local</label>
                            <input type="text" class="form-control form-control-sm" id="IpLocal" placeholder="192.168.1.1" v-model="usuarioDestino.ip">
                        </div>
                        <div class="col-6 my-2 mx-auto">
                            <label for="MacAdress" class="form-label">MAC Local</label>
                            <input type="text" class="form-control form-control-sm" id="MacAdress" placeholder="00:1B:44:11:3A:B7" v-model="usuarioDestino.mac">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn bg-chat text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Créditos
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content bg-chat text-light">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Información</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <img src="@/assets/unprg.png" class="logo-unprg">
                                </div>
                                <div class="col-12 py-2">
                                    <h3 class="fw-bold">TELEPROCESOS</h3><br/>
                                    <p>Docente: Royer Niño Morante</p><br/>
                                    <p>Integrantes:</p>
                                    <p>Benavides Goicochea Gregorio</p>
                                    <p>Rivera Buelot Jhunnior</p>
                                    <p>Santamaria Capuñay Henry</p><br/>
                                    <p class="fw-bold">Lambayeque 2022</p>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn bg-chat text-white" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="size-360x640 phone mx-auto">
                        <div class="row m-0">
                            <div class="col-12 top-bar-chat py-2 px-0">
                                <div class="row m-0">
                                    <div class="col-2 p-0">
                                        <img src="@/assets/leftArrow.png" width="20px" height="20px" class="">
                                    </div>
                                    <div class="col-2 p-0">
                                        <img src="@/assets/photoGirl.jpg" width="32px" height="32px" class="rounded rounded-circle">
                                    </div>
                                    <div class="col-6 p-0">
                                        <p class="text-white text-start fs-6 m-0 my-1">Ana Valera</p>
                                    </div>
                                    <div class="col-2 p-0">
                                        <img src="@/assets/ellipsis.png" width="20px" height="20px" class="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 bg-chat size-chat">
                                <div v-for="(item,i) in mensajes" :key="i">
                                    <div class="row m-2" v-if="usuarioOrigen.id == item.idUsuario">
                                        <div class="col-3"></div>
                                        <div class="col-9 p-0 d-flex justify-content-end">
                                            <div class="bg-send-message py-1 px-2 rounded-3">
                                                <p class="text-white text-end m-0 mw-100 text-wrap fs-7">{{item.mensaje}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row m-2" v-else>
                                        <div class="col-9 p-0 d-flex">
                                            <div class="bg-recived-message py-1 px-2 rounded-3">
                                                <p class="text-white text-start mb-0 w-auto fs-7">{{item.mensaje}}</p>
                                            </div>
                                        </div>
                                        <div class="col-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 bg-chat">
                                <div class="row">
                                    <div class="col-10">
                                        <div class="my-2 mx-auto">
                                            <input type="text" class="form-control form-control-sm" id="inputMessage" placeholder=" Escriba mensaje..." v-model="msgOrigen"
                                            v-on:keyup.enter="sendMessage(msgOrigen,usuarioOrigen.id)">
                                        </div>
                                    </div>
                                    <div class="col-2 py-1 px-0">
                                        <button class="btn rounded-circle btn-send-message p-0" @click="sendMessage(msgOrigen,usuarioOrigen.id)">
                                            <img src="@/assets/SendMessage.svg" width="20px" height="20px" class="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="size-360x640 phone mx-auto">
                        <div class="row m-0">
                            <div class="col-12 top-bar-chat py-2 px-0">
                                <div class="row m-0">
                                    <div class="col-2 p-0">
                                        <img src="@/assets/leftArrow.png" width="20px" height="20px" class="">
                                    </div>
                                    <div class="col-2 p-0">
                                        <img src="@/assets/photoBoy.jpg" width="32px" height="32px" class="rounded rounded-circle">
                                    </div>
                                    <div class="col-6 p-0">
                                        <p class="text-white text-start fs-6 m-0 my-1">Robert Kwon</p>
                                    </div>
                                    <div class="col-2 p-0">
                                        <img src="@/assets/ellipsis.png" width="20px" height="20px" class="">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 bg-chat size-chat">
                                <div v-for="(item,i) in mensajes" :key="i">
                                    <div class="row m-2" v-if="usuarioDestino.id == item.idUsuario">
                                        <div class="col-3"></div>
                                        <div class="col-9 p-0 d-flex justify-content-end">
                                            <div class="bg-send-message py-1 px-2 rounded-3">
                                                <p class="text-white text-end m-0 fs-7">{{item.mensaje}}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row m-2" v-else>
                                        <div class="col-9 p-0 d-flex">
                                            <div class="bg-recived-message py-1 px-2 rounded-3">
                                                <p class="text-white text-start mb-0 w-auto fs-7">{{item.mensaje}}</p>
                                            </div>
                                        </div>
                                        <div class="col-3"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 bg-chat">
                                <div class="row">
                                    <div class="col-10">
                                        <div class="my-2 mx-auto">
                                            <input type="text" class="form-control form-control-sm" id="inputMessage" placeholder=" Escriba mensaje..." v-model="msgDestino"
                                            v-on:keyup.enter="sendMessage(msgDestino,usuarioDestino.id)">
                                        </div>
                                    </div>
                                    <div class="col-2 py-1 px-0">
                                        <button class="btn rounded-circle btn-send-message p-0" @click="sendMessage(msgDestino,usuarioDestino.id)">
                                            <img src="@/assets/SendMessage.svg" width="20px" height="20px" class="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="row bg-buttons">
                        <div class="col-12 pt-2">
                            <h2>Capas</h2>
                        </div>
                        <div class="col-6 d-flex flex-column py-2">
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaAplicacion()">Aplicación</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaPresentación()">Presentación</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaSesion()">Sesión</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaTransporte()">Tansporte</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaRed()">Red</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaEnlace()">Enlace de datos</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaFisica()">Física</div>
                        </div>
                        <div class="col-6 d-flex flex-column py-2">
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaAplicacion()">Aplicación</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaPresentación()">Presentación</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaSesion()">Sesión</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaTransporte()">Tansporte</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaRed()">Red</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaEnlace()">Enlace de datos</div>
                            <div class="btn btn-sm bg-chat text-white my-1" @click="capaFisica()">Física</div>
                        </div>
                        <div class="col-12">
                            <img src="@/assets/onda.gif" class="view-onda"> 
                        </div>
                        <div class="col-12">
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Tráfico de datos</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" v-model="consola"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { text_Ascii } from '../js/capa-presentacion.js'
import { enlace } from '../js/capa-enlace.js'
import { transporte } from '../js/capa-transporte.js'
import { red } from '../js/capa-red.js'
import {text_Binario} from '../js/capa-fisica'
export default {
    data() {
        return{
            aux:'',
            msgOrigen: '',
            msgDestino: '',
            consola: '',
            asciiText: '',
            ultimoMensaje: 'Curso de Teleprocesos',
            usuarioOrigen: {
                id: 1,
                ip: '192.168.1.1',
                mac: '00:1B:44:11:3A:B7'
            },
            usuarioDestino: {
                id: 2,
                ip: '192.168.1.250',
                mac: '00:1E:C2:9E:28:6B'
            },
            mensajes: [
                {
                    mensaje: 'Curso de Teleprocesos',
                    idUsuario: 2
                }
            ]
        }
    },
    methods: {
        sendMessage(msg, idUsuario) {
            let temp = {}
            temp.mensaje = msg
            temp.idUsuario = idUsuario
            if(msg !== ''){
                this.mensajes.push(temp)
                this.ultimoMensaje = msg
            }
            this.msgOrigen = ''
            this.msgDestino = ''
        },
        capaAplicacion() {
            this.consola ='AH _' + this.ultimoMensaje 
        },
        capaPresentación() {
            this.asciiText = text_Ascii(this.ultimoMensaje)
            this.consola ='PH-AH _' + this.asciiText
        },
        capaSesion() {
            this.consola ='SH-PH-AH _' + this.asciiText
        },
        capaTransporte() {
            this.consola ='TH-SH-PH-AH _' + transporte(this.asciiText)
        },
        capaRed() {
            this.consola ='RH-TH-SH-PH-AH _' + red(this.asciiText, this.usuarioOrigen.ip, this.usuarioDestino.ip)
        },
        capaEnlace() {
            this.aux = enlace(this.asciiText, this.usuarioOrigen.ip, this.usuarioDestino.ip, this.usuarioOrigen.mac, this.usuarioDestino.mac)
            this.consola='EH-RF-TH-SH-PH-AH _' + this.aux
        },
        capaFisica() {
            const auxh = 'FH EH RF TH SH PH AH';  
            this.consola =text_Binario(auxh) +text_Binario(this.aux)
        }
    },
    updated(){
        let scroll=document.getElementsByClassName("size-chat")[0]
        scroll.scrollTop=scroll.scrollHeight
        scroll=document.getElementsByClassName("size-chat")[1]
        scroll.scrollTop=scroll.scrollHeight
    }
}
</script>
<style scoped>
.bg-chat {
    background: #111B21 !important;
}
.size-chat {
    min-height: 424px;
    max-height: 425px;
    overflow-y: scroll;
    overflow-x: hidden;
}
.top-bar-chat {
    background: #085E55 !important;
}
.bg-buttons {
    background: #E7FFFD !important;
}
.bg-send-message {
    background: #005C4B;
}
.bg-recived-message {
    background: #202C33;
}
.btn-send-message {
    width: 35px;
    height: 35px;
    background: #085e55;
}
.view-onda {
    height: 70px;
    width: 100%;
}
.logo-unprg {
    height: 150px;
    width: auto;
}
.phone {
    border: black 8px solid;
    border-radius: 20px;
    overflow: hidden;
}
.size-360x640{
    width: 300px !important;
    height: 533px !important;
}
.fs-7 {
    font-size: 0.88rem !important;
}

.size-chat::-webkit-scrollbar {
    width: 5px;     /* Tamaño del scroll en vertical */
    height: 5px;    /* Tamaño del scroll en horizontal */
    /* display: none;  Ocultar scroll */
}
/* Ponemos un color de fondo y redondeamos las esquinas del thumb */
.size-chat::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

/* Cambiamos el fondo y agregamos una sombra cuando esté en hover */
.size-chat::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

/* Cambiamos el fondo cuando esté en active */
.size-chat::-webkit-scrollbar-thumb:active {
    background-color: rgba(255, 255, 255, 0.2);
}
/* Ponemos un color de fondo y redondeamos las esquinas del track */
.size-chat::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
    border-radius: 4px;
}

/* Cambiamos el fondo cuando esté en active o hover */
.size-chat::-webkit-scrollbar-track:hover,
.size-chat::-webkit-scrollbar-track:active {
  background: rgba(0, 0, 0, 0);
}


</style>