'use strict';
const ToastF = (function(arg){
    if(!arg){
        return;
    }
    let options = {}
    if(arg.constructor === Object){
        //console.log(arg);
        options = arg;
        //console.log(options);
    }
    if(arg.constructor === String){
        options.message = arg;
    }
    if(!options.message || options.message === ''){
        throw new Error("ToastF requires a message");
        return
    }
    let init = function(){
        initOptions();
        createAlertElement();
        setClass();
        setPosition();
        setAnimation();
        removeAlert();
    };
    let createAlertElement = function(){
        let toastContainer = document.querySelector('.alert-toastf');
        //remove alert element if already exist
        if(toastContainer !== null){
            document.querySelector('body').removeChild(toastContainer);
        }
        document.querySelector('body').appendChild(container());
    }
    let toastBody = function(){
        let t_body = document.createElement('div');
        t_body.classList.add('alert-body');
        let t_title = document.createElement('div');
        if(options.title){
            t_title.classList.add('alert-title');
            t_title.innerHTML = options.title;
            t_body.appendChild(document.createTextNode(options.title));
        }

        t_body.appendChild(document.createTextNode(options.message));
        //console.log(t_body);
        return t_body;
    };

    let icon = function(){
        let t_icon_container = document.createElement('div');
        t_icon_container.classList.add('alert-icon');
        let t_icon = document.createElement('i');
        t_icon.classList.add(options.icon);
        t_icon_container.appendChild(t_icon);
        return t_icon_container;
    };

    let container = function () {
        let toastContainer = document.createElement('div');
        toastContainer.classList.add('alert-toastf','alert-position');
        toastContainer.setAttribute("id","toastF")
       
        if(options.icon) {
            toastContainer.appendChild(icon());
        }
            toastContainer.appendChild(toastBody());
            return toastContainer;
    };

    let setClass = function(){
        let alert = getAlertContainer()
        let alertClasses = ['alert-info','alert-warning','top-left','alert-danger','alert-success'];
        //clear classes
        removeClasses(alertClasses,alert);
        let typesList = {
            info: 'alert-info',
            warning: 'alert-warning',
            danger: 'alert-danger',
            success: 'alert-success',
            default: 'alert-light',
        };
        for(let types in typesList){
            if(types === options.type){
                alert.classList.add(typesList[types]);
                return
            }
        }
    };

    let setPosition = function(){
        let alert = getAlertContainer()
        let pos = ['top-center','top-right','top-left','bottom-center','bottom-right','bottom-left'];
        removeClasses(pos,alert);
        for(let i = 0; i< pos.length;  i++){
            if(pos[i] === options.position){
                alert.classList.add(pos[i]);
                return
            }
        }
    };

    let setAnimation = function(){
        let alert = getAlertContainer()
        let animation = ['fadein','slid-in-right','slid-in-left'];
        removeClasses(animation,alert);
        switch (options.animation) {
            case 'slide':
                if(options.position === 'top-right' || options.position === 'bottom-right') alert.classList.add('slide-in-right');
                if(options.position === 'top-left' || options.position === 'bottom-left') alert.classList.add('slide-in-left');
                break;
            case 'fade':
                alert.classList.add('fadein');
                break;
        }
    };

    let getAlertContainer = function(){
        return document.querySelector('.alert-toastf');
    }

    let removeClasses = function(classes, element){
        //remove classes
        for(let i = 0; i< classes.length;  i++){
            element.classList.remove(classes[i]);
        }
    };

    let initOptions = function(){
        options.type = options.type || 'default';
        options.position = options.position || 'top-right';
        options.animation = options.animation || 'fade'
        options.message = options.message || ''
    };

    let removeAlert = function(){
        let animation = ['fadein','slid-in-right','slid-in-left','slide-out-right','slide-out-left'];
        removeClasses(animation,getAlertContainer());
        setTimeout(function(){
            let className = "";
            switch (options.position) {
                case 'top-right':
                case 'bottom-right':
                        className = "slide-out-right";
                    break;
                case 'top-left':
                case 'bottom-left':
                        className = "slide-out-left";
                    break;
            }
            getAlertContainer().classList.add(className)
        },3000)
    }
    init();
});
export default ToastF
