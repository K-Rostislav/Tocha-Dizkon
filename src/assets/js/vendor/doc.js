(function () {
const styles = {
    doc: {
        'background-color': 'rgb(37, 37, 37)',
        'color': 'white',
        'width': '90vw',
        'height': '90vh',
        'position': 'fixed',
        'top': '50%',
        'left': '50%',
        'transform': 'translate(-50%, -50%)',
        'border-radius': '30px',
        'padding': '20px 30px',
        'font-family': 'Montserrat',
        'dispaly': 'flex',
        'flex-direction': 'column',
        'overflow': 'auto',
        'z-index': '2000',
    },
    buttons: {
        'display': 'flex',
        'column-gap': '20px',
        'margin-bottom': '20px',
    },
    btn: {
        'color': 'white',
        'padding': '10px 15px',
        'border': 'none',
        'font-size': '16px',
        'border-radius': '10px',
        'cursor': 'pointer',
        'transition': 'background-color .2s',
    },
    content: {
        'fontSize': '16px',
        'display': 'none',
        'flex-direction': 'column',
    },
    accordGrid: {
        'display': 'grid',
        'grid-template-columns': 'repeat(3, 1fr)',
        'gap': '20px',
        'margin-bottom': '20px',
    },
    block: {
        'border': '1px solid white',
        'border-radius': '10px',
        'padding': '20px',
        'overflow': 'auto',
        'max-width': '530px',
        'height': '350px',
        'background-color': 'rgb(37, 37, 37)',
    },
    code: {
        'text-align': 'left',
        'font-size': '14px',
    },
    accordionResult: {
        'max-width': '530px',
        'margin-bottom': '40px',
    },
    burgerResult: {
        'max-width': '530px',
        'margin-bottom': '40px',
        'border': '1px solid white',
        'padding': '20px',
        'border-radius': '10px',
        'height': '350px',
    },
    yellow: {
        'color': 'rgb(250, 219, 137)'
    },
    green: {
        'color': 'rgb(210, 250, 137)'
    },
    orange: {
        'color': 'rgb(252, 107, 3)'
    },
    purple: {
        'color': 'rgb(184, 129, 199)'
    },
    darkGreen: {
        'color': 'rgb(104, 173, 87)'
    },
    pink: {
        'color': 'rgb(250, 90, 191)'
    },
    blue: {
        'color': 'rgb(76, 155, 252)'
    },
}

const btnsArr = [
    {
        className: 'btn',
        dataTab: 'accordion',
        text: 'Аккордион',
        active: true,
    },
    {
        className: 'btn',
        dataTab: 'burger',
        text: 'Меню бургер',
    },
    {
        className: 'btn',
        dataTab: 'modal',
        text: 'Модальное окно',
    }
]

function docFlag() {
    if (document.querySelector('.doc')) {
        return true
    }

    return false
}

function accordResult1() {
    const buttons = document.querySelectorAll('.doc .acc-result-1 [data-accord]')

    for (let btn of buttons) {
        btn.addEventListener('click', (e) => {
            const $this = e.target
            const id = $this.getAttribute('data-accord')

            document.querySelector(`.doc #${id}`).style.display = 'flex'
        })
    }
}

function accordResult2() {
    const buttons = document.querySelectorAll('.doc .acc-result-2 [data-accord]')
    const contentAll = document.querySelectorAll('.doc .acc-result-2 .accordion__content')

    for (let btn of buttons) {
        btn.addEventListener('click', (e) => {
            const $this = e.target
            const id = $this.getAttribute('data-accord')

            for (let item of contentAll) {
                item.style.display = 'none'
            }

            document.querySelector(`.doc #${id}`).style.display = 'flex'
        })
    }
}

function burgerResult1() {
    const burgerBtn = document.querySelector('.doc .burger-result-1 #burger-btn')
    const burger = document.querySelector('.doc .burger-result-1 #burger')

    let flag = true

    burgerBtn.addEventListener('click', () => {
        if (flag) {
            burger.style.transform = 'translateX(0)'
            flag = false
        } else {
            burger.style.transform = 'translateX(100%)'
            flag = true
        }
    })
}

function btnFunc() {

    const btns = document.querySelectorAll('.btn')

    for (let item of btns) {
        item.addEventListener('click', (e) => {
            const $this = e.target
            const id = $this.getAttribute('data-tab')
            const content = document.getElementById(id)

            for (let item of btns) {
                item.style.backgroundColor = 'rgb(57, 57, 57)'
            }

            $this.style.backgroundColor = 'rgb(120, 0, 224)'

            const contentAll = document.querySelectorAll('.content')
            for (let item of contentAll) {
                item.style.display = 'none'
            }
            content.style.display = 'flex'
        })
    }
}

document.addEventListener('keydown', (e) => {
    if (!docFlag() && e.key === 'F9') {
        const doc = document.createElement('div')
        Object.assign(doc.style, styles.doc)
        doc.classList.add('doc')
        document.body.appendChild(doc)

        doc.innerHTML = `
        <div class="buttons">
        </div>
        `
        const buttons = document.querySelector('.buttons')
        Object.assign(buttons.style, styles.buttons)

        for (let item of btnsArr) {
            buttons.innerHTML += `
            <button style="${item.active ? 'background-color: rgb(120, 0, 224)' : 'background-color: rgb(67, 67, 67)'}" class="${item.className}" data-tab="${item.dataTab}">${item.text}</button>
            `
        }

        const btns = document.querySelectorAll('.doc .btn')
        for (let item of btns) {
            Object.assign(item.style, styles.btn)
        }

        doc.innerHTML += `
        <div id="accordion" class="content">
            <div class="accrodion-grid">
                <div>
                    <p>HTML</p>
                    <pre class="block">
                        <code class="code">
<span class="yellow"><</span><span class="yellow">div </span><span>class</span><span class="green">="accordion"</span><span>></span>
    <span class="yellow"><</span><span class="yellow">button </span> <span>type=</span><span class="green">"button"</span> <span>data-accord</span><span class="green">="accordion-content-1" </span><span>class</span><span class="green">="acordion__btn"</span><span>></span><span>кнопка 1</span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">div </span><span>id</span><span class="green">="accordion-content-1" </span><span>class</span><span class="green">="accordion__content"</span><span class="yellow">></span><span>
        текст 1
    </span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">button </span> <span>type=</span><span class="green">"button"</span> <span>data-accord</span><span class="green">="accordion-content-2" </span><span>class</span><span class="green">="acordion__btn"</span><span>></span><span>кнопка 2</span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">div </span><span>id</span><span class="green">="accordion-content-2" </span><span>class</span><span class="green">="accordion__content"</span><span class="yellow">></span><span>
        текст 2
    </span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">button </span> <span>type=</span><span class="green">"button"</span> <span>data-accord</span><span class="green">="accordion-content-3" </span><span>class</span><span class="green">="acordion__btn"</span><span>></span><span>кнопка 3</span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">div </span><span>id</span><span class="green">="accordion-content-3" </span><span>class</span><span class="green">="accordion__content"</span><span class="yellow">></span><span>
        текст 3
    </span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
                        </code>
                    </pre>
                </div>
                <div>
                    <p>SCSS</p>
                    <pre class="block">
                        <code class="code">
<span>.</span><span class="yellow">accordion</span> <span class="yellow">{</span>
    <span>display:</span> <span class="green">flex</span><span class="orange">;</span>
    <span>flex-direction:</span> <span class="green">column</span><span class="orange">;</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">accordion__content</span> <span class="yellow">{</span>
    <span>display:</span> <span class="green">none</span><span class="orange">;</span>
    <span>color:</span> <span class="green">white</span><span class="orange">;</span>
    
    <span class="yellow">&_active</span> <span class="yellow">{</span>
        <span>display:</span> <span class="green">flex</span><span class="orange">;</span>
    <span class="yellow">}</span>
<span class="yellow">}</span>
                        </code>
                    </pre>
                </div>
                <div>
                    <p>JS</p>
                    <pre class="block">
                        <code class="code">
<span class="orange">const</span> <span>buttons</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'[data-accord]'</span>)</span>

<span class="orange">for </span><span class="yellow">(</span><span class="orange">let</span> <span>btn</span> <span class="orange">of</span> <span>buttons</span><span class="yellow">)</span> <span class="yellow">{</span>
    <span>btn.</span><span class="yellow">addEventListener</span><span class="pink">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="blue">(</span><span>e</span><span class="blue">)</span> <span>=></span> <span class="blue">{</span>
        <span class="orange">const</span> <span>$this = e.</span><span class="purple">target</span>
        <span class="orange">const</span> <span>id = $this.</span><span class="yellow">getAttribute</span><span class="yellow">(<span class="dark-green">'data-accord'</span>)</span>

        <span class="purple">document</span><span>.</span><span class="yellow">getElementById</span><span class="yellow">(</span><span>id</span><span class="yellow">)</span><span>.</span><span class="purple">classList</span><span>.</span><span class="yellow">add(<span class="dark-green">'accordion__content_active'</span>)</span>
    <span class="blue">}</span><span class="pink">)</span>
<span class="yellow">}</span>
                        </code>
                    </pre>
                </div>
            </div>
            <div class="accordion__result acc-result-1">
                <p>Результат :</p>
                <div style="display: flex; flex-direction: column;">
                    <button data-accord="acc-reslut1-content-1">кнопка 1</button>
                    <div id="acc-reslut1-content-1" style="display: none; color: white;">
                        текст 1
                    </div>
                    <button data-accord="acc-reslut1-content-2">кнопка 2</button>
                    <div id="acc-reslut1-content-2" style="display: none; color: white;">
                        текст 2
                    </div>
                    <button data-accord="acc-reslut1-content-3">кнопка 3</button>
                    <div id="acc-reslut1-content-3" style="display: none; color: white;">
                        текст 3
                    </div>
                </div>
            </div>
            <div style="margin-bottom: 20px">
                <p>JS</p>
                <pre class="block">
                    <code class="code">
<span class="orange">const</span> <span>buttons</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'[data-accord]'</span>)</span>
<span class="orange">const</span> <span>contentAll</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'.accordion__content'</span>)</span>

<span class="orange">for </span><span class="yellow">(</span><span class="orange">let</span> <span>btn</span> <span class="orange">of</span> <span>buttons</span><span class="yellow">)</span> <span class="yellow">{</span>
    <span>btn.</span><span class="yellow">addEventListener</span><span class="pink">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="blue">(</span><span>e</span><span class="blue">)</span> <span>=></span> <span class="blue">{</span>
        <span class="orange">const</span> <span>$this = e.</span><span class="purple">target</span>
        <span class="orange">const</span> <span>id = $this.</span><span class="yellow">getAttribute</span><span class="yellow">(<span class="dark-green">'data-accord'</span>)</span>

        <span class="orange">for</span> <span class="yellow">(</span><span class="orange">let</span> <span>item</span> <span class="orange">of</span> <span>contentAll</span><span class="yellow">)</span> <span class="yellow">{</span>
            <span>item.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove(<span class="dark-green">'accordion__content_active'</span>)</span>
        <span class="yellow">}</span>

        <span class="purple">document</span><span>.</span><span class="yellow">getElementById</span><span class="yellow">(</span><span>id</span><span class="yellow">)</span><span>.</span><span class="purple">classList</span><span>.</span><span class="yellow">add(<span class="dark-green">'accordion__content_active'</span>)</span>
    <span class="blue">}</span><span class="pink">)</span>
<span class="yellow">}</span>
                    </code>
                </pre>
            </div>
            <div class="accordion__result acc-result-2">
            <p>Результат :</p>
            <div class="acordion" style="display: flex; flex-direction: column;">
                <button data-accord="acc-reslut2-content-1">кнопка 1</button>
                <div class="accordion__content" id="acc-reslut2-content-1" style="display: none; color: white;">
                    текст 1
                </div>
                <button data-accord="acc-reslut2-content-2">кнопка 2</button>
                <div class="accordion__content" id="acc-reslut2-content-2" style="display: none; color: white;">
                    текст 2
                </div>
                <button data-accord="acc-reslut2-content-3">кнопка 3</button>
                <div class="accordion__content" id="acc-reslut2-content-3" style="display: none; color: white;">
                    текст 3
                </div>
            </div>
        </div>
        </div>





    <div id="burger" class="content">
        <div class="accrodion-grid">
            <div>
                <p>HTML</p>
                <pre class="block">
                    <code class="code">
<span class="yellow"><</span><span class="yellow">button</span> <span>class</span><span class="green">="burger-btn"</span> <span>type</span><span class="green">="button"</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">span</span> <span>class</span><span class="green">="burger-btn__line"</span><span class="yellow">></span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">span</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">span</span> <span>class</span><span class="green">="burger-btn__line"</span><span class="yellow">></span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">span</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">span</span> <span>class</span><span class="green">="burger-btn__line"</span><span class="yellow">></span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">span</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">div</span> <span>class</span><span class="green">="burger"</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
                    </code>
                </pre>
            </div>
            <div>
                <p>SCSS</p>
                <pre class="block">
                    <code class="code">
<span>.</span><span class="yellow">burger-btn</span> <span class="yellow">{</span>
    <span>width:</span> <span class="yellow">rem<span class="pink">(<span class="blue">30</span>)</span></span><span class="orange">;</span>
    <span>height:</span> <span class="yellow">rem<span class="pink">(<span class="blue">20</span>)</span></span><span class="orange">;</span>
    <span>display:</span> <span class="green">flex</span><span class="orange">;</span>
    <span>border:</span> <span class="green">none</span><span class="orange">;</span>
    <span>flex-direction:</span> <span class="green">column</span><span class="orange">;</span>
    <span>justify-content:</span> <span class="green">space-between</span><span class="orange">;</span>
    <span>background:</span> <span class="green">none</span><span class="orange">;</span>
    <span>cursor:</span> <span class="green">pointer</span><span class="orange">;</span>
    <span>position:</span> <span class="green">relative</span><span class="orange">;</span>

    <span class="yellow">&</span><span>__line</span> <span class="pink">{</span>
        <span>width:</span> <span class="blue">100</span><span>%</span><span class="orange">;</span>
        <span>height:</span> <span class="yellow">rem<span class="blue">(3)</span></span><span class="orange">;</span>
        <span>background-color:</span> <span class="green">white</span><span class="orange">;</span>
        <span>display:</span> <span class="green">block</span><span class="orange">;</span>
        <span>transition:</span> <span>transform</span> <span class="blue">.2</span><span class="green">s</span><span class="orange">;</span>
    <span class="pink">}</span>

    <span class="yellow">&</span><span>_active</span> <span class="pink">{</span>
        <span>.</span><span class="yellow">burger-btn__line</span> <span class="blue">{</span>
            <span class="yellow">&</span><span>:</span><span class="yellow">nth-of-type(<span class="blue">1</span>)</span> <span class="yellow">{</span>
                <span>transform:</span> <span class="yellow">rotate<span class="pink">(<span class="blue">45</span><span class="green">deg</span>)</span></span><span class="orange">;</span>
                <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
                <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
            <span class="yellow">}</span>

            <span class="yellow">&</span><span>:</span><span class="yellow">nth-of-type(<span class="blue">2</span>)</span> <span class="yellow">{</span>
                <span>transform:</span> <span class="yellow">translateX</span><span class="pink">(</span><span class="blue">200</span><span>%</span><span class="pink">)</span><span class="orange">;</span>
                <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
                <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
            <span class="yellow">}</span>

            <span class="yellow">&</span><span>:</span><span class="yellow">nth-of-type(<span class="blue">3</span>)</span> <span class="yellow">{</span>
                <span>transform:</span> <span class="yellow">rotate<span class="pink">(<span class="blue">-45</span><span class="green">deg</span>)</span></span><span class="orange">;</span>
                <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
                <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
            <span class="yellow">}</span>
        <span class="blue">}</span>
    <span class="pink">}</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">burger</span> <span class="yellow">{</span>
    <span>width:</span> <span class="yellow">rem<span class="pink">(<span class="blue">300</span>)</span></span><span class="orange">;</span>
    <span>height:</span> <span class="blue">100</span><span class="green">vh</span><span class="orange">;</span>
    <span>background-color:</span> <span class="yellow">rgb</span><span class="pink">(<span class="blue">53, 53, 53</span>)</span><span class="orange">;</span>
    <span>position:</span> <span class="green">fixed</span><span class="orange">;</span>
    <span>right:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>top:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>transform:</span> <span class="yellow">translateX</span><span class="pink">(</span><span class="blue">100</span><span>%</span><span class="pink">)</span><span class="orange">;</span>
    <span>transition:</span> <span>transform</span> <span class="blue">.2</span><span class="green">s</span><span class="orange">;</span>

    <span class="yellow">&</span><span>_active</span> <span class="pink">{</span>
        <span>transform:</span> <span class="yellow">translateX</span><span class="pink">(</span><span class="blue">0</span><span class="pink">)</span><span class="orange">;</span>
    <span class="pink">}</span>
<span class="yellow">}</span>
                    </code>
                </pre>
            </div>
            <div>
                <p>JS</p>
                <pre class="block">
                    <code class="code">
<span class="orange">const</span> <span>burgerBtn</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelector(<span class="dark-green">'.burger-btn'</span>)</span>
<span class="orange">const</span> <span>burger</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelector(<span class="dark-green">'.burger'</span>)</span>

<span>burgerBtn</span><span>.</span><span class="yellow">addEventListener</span><span class="yellow">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="pink">()</span> <span>=></span> <span class="pink">{</span>
    <span>burgerBtn</span><span>.</span><span class="purple">classList</span><span>.</span><span class="yellow">toggle</span><span class="blue">(<span class="dark-green">'burger-btn_active'</span>)</span>
    <span>burger</span><span>.</span><span class="purple">classList</span><span>.</span><span class="yellow">toggle</span><span class="blue">(<span class="dark-green">'burger_active'</span>)</span>
<span class="pink">}</span><span class="yellow">)</span>
                    </code>
                </pre>
            </div>
        </div>

        <p>Результат :</p>
        <div style="position: relative; overflow: hidden;" class="burger__result burger-result-1">
            <button style="width: 30px; height: 20px; display: flex; flex-direction: column; justify-content: space-between; background: none; cursor: pointer; border: none;" id="burger-btn" type="button">
                <span style="width: 100%; height: 3px; background-color: white; display: block;" class="burger-btn__line"></span>
                <span style="width: 100%; height: 3px; background-color: white; display: block;" class="burger-btn__line"></span>
                <span style="width: 100%; height: 3px; background-color: white; display: block;" class="burger-btn__line"></span>
            </button>
            <div style="position: absolute; width: 60%; height: 100%; right: 0; top: 0; background-color: rgb(120, 0, 224); transform: translateX(100%); transition: transform .2s;" id="burger">
            </div>
        </div>
  
        </div>
    </div>



    <div id="modal" class="content">
        <div class="accrodion-grid">
            <div>
                <p>HTML</p>
                <pre class="block">
                    <code class="code">
<span class="yellow"><</span><span class="yellow">button</span> <span>data-modal</span><span class="green">="modal-1"</span> <span>type</span><span class="green">="button"</span> <span>class</span><span class="green">="modal-btn"</span><span class="yellow">></span><span>Модальное окно 1</span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">div</span> <span>class</span><span class="green">="modal"</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">div</span> <span>id</span><span class="green">="modal-1"</span> <span>class</span><span class="green">="modal__content"</span><span class="yellow">></span>
        <span class="yellow"><</span><span class="yellow">div</span> <span>class</span><span class="green">="modal__inner"</span><span class="yellow">></span>
            <span class="yellow"><</span><span class="yellow">button</span> <span>type</span><span class="green">="button"</span> <span>class</span><span class="green">="modal__close-btn close-btn"</span><span class="yellow">></span>
                <span class="yellow"><</span><span class="yellow">span</span> <span>class</span><span class="green">="close-btn__line"</span><span class="yellow">></span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">span</span><span class="yellow">></span>
                <span class="yellow"><</span><span class="yellow">span</span> <span>class</span><span class="green">="close-btn__line"</span><span class="yellow">></span><span class="yellow"><</span><span class="yellow">/</span><span class="yellow">span</span><span class="yellow">></span>
            <span class="yellow"><</span><span class="yellow">/</span><span class="yellow">button</span><span class="yellow">></span>
        <span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
    <span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
<span class="yellow"><</span><span class="yellow">/</span><span class="yellow">div</span><span class="yellow">></span>
                    </code>
                </pre>
            </div>
            <div>
                <p>SCSS</p>
                <pre class="block">
                    <code class="code">
<span>.</span><span class="yellow">modal-btn</span> <span class="yellow">{</span>
    <span>cursor:</span> <span class="green">pointer</span><span class="orange">;</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">modal</span> <span class="yellow">{</span>
    <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
    <span>width:</span> <span class="blue">100</span><span class="green">vw</span><span class="orange">;</span>
    <span>height:</span> <span class="blue">100</span><span class="green">vh</span><span class="orange">;</span>
    <span>top:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>left:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>background-color:</span> <span class="yellow">rgb</span><span class="pink">(<span class="blue">0, 0, 0, 0.52</span>)</span><span class="orange">;</span>
    <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>

    <span class="yellow">&</span><span>_open</span> <span class="pink">{</span>
        <span>animation:</span> <span>modal-open</span> <span class="blue">.4</span><span class="green">s</span> <span class="green">forwards</span><span class="orange">;</span>

        <span class="orange">@keyframes</span> <span class="yellow">modal-open</span> <span class="blue">{</span>
            <span class="yellow">0%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>
            <span class="yellow">}</span>
            <span class="yellow">100%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">1</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">auto</span><span class="orange">;</span>
            <span class="yellow">}</span>
        <span class="blue">}</span>
    <span class="pink">}</span>

    <span class="yellow">&</span><span>_close</span> <span class="pink">{</span>
        <span>animation:</span> <span>modal-close</span> <span class="blue">.4</span><span class="green">s</span> <span class="green">forwards</span><span class="orange">;</span>

        <span class="orange">@keyframes</span> <span class="yellow">modal-close</span> <span class="blue">{</span>
            <span class="yellow">0%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">.5</span><span class="orange">;</span>
            <span class="yellow">}</span>
            <span class="yellow">100%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>
            <span class="yellow">}</span>
        <span class="blue">}</span>
    <span class="pink">}</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">modal__content</span> <span class="yellow">{</span>
    <span>width:</span> <span class="yellow">rem<span class="pink">(<span class="blue">500</span>)</span></span><span class="orange">;</span>
    <span>height:</span> <span class="yellow">rem<span class="pink">(<span class="blue">300</span>)</span></span><span class="orange">;</span>
    <span>background-color:</span> <span class="yellow">rgb<span class="pink">(<span class="blue">120, 0, 224</span>)</span></span><span class="orange">;</span>
    <span>padding:</span> <span class="yellow">rem<span class="pink">(<span class="blue">20</span>)</span></span><span class="orange">;</span>
    <span>border-radius:</span> <span class="yellow">rem<span class="pink">(<span class="blue">20</span>)</span></span><span class="orange">;</span>
    <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
    <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>
    <span>right:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
    <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
    <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
    <span>transform:</span> <span class="yellow">translate</span><span class="pink">(</span><span class="blue">50</span><span>%</span><span class="blue">,</span> <span class="blue">-30</span><span>%</span><span class="pink">)</span><span class="orange">;</span>

    <span class="yellow">&</span><span>_open</span> <span class="pink">{</span>
        <span>animation:</span> <span>modal-content-open</span> <span class="blue">.4</span><span class="green">s</span> <span class="green">forwards</span><span class="orange">;</span>

        <span class="orange">@keyframes</span> <span class="yellow">modal-content-open</span> <span class="blue">{</span>
            <span class="yellow">0%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>
            <span class="yellow">}</span>
            <span class="yellow">100%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">1</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">auto</span><span class="orange">;</span>
                <span>transform:</span> <span class="yellow">translate</span><span class="pink">(</span><span class="blue">50</span><span>%</span><span class="blue">,</span> <span class="blue">-50</span><span>%</span><span class="pink">)</span><span class="orange">;</span>
            <span class="yellow">}</span>
        <span class="blue">}</span>
    <span class="pink">}</span>

    <span class="yellow">&</span><span>_close</span> <span class="pink">{</span>
        <span>animation:</span> <span>modal-content-close</span> <span class="blue">.4</span><span class="green">s</span> <span class="green">forwards</span><span class="orange">;</span>

        <span class="orange">@keyframes</span> <span class="yellow">modal-content-close</span> <span class="blue">{</span>
            <span class="yellow">0%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">.5</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">auto</span><span class="orange">;</span>
                <span>transform:</span> <span class="yellow">translate</span><span class="pink">(</span><span class="blue">50</span><span>%</span><span class="blue">,</span> <span class="blue">-50</span><span>%</span><span class="pink">)</span><span class="orange">;</span>
            <span class="yellow">}</span>
            <span class="yellow">100%</span> <span class="yellow">{</span>
                <span>opacity:</span> <span class="blue">0</span><span class="orange">;</span>
                <span>pointer-events:</span> <span class="green">none</span><span class="orange">;</span>
                <span>transform:</span> <span class="yellow">translate</span><span class="pink">(</span><span class="blue">50</span><span>%</span><span class="blue">,</span> <span class="blue">-30</span><span>%</span><span class="pink">)</span><span class="orange">;</span>
            <span class="yellow">}</span>
        <span class="blue">}</span>
    <span class="pink">}</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">modal__inner</span> <span class="yellow">{</span>
    <span>position:</span> <span class="green">relative</span><span class="orange">;</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">modal__close-btn</span> <span class="yellow">{</span>
    <span>margin-left:</span> <span class="green">auto</span><span class="orange">;</span>
<span class="yellow">}</span>
<span>.</span><span class="yellow">close-btn</span> <span class="yellow">{</span>
    <span>width:</span> <span class="yellow">rem<span class="pink">(<span class="blue">20</span>)</span></span><span class="orange">;</span>
    <span>height:</span> <span class="yellow">rem<span class="pink">(<span class="blue">20</span>)</span></span><span class="orange">;</span>
    <span>position:</span> <span class="green">relative</span><span class="orange">;</span>
    <span>transition:</span> <span>transform</span> <span class="blue">.2</span><span class="green">s</span><span class="orange">;</span>
    <span>border:</span> <span class="green">none</span><span class="orange">;</span>
    <span>background:</span> <span class="green">none</span><span class="orange">;</span>
    <span>cursor:</span> <span class="green">pointer</span><span class="orange">;</span>
    <span>display:</span> <span class="green">block</span><span class="orange">;</span>

    <span class="yellow">&</span><span>:</span><span class="yellow">hover</span> <span class="pink">{</span>
        <span>transform:</span> <span class="yellow">scale<span class="blue">(1.3)</span></span><span class="orange">;</span>
    <span class="pink">}</span>

    <span class="yellow">&</span><span>__line</span> <span class="pink">{</span>
        <span>width:</span> <span class="blue">100</span><span>%</span><span class="orange">;</span>
        <span>height:</span> <span class="yellow">rem<span class="blue">(3)</span></span><span class="orange">;</span>
        <span>background-color:</span> <span class="green">white</span><span class="orange">;</span>
        <span>display:</span> <span class="green">block</span><span class="orange">;</span>

        <span class="yellow">&</span><span>:</span><span class="yellow">nth-of-type<span class="blue">(1)</span></span> <span class="blue">{</span>
            <span>transform:</span> <span class="yellow">rotate(<span class="blue">45</span><span class="green">deg</span>)</span><span class="orange">;</span>
            <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
            <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
        <span class="blue">}</span>

        <span class="yellow">&</span><span>:</span><span class="yellow">nth-of-type<span class="blue">(2)</span></span> <span class="blue">{</span>
            <span>transform:</span> <span class="yellow">rotate(<span class="blue">-45</span><span class="green">deg</span>)</span><span class="orange">;</span>
            <span>position:</span> <span class="green">absolute</span><span class="orange">;</span>
            <span>top:</span> <span class="blue">50</span><span>%</span><span class="orange">;</span>
        <span class="blue">}</span>
    <span class="pink">}</span>
<span class="yellow">}</span>

                    </code>
                </pre>
            </div>
            <div>
                <p>JS</p>
                <pre class="block">
                    <code class="code">
<span class="orange">const</span> <span>modalBtns</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'[data-modal]'</span>)</span>
<span class="orange">const</span> <span>modalCloseBtn</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'.modal__close-btn'</span>)</span>
<span class="orange">const</span> <span>modals</span> <span>=</span> <span class="purple">document</span><span>.</span><span class="yellow">querySelectorAll(<span class="dark-green">'.modal'</span>)</span>

<span class="orange">for</span> <span class="yellow">(</span><span class="orange">let</span> <span>btn</span> <span class="orange">of</span> <span>modalBtns</span><span class="yellow">)</span> <span class="yellow">{</span>
    <span>btn.</span><span class="yellow">addEventListener</span><span class="pink">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="blue">(</span><span>e</span><span class="blue">)</span> <span>=></span> <span class="blue">{</span>
        <span class="orange">const</span> <span>$this = e.</span><span class="purple">target</span>
        <span class="orange">const</span> <span>id = $this.</span><span class="yellow">getAttribute(<span class="dark-green">'data-modal'</span>)</span>
        <span class="orange">const</span> <span>modalContent =</span> <span class="purple">document</span><span>.</span><span class="yellow">getElementById(</span><span>id</span><span class="yellow">)</span>
        <span class="orange">const</span> <span>parentModal = modalContent.</span><span class="yellow">closest(<span class="dark-green">'.modal'</span>)</span>

        <span>modalContent.</span><span class="purple">classList</span><span>.</span><span class="yellow">add(<span class="dark-green">'modal__content_open'</span>)</span>
        <span>modalContent.</span><span class="yellow">closest(<span class="dark-green">'.modal'</span>)</span><span>.</span><span class="purple">classList</span><span>.</span><span class="yellow">add(<span class="dark-green">'modal_open'</span>)</span>

        <span class="orange">if</span> <span class="yellow">(</span><span>parentModal.</span><span class="purple">classList</span><span>.</span><span class="yellow">contains</span><span class="pink">(<span class="dark-green">'modal_close'</span>)</span><span class="yellow">)</span> <span class="yellow">{</span>
            <span>parentModal.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal_close'</span>)</span>
            <span>parentModal.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal_open'</span>)</span>
            <span>modalContent.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal__content_close'</span>)</span>
            <span>modalContent.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal__content_open'</span>)</span>
        <span class="yellow">}</span>
    <span class="blue">}</span><span class="pink">)</span>
<span class="yellow">}</span>

<span class="orange">for</span> <span class="yellow">(</span><span class="orange">let</span> <span>btn</span> <span class="orange">of</span> <span>modalCloseBtn</span><span class="yellow">)</span> <span class="yellow">{</span>
    <span>btn.</span><span class="yellow">addEventListener</span><span class="pink">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="blue">(</span><span>e</span><span class="blue">)</span> <span>=></span> <span class="blue">{</span>
        <span class="orange">const</span> <span>$this = e.</span><span class="purple">target</span>
        <span class="orange">const</span> <span>parentModal = $this.</span><span class="yellow">closest(<span class="dark-green">'.modal'</span>)</span>
        <span class="orange">const</span> <span>modalContent = $this.</span><span class="yellow">closest(<span class="dark-green">'.modal__content'</span>)</span>

        <span>parentModal.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal_open'</span>)</span>
        <span>parentModal.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal_close'</span>)</span>

        <span>modalContent.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal__content_open'</span>)</span>
        <span>modalContent.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal__content_close'</span>)</span>

    <span class="blue">}</span><span class="pink">)</span>
<span class="yellow">}</span>

<span class="orange">for</span> <span class="yellow">(</span><span class="orange">let</span> <span>modal</span> <span class="orange">of</span> <span>modals</span><span class="yellow">)</span> <span class="yellow">{</span>
    <span>modal.</span><span class="yellow">addEventListener</span><span class="pink">(</span><span class="dark-green">'click'</span><span class="orange">,</span> <span class="blue">(</span><span>e</span><span class="blue">)</span> <span>=></span> <span class="blue">{</span>
        <span class="orange">const</span> <span>$this = e.</span><span class="purple">target</span>
        <span class="orange">const</span> <span>parent = $this.</span><span class="yellow">closest(<span class="dark-green">'.modal'</span>)</span>
        <span class="orange">const</span> <span>child = parent.</span><span class="purple">firstElementChild</span>

        <span class="orange">if</span> <span class="yellow">(</span><span>!$this.</span><span class="yellow">closest</span><span class="pink">(<span class="dark-green">'.modal__content'</span>)</span><span class="yellow">)</span> <span class="yellow">{</span>
            <span>parent.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal_open'</span>)</span>
            <span>parent.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal_close'</span>)</span>
            <span>child.</span><span class="purple">classList</span><span>.</span><span class="yellow">remove</span><span class="pink">(<span class="dark-green">'modal__content_open'</span>)</span>
            <span>child.</span><span class="purple">classList</span><span>.</span><span class="yellow">add</span><span class="pink">(<span class="dark-green">'modal__content_close'</span>)</span>
        <span class="yellow">}</span>
    <span class="blue">}</span><span class="pink">)</span>
<span class="yellow">}</span>
                    </code>
                </pre>
            </div>
        </div>
    </div>
    </div>
        `

        const content = document.querySelectorAll('.doc .content')
        const accordContent = document.querySelector('.doc #accordion')
        for (let item of content) {
            Object.assign(item.style, styles.content)
        }
        accordContent.style.display = 'flex'

        const accordGrid = document.querySelectorAll('.doc .accrodion-grid')
        for (let item of accordGrid) {
            Object.assign(item.style, styles.accordGrid)
        }

        const block = document.querySelectorAll('.doc .block')
        for (let item of block) {
            Object.assign(item.style, styles.block)
        }

        const code = document.querySelectorAll('.doc .code')
        for (let item of code) {
            Object.assign(item.style, styles.code)
        }

        const codeSymbol = document.querySelectorAll('.yellow, .green, .orange, .purple, .dark-green, .pink, .blue')
        for (let item of codeSymbol) {
            if (item.classList.contains('yellow')) {
                Object.assign(item.style, styles.yellow)
            } else if (item.classList.contains('green')) {
                Object.assign(item.style, styles.green)
            } else if (item.classList.contains('orange')) {
                Object.assign(item.style, styles.orange)
            } else if (item.classList.contains('purple')) {
                Object.assign(item.style, styles.purple)
            } else if (item.classList.contains('dark-green')) {
                Object.assign(item.style, styles.darkGreen)
            } else if (item.classList.contains('pink')) {
                Object.assign(item.style, styles.pink)
            } else if (item.classList.contains('blue')) {
                Object.assign(item.style, styles.blue)
            }
        }

        const accordionResult = document.querySelectorAll('.doc .accordion__result')
        for (let item of accordionResult) {
            Object.assign(item.style, styles.accordionResult)
        }

        const burgerResult = document.querySelectorAll('.doc .burger__result')
        for (let item of burgerResult) {
            Object.assign(item.style, styles.burgerResult)
        }

        btnFunc()
        accordResult1()
        accordResult2()
        burgerResult1()
    } else {
        if (e.key === 'F9') {
            document.querySelector('.doc').remove()
        }
    }
})
})();