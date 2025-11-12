const txt_cod_sap_cliente = document.getElementById('txt_cod_sap_cliente');
const txt_leitura_atual = document.getElementById('txt_leitura_atual');
const txt_leitura_anterior = document.getElementById('txt_leitura_anterior');

const btn_limpar_cod_sap = document.getElementById('btn_limpar_cod_sap');
const btn_limpar_leitura_atual = document.getElementById('btn_limpar_leitura_atual');
const btn_limpar_leitura_anterior = document.getElementById('btn_limpar_leitura_anterior');

function limparAlertas() {
    // document.getElementById('alertaHorarioInicial').style.display = 'none';
    // document.getElementById('alertaHorarioFinal').style.display = 'none';
    // document.getElementById('alertaFator').style.display = 'none';
}

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

