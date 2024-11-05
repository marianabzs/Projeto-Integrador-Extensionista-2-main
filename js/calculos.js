

function total() {
    const area = document.getElementById('area').value;
    const tipoconstrucao = document.getElementById('tipoconstrucao').value;
    const andares = document.getElementById('andares').value;
    const tijoloSelecionado = document.getElementById('tijolo').classList.contains('selected');
    const cimentoSelecionado = document.getElementById('cimento').classList.contains('selected');
    // const britaselecionado = document.getElementById('brita').classList.contains('selected');
    const argamassaSelecionado = document.getElementById('argamassa').classList.contains('selected');
    const canoSelecionado = document.getElementById('cano').classList.contains('selected');    
    // const vergalhaoSelecionado = document.getElementById('vergalhao').classList.contains('selected');
    // const conduiteSelecionado = document.getElementById('conduite').classList.contains('selected');
    // const caixadeluzSelecionado = document.getElementById('caixadeluz').classList.contains('selected');
    // const caixadedistribuicaoSelecionado = document.getElementById('quadrodistrib').classList.contains('selected');
    // const telhadefibraSelecionado = document.getElementById('telhafibroc').classList.contains('selected');
    // const calhaSelecionado = document.getElementById('calha').classList.contains('selected');
    // const mantatermicaSelecionado = document.getElementById('mantaterm').classList.contains('selected');
    // const caixadaguaSelecionado = document.getElementById('caixadagua').classList.contains('selected');
    const azulejosSelecionado = document.getElementById('azulejos').classList.contains('selected');
    // const pastilhaSelecionado = document.getElementById('pastilha').classList.contains('selected');
    const ceramicaSelecionado = document.getElementById('ceramica').classList.contains('selected');
    // const porcelanatoSelecionado = document.getElementById('porcelanato').classList.contains('selected');
    // const cimentoqueimadoSelecionado = document.getElementById('cimentoqueimado').classList.contains('selected');
    // const laminadoSelecionado = document.getElementById('laminado').classList.contains('selected');
    // const madeirasSelecionado = document.getElementById('madeiras').classList.contains('selected');
    // const pedrasSelecionado = document.getElementById('pedras').classList.contains('selected');
    // const loucaSelecionado = document.getElementById('loucasemetais').classList.contains('selected');


    let costPerSquareMeter;

    if (tipoconstrucao === 'Residencial') {
        costPerSquareMeter = 1200;
    } else if (tipoconstrucao === 'Comercial') {
        costPerSquareMeter = 1000;
    } else {
        costPerSquareMeter = 0;
    }

    const totalCostConstru = area * costPerSquareMeter;
    let totalCost = totalCostConstru;

    // const totalFinal = totalCost * andares;

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

    if (azulejosSelecionado) {
        const azulejopreco = 95 * area;
        totalCost += azulejopreco;
    }

    if (ceramicaSelecionado) {
        const ceramicapreco = 35 * area;
        totalCost += ceramicapreco;
    }

    // if (vergalhaoselecionado) {
    //     const vergametro = area / 4;
    //     const vergapreco = vergametro * 40;
    // }

    document.getElementById('result').innerText = `Total: R$${totalCost.toFixed(2)}`;
}

function selecionarBotoes(){
    const cimento = document.getElementById('cimento');
    cimento.classList.toggle('selected');
    const areia = document.getElementById('areia');
    areia.classList.toggle('selected'); }

function selecionarBotoes(){
    const areia = document.getElementById('areia');
    areia.classList.toggle('selected');
    const cimento = document.getElementById('cimento');
    cimento.classList.toggle('selected'); }

function toggleSelection(button){
    button.classList.toggle("selected");
}

