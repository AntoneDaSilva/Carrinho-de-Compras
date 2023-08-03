class CarrinhoCompras {
    constructor(pesquisa) {
        this.pesquisa = pesquisa;
    }
}

const search_txt = document.querySelector('.search-txt');
const btn_adicionar = document.querySelector('#btn_adicionar');
const produto = document.querySelector('.produto');

let carrinho = [];

const gerenciarCarrinho = () => {
    produto.innerHTML = ''; 

    carrinho.forEach((el)=>{
        const div = document.createElement('div');
        const btn_remover = document.createElement('button');
        btn_remover.innerHTML = 'Remover';
        btn_remover.addEventListener('click', ()=>{
            const indexToRemove = carrinho.indexOf(el);
            if (indexToRemove !== -1) {
                carrinho.splice(indexToRemove, 1);
                div.remove();
            }
        });

        div.innerHTML = `Produto: ${el.pesquisa}`;
        produto.appendChild(div);
        div.appendChild(btn_remover);
    });
}

btn_adicionar.addEventListener('click', () => {
    const pesquisa = search_txt.value.trim();
    if (pesquisa !== '') {
        const cc = new CarrinhoCompras(pesquisa);
        carrinho.push(cc);
        console.log(carrinho);
        gerenciarCarrinho();
        search_txt.value = '';
    } else {
        console.log('O campo de pesquisa está vazio.');
    }
});



