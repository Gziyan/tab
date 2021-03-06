class Tab {
    constructor(opt = {}) {
        let {tab,head,main} = opt;
        this.tab = opt.tab;
        this.head = opt.head;
        this.main = opt.main;
        this.init();
    }
    init() {
        this.btnclick();
    }
    btnclick() {
        let span = document.querySelectorAll(`${this.head} span`);
        let spans = [...span];
        let li = document.querySelectorAll(`${this.main} ul li`);
        let lis = [...li];
        spans.map((val,idx) =>{
            val.onclick = (() =>{
                lis.map((val1,idxs) =>{
                    spans[idxs].classList.remove('bg');
                    val1.style.display = 'none';
                })
                lis[idx].style.display = 'block';
                spans[idx].classList.add('bg');
            })
        })
    }
}
new Tab({
    tab: "#tab",
    head: ".head",
    main: ".main"
});

