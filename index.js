document.addEventListener('DOMContentLoaded',()=>{
    const tabControls = document.querySelectorAll('.tabs__controllers__item');
    const tabBodys = document.querySelectorAll('.tabs__body');
    const faqs = document.querySelectorAll('.faq__list__item')
    let screenWidth = window.innerWidth;



    //tabs
    tabControls.forEach(control =>{
        control.addEventListener('click',()=>{
            const controlData = control.dataset.title;
            removeActiveClass(tabControls, 'active');
            removeActiveClass(tabBodys, 'active');
            control.classList.add('active')
            tabBodys.forEach(body=>{
                const dataBody = body.dataset.body;
                if(controlData === dataBody ){
                 
                    body.classList.add('active')
                }
            })
        })
    })


     //faqs
    faqs.forEach(faq=>{
        faq.addEventListener('click',()=>{
            faq.classList.toggle('open')
        })
    })
   



    function calcTabItem(){
        tabBodys.forEach(body=>{
            const bodyItem = body.querySelectorAll('.tabs__body__item');
            const showAllBtn = body.querySelector('.show-all');
            bodyItem.forEach((el, index)=>{
                if(screenWidth > 990 && bodyItem.length > 10){
                    showAllBtn.classList.remove('hide')
                    if(index > 9){
                        el.classList.add('hide')

                    }

                }
                if(screenWidth <= 990 && bodyItem.length > 8){
                    showAllBtn.classList.remove('hide')
                    if(index > 7){
                        el.classList.add('hide')

                    }

                }
                if(screenWidth < 768 && bodyItem.length > 6){
                    showAllBtn.classList.remove('hide')
                    if(index > 5){
                        el.classList.add('hide')

                    }

                }
                if(showAllBtn){
                    showAllBtn.addEventListener('click',()=>{
                        removeActiveClass(bodyItem, 'hide');
                        showAllBtn.classList.add('hide')
                    })
                }
            })
           
        })
    }
    function removeActiveClass(arr, className){
        arr.forEach(element => {
            element.classList.remove(`${className}`)
        });
    }

    calcTabItem();
})