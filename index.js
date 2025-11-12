const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');
const txt_num_caso = document.getElementById('txt_num_caso');
const txt_fator = document.getElementById('txt_fator');
const txt_meses = document.getElementById('txt_meses');
const txt_m3 = document.getElementById('txt_m3');
const txt_consumo = document.getElementById('txt_consumo');
const txt_media = document.getElementById('txt_media');
const txt_valor_devido = document.getElementById('txt_valor_devido');
const txt_preco_unitario = document.getElementById('txt_preco_unitario');

const numeros_permitidos = ["0","1","2","3","4","5","6","7","8","9","."];

const btn_limpar_cod_sap = document.getElementById('btn_limpar_cod_sap');
const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');

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
        txt_valor_devido.value = preco_unitario * preco_unitario;
    }
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