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
                    <div class="row mx-3">
                        <div class="col-12 top-bar-chat p-3">
                            <p class="text-white fs-5 m-0">Ana Valera</p>
                        </div>
                        <div class="col-12 bg-chat size-chat">
                            <div v-for="(item,i) in mensajes" :key="i">
                                <div class="row m-2" v-if="usuarioOrigen.id == item.idUsuario">
                                    <div class="col-3"></div>
                                    <div class="col-9 bg-send-message py-1 px-3 rounded-3">
                                        <p class="text-white text-end m-0">{{item.mensaje}}</p>
                                    </div>
                                </div>
                                <div class="row m-2" v-else>
                                    <div class="col-9 bg-recived-message py-1 px-3 rounded-3">
                                        <p class="text-white text-start m-0">{{item.mensaje}}</p>
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
                <div class="col-4">
                    <div class="row mx-3">
                        <div class="col-12 top-bar-chat p-3">
                            <p class="text-white fs-5 m-0">Robert Kwon</p>
                        </div>
                        <div class="col-12 bg-chat size-chat">
                            <div v-for="(item,i) in mensajes" :key="i">
                                <div class="row m-2" v-if="usuarioDestino.id == item.idUsuario">
                                    <div class="col-3"></div>
                                    <div class="col-9 bg-send-message py-1 px-3 rounded-3">
                                        <p class="text-white text-end m-0">{{item.mensaje}}</p>
                                    </div>
                                </div>
                                <div class="row m-2" v-else>
                                    <div class="col-9 bg-recived-message py-1 px-3 rounded-3">
                                        <p class="text-white text-start m-0">{{item.mensaje}}</p>
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
import {
    toAscii,
    getTransporte,
    getRed,
    getEnlace,
    getFisica
} from '../js/Funciones.js'
export default {
    data() {
        return{
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
            this.consola = 'AH ~' + this.ultimoMensaje
        },
        capaPresentación() {
            this.consola = toAscii(this.ultimoMensaje)
            this.asciiText = this.consola
        },
        capaSesion() {
            this.consola = this.asciiText
        },
        capaTransporte() {
            this.consola = getTransporte(this.asciiText)
        },
        capaRed() {
            this.consola = getRed(this.asciiText, this.usuarioOrigen.ip, this.usuarioDestino.ip)
        },
        capaEnlace() {
            this.consola = getEnlace(this.asciiText, this.usuarioOrigen.ip, this.usuarioDestino.ip, this.usuarioOrigen.mac, this.usuarioDestino.mac)
        },
        capaFisica() {
            this.consola = getFisica(this.asciiText, this.usuarioOrigen.ip, this.usuarioDestino.ip, this.usuarioOrigen.mac, this.usuarioDestino.mac)
        }
    }
}
</script>
<style scoped>
.bg-chat {
    background: #111B21 !important;
}
.size-chat {
    min-height: 100px;
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
    background: #085E55;
}
.view-onda {
    height: 70px;
    width: 370px;
}
.logo-unprg {
    height: 150px;
    width: auto;
}
</style>