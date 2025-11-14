const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');
const txt_num_caso = document.getElementById('txt_num_caso');
const txt_fator = document.getElementById('txt_fator');
const txt_meses = document.getElementById('txt_meses');
const txt_m3 = document.getElementById('txt_m3');
const txt_consumo = document.getElementById('txt_consumo');
const txt_valor_devido = document.getElementById('txt_valor_devido');
const txt_preco_unitario = document.getElementById('txt_preco_unitario');
const txt_valor1 = document.getElementById('txt_valor1');
const txt_valor2 = document.getElementById('txt_valor2');
const txt_valor3 = document.getElementById('txt_valor3');
const txt_valor4 = document.getElementById('txt_valor4');
const txt_valor5 = document.getElementById('txt_valor5');
const txt_valor6 = document.getElementById('txt_valor6');
const txt_media = document.getElementById('txt_media');

const numeros_permitidos = ["0","1","2","3","4","5","6","7","8","9","."];

const btn_limpar_cod_sap = document.getElementById('btn_limpar_cod_sap');
const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');
const btn_calcular_media = document.getElementById('btn_calcular_media');

btn_limpar_cod_sap.addEventListener('click', function () {
    txt_cod_sap_cliente.value = '';
    txt_cod_sap_cliente.focus();
});

btn_limpar_leitura_atual.addEventListener('click', function () {
    txt_leitura_atual.value = '';
    txt_leitura_atual.focus();
});

btn_limpar_leitura_anterior.addEventListener('click', function () {
    txt_leitura_anterior.value = '';
    txt_leitura_anterior.focus();
});

txt_leitura_atual.addEventListener('keyup', function () {
    if (!achouNumero(txt_leitura_atual.keyCode())) {
        return false;
    }
    calcularM3();
    calcularConsumo();
    calcularValorDevido();
});

txt_leitura_anterior.addEventListener('keyup', function () {
    calcularM3();
    calcularConsumo();
    calcularValorDevido();
});

txt_leitura_atual.addEventListener('change', function () {
    calcularM3();
    calcularConsumo();
    calcularValorDevido();
});

txt_leitura_anterior.addEventListener('change', function () {
    calcularM3();
    calcularConsumo();
    calcularValorDevido();
});

btn_calcular_media.addEventListener('click', function () {
    calcularMedia();
});

function calcularM3() {
    const leitura_atual = parseFloat(txt_leitura_atual.value.trim());
    const leitura_anterior = parseFloat(txt_leitura_anterior.value.trim());

    txt_m3.value = "";
    if (leitura_atual > 0 && leitura_anterior > 0) {
        txt_m3.value = leitura_atual - leitura_anterior;
    }
}

function calcularConsumo() {
    const m3 = parseFloat(txt_m3.value.trim());
    const fator = parseFloat(txt_fator.value.trim());

    txt_consumo.value = "";
    if (m3 > 0 && fator > 0) {
        txt_consumo.value = m3 * fator;
    }
}

function calcularValorDevido() {
    const consumo = parseFloat(txt_consumo.value.trim());
    const preco_unitario = parseFloat(txt_preco_unitario.value.trim());

    txt_valor_devido.value = "";
    if (consumo > 0 && preco_unitario > 0) {
        txt_valor_devido.value = consumo * preco_unitario;
    }
}

function calcularMedia() {
    const valor1 = parseFloat(txt_valor1.value.trim());
    const valor2 = parseFloat(txt_valor2.value.trim());
    const valor3 = parseFloat(txt_valor3.value.trim());
    const valor4 = parseFloat(txt_valor4.value.trim());
    const valor5 = parseFloat(txt_valor5.value.trim());
    const valor6 = parseFloat(txt_valor6.value.trim());

    txt_media.value = "";

    let valores = [
        (isNaN(valor1)) ? 0 : valor1, 
        (isNaN(valor2)) ? 0 : valor2,
        (isNaN(valor3)) ? 0 : valor3,
        (isNaN(valor4)) ? 0 : valor4,
        (isNaN(valor5)) ? 0 : valor5,
        (isNaN(valor6)) ? 0 : valor6
    ];

    let i = 0;
    valores.forEach(valor => {
        if (valor > 0) {
            i++;
        }
    });
    // alert(i);

    let total_valores = valores.reduce((a, b) => a + b, 0);
    // alert(total_valores);

    let media = total_valores / i;

    if(!isNaN(media)) {
        txt_media.value = media;
    }

    // alert(media);
}

function achouNumero(numero_digitado) {
    let achou = false;
    numeros_permitidos.forEach(numero_permitido => {
        if (numero_permitido == numero_digitado) {
            achou = true;
        }
    });
    return achou;
}

$(document).ready(function() {
//     $('#txt_leitura_atual').mask('00000.000');
//     $('#txt_leitura_anterior').mask('00000.000');
//     $('#txt_cod_sap_cliente').mask('0000000000');
//     $('#txt_num_caso').mask('0000000000');
//     $('#txt_demonstrativo_reclamado').mask('00/00/0000');
//     $('#txt_ano_medidor').mask('0000');
//     $('#txt_valor_demonstrativo_reclamado').mask('0000.00');
//     // em construção...
//     $('#txt_fator').mask('0.0');
//     $('#txt_meses').mask('00');
//     $('#txt_preco_unitario').mask('0000.000');
//     $('#txt_valor_devido').mask('R$00000,00');
//     $('#txt_valor1').mask('0000.0000');
//     $('#txt_valor2').mask('0000.0000');
//     $('#txt_valor3').mask('0000.0000');
//     $('#txt_valor4').mask('0000.0000');
//     $('#txt_valor5').mask('0000.0000');
//     $('#txt_valor6').mask('0000.0000');
});

alert("ok");