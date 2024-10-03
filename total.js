function total() {
    const area = document.getElementById('area').value;
    const tipoconstrucao = document.getElementById('tipoconstrucao').value;
    const tijoloSelecionado = document.getElementById('tijolo').classList.contains('selected');
    const cimentoSelecionado = document.getElementById('cimento').classList.contains('selected');
    const canoSelecionado = document.getElementById('cano').classList.contains('selected');
    const argamassaSelecionado = document.getElementById('argamassa').classList.contains('selected');

    let costPerSquareMeter;

    if (tipoconstrucao === 'Residencial') {
        costPerSquareMeter = 1000;
    } else if (tipoconstrucao === 'Comercial') {
        costPerSquareMeter = 1200;
    } else {
        costPerSquareMeter = 0;
    }

    const totalCostConstru = area * costPerSquareMeter;
    let totalCost = totalCostConstru;


    if (tijoloSelecionado) {
        const tijolometro = area * 40;
        const tijolototal = tijolometro * 0.70;
        totalCost += tijolototal;
    }

    if (cimentoSelecionado) {
        const cimemassa = 0.015 * area;
        const cimemetro = (cimemassa * 25) / 100;
        const cimelitros = cimemetro * 1000;
        const cimepreco = cimelitros / 38;
        const cimetotal = cimepreco * 35;
        totalCost += cimetotal;
    }

    if (canoSelecionado) {
        const canometro = 0.5 * area;
        const canopreco = canometro * 40;
        totalCost += canopreco;
    }

    if (argamassaSelecionado) {
        const argametro = area / 4;
        const argatotal = argametro * 33.12;
        totalCost += argatotal;
    }

    document.getElementById('result').innerText = `O custo total estimado é: R$ ${totalCost.toFixed(2)}`;
}

function selecionarBotoes() {
    const cimento = document.getElementById('cimento');
    cimento.classList.toggle('selected');
    const areia = document.getElementById('areia');
    areia.classList.toggle('selected'); }

function selecionarBotoes() {
    const areia = document.getElementById('areia');
    areia.classList.toggle('selected');
    const cimento = document.getElementById('cimento');
    cimento.classList.toggle('selected'); }

function toggleSelection(button) {
    button.classList.toggle("selected");
}