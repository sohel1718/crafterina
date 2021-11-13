import Cookies from 'js-cookie';
import anime from 'animejs/lib/anime.es.js';

export const scroller = (type, slider, handlePosition, handleGrater) => {
    type === 'left' ? slider.current.scrollLeft += 300 : slider.current.scrollLeft -= 300;
    handlePosition(slider.current.scrollLeft);
    (slider.current.clientWidth + slider.current.scrollLeft) >= slider.current.scrollWidth ? handleGrater(false) : handleGrater(true);
};

export const getAccessToken = () => Cookies.get('access_token');
export const isAuthenticated = () => !!getAccessToken();

export const urlify = (text) => {
    let urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text?.match(urlRegex)?.[0];
};

export const handleFileRead = async (event) => {
    const file = event.file.originFileObj;
    return await convertBase64(file);
};

export function compare( a, b ) {
    if ( a.id > b.id ){
        return -1;
    }
    if ( a.id < b.id ){
        return 1;
    }
    return 0;
}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        }
    })
};

export const generateCustomAvatar =  (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Draw background
    context.fillStyle = 'hsl('+0+', '+100+'%, '+30+'%)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = "bold 75px Assistant";
    context.fillStyle = "#fff";
    context.textAlign = "center";
    context.textBaseline = "middle";

    let first = text?.split(' ')[0]?.charAt(0)?.toUpperCase();
    let last = text?.split(' ')[1]?.charAt(0)?.toUpperCase();

    if (!last) {
        last = text?.split(' ')[0]?.charAt(1)?.toUpperCase() || text?.split(' ')[0]?.charAt(0)?.toUpperCase();
    }
    if (!first) {
        first = "S";
        last = "U";
    }

    context.fillText(first + last, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
};


export const generateAvatar =  (text) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Draw background
    context.fillStyle = stringToHslColor(text);
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw text
    context.font = "bold 75px Assistant";
    context.fillStyle = "#fff";
    context.textAlign = "center";
    context.textBaseline = "middle";

    let first = text?.split(' ')[0]?.charAt(0)?.toUpperCase();
    let last = text?.split(' ')[1]?.charAt(0)?.toUpperCase();

    if (!last) {
        last = text?.split(' ')[0]?.charAt(1)?.toUpperCase() || text?.split(' ')[0]?.charAt(0)?.toUpperCase();
    }
    if (!first) {
        first = "S";
        last = "U";
    }

    context.fillText(first + last, canvas.width / 2, canvas.height / 2);

    return canvas.toDataURL("image/png");
};

export const stringToHslColor = (str, s = 30, l = 80) => {
    let hash = 0;
    for (let i = 0; i < str?.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
};

export const requiredFieldValidator = (fields, formData, type) => {
    let errors = {};
    if (type) {
        formData.map((data, index) => {
            fields.map(field => {
                if(!data[field.name]) {
                    if(errors[type]) {
                        errors[type] = [...errors[type], {id: index, [field.name]: `${field.fieldName} is required`}];
                    } else {
                        errors[type] = [{id: index, [field.name]: `${field.fieldName} is required`}];
                    }
                }
            });
        })
    } else {
        fields.map(field => {
            let check = /^[a-zA-Z]*$/.test(formData[field.name]);
            if(!formData[field.name]) {
                errors[field.name] = `${field.fieldName} is required`;
            } else if (!check) {
                errors[field.name] = `Numeric and special characters are not allowed here`;
            }
        });
    }
    return errors
};

export const customFieldValidator = (fields, formData) => {
    let errors = {};
    fields.map(field => {
        switch(field.rule) {
            case "number": {
                let number = /^[0-9]*$/.test(formData[field.name]);
                if(!formData[field.name]) {
                    errors[field.name] = `${field.fieldName} is required`;
                } else if (!number) {
                    errors[field.name] = `Only numbers are allowed`;
                }
                break;
            }
            case "textarea": {
                if(!formData[field.name]) {
                    errors[field.name] = `${field.fieldName} is required`;
                } else if (formData[field.name].length > 300 || formData[field.name].length < 100) {
                    errors[field.name] = `${field.fieldName} must be max 300 character and min 100 char long`;
                }
                break;
            }
            case "specialChar": {
                let specialChar = /^[a-zA-Z ]*$/.test(formData[field.name]);
                if(!formData[field.name]) {
                    errors[field.name] = `${field.fieldName} is required`;
                } else if (!specialChar) {
                    errors[field.name] = `Numeric and special characters are not allowed here`;
                }
                break;
            }
            case "email": {
                let checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(formData[field.name]);
                if(!formData[field.name]) {
                    errors[field.name] = `${field.fieldName} is required`;
                } else if (!checkEmail) {
                    errors[field.name] = `Email is invalid`;
                }
                break;
            }
            case "link": {
                let checkLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(formData[field.name]);
                if(!formData[field.name]) {
                    return false
                } else if (!checkLink) {
                    errors[field.name] = `Please upload valid link`;
                }
                break;
            }
            default: {
                if(!formData[field.name]) {
                    errors[field.name] = `${field.fieldName} is required`;
                }
                break;
            }
        }
    });
    return errors
};

export function getMonday(d) {
    d = new Date(d);
    let day = d.getDay(),
        diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
}

export const animateBg = () => {
    var c = document.getElementById("c");
        var ctx = c.getContext("2d");
        var cH;
        var cW;
        var bgColor = "#FF6138";
        var animations = [];
        var circles = [];

        var colorPicker = (function() {
        var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
        var index = 0;
        function next() {
            index = index++ < colors.length-1 ? index : 0;
            return colors[index];
        }
        function current() {
            return colors[index]
        }
        return {
            next: next,
            current: current
        }
        })();

        function removeAnimation(animation) {
        var index = animations.indexOf(animation);
        if (index > -1) animations.splice(index, 1);
        }

        function calcPageFillRadius(x, y) {
        var l = Math.max(x - 0, cW - x);
        var h = Math.max(y - 0, cH - y);
        return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
        }

        function addClickListeners() {
        document.addEventListener("touchstart", handleEvent);
        document.addEventListener("mousedown", handleEvent);
        };

        function handleEvent(e) {
            if (e.touches) { 
            e.preventDefault();
            e = e.touches[0];
            }
            var currentColor = colorPicker.current();
            var nextColor = colorPicker.next();
            var targetR = calcPageFillRadius(e.pageX, e.pageY);
            var rippleSize = Math.min(200, (cW * .4));
            var minCoverDuration = 750;
            
            var pageFill = new Circle({
            x: e.pageX,
            y: e.pageY,
            r: 0,
            fill: nextColor
            });
            var fillAnimation = anime({
            targets: pageFill,
            r: targetR,
            duration:  Math.max(targetR / 2 , minCoverDuration ),
            easing: "easeOutQuart",
            complete: function(){
                bgColor = pageFill.fill;
                removeAnimation(fillAnimation);
            }
            });
            
            var ripple = new Circle({
            x: e.pageX,
            y: e.pageY,
            r: 0,
            fill: currentColor,
            stroke: {
                width: 3,
                color: currentColor
            },
            opacity: 1
            });
            var rippleAnimation = anime({
            targets: ripple,
            r: rippleSize,
            opacity: 0,
            easing: "easeOutExpo",
            duration: 900,
            complete: removeAnimation
            });
            
            var particles = [];
            for (var i=0; i<32; i++) {
            var particle = new Circle({
                x: e.pageX,
                y: e.pageY,
                fill: currentColor,
                r: anime.random(24, 48)
            })
            particles.push(particle);
            }
            var particlesAnimation = anime({
            targets: particles,
            x: function(particle){
                return particle.x + anime.random(rippleSize, -rippleSize);
            },
            y: function(particle){
                return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
            },
            r: 0,
            easing: "easeOutExpo",
            duration: anime.random(1000,1300),
            complete: removeAnimation
            });
            animations.push(fillAnimation, rippleAnimation, particlesAnimation);
        }

        function extend(a, b){
        for(var key in b) {
            if(b.hasOwnProperty(key)) {
            a[key] = b[key];
            }
        }
        return a;
        }

        var Circle = function(opts) {
        extend(this, opts);
        }

        Circle.prototype.draw = function() {
        ctx.globalAlpha = this.opacity || 1;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        if (this.stroke) {
            ctx.strokeStyle = this.stroke.color;
            ctx.lineWidth = this.stroke.width;
            ctx.stroke();
        }
        if (this.fill) {
            ctx.fillStyle = this.fill;
            ctx.fill();
        }
        ctx.closePath();
        ctx.globalAlpha = 1;
        }

        var animate = anime({
        duration: Infinity,
        update: function() {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, cW, cH);
            animations.forEach(function(anim) {
            anim.animatables.forEach(function(animatable) {
                animatable.target.draw();
            });
            });
        }
        });

        var resizeCanvas = function() {
        cW = window.innerWidth;
        cH = window.innerHeight;
        c.width = cW * devicePixelRatio;
        c.height = cH * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
        };

        (function init() {
        resizeCanvas();
        if (window.CP) {
            // CodePen's loop detection was causin' problems
            // and I have no idea why, so...
            window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000; 
        }
        window.addEventListener("resize", resizeCanvas);
        addClickListeners();
        if (!!window.location.pathname.match(/fullcpgrid/)) {
            startFauxClicking();
        }
        handleInactiveUser();
        })();

        function handleInactiveUser() {
        var inactive = setTimeout(function(){
            fauxClick(cW/2, cH/2);
        }, 2000);
        
        function clearInactiveTimeout() {
            clearTimeout(inactive);
            document.removeEventListener("mousedown", clearInactiveTimeout);
            document.removeEventListener("touchstart", clearInactiveTimeout);
        }
        
        document.addEventListener("mousedown", clearInactiveTimeout);
        document.addEventListener("touchstart", clearInactiveTimeout);
        }

        function startFauxClicking() {
        setTimeout(function(){
            fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
            startFauxClicking();
        }, anime.random(200, 900));
        }

        function fauxClick(x, y) {
        var fauxClick = new Event("mousedown");
        fauxClick.pageX = x;
        fauxClick.pageY = y;
        document.dispatchEvent(fauxClick);
        }
}
